class IssuesController < ApplicationController

    def index
        issues = Issue.all
        render json: issues, status: :ok
    end


    def from_api
        resp = RestClient.get(`http://comicvine.com/api/issues/?api_key=#{ENV['api_key']}&format=json&offset=0`)
        
        render json: resp.body
    end

end
