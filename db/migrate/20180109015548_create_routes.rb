class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|

      t.timestamps
    end
  end
end
