class Api::RoutesController < ApplicationController
  def index
    # @user = current_user
    @routes = Route.all
    # .where(user_id: @user.id)
    render :index
  end

  def show
    @route = Route.find(params[:id])
    render :show
  end

  def create

    @user = current_user
    @route = Route.new(route_params)
    @route.user_id = @user.id

    if @route.save
      render :show
    else

      render json: @route.errors.full_messages, status: 400
    end
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
    render :show
  end

  private
  def route_params
    
   params.require(:route).permit(:title, :polyline, :distance, :elevation, :duration)
 end

end
