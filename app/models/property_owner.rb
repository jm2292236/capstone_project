class PropertyOwner < ApplicationRecord

    belongs_to :property
    belongs_to :owner

end
