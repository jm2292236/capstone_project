class PropertyImageSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :image_url
end
