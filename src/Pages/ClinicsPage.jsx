import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ClinicCard from "../Cards/ClinicCard";
import { Clinic } from "../Models/Clinic";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

const ClinicsPage = () => {
  const [clinics, setClinics] = useState([]);

  var clinic = new Clinic(
    1,
    "clinic 1",
    "asdn skvmksdv kfmbdb 1",
    "section 1",
    "subsection 1",
    ""
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <ClinicCard clinic={clinic} />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <ClinicCard clinic={clinic} />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <ClinicCard clinic={clinic} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClinicsPage;
