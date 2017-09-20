Rails.application.routes.draw do
  get 'sessions/me'

  root to: 'projects#index'

  resources :stages, only: [:index, :show]
  resources :users, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
