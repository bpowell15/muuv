class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :fname
      t.string :lname
      t.string :password_digest
      t.string :session_token
      t.integer :age
      t.float :height
      t.integer :weight

      t.timestamps
    end
  end
end
