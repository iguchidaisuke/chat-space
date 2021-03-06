Rails.application.routes.draw do
  devise_for :users
  resources :users, only:[:index,:edit,:update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create, :edit]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  root "groups#index"
  
end
