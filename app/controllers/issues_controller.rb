class IssuesController < ApplicationController
    skip_before_action :authenticate_user, only: :from_api

    def from_api
        resp = RestClient.get("http://comicvine.com/api/issues/?api_key=#{ENV['api_key']}&format=json&offset=0")
        
        render json: resp.body, status: :ok
    end

end
