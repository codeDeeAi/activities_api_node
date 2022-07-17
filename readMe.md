## Generate Random Activities API 

API for generating random activities with Node and Express Js

## Features

- Get Activity categories
- Retrieve all activities in a category 
- Generate a random actitvity

## Local Installation
- Clone repository
- Run ``npm install``
- create ``.env`` file and add ``PORT`` number
- run with ``npm run dev``

## API Documentation
- ``/categories`` - returns all categories 
- ``/categories/:category?search=name`` - returns a category, ``:category`` takes ``category ID or NAME``.  Query is optional if ``:category is ID``
- ``/activities/:category?category=name&random=true`` - returns activities in a category, ``:category`` takes ``category ID or NAME``.  Query is optional if ``:category is ID``, Add query ``random=true`` to return a single activity at random in a given category.
   

## Live Link
[Activity API](https://activities-api.onrender.com/)


## Author

Bada Adeola [Github page](https://github.com/codeDeeAi), is a full-stack software developer whose interests lies in creating
effecient and scalable web based solutions.

## License

GTA V Card is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
