class Api::WorkoutsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index

    #@user = current_user
    @workouts = Workout.all
     #.where(user_id: @user.id)
  end

  def create
    @user = current_user
    @workout = Workout.new(workout_params)
    @workout.user_id = @user.id
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def update

    @workout = Workout.find(params[:id])
    if @workout.update_attributes(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 400
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
    render :show
  end

  def show

    @workout = Workout.find(params[:id])
  end

  private

  def workout_params
    params.require(:workout).permit(:title, :description, :duration_hours, :duration_minutes, :duration_seconds, :distance, :elevation, :date, :time, :sport, :distance_unit, :elevation_unit)
  end
end
