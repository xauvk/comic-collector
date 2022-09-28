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
 
        current_user.collections << collection
        render json: collection, status: :created, include: ['issue']
    end

    def update
        collection = find_collection
        collection.update!(collection_params)
        render json: collection, status: :accepted, include: ['issue']
    end

    def destroy
        collection = find_collection
        collection.destroy
        head :no_content
    end

    private

    def collection_params
        params.permit(:status, :rating)
    end

    def issue_params
        params.permit(:name, :volume, :description, :image, :issue_number, :id)
    end

    def find_collection
        Collection.find(params[:id])
    end
end
