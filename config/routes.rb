Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :galleries
    resources :artworks

    # custom
    post 'users/:id/galleries', to: 'galleries#create_under_user'

  end
end