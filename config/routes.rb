Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :galleries
    resources :artworks
  end

end