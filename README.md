## Candy Store Project
Build an API system to handle the backend data interaction for consumers (customers) and candy products.

System Requirements
These are the main components of this API system, including Customers, Inventories, Stores, and Orders.
● Inventory: NorthStar has different candy products, such as SmartiesBoxTruck, CandyCornRv, LollipopCycle, Etc. Each product is an inventory that has inventory_id, inventory_name, manufacture_date, and available_quantity.
● Store: Each store has an id (store_id), an address (store_address), and a manager name (store_manager_name).
● Customer: Each customer has customer_id, customer_name
● Order: Each order contains order_id, customer_id, inventory_id, store_id, quantity,
status, create_date, update_date.
API Endpoints
Building a backend API system to support the below endpoints:
● /customers: create a new customer, view all customers
  
● /customers/id: modify a customer, view one customer
● /stores: create a new store, view all stores
● /stores/id: update one store, view a store's information
● /inventories: create a new inventory, view all inventories
● /inventories/id: update one inventory, view all inventories
● /orders: create one order, view all orders
● /orders/id: update one order, view the order
● /report: Monthly report for orders grouped by store and status

## Description

Within this project you'll find an example of : 

- Single endpoint to list a users
- Unit testing for Controller and Service
- E2E testing for the endpoint
- Typeorm configuration
- Repository pattern

## Stack

- NestJS - NodeJs (TypeScript)
- Typeorm - ORM
- MariaDB - Database
- Jest + Supertest - Testing
- Yarn


## Requirements
- NodeJS >= 18.14.0
- Yarn >= 1.22.17

## Steps to run this project using local environment:

1. Run `yarn install` command
2. Copy `.env.example` to `.env` and fill the variables
3. Run `yarn run start` command


## Commands to run locally

You'll find the following commands in the `package.json` file:

### API

```bash

# Start development API
$ yarn run start:dev

# Build API
$ yarn run build

# Start production API
$ yarn run start:prod

```
### Testing

```bash
# Run unit tests
$ yarn run test

# Run specific unit test file
$ yarn run test -- users.controller.spec.ts

# Run e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
