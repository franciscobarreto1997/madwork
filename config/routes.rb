Rails.application.routes.draw do
  root 'jobs#index'
  post 'search', to: 'jobs#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
