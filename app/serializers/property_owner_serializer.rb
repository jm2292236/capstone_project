class PropertyOwnerSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :owner_id
end
