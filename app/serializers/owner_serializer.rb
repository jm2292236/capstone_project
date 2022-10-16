class OwnerSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :first_name, :last_name, :address, :city_id, :zipcode, :phone, :email

    belongs_to :city
    has_many :properties
end

private

def full_name
    first_name + " " + last_name
end
