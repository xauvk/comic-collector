Rails.application.routes.draw do
  resources :collections
  resources :issues
  resources :users

  post '/signup', to: 'users#create'
  get '/me', to: "users#show"
  delete '/deleteUser', to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/all_issues', to: 'issues#from_api'
  post '/search_issues', to: 'issues#search_issues'

  
end
