class Add < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :date, :datetime, null: false
    add_column :workouts, :time, :datetime, null: false
    add_index :workouts, :route_id
  end
end
