class Change < ActiveRecord::Migration[5.1]
  def change
    remove_index :workouts, :user_id
    add_index :workouts, :user_id, unique: false
  end
end
