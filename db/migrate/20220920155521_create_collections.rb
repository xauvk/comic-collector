class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :issue, null: false, foreign_key: true
      t.string :status
      t.integer :rating
    end
  end
end
