import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CardComponent({ name, age }) {
  return (
    <div>
    <Card style={{border:"1 solid black"}}>
      <CardContent>
        <Typography variant="h6">Name: {name}</Typography>
        <Typography variant="body2">Age: {age}</Typography>
      </CardContent>
    </Card>
    <br/>
    </div>
  );
}

export default CardComponent;
