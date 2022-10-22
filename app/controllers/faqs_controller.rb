class FaqsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        faqs = Faq.all
        render json: faqs
    end
    
    def create
        faq = Faq.create!(faq_params)
        render json: faq, status: :created
    end

    def update
        faq = Faq.find(params[:id])
        faq.update!(faq_params)

        render json: faq
    end

    def destroy
        faq = Faq.find(params[:id])
        faq.destroy
    end

    private

    def faq_params
        params.permit(:question, :response)
    end

    def render_not_found_response
        render json: {error: "FAQ not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.messages}, status: :unprocessable_entity
    end

end
