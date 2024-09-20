# Formik-Library-Management
React formik library management
# React-Redux Shopping Cart

This is a simple React shopping cart application using react redux toolkit

## Features

- View a list of available products
- Add or remove products from the cart
- Needs to Increase or Decrease the per unit Quantity that should automatically update the total Quantity and Amount.


## Demo
Check out the live demo of the project[https://vibhooshana-redux-shoppingcart.netlify.app/].


## Folder Structure

reduxcart-app/

├── node_modules/

├── public/

│ ├── favicon.ico

│ └── index.html

├── src/

│ ├── components/

│ │ ├── Navbar.jsx

│ │ ├── ProductList.jsx

│ │ ├── StarRating.jsx

│ │ ├── Cart.jsx

│ │ └── Home.jsx

│ ├── Store/

│ │ ├── store.js

│ │ └── cartSlice.js

│ ├── App.css

│ ├── App.jsx

│ ├── index.css

│ ├── index.js

├── .gitignore

├── package.json

├── README.md

## Project Setup

1. Set up your React application:

```bash

npx create-react-app reduxcart-app
cd reduxcart-app
npm install @reduxjs/toolkit react-redux

```
2. Add Components

Create the following components in the src/components directory:

- `Navbar.jsx`
  
- `Home.jsx`
  
- `ProductList.jsx`
  
- `StarRating.jsx`
  
- `Cart.jsx`
  
 
3. Run the development server:

To start the development server, use the following command:

```bash

npm start

```
  
4. Open your browser and navigate to http://localhost:3000 to see the application.

## Deployment

To deploy your application:

1. Build the project:

```bash
 npm run build

```

2. Deploy the `build` folder to Netlify.

### Acknowledgements

- React for the JavaScript library.
- reduxtoolkit for store
- Bootstrap and mui core components for styling.
- Netlify for providing the platform to deploy the application.ion.
