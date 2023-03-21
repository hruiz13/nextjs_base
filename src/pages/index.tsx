import React from 'react'
import {Box, Typography, Paper, Button } from '@mui/material'

import { NextLinkComposed } from '../utils/Link';

const Home = () => {
  return (
    <Box>
      <Typography variant="h2" color="primary">Home</Typography>
      <Typography variant="h2">Home</Typography>
      <Paper>

        Otro texto

      </Paper>

      <Button variant="contained" color="primary" component={NextLinkComposed} to='/about'>

        Go to about
        
      </Button>
      
    </Box>
  )
}

export default Home