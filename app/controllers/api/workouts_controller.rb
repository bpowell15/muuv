class Api::WorkoutsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @workouts = Workout.all
  end

  def new
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      render "api/workouts/show"
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
    @workout = Workout.find(params[:id])
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
  end

  def show
    @workout = Workout.find(params[:id])
  end

  private

  def workout_params
    params.require(:workout).permit(:title, :description, :duration, :distance)
  end
end
