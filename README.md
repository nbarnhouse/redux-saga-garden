# Redux Saga Garden

The saga continues with an epic garden of epic-ness!

## Create Database and Table

Create a new database called `garden` and run the SQL in the `database.sql` file.

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:5173`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `server/` contains the Express App

## Base Mode

Currently, the app is rendering and adding stuff to the DOM, but this is **100% client-side** code. Your job is going to be to convert this app into a *full stack app that uses React, Redux, and Redux-Saga*. Here are the steps to do this:

1. Add the `redux-logger` middleware to the project.
2. Add `redux-saga` to the project. The `GET /api/plants` route is already written to send an array of plant objects as its response. Obtain and render that array in the `PlantList` component when it loads. (You'll need to make a Saga function in `store.js` whose job is to get the data from the server, then `put` it into the `plantList` reducer.)
3. Add all of the plant fields to the `PlantForm` to allow adding a new plant to the database. The server-side code for this already exists in the `POST /api/plants` route.
4. Add a delete button for each plant to allow it to be removed from the database. The `DELETE /api/plants/:id` route is already written for this.

## Stretch Goals

1. Implement `react-router` so that when a user navigates to `http://localhost:5173/#/plants/1` it displays the details for a given plant. (The plant with an `id` of 1, in this case.) The `GET /api/plants/:id` route is already written to respond with all of the details for a single plant. 
    * You'll need to research [URL Parameters for React Router](https://v5.reactrouter.com/web/example/url-params)
2. Add `Material UI` to the project to give the site an earthy color palette.
