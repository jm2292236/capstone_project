class UserPropertiesController < ApplicationController

    def index
        render json: UserProperty.all
    end

end
