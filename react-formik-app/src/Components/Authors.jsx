import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/author_details')
      .then((response) => {
        setAuthors(response.data);
      });
  }, []);

  const deleteAuthor = (id) => {
    axios.delete(`https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/author_details/${id}`)
      .then(() => {
        setAuthors(authors.filter((author) => author.id !== id));
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Authors</Typography>
      <Button variant="contained" color="primary" component={Link} to="/add-author">Add Author</Button>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" sx={{ padding: 2 }}>
        {authors.map((author) => (
          <Box 
          key={author.id} 
          flexBasis={{ xs: '100%', sm: '50%', md: '45%', lg: '25%' }} 
          display="flex"
          justifyContent="center">
            <Card key={author.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 2, width: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">{author.author_name}</Typography>
                <Typography variant="body2" color="text.secondary"><b>Birth-Date:</b>{author.birth_date}</Typography>
                <Typography variant="body2" color="text.secondary"><b>Biography:</b>{author.short_biography}</Typography>
                <Button component={Link} to={`/update-author/${author.id}`} variant="contained" color="primary" sx={{ mt: 1 }}>Edit</Button>
                <Button color="secondary" onClick={() => deleteAuthor(author.id)} sx={{ mt: 1 }}>Delete</Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Authors;
