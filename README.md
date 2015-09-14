```
/* beautify preserve:start */
/* beautify preserve:end */
```
#ng-summit-redux

Sample application for use in ng-summit conference talk.

To start,
* npm run start
* open browser to localhost:3000/src

# App Overview

To demonstrate reactive architecture using redux + ng-redux with Angular.

# TrendyBrunch

Simple resturant application,

* Reducer for a lineup of people waiting to be seated
* Reducer for seats
* + maybe 'kitchen'

Idea:

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
         | -- // don't think I want to go as granular as per-seat for simplicty
         |
      [Order]

```

# UI-ideas

* Tabbed view, with tabs for:
* Host/Front of the house view
  - can see who is in line, and what tables are free/clean
  - actions: can seat a party
* Server/waiter view
  - basic view of tables + status 
    - empty + clean
      - can take customers
    - occupied + no order placed
      - can place an order
    - occupied + order placed
      - can request a bill
      - [change order - not for this?]
    - occupied + requested bill
      - can pay bill -> 
    - empty + dirty
* Kitchen view 
  - goes through the tables structure to get pending orders
* and/or bar view
  - goes through the tables structure to get pending orders

# Lineup

**Data**

* ID
* number of people

**Actions/Events**

* enter line
* get seated
* leave line 

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
* 0..N line items
  * id
  * qty
  * price (?) --- can derive from menuItem? do 

# Menu - food items + drinks
-- maybe just simplify to 'menuItems' with type drink/food, id, qty, price, desc

## MenuItems

* id
* type -- food/drink
* price
* stock
* description

