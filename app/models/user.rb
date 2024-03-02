class User < ApplicationRecord
     has_many :reviews
     has_many :movies, through: :reviews
     has_secure_password

     validates :username, presence: true, uniqueness: true, length: { minimum: 8 }
     validates :password, presence: true, length: { minimum: 6 }
     validates :email, presence: true, uniqueness: true

end
