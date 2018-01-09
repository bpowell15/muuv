Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :workouts, except: :new
    resources :routes, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
