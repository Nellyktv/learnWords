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
        <Route path="/" element={<Users />} />
          <Route path="/wordslist" element={<Words/>} />        
          <Route path="/cards" element={<CardWords words={words}/>} />   
        </Routes>
      </div>
      </>
    </Router>
    
  );
  
}


function Users() {

}


// function About() {
//   return ( 
//     <div>{wordsList.map((wordsList) =>
//   <WordsList english = {wordsList.english}
//   transcription = {wordsList.transcription}
//   russian = {wordsList.russian}
//   id = {wordsList.id}
//   />
    
//     )}
//   </div>
//   )
// }

// function Home() {
//   return (
//     <div className='container-card'>{
//       words.map((words) =>
//       <Card id={words.id}
//       word={words.word}
//       transcription={words.transcription}
//       translate={words.translate}
//       />  
//       )}
      
//           </div>
//   )
// }




// export default App;


