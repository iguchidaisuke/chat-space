Rails.application.routes.draw do
  devise_for :users
  resources :users, only:[:edit, :update,:edit]
  resources :groups, only: [:new, :create, :edit, :update,:edit] do
    resources :messages, only: [:index, :create, :edit]
  end
  root "groups#index"
  
end
