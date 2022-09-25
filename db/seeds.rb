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

# ================================================
puts "Seeding Finished!"
# ================================================
