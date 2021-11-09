import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ClinicCard({clinic}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {clinic.imgUrl}
          alt="clinic"
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
