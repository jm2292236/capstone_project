class PropertySerializer < ActiveModel::Serializer
  attributes :id, :type_id, :address, :city_id, :zipcode, :beds, :baths, :year_built, :sq_ft, :lot_size, :foreclosure
end
