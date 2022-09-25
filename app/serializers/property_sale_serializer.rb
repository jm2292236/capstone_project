class PropertySaleSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :sale_date, :price
end
