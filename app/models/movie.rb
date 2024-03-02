class Movie < ApplicationRecord
  self.inheritance_column = :_type_disabled
  has_many :reviews
  has_many :users, through: :reviews
end
