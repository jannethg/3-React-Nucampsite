import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NumcampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
            <NavbarBrand href='/'>
              <img src={NumcampLogo} alt='nucamp logo' />
            </NavbarBrand>
        </Container>
      </Navbar>
      <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;
