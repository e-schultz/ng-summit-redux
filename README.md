#ng-summit-redux

Trendy Brunch Demo Application for Angular Summit

Get it:
`git clone https://github.com/e-schultz/ng-summit-redux.git`

To start:

* npm install
* npm run start
* open browser to localhost:3000/src

# Slides from the Talk

TODO: Add Link

# App Overview

To demonstrate reactive architecture using redux + ng-redux with Angular.

# TrendyBrunch

Simple resturant application,

* Reducer for Lineup - people waiting to be seated
* Reducer for Tables - handles seated people, and their orders
* Reducer for Menu - food items available, and what is in stock


# General Idea:

* parties of people can join/leave the line
* parties get seated at tables
* tables can take place orders - add/remove items from an order, then have it
  be submitted
* UI is derived from the application data structure


# Data Structure

```
[Resturant] --------- [Menu]
  |      |               
[Line]   |             
      [Tables]
         | 
         |
      [Order]

```

# UI Overview

* Lineup + Lineup Summary
* Dining Room - Smart Component
  * Table - Dumb component
    * Can seat a party
    * Start an order
    * Pay the bill
    * Clean the table
  * Menu - Dumb component
    * Add item to order
    * Remove item from order
    * Place Order
* Tabs for Orders
  * Pending Orders - orders that are activly being placed
    * No actions, render only
  * Completed Orders - orders that have been taken, and are now in the kitchen
    * Can add items to order
    * Can remove items from order
    * Can deliver the order

# Lineup

**Data**

* ID
* number of people

**Actions/Events**

* Join Line - PARTY_JOINED
* Seat a party - PARTY_SEATED
* Leave the line - PARTY_LEFT

# Tables

**Data**

* table ID
* number of seats

**Actions/Events**
--- simplify it so a table is either clean / dirty / occupied  
--- events place order / pay bill / seat
--- 
* seat customer
* add items to order
* remove items from order
* submit order 
* request bill
* pay bill + leave
* clean table

# Orders

* table id 
* id
* Order { key = menu item id, value = qty}




# MenuItems

* id
* price
* stock
* description

# Components

There are a few examples of components, smart/dumb components, containers in this application.

In the 'Orders' component, three versions are available showing different approaches.

In `src/components/index.js` you can switch between them by commenting
out others and only bringing in the one that you want.

```javascript
// import orders from './orders-v1'; 
// import orders from './orders-v2'; 
import orders from './orders-v3'; 
```
