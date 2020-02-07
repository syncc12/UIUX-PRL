class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :route
      t.string :screenshot_path
      t.string :description
      t.string :status
      t.timestamps
    end
  end
end
