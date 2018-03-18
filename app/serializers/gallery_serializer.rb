class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :user_id, :created_at, :updated_at, :artworks
    has_many :artworks
end
