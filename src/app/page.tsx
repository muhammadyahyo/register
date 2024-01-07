"use client"
import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const route = useRouter()
  if (localStorage.getItem('password')) {
    route.push('/')
  } else {
    route.push('/signin')
  }
  const logOut = () => {
    localStorage.removeItem('password');
    route.push('signin')
  }
  return (
    <div>
      <Box marginTop={'50px'}>
        <Typography sx={{ textAlign: 'center' }} variant='h3'>HomePage</Typography>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button onClick={logOut} variant='contained'>Log Out</Button>
        </Box>
      </Box>
    </div>
  )
}

export default HomePage