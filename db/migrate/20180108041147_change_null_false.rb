class ChangeNullFalse < ActiveRecord::Migration[5.1]
  def change
    change_column :workouts, :distance, :float, null:true
    change_column :workouts, :elevation, :float, null:true
    change_column :workouts, :description, :string, null:true
  end
end
