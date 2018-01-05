class Api::WorkoutsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
  end

  def new
  end

  def create
    @workout = Link.new(workout_params)
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
  end

  def destroy
  end

  def show
  end

  private

  def workout_params
    params.require(:workout).permit(:title, :description, :duration, :distance)
  end
end
