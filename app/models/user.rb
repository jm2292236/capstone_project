class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    
    has_many :user_properties
    has_many :properties, through: :user_properties

    has_secure_password

end
