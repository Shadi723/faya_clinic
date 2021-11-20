import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ClinicCard({clinic}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '27px !important', margin: 'auto', height: '350px' }} >
      <CardActionArea sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <CardMedia
          component="img"
          height="200px"
          image= {clinic.imgUrl}
          alt="clinic"
           sx={{flexGrow: 1}}
        />
        <CardContent  style={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {clinic.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {clinic.abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
