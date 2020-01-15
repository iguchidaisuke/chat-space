Rails.application.routes.draw do
  devise_for :users
  resources :users, only:[:update,:edit,:index]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create, :edit]
  end
  root "groups#index"
  
end
