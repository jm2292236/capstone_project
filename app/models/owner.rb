class Owner < ApplicationRecord

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address, presence: true

    belongs_to :city

    has_many :property_owners
    has_many :properties, through: :property_owners

end
