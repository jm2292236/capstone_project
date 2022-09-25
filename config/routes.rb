Rails.application.routes.draw do
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    
    # Defines the root path route ("/")
    # root "articles#index"
    
    # resources :property_images
    # resources :property_sales
    # resources :property_owners
    resources :types
    resources :states
    resources :cities

    resources :properties
    resources :owners
    # resources :user_properties

    # users controller
    get "/me", to: "users#show"
    post "/signup", to: "users#create"

    # sessions controller
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end
