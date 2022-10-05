class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :description, :billed_monthly, :nationwide_lookup, :owner_details, :price
end
