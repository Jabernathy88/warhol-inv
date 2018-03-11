Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :galleries do
        resources :artworks
      end
    end
  end

end