class CreateIdeas < ActiveRecord::Migration[5.2]
  def change
    create_table :ideas do |t|
      t.string :thought
      t.string :notes
      t.boolean :status
      t.timestamps
    end
  end
end
