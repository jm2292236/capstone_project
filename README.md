# README

Phase 5 Capstone Project
------------------------

**Last Flatiron School Project course named Property Finder**

Made with Ruby on Rails and React JS

**Requirements**

* Include a _many to many relationship_.
* Implement a minimum of _4 models_.
* Implement a minimum of _5 client side routes using React router_.
* Implement _password protection and authentication_.
* Include _full CRUD on at least 1 model_, following REST conventions.
* Implement _validations and error handling_.
* Implement _something new not taught in the curriculum_.
* Implement _useContext or Redux_.
* **_Fully deploy and host your project_**.

The purpose of this app is to let a Real Estate investor lookup for properties, get the details of the property like the city where it is located as well as the address, images of the property, the sale history and more importantly the owners data in case they are interested in investing on that property they can contact them.

The app uses a PostgreSQL database to save and get the data and the database schema is designed as follow:

Entity Relationship Diagram:
[(https://lucid.app/lucidchart/09fdec3d-ad3c-4179-b97f-4472c90f45b6/edit?page=0_0&invitationId=inv_483c3bb2-7b63-4b63-8e56-96990436ef80#)]

As it can be seen in the diagram, the main model is _Property_ who can have many images associated with it as well as the sale history. It is also associated with the _city_ where the property is located and has a _type_ to categorize it (i. e.: House, Condo, etc). The property can also have one or many _Owners_ as well as an Owner can have more than one property. This is a _many-to-many_ relationship between these two models made possible by the _PropertyOwner_ table seen in the diagram. Additionally, there is another many-to-many relationship between a _user_ and the property models defined by the _UserProperty_ table. This is planned for a future upgrade of the app where the user can add a property to her/his personal portfolio for further research.

The app has a password protection and authentication method implemented, therefore, for the user to be able to use the app they need to login/signup first.

Currently deployed at this link: [(https://fathomless-wave-00182.herokuapp.com/)]

To run this app locally:
* Fork this repository
* PostgreSQL server must be running
* Inside the directory open a terminal window
* For the backend, run: _bundle install_, _rails db:create_, _rails db:migrate_, _rails db:seed_ and _rails s_
* For the frontend, open a new terminal window, _cd into the client directory_ and run _npm install_ followed by _npm start_
