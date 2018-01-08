class ChangeUnitColumnType < ActiveRecord::Migration[5.1]
  def change

    change_column :workouts, :elevation_unit, :string, default: 'feet'
    change_column :workouts, :distance_unit, :string, default: 'miles'
  
  end
end
