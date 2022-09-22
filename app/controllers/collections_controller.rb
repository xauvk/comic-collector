class CollectionsController < ApplicationController
    def show
        collection = find_collection
        render json: collection, status: :ok
    end

    def create
        user = current_user
        issue = Issue.find_or_create_by(issue_params)
        
        collection = Collection.new(collection_params)
        collection.user_id = user.id
        collection.issue_id = issue.id
        collection.save
 
        render json: collection, status: :created
    end

    def destroy
        collection = find_collection
        collection.destroy
        head :no_content
    end

    private

    def collection_params
        params.permit(:event_id, :status )
    end

    def issue_params
        params.permit(:name, :volume, :description, :image, :issue_number)
    end

    def find_collection
        Collection.find(params[:id])
    end
end
