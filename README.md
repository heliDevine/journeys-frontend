# 🚴 JOURNEYS frontend

**Full stack application with Java Springboot backend,
MongoAtlas database and React frontend**

Backend repository can be found [here](https://github.com/heliDevine/journeys)

## Concept

To give this project a clear direction and a purpose which would bring value to the user and the client
I added an enviromental aspect to the frontend application. This naturally fitted well to the City Bike's
business model and helped to define the product's features.

## Tech stack and tools:

- React
- React Router
- Axios for HTTP requests
- Jest and React testing library for testing
- CSS styling

React was a convenient library to create a SPA and React router was used to create browser side routing. I have created functional components to view more details about journeys and stations. Axios is used for the HTTP requests.

## How to run this application

Head to the [backend](https://github.com/heliDevine/journeys)repo and follow the instructions to get service running.

On terminal window run: `git clone git@github.com:heliDevine/journeys-frontend.git`

and: `cd journeys-frontend`

run:
`npm install` this command pulls all dependencies that it needs to run, this takes a few moments but after it's done run:
`npm start`

Application starts in your default browser at [http://localhost:3000](http://localhost:3000) and this view should pop up.
![alt text](screenshots/journeys_welcomepage.png 'Welcome page')

Navigate from top to view journeys and stations.

![alt text](screenshots/journeys_listview.png 'List of journeys')

Select individual journey from the list and CO2 saved information
based on selceted journey's distance.

![alt text](screenshots/journeys_popUp.png 'Journey details view')

Stations list shows CO2 savings based on total distance of departed journeys.
Note: stations are now sorted alphabethically.

![alt text](screenshots/journeys_stationPopup.png 'Stations view')

## Testing

Jest and React testing library tests can be run with
`npm test`. All tests should pass. Most of the tests are snapshot tests. PropTypes are used for typesafety.

**Improvements**

- Styling, utilising either styled components or frontend libraries like Material UI to create better user interface and more structured code.
- Filtering and searching by date or station. Currently the UI is not convenient for this.
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
