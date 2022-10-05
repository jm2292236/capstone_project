# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ================================================
puts "Seeding the database..."
# ================================================


# ================================================
# Types of properties
# ===================
puts "Property types..."
house = Type.create(description: "House")
townhouse = Type.create(description: "Townhouse")
condo = Type.create(description: "Condo")
mobile = Type.create(description: "Mobile")

# ========================================================================
# States
# ===================
puts "States..."
ca = State.create(name: "California", abbreviation: "CA")
ny = State.create(name: "New York", abbreviation: "NY")
fl = State.create(name: "Florida", abbreviation: "FL")
oregon = State.create(name: "Oregon", abbreviation: "OR") # can't use "or"
tx = State.create(name: "Texas", abbreviation: "TX")

# ========================================================================
# Cities
# ======
puts "Cities..."
# California
la =  City.create(name: "Los Angeles", state: ca)
riverside =  City.create(name: "Riverside", state: ca)
moreno_valley =  City.create(name: "Moreno Valley", state: ca)
san_diego =  City.create(name: "San Diego", state: ca)

# New York
ny =  City.create(name: "New York", state: ny)

# Florida
miami =  City.create(name: "Miami", state: fl)

# Oregon
portland =  City.create(name: "Portland", state: oregon)

# Texas
dallas =  City.create(name: "Dallas", state: tx)
austin =  City.create(name: "Austin", state: tx)

