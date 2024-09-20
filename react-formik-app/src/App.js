import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Books from './Components/Books';
import Authors from './Components/Authors';
import AddBook from './Components/Formik/AddBook';
import AddAuthor from './Components/Formik/AddAuthor';
import UpdateBook from './Components/Formik/UpdateBook';
import UpdateAuthor from './Components/Formik/UpdateAuthor';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/update-book/:id" element={<UpdateBook />} />
        <Route path="/update-author/:id" element={<UpdateAuthor />} />
      </Routes>
    </Router>
  );
}

export default App;





// src/
// │
// ├── Components/
// │   ├── Authors.jsx
// │   ├── Books.jsx
// │   ├── Navbar.jsx
// │   └── Formik/
// │       ├── AddAuthor.jsx
// │       ├── AddBook.jsx
// │       ├── UpdateAuthor.jsx
// │       └── UpdateBook.jsx
// └── App.js