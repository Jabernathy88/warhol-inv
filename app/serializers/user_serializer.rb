class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :galleries, :artworks
end
