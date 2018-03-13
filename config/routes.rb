Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :galleries 
    end 
    resources :galleries
    resources :artworks
  end

end