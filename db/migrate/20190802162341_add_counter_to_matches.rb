class AddCounterToMatches < ActiveRecord::Migration[5.2]
  def change
     add_column :matches, :count, :integer
  end
end
