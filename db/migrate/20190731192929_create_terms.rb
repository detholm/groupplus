class CreateTerms < ActiveRecord::Migration[5.2]
  def change
    create_table :terms do |t|
      t.string :term, null: false
      

      t.timestamps null: false
    end
  end
end
