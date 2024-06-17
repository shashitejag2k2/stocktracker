import React, { useState } from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
export const Addstock = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    companyName: "",
    currentPrice: "",
    monthPrice: "",
    yearPrice: "",
  });

  const handlesubit = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Response Saved");
    axios
      .post("http://localhost:8080/stocks/addstock", formValues)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      navigate('/')
  };

  
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="companyName"
            label="Company Name"
            value={formValues.companyName}
            onChange={handleChange}
          />
          <TextField
            id="currentPrice"
            label="Current Price"
            value={formValues.currentPrice}
            onChange={handleChange}
          />
          <TextField
            id="monthPrice"
            label="1 Month price"
            value={formValues.oneMonth}
            onChange={handleChange}
          />

          <TextField
            id="yearPrice"
            label="1 Year price"
            value={formValues.oneYear}
            onChange={handleChange}
          />
        </Box>

        <Button type="submit" variant="contained" sx={{ m: 2 }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};
