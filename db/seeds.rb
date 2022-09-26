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
# Admin User
User.create(first_name: "Admin", last_name: "", username: "admin", admin: true)

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
p25780 = Property.create(type: house, address: "25780 Rancho Lucero Dr", city: moreno_valley, zipcode: 92551, beds: 4, baths: 3, year_built: 1986, sq_ft: 1630, lot_size: 7405, foreclosure: false)

# Property Owners
# ===============
PropertyOwner.create(property_id: p25780.id, owner_id: john_smith.id)
PropertyOwner.create(property_id: p25780.id, owner_id: jane_doe.id)

# ================================================
puts "Seeding Finished!"
# ================================================
