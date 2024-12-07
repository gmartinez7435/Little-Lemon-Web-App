import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Main from './components/Main';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
