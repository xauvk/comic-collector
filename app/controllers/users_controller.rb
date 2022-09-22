class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def show
        if current_user
            render json: current_user, status: :ok, include: ['tickets', 'tickets.event']
        else
            render json: {error: "No current session stored"}, status: :unauthroized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password)
    end

end
