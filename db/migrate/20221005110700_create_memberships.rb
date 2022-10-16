class CreateMemberships < ActiveRecord::Migration[7.0]
  def change
    create_table :memberships do |t|
      t.string :description
      t.boolean :billed_monthly
      t.boolean :nationwide_lookup
      t.boolean :owner_details
      t.boolean :due_diligence
      t.boolean :add_users
      t.float :price

      t.timestamps
    end
  end
end
