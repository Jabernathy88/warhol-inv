class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :created_at, :updated_at, :galleries
  has_many :galleries
end