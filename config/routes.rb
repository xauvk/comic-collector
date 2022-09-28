Rails.application.routes.draw do
  resources :collections, except: [:index]
  resources :issues, only: [:show, :index]
  resources :users, except: [:index]

  get '/all_issues', to: 'issues#from_api'
  get '/issue/:id', to: 'issues#issue_details'
  post '/search_issues', to: 'issues#search_issues'

  post '/signup', to: 'users#create'
  get '/me', to: "users#show"

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
end
