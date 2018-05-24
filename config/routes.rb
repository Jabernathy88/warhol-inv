Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :galleries
    resources :artworks

    # custom
    post 'users/:id/galleries', to: 'galleries#create_under_user'
    post 'galleries/:id/artworks', to: 'artworks#create_under_gallery'

  end
end