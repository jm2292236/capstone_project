class UserPropertySerializer < ActiveModel::Serializer

    attributes :id, :property_id, :user_id, :notes

    belongs_to :property
    
end
