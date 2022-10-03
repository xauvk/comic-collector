class IssuesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: current_user.issues, status: :ok
    end

    def show
        i = find_issue
        render json: i, status: :ok
    end

    def from_api
        resp = RestClient.get("http://comicvine.com/api/issues/?api_key=#{ENV['api_key']}&format=json&offset=0")
        
        render json: resp.body, status: :ok
    end

    def search_issues
        resp = RestClient.get("http://comicvine.com/api/issues/?api_key=#{ENV['api_key']}&format=json&query=#{search_params}")
        
        render json: resp.body, status: :ok
    end

    private

    def search_params
        params.permit(:search)
    end

    
    def find_issue
        Issue.find(params[:id])
    end

end
