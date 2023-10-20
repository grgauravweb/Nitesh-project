import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policy from './components/Policy';
import Addcard from './components/Addcard';
import Viewpolicy from './components/Viewpolicy';

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addcard/>}></Route>
        <Route path="/Policy" element={<Policy/>}></Route>
        <Route path="/Viewpolicy" element={<Viewpolicy/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
