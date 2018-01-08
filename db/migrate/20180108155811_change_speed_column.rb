class ChangeSpeedColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :workouts, :speed, :float, null:true
  end
end
