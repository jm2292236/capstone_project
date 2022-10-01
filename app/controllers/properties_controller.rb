class PropertiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = Property.find(params[:id])
        render json: property
    end

    private

    def record_not_found
      render json: { error: "Property not found" }, status: :not_found
    end

end
