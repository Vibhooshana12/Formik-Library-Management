import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Card, CardContent, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/bookdetails')
      .then((response) => {
        setBooks(response.data);
      });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/bookdetails/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id));
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Books
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/add-book">
        Add Book
      </Button>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" sx={{ padding: 2 }}>
        {books.map((book) => (
      <Box 
            key={book.id} 
            flexBasis={{ xs: '100%', sm: '50%', md: '45%', lg: '25%' }} 
            display="flex"
            justifyContent="center"
      >            
      <Card key={book.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 2, width: '100%' }}>
        <img src={book.image} alt={book.title} style={{ height: 400, objectFit: 'cover', width: '100%' }}/>
          <CardContent>
            <Typography variant="h6" component="div"> {book.title} </Typography>
            <Typography variant="body2" color="text.secondary"><b>ISBN:</b>{book.isbn}</Typography>
            <Typography variant="body2" color="text.secondary"><b>Published Date:</b>  {book.published_date}</Typography>
            <Typography variant="body2" color="text.secondary"><b>Author:</b>{book.author}</Typography>
            <Typography variant="body2" color="text.secondary"><b>Description:</b>{book.book_desc}</Typography>
            <Button component={Link} to={`/update-book/${book.id}`} color="primary" sx={{ mt: 1 }}>
              Edit
            </Button>
            <Button color="secondary" onClick={() => deleteBook(book.id)} sx={{ mt: 1 }}>
              Delete
            </Button>
          </CardContent>
      </Card>
      </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Books;
 