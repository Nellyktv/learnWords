import './App.css';


// import Test from './components/tests/Test';
// import Words from './components/Words/Words';
// import Card from './components/Card/Card';
// import Button from './components/Button/Button';
import WordsList from './components/Words/Wordlist/WordsList';
import words from './wordsList.json'




function App() {
  return ( 
    <div className = "App" > 
    <div className="WordsList">
    <div className='cell name'>№
 </div>
     <div className='cell name'>Слово</div>
        <div className='cell name'>Транскрипция</div>
        <div className='cell name'>Перевод</div>
        <div className='cell name'>
 </div>
 </div>
 {
      words.map((words) =>
        <WordsList english = {words.english}
        transcription = {words.transcription}
        russian = {words.russian}
        id = {words.id}

        />
      )
    } 

    </div>
  );

}

export default App;


