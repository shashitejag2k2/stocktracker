import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';
import mockData from './MOCK_DATA.json'
const TrackStocks = () => {
    const [companies, setCompanies] = useState([]);
       const [nseCompanies, setNseCompanies] = useState(mockData);
       let count=0;
       let filteredNseCompanies =[]
    // useEffect(() => {
    //     const fetchCompanies = async () => {
    //       const API_KEY = 'BnL1e5UT5s0n48oqD4m9hMnfdR1zXRoJ';
    //       const FMP_API_URL = `https://financialmodelingprep.com/api/v3/stock/list?exchange=India&apikey=${API_KEY}`;
    
    //       try {
    //         const response = await axios.get(FMP_API_URL);
    //         const companiesResponse = response.data;
    //          filteredNseCompanies = companiesResponse.filter(company => company.exchangeShortName === 'NSE');
    //         console.log('Number of NSE companies:', filteredNseCompanies.length);
    //         setCompanies(companiesResponse);
    //         setNseCompanies(filteredNseCompanies);
    //         console.log(filteredNseCompanies);
    //       } catch (error) {
    //         console.error('Failed to fetch data:', error.message);
    //       }
    //     };
            
    //     fetchCompanies();
    //   }, []);

      
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={nseCompanies}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params,index) => <TextField {...params} key={index} label="Stocks" />}
    />
    <Button variant="contained" sx={{ marginLeft: 2 }}>Add Stock to bucket</Button>
    </Box>
    </div>
  )
}

export default TrackStocks