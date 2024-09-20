import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Library Management
          </Typography>
          <Button color="inherit" component={Link} to="/books">
            Books
          </Button>
          <Button color="inherit" component={Link} to="/authors">
            Authors
          </Button>
          <Button color="inherit" component={Link} to="/add-book">
            Add Book
          </Button>
          <Button color="inherit" component={Link} to="/add-author">
            Add Author
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/books">
            <ListItemText primary="Books" />
          </ListItem>
          <ListItem button component={Link} to="/authors">
            <ListItemText primary="Authors" />
          </ListItem>
          <ListItem button component={Link} to="/add-book">
            <ListItemText primary="Add Book" />
          </ListItem>
          <ListItem button component={Link} to="/add-author">
            <ListItemText primary="Add Author" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

