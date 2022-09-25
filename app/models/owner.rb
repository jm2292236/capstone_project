class Owner < ApplicationRecord

    belongs_to :city

    has_many :property_owners
    has_many :properties, through: :property_owners

end
