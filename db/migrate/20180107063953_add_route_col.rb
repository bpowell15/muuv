class AddRouteCol < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :route_id, :integer
  end
end
