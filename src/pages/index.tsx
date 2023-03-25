import React from 'react'
import {Box, Typography, Paper, Button } from '@mui/material'

import { NextLinkComposed } from '../utils/Link';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const Home = () => {
  return (
    <main>
      <Box>
        <Typography variant="h2" color="primary">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Paper>

          Otro texto

        </Paper>

        <Button variant="contained" color="primary" component={NextLinkComposed} to='/about'>

          Go to about
          
        </Button>
        <ThemeToggleButton />
        
      </Box>
    </main>
  )
}

export default Home