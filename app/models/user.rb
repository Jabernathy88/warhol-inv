class User < ApplicationRecord
  has_many :galleries, dependent: :destroy
  has_many :artworks, through: :galleries
end
