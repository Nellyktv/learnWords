import styles from './Wordlist/WordsList.module.css';
import WordsList from './Wordlist/WordsList';
import classNames from 'classnames';
import { useContext } from 'react';
import { WordsContextContext } from './Wordlist/wordsContext';


export default function Words() {
  const newWordsContext = useContext(WordsContextContext);



  return (
    <>
      <div className={styles.App} >
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
          newWordsContext.wordsChange.map((words, index) =>
            <WordsList
              key={index}
              id={words.id}
              english={words.english}
              transcription={words.transcription}
              russian={words.russian}
              index={index}
            />
          )

        }
        {
            //  words.reduce(function (prev,curr){
            //   console.log ([...prev,...curr.id]);
            // } 
            // )
        }
      </div>
    </>
  )
}
