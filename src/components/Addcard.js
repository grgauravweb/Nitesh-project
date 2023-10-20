import React from 'react'
import CardComponent from './CardComponent';
import { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Addcard() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [cards, setCards] = useState([]);
  
    // Load cards from localStorage on initial render
    useEffect(() => {
      const storedCards = JSON.parse(localStorage.getItem('cards'));
      if (storedCards) {
        setCards(storedCards);
      }
    }, []);
  
    // Save cards to localStorage whenever the cards state changes
    useEffect(() => {
      localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);
  
    const addCard = () => {
      if (name && age) {
        const newCard = { name, age };
        setCards([...cards, newCard]);
        setName('');
        setAge('');
      }
    };
  return (
    <div>
      <Link to="/Policy">Policy</Link>
      <Container>
      <h1>Add New Card</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={addCard}>
            Add Card
          </Button>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        {cards.map((card, index) => (
          <CardComponent key={index} name={card.name} age={card.age} />
        ))}
      </div>
    </Container>
    </div>
  )
}
