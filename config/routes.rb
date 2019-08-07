Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index, :show]
      resources :terms
      resources :matches
      resources :stats, only: [:show]
      #get 'stats', to: 'stats#show'
      resources :users
    end
  end

  get '*path', to: 'homes#index'
end
