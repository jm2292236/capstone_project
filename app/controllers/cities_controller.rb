class CitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        cities = City.all
        render json: cities
    end
    
    def create
        city = City.create!(city_params)
        render json: city, status: :created
    end

    def update
        city = City.find(params[:id])
        city.update!(city_params)

        render json: city
    end

    def destroy
        city = City.find(params[:id])
        city.destroy
    end

    private

    def city_params
        params.permit(:name, :state)
    end

    def render_not_found_response
        render json: {error: "City not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
