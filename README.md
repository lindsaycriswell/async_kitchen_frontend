# Kitchen Sync
A cooking time management app with timed recipe instructions to complete multiple dishes simultaneously. Ruby on Rails back end, JavaScript/React front end, incorporating a customized recipe API and JavaScript date object algorithms. 

* [Kitchen Sync Front End Repo](https://github.com/lindsaycriswell/kitchen-sync-frontend)
* [Kitchen Sync Back End Repo](https://github.com/lindsaycriswell/kitchen-sync-backend)

![Kitchen Sync Homepage](kitchen-sync-homepage.jpg)

[Kitchen Sync Demo](https://youtu.be/l_ZTE3p2yXQ)

## How To Use
* Browse available recipes and add them to your current meal.
* Review a shopping list of all ingredients for all meals and send it to your email address.
* Enter the time you would like to serve your meal and receive times directions for executing every step of your recipes.
* Check off directions as you complete them.

## Prerequisites

* Rails v5.1.4
* PostgreSQL 10
* React/Redux

## Backend Setup
1. Clone this repo - https://github.com/lindsaycriswell/kitchen-sync-backend
2. Install Gems `bundle install`
3. Set up Database `rake db:create`, then run `rake db:migrate`
4. Seed Database `rake db:seed`
5. Start your server `rails s`

## Frontend Setup
1. Clone this repo - https://github.com/lindsaycriswell/kitchen-sync-frontend
1. Install dependencies `npm install` 
2. Start your server `npm start` 

## In Your Browser 
Navigate to the web address of your Node server [http://localhost:3001](http://localhost:3001) - or whatever yours is
