class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.belongs_to :from_user, null: false
      t.belongs_to :to_user, null: false
      t.belongs_to :term, null: false
      
      t.timestamps null: false

    end
  end
end
