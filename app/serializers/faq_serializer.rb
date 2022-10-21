class FaqSerializer < ActiveModel::Serializer
  attributes :id, :question, :response
end
