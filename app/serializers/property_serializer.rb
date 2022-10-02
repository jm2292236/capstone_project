class PropertySerializer < ActiveModel::Serializer

    attributes :id, :type_id, :address, :city_id, :zipcode, :beds, :baths, :year_built, :sq_ft, :lot_size, :foreclosure

    has_many :property_images
    has_many :property_sales
    has_many :property_owners

end
