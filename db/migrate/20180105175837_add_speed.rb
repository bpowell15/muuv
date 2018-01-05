class AddSpeed < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :speed, :float
  end
end
