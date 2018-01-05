Rails.application.routes.draw do

  get 'workouts/index'

  get 'workouts/new'

  get 'workouts/create'

  get 'workouts/edit'

  get 'workouts/update'

  get 'workouts/destroy'

  get 'workouts/show'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
