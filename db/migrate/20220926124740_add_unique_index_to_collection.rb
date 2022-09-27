class AddUniqueIndexToCollection < ActiveRecord::Migration[7.0]
  def change
    add_index :collections, [:user_id, :issue_id], unique: true
  end
end
