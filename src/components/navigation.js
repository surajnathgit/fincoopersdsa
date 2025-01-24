import { Typography,Box } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <>
    <Box sx={{  width: "100%",display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, boxShadow: "-2px -20px 20px 0px rgba(0, 0, 0)" }}>
    <Box sx={{  width: "80%",display: 'flex', justifyContent: 'space-between', alignItems: 'center',color: "#1E0E62", fontWeight: "500" }}>
        <Box>
          <Typography variant="h4">DSA</Typography>
        </Box>
        <Box sx={{width: "50%",display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link href="/home"> Home </Link>
        <Link href="/home"> About</Link>
        <Link href="/home"> Portfolio </Link>
        <Link href="/home"> How it Works </Link>
        <Link href="/home"> Pricing </Link>
        <Link href="/home"> Login </Link>
        <Link href="/home" style={{border: '2px solid #EBEAED', borderRadius: "40px", padding: "2px 20px"}}> SignUp </Link>
        
        </Box>
    </Box>
    </Box>
    </>
  )
}

export default NavBar;