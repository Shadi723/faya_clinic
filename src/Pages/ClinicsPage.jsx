import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ClinicCard from "../Cards/ClinicCard";
import { Clinic } from "../Models/Clinic";
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchBar from "material-ui-search-bar";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const useStyles = makeStyles({
  newClinic: {
    top: '37px',
    borderRadius: '27px',
    backgroundColor: '#FFFFFF',
    minHeight: '90vh',
    padding: '0px',
    '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root.Mui-disabled' :{
      color: '#FFFFFF'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  newBtn: {
    background: '#515151 0% 0% no-repeat padding-box',
    borderRadius: '27px 27px 0px 0px',
    width: '100%',
    height: '60px',
    padding: '0px',
    margin: '0px',
    color: '#FFFFFF'
  },
  captions: {
    marginTop: '5px',
    paddingLeft: '5px',
    textAlign: 'start',
    fontFamily: 'Tajawal, sans-serif;',
    fontSize: '14px'
  },
  inputStyle: {
    width: '85%',
    '& fieldset': {
      borderRadius: '12px'
    }
  },
  mainSection:{
    borderRadius: '12px',
    border: '1px solid grey ',
    flexGrow: 1,
    width: '85%',
    margin: 'auto'
  }
})


const ClinicsPage = () => {
  const [clinics, setClinics] = useState([]);
    const styles = useStyles();


  var clinic = new Clinic(
    1,
    "clinic 1",
    "asdn skvmksdv kfmbdb 1",
    "section 1",
    "subsection 1",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Birds_www.photo.org.es-30.jpg/360px-Birds_www.photo.org.es-30.jpg"
  );
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#F3F3F3 ' }}>
      <Grid container justifyContent="between"  >
        <Grid item xs={9}>
            <Grid container justifyContent="space-evenly" alignItems="center" spacing={1}>
                <Grid  item xs={12} sx={{margin: 'auto'}}>
                  <SearchBar style={{borderRadius: '22px', boxShadow: '0px 3px 6px #00000029', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} sx={{margin: 'auto'}}>
                  <ClinicCard clinic={clinic} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} sx={{margin: 'auto'}}>
                  <ClinicCard clinic={clinic} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} sx={{margin: 'auto'}}>
                  <ClinicCard clinic={clinic} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Item className={styles.newClinic}>
                <Button variant="text" className={styles.newBtn} disabled>Add New</Button>
                 <Typography variant="subtitle2" display="block" gutterBottom className={styles.captions}>
                    Title:
                  </Typography>
                  <TextField  variant="outlined" size="small" className={styles.inputStyle}/>
                 <Typography variant="subtitle2" display="block" gutterBottom className={styles.captions}>
                    Abstract:
                  </Typography>
                  <TextField multiline rows={8} variant="outlined" size="small" className={styles.inputStyle}/>
                 <Typography variant="subtitle2" display="block" gutterBottom className={styles.captions}>
                    Main Sections:
                  </Typography>
                  <Box className={styles.mainSection}>
                  </Box>
                  <Typography variant="subtitle2" display="block" gutterBottom className={styles.captions}>
                    Photo:
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{width: '85%', borderRadius: '12px', color: 'gray', border: '1px solid gray',  '&:hover':{ border: '1px solid gray'}}}
                  >
                    Add Photo
                    <input
                      type="file"
                      hidden
                    />
                  </Button>

                  <Button variant="contained" sx={{width: '85%', marginTop: '10px', color:'#FFFFFF', backgroundColor: '#3EC955', borderRadius: '12px', marginBottom: '5px'}}>
                    Add
                  </Button>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClinicsPage;
