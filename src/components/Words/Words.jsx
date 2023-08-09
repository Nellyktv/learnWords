import styles from './Wordlist/WordsList.module.css';
// import Card from '../Card/Card';
import words from '../../Words.json';
import WordsList from './Wordlist/WordsList';
import classNames from 'classnames';


export default function Words() {
    return ( 
      <>
      
      <div className = {styles.App} > 
      <h1 className={styles.title}>Список слов</h1>
      <div className={styles.WordsList}>
      <div className={classNames(`${styles.cell} ${styles.name}`)}>№
   </div>
       <div className={classNames(`${styles.cell} ${styles.name}`)}>Слово</div>
          <div className={classNames(`${styles.cell} ${styles.name}`)}>Транскрипция</div>
          <div className={classNames(`${styles.cell} ${styles.name}`)}>Перевод</div>
          <div className={classNames(`${styles.cell} ${styles.name}`)}>
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
