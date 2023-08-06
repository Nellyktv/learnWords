import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import words from './Words.json';

import Words from './components/Words/Words';
import CardWords from './components/Card/CardWords';
import Header from './components/Header/Header';



export default function App() {
  return (

    <Router>
      <>    
    <Header></Header>
      <div>
        <Routes>
        <Route path="/" element={<Words/>} />       
          <Route path="/card" element={<CardWords words={words}/>} />   
        </Routes>
      </div>
      </>
    </Router>
    
  );
  
}




