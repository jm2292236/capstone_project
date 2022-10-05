class Property < ApplicationRecord

    validates :type, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :zipcode, presence: true
    
    belongs_to :type
    belongs_to :city

    has_many :property_owners
    has_many :owners, through: :property_owners

    # has_many :user_properties
    # has_many :users, through: :user_properties

    has_many :property_sales
    has_many :property_images

end
