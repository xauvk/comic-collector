class CreateIssues < ActiveRecord::Migration[7.0]
  def change
    create_table :issues do |t|
      t.string :name
      t.string :volume
      t.text :description
      t.string :image
      t.integer :issue_number

    end
  end
end
