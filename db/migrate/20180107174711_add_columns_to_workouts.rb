class AddColumnsToWorkouts < ActiveRecord::Migration[5.1]
  def change
    change_column :workouts, :duration, :integer
    rename_column :workouts, :duration, :duration_hours
    add_column :workouts, :duration_minutes, :integer, null: false
    add_column :workouts, :duration_seconds, :integer, null:false
    add_column :workouts, :sport, :string, null: false  
  end
end
