class TypesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        types = Type.all
        render json: types
    end

    def create
        type = Type.create!(type_params)
        render json: type, status: :created
    end

    def update
        type = Type.find(params[:id])
        type.update!(type_params)

        render json: type
    end

    def destroy
        type = Type.find(params[:id])
        type.destroy
    end

    private

    def type_params
        params.permit(:description)
    end

    def render_not_found_response
        render json: {error: "Type not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
