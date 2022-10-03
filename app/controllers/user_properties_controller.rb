class UserPropertiesController < ApplicationController

    def index
        # user_properties = UserProperty.all
        # *** The user id is fixed right now just for testing purposes
        user_properties = UserProperty.all.where("user_id = ?", 2)
        render json: user_properties, 
            include: ["property", "property.property_images", "property.property_sales", "property.property_owners"]
    end

end
