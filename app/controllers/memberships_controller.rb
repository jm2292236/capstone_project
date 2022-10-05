class MembershipsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        memberships = Membership.all
        render json: memberships
    end
    
    def create
        membership = Membership.create!(membership_params)
        render json: membership, status: :created
    end

    def update
        membership = Membership.find(params[:id])
        membership.update!(membership_params)

        render json: membership
    end

    def destroy
        membership = Membership.find(params[:id])
        membership.destroy
    end

    private

    def membership_params
        params.permit(:description, :billed_monthly, :nationwide_lookup, :owner_details, :price)
    end

    def render_not_found_response
        render json: {error: "Membership not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
