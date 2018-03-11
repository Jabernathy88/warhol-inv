class CreateGalleries < ActiveRecord::Migration[5.1]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :img_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
