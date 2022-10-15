class OwnersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        owners = Owner.all
        render json: owners
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner
    end
    
    def create
        owner = Owner.create!(owner_params)
        render json: owner, status: :created
    end

    def update
        owner = Owner.find(params[:id])
        owner.update!(owner_params)

        render json: owner
    end    

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
    end

    private

    def owner_params
        params.permit(:first_name, :last_name, :address, :city_id, :zipcode, :phone, :email)
    end

    def record_not_found
      render json: { error: "Property not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
