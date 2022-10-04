class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.integer :type_id
      t.string :address
      t.integer :city_id
      t.integer :zipcode
      t.integer :beds
      t.float :baths
      t.integer :year_built
      t.integer :sq_ft
      t.integer :lot_size
      t.boolean :foreclosure
      t.string :image_url

      t.timestamps
    end
  end
end
