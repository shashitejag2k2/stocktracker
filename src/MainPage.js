import React from 'react'
import {Box} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate = useNavigate();
    const addstocks =()=>{
        console.log("Hello")
        navigate('/addstock')
    }
    const viewAll =()=>{
      console.log("Hello")
      navigate('/viewAllStocks')
  }

  const checkStocks=()=>{
    navigate('/trackstocks')
  }
  return (
    <div >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        <Card sx={{ maxWidth: 300, height: 150, margin: 7, padding:5}}>
        <CardActionArea sx={{ height: 150 }} onClick={addstocks}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Add Stocks
          </Typography>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 250, height: 150, margin: 7, padding:5}} onClick={viewAll}>
        <CardActionArea sx={{ height: 150 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            View all stocks
          </Typography>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 250, height: 150, margin: 7,padding:5 }} onClick={checkStocks}>
        <CardActionArea sx={{ height: 150 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Track Stocks
          </Typography>
        </CardActionArea>
      </Card>
      </Box>
    </div>
  )
}

export default MainPage