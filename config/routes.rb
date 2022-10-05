Rails.application.routes.draw do
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    
    # Defines the root path route ("/")
    # root "articles#index"
    
    resources :users
    resources :types
    resources :states
    resources :cities

    resources :properties
    resources :owners
    resources :user_properties

    # users controller
    get "/me", to: "users#show"
    post "/signup", to: "users#create"

    # sessions controller
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    # all other routes will be load our React application
    # this route definition matches:
    # - *path: all paths not matched by one of the routes defined above
    # - constraints:
    #   - !req.xhr?: it's not a XHR (fetch) request
    #   - req.format.html?: it's a request for a HTML document
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
