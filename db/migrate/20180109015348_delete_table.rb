class DeleteTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :titles
  end
end
