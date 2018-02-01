class AddDurationtoRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :duration, :string
  end
end
