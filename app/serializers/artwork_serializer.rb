class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :img_url, :created_at, :updated_at, :gallery_id
end
