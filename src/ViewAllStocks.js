import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import axios from "axios";

const ViewAllStocks = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
       const [rows, setRows] = useState([]);
       
      useEffect(() => {
        const fetchedData = async () =>{
        try{
            const response  = await axios.get('http://localhost:8080/stocks/getStocks')
           setRows(response.data);
           }catch(error){
            console.log("error => "+error);
        }
    }
    
    fetchedData();
      }, []);

      

   

    
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell  align="right">Company Name</StyledTableCell>
            <StyledTableCell align="right">Current Price</StyledTableCell>
            <StyledTableCell align="right">Month Price</StyledTableCell>
            <StyledTableCell align="right">Year Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.companyName}</StyledTableCell>
              <StyledTableCell align="right">{row.currentPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.monthPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.yearPrice}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </div>
  )
}

export default ViewAllStocks