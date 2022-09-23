class IssuesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        issues = Issue.all
        render json: issues, status: :ok
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

end
