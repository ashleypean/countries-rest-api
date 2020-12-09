# Countries Rest API Project

This project was built off of a challenge created by [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

The application allows the user to search through a list of all 250 countries and select each country to gain additional details. 

Each country's search result will also display the border countries, so that the user can learn more about a specific region 

### Features 
- Light/Dark mode implemented using React's useContext hook
- Third party API integration with [RestCountries.eu](https://restcountries.eu/) and using  React's useEffect() hook
- Search filtering utilizing the React useState() hook 
- Error handling on bad/unfulfilled requests 

### Technologies used 

- React 
- React Router (useParams, useHistory, BrowserRouter, Router, Switch)
- React Hooks (useState, useEffect, useContext)
- Styled Components
- Styled Icons
- Jest 

### Changes to Be Implemented 

- Loading images that will show on screen while API calls are running, courtesty of [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
- Fixing styling of dropdown filter menu 