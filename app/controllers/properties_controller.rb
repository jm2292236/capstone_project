class PropertiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = Property.find(params[:id])
        render json: property
    end
    
    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    def update
        property = Property.find(params[:id])
        property.update!(property_params)

        render json: property
    end    

    def destroy
        property = Property.find(params[:id])
        property.destroy
    end

    private

    def property_params
        params.permit(:type_id, :address, :city_id, :zipcode, :beds, :baths, :year_built, :sq_ft, :lot_size, :foreclosure, :image_url, :notes)
    end

    def record_not_found
      render json: { error: "Property not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
