import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Button variant="contained" color="primary">
        HomePage
      </Button>
    </div>
  )
}

export default Home;
