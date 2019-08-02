Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  resources :teams, only: [:index, :show]
  resources :users, only: [:show]




  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show]
      resources :terms
    end
  end
end