# ========================================================================
# Properties
# ==========
puts "Properties..."
p1 = Property.create(type: house, address: "25780 Rancho Lucero Dr", city: moreno_valley, zipcode: 92551, beds: 4, baths: 3, year_built: 1986, sq_ft: 1630, lot_size: 7405, foreclosure: false,
    image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/928/OC22191928_1.jpg")
p2 = Property.create(type: house, address: "115 E 88th Pl", city: la, zipcode: 92501, beds: 3, baths: 2, year_built: 1986, sq_ft: 1501, lot_size: 7405, foreclosure: true,
    image_url: "https://ssl.cdn-redfin.com/photo/40/bigphoto/737/22-183737_0.jpg")
p3 = Property.create(type: house, address: "504 Montecito Dr", city: la, zipcode: 92502, beds: 4, baths: 3, year_built: 1986, sq_ft: 1502, lot_size: 7405, foreclosure: false,
    image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/996/GD22187996_0.jpg")
p4 = Property.create(type: house, address: "1040 W 71st St", city: la, zipcode: 92503, beds: 4, baths: 3, year_built: 1986, sq_ft: 1503, lot_size: 7405, foreclosure: false,
    image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/917/SB22189917_1.jpg")
p5 = Property.create(type: house, address: "1036 W 67th St", city: la, zipcode: 92504, beds: 4, baths: 3, year_built: 1986, sq_ft: 1504, lot_size: 7405, foreclosure: false,
    image_url: "https://ssl.cdn-redfin.com/photo/41/bigphoto/311/SR22208311_0.jpg")
p6c = Property.create(type: condo, address: "200 E Alessandro Blvd #70", city: riverside, zipcode: 92508, beds: 2, baths: 2.5, year_built: 1990, sq_ft: 930, lot_size: 3485, foreclosure: false,
    image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/460/IV22199460_0.jpg")
p7c = Property.create(type: condo, address: "200 E Alessandro Blvd #39", city: riverside, zipcode: 92508, beds: 2, baths: 2, year_built: 1990, sq_ft: 1068, lot_size: 3485, foreclosure: true,
    image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/579/IV22196579_1.jpg")
p8c = Property.create(type: condo, address: "25890 Iris Ave Unit B", city: moreno_valley, zipcode: 92551, beds: 2, baths: 2, year_built: 1990, sq_ft: 1068, lot_size: 3485, foreclosure: true, 
    image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/302/genBcs.IV22215302_1.jpg")

p9mh = Property.create(type: mobile, address: "1803 Quanah Parker Trl", city: austin, zipcode: 78734, beds: 3, baths: 2, year_built: 1999, sq_ft: 1792, lot_size: 9060, foreclosure: true, 
    image_url: "https://ssl.cdn-redfin.com/photo/92/bcsphoto/575/genBcs.6914575_0.jpg")

p10c = Property.create(type: condo, address: "60 E 55th St Unit 40-B", city: ny, zipcode: 10022, beds: 2, baths: 2, year_built: 2004, sq_ft: 1272, lot_size: 8636, foreclosure: false, 
    image_url: "https://ssl.cdn-redfin.com/photo/211/bcsphoto/328/genBcs.OLRS-0001298328_0.jpg")

# ========================================================================
# Property Images
# ===============
puts "Property images..."
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_3_1.jpg")
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_2_1.jpg")
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_11_1.jpg")

PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/bcsphoto/737/genBcs.22-183737_13_0.jpg")
PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/mbphoto/737/genMid.22-183737_8_0.jpg")
PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/bcsphoto/737/genBcs.22-183737_36_0.jpg")

PropertyImage.create(property_id: p3.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/996/genMid.GD22187996_2_1.jpg")
PropertyImage.create(property_id: p3.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/996/genBcs.GD22187996_3_0.jpg")
PropertyImage.create(property_id: p3.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/996/genMid.GD22187996_5_0.jpg")

PropertyImage.create(property_id: p4.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/917/genBcs.SB22189917_3_0.jpg")
PropertyImage.create(property_id: p4.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/917/genMid.SB22189917_5_0.jpg")
PropertyImage.create(property_id: p4.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/917/genBcs.SB22189917_7_0.jpg")

PropertyImage.create(property_id: p5.id, image_url: "https://ssl.cdn-redfin.com/photo/41/bcsphoto/311/genBcs.SR22208311_1_0.jpg")
PropertyImage.create(property_id: p5.id, image_url: "https://ssl.cdn-redfin.com/photo/41/mbphoto/311/genMid.SR22208311_2_0.jpg")
PropertyImage.create(property_id: p5.id, image_url: "https://ssl.cdn-redfin.com/photo/41/bcsphoto/311/genBcs.SR22208311_4_0.jpg")

PropertyImage.create(property_id: p6c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/460/genBcs.IV22199460_2_0.jpg")
PropertyImage.create(property_id: p6c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/460/genMid.IV22199460_4_0.jpg")
PropertyImage.create(property_id: p6c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/460/genBcs.IV22199460_5_0.jpg")

PropertyImage.create(property_id: p7c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/579/genBcs.IV22196579_1_1.jpg")
PropertyImage.create(property_id: p7c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/579/genMid.IV22196579_2_1.jpg")
PropertyImage.create(property_id: p7c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/579/genBcs.IV22196579_3_1.jpg")

PropertyImage.create(property_id: p8c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/302/genBcs.IV22215302_6_1.jpg")
PropertyImage.create(property_id: p8c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/302/genMid.IV22215302_2_1.jpg")
PropertyImage.create(property_id: p8c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/bcsphoto/302/genBcs.IV22215302_3_1.jpg")
PropertyImage.create(property_id: p8c.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/302/genMid.IV22215302_11_1.jpg")

PropertyImage.create(property_id: p9mh.id, image_url: "https://ssl.cdn-redfin.com/photo/92/bcsphoto/575/genBcs.6914575_1_0.jpg")
PropertyImage.create(property_id: p9mh.id, image_url: "https://ssl.cdn-redfin.com/photo/92/mbphoto/575/genMid.6914575_2_0.jpg")
PropertyImage.create(property_id: p9mh.id, image_url: "https://ssl.cdn-redfin.com/photo/92/bcsphoto/575/genBcs.6914575_4_0.jpg")
PropertyImage.create(property_id: p9mh.id, image_url: "https://ssl.cdn-redfin.com/photo/92/mbphoto/575/genMid.6914575_5_0.jpg")

PropertyImage.create(property_id: p10c.id, image_url: "https://ssl.cdn-redfin.com/photo/211/bcsphoto/328/genBcs.OLRS-0001298328_1_0.jpg")
PropertyImage.create(property_id: p10c.id, image_url: "https://ssl.cdn-redfin.com/photo/211/bcsphoto/328/genBcs.OLRS-0001298328_4_0.jpg")
PropertyImage.create(property_id: p10c.id, image_url: "https://ssl.cdn-redfin.com/photo/211/mbphoto/328/genMid.OLRS-0001298328_5_0.jpg")

# ========================================================================
# Owners
# ======
puts "Owners..."
john_smith = Owner.create(first_name: "John", last_name: "Smith", address: "12345 Main st", city: la, zipcode: 90210, phone: "3231234567", email: "jsmith@gmail.com")
jane_doe = Owner.create(first_name: "Jane", last_name: "Doe", address: "22300 Lincoln st", city: riverside, zipcode: 92551, phone: "9513658987", email: "jdoe@gmail.com")
william_bate = Owner.create(first_name: "William", last_name: "Bate", address: "11234", city: riverside, zipcode: 92551, phone: "9513332258", email: "wbate@gmail.com")

# ========================================================================
# Property Owners
# ===============
puts "Property owners..."
# Many-to-many relationship
# A property can have one or more owners
PropertyOwner.create(property_id: p1.id, owner_id: john_smith.id)
PropertyOwner.create(property_id: p1.id, owner_id: jane_doe.id)

# An owner can have one or more properties
PropertyOwner.create(property_id: p2.id, owner_id: william_bate.id)
PropertyOwner.create(property_id: p3.id, owner_id: william_bate.id)
PropertyOwner.create(property_id: p4.id, owner_id: william_bate.id)

# ========================================================================
# Property Sales
# ==============
puts "Property sales..."
PropertySale.create(property_id: p1.id, sale_date: "19900101", price: 350000)

# ========================================================================
# User Properties (My List)
# ===============
puts "User properties..."
UserProperty.create(property_id: 1, user_id: 2, notes: "Property added today")
UserProperty.create(property_id: 5, user_id: 2, notes: "Probably an easy deal!")

UserProperty.create(property_id: 3, user_id: 4, notes: "Owner recently moved out, probably they want to sell")

# ================================================
puts "Seeding Finished!"
# ================================================
