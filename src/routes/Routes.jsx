import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Contact } from '../pages/Contact';
import { Promotion } from '../pages/Promotion';
import { Tickets } from '../pages/Tickets';


export default props => (
  <Router>
    {/* <Suspense fallback={<div>Carregando...</div>}> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    {/* </Suspense> */}
  </Router>
);