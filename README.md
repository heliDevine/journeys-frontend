# 🚴 JOURNEYS frontend

**Full stack application with Java Springboot backend,
MongoAtlas database and React frontend**

Backend repository can be found [here](https://github.com/heliDevine/journeys)

## Concept

To give this project a clear direction and a purpose which would bring value to the user and the client
I added an environmental aspect to the frontend application. This naturally fitted well to the City Bike's
business model and helped to define the product's features and required functionality.
The journey popup shows saved CO2 emissions for each journey compared to the same distance driven on an average car and on station view it shows calculatios based on the total distance of departed journeys.

This application being MVP the feature is heavily simplified but it opens up the opportunities to expand the product idea further. For example user would get a popup of this calculation when a journey is completed. Adding a user log in where CityBike’s customers can add journeys and will add up to the total. The product could extend to have a social aspect of how stations compare to the others in the city and of course sharing and inspiring others which in turn would promote the City Bike’s services.

## Tech stack and tools:

- React
- React Router
- Axios for HTTP requests
- Jest and React testing library for testing
- CSS styling

React was a convenient choice to create a SPA and React router was used to create browser side routing. I have created functional components to view more details about journeys and stations in addition to list components. Axios is used for the HTTP requests.

## How to run this application

Head to the [backend](https://github.com/heliDevine/journeys) repo and follow the instructions to get service running.

Clone this repo and run: `git clone git@github.com:heliDevine/journeys-frontend.git` in terminal window.

and navigate to the repo: `cd journeys-frontend`

run:
`npm install` this command pulls all dependencies that it needs to run, this takes a few moments, but after it's done run:
`npm start`

Application starts in your default browser at [http://localhost:3000](http://localhost:3000) and this view should pop up.
![alt text](screenshots/journeys_welcomepage.png 'Welcome page')

Navigate from top to view journeys and stations.

![alt text](screenshots/journeys_listview.png 'List of journeys')

Select individual journey from the list and CO2 saved information
based on selceted journey's distance will show below the list.

![alt text](screenshots/journeys_popUp.png 'Journey details view')

Stations list shows CO2 savings based on total distance of departed journeys.
Note: stations are now sorted alphabetically.

![alt text](screenshots/journeys_stationPopup.png 'Stations view')

## Testing

Jest and React testing library tests can be run with
`npm test`. All tests should pass. Most of the tests are snapshot tests. PropTypes are used for typesafety.

**Improvements**

- Styling, utilising either styled components or frontend libraries like Material UI to create better user interface and more structured code. The styling is not optimised for mobile devices.
- Filtering and searching by date or station. Currently, the UI is not convenient for this.
- Add journey form as backend functionality is ready.
- Testing, current testing methods are not the most robust and some test cases should be added for example "test button is disabled when page number is 0"

**Project status**

This is MVP but with this
concept the new features could be built around this core idea:

- User login and cumulative count and distance of taken journeys

- Admin user could add stations
- User would get a pop up of completed journey and add to their stats
- Social media connection of sharing and inspiring others which in turn would promote City Bikes
- Showing stations and journeys on map

**Author: Heli Devine**
