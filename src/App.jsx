import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './componets/TopBar';
import Header from './componets/Header';
import DigitalHero from './componets/DigitalHero';
import DigitalCards from './componets/DigitalCards';
import EcosystemCards from './componets/EcosystemCards';
import OnlineServices from './componets/OnlineServices';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Header />
        <DigitalHero />
        <DigitalCards />
        <EcosystemCards />
        <OnlineServices />
      </div>
    </BrowserRouter>
  );
}

export default App;