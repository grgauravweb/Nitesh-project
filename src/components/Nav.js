import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // If you're using React Router

function Nav() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          {/* <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography> */}
          <Button component={Link} to="/Policy" color="inherit">
            Policy
          </Button>
          <Button component={Link} to="/Viewpolicy" color="inherit">
            View Policy
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
