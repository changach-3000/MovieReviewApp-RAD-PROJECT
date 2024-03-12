  Rails.application.routes.draw do
    root :to => 'movies#index'
    post "/api/auth/login", to:"session#login"
    delete "/api/auth/logout", to:"session#logout"
    get "/api/current_user", to:"users#current_user"
  
  scope "api" do
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :movies, only: [:index, :create, :destroy, :show]
    resources :users, only: [:index, :show, :create]
  
   
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html 
  end
end
