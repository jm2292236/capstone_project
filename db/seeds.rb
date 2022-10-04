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
# Users
# =====
# Admin User
uAdmin = User.create(first_name: "Admin", last_name: "", username: "admin", admin: true)
# regular user
u1 = User.create(first_name: "Maria", last_name: "Hernandez", username: "mhernandez", admin: false)
u2 = User.create(first_name: "Sebastian", last_name: "Harland", username: "sharland", admin: false)
u3 = User.create(first_name: "George", last_name: "Finley", username: "gfinley", admin: false)

# ================================================
# Types of properties
house = Type.create(description: "House")
townhouse = Type.create(description: "Townhouse")
condo = Type.create(description: "Condo")
mobile = Type.create(description: "Mobile")

# ========================================================================
# States
ca = State.create(name: "California", abbreviation: "CA")
ny = State.create(name: "New York", abbreviation: "NY")
fl = State.create(name: "Florida", abbreviation: "FL")
oregon = State.create(name: "Oregon", abbreviation: "OR") # can't use "or"
tx = State.create(name: "Texas", abbreviation: "TX")

# ========================================================================
# Cities
# ======
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
# Owners
# ======
john_smith = Owner.create(first_name: "John", last_name: "Smith", address: "12345 Main st", city: la, zipcode: 90210, phone: "3231234567", email: "jsmith@gmail.com")
u1 = john_smith.id
jane_doe = Owner.create(first_name: "Jane", last_name: "Doe", address: "22300 Lincoln st", city: riverside, zipcode: 92551, phone: "9513658987", email: "jdoe@gmail.com")
u2 = jane_doe.id
william_bate = Owner.create(first_name: "William", last_name: "Bate", address: "11234", city: riverside, zipcode: 92551, phone: "9513332258", email: "wbate@gmail.com")
u3 = william_bate.id

# Properties
# ==========
p1 = Property.create(type: house, address: "25780 Rancho Lucero Dr", city: moreno_valley, zipcode: 92551, beds: 4, baths: 3, year_built: 1986, sq_ft: 1630, lot_size: 7405, foreclosure: false)
p2 = Property.create(type: house, address: "115 E 88th Pl", city: la, zipcode: 92501, beds: 3, baths: 2, year_built: 1986, sq_ft: 1501, lot_size: 7405, foreclosure: true)
p3 = Property.create(type: house, address: "504 Montecito Dr", city: la, zipcode: 92502, beds: 4, baths: 3, year_built: 1986, sq_ft: 1502, lot_size: 7405, foreclosure: false)
p4 = Property.create(type: house, address: "1040 W 71st St", city: la, zipcode: 92503, beds: 4, baths: 3, year_built: 1986, sq_ft: 1503, lot_size: 7405, foreclosure: false)
p5 = Property.create(type: house, address: "1036 W 67th St", city: la, zipcode: 92504, beds: 4, baths: 3, year_built: 1986, sq_ft: 1504, lot_size: 7405, foreclosure: false)

# Property Images
# ===============
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_3_1.jpg")
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_2_1.jpg")
PropertyImage.create(property_id: p1.id, image_url: "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_11_1.jpg")

PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/bcsphoto/737/genBcs.22-183737_0.jpg")
PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/bcsphoto/737/genBcs.22-183737_13_0.jpg")
PropertyImage.create(property_id: p2.id, image_url: "https://ssl.cdn-redfin.com/photo/40/mbphoto/737/genMid.22-183737_8_0.jpg")

# Property Owners
# ===============
PropertyOwner.create(property_id: p1.id, owner_id: john_smith.id)
PropertyOwner.create(property_id: p1.id, owner_id: jane_doe.id)

# Property Owners
# ===============
PropertySale.create(property_id: p1.id, sale_date: "19900101", price: 350000)

# User Properties (My List)
# ===============
UserProperty.create(property_id: p1.id, user_id: u1.id, notes: "Property added today")
UserProperty.create(property_id: p5.id, user_id: u1.id, notes: "Probably an easy deal!")

UserProperty.create(property_id: p3.id, user_id: u3.id, notes: "Owner recently moved out, probably they want to sell")

# ================================================
puts "Seeding Finished!"
# ================================================
