Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :workouts, only: [:index, :create, :update, :show, :destroy]
  end

  root "static_pages#root"
end
