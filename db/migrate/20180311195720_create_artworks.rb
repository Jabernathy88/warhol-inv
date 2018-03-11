class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.string :name
      t.string :artist
      t.string :img_url
      t.references :gallery, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
