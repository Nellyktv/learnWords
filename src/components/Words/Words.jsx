import './Words.css';
// import Card from '../Card/Card';
import words from '../../Words.json';
import WordsList from './Wordlist/WordsList';

export default function Words() {
    return ( 
      <>
      
      <div className = "App" > 
      <h1 className='title'>Список слов</h1>
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
        words.map((words,index) =>
          <WordsList 
          key={index}
          id = {words.id} 
          english = {words.english}
          transcription = {words.transcription}
          russian = {words.russian}
          />
        )
      } 
  
      </div>
      </>
  )
}
