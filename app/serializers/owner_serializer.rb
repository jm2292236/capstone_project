class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city_id, :zipcode, :phone, :email
end
