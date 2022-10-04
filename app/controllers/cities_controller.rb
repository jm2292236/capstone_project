class CitiesController < ApplicationController

    def index
        cities = City.all
        render json: cities, include: ["state"]
    end

end
