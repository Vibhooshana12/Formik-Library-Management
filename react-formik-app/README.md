# Formik-Library-Management
React formik library management

This is a simple React formik library management application using react redux toolkit

## Features

-Users should be able to add, edit, and delete book records. Each book record should contain the title, author, ISBN number, and publication date.
-Users should be able to add, edit, and delete author records. Each author record should contain the author's name, birth date, and a short biography.
-All forms used in the dashboard should be validated using Formik.
-The dashboard should have a clean and responsive design that is easy to use and navigate.

## Demo
Check out the live demo of the project[https://vibhooshana-react-formik-library.netlify.app/].


## Folder Structure

reduxcart-app/

├── node_modules/

├── public/

│ ├── favicon.ico

│ └── index.html

├── src/

│ ├── components/

│ │ ├── Navbar.jsx

│ │ ├── Author.jsx

│ │ ├── Books.jsx

│ ├── components/

│ │ ├── AddBook.jsx

│ │ ├── AddAuthor.jsx

│ │ ├── UpdateBook.jsx

│ │ └── UpdateAuthor.jsx

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

npx create-react-app react-formik-app
cd react-formik-app
npm install formik axios react-router-dom

```
2. Add Components

Create the following components in the src/components directory:

- `Navbar.jsx`

- `Books.jsx`

- `Author.jsx`

- Formik

- `AddBook.jsx`
- `AddAuthor.jsx`
- `UpdateBook.jsx`
- `UpdateAuthor.jsx`

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
- React router dom for routing.
- React formik for form.
- Bootstrap and mui core components for styling. 
- Netlify for providing the platform to deploy the application.ion.
