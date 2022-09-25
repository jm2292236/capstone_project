class CreatePropertySales < ActiveRecord::Migration[7.0]
  def change
    create_table :property_sales do |t|
      t.integer :property_id
      t.date :sale_date
      t.float :price

      t.timestamps
    end
  end
end
