class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :created_at, :updated_at, :galleries
  has_many :galleries
  
  class GallerySerializer < ActiveModel::Serializer
    attributes :id, :name, :img_url, :user_id, :artworks
    has_many :artworks
  end
  
  class ArtworkSerializer < ActiveModel::Serializer
    attributes :name, :artist, :img_url, :gallery_id
  end

end