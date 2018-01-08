class AddColumnsToWorkoutsElevation < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :elevation, :float, null: false
    add_column :workouts, :distance_unit, :float, null: false, default: 'miles'
    add_column :workouts, :elevation_unit, :float, null: false, default: 'feet'
    change_column :workouts, :sport, :string, default: 'Ride'
    change_column :workouts, :duration_hours, :integer, default: 1
    change_column :workouts, :duration_seconds, :integer, default: 0
    change_column :workouts, :duration_minutes, :integer, default: 0
  end
end
