import styles from './Wordlist/WordsList.module.css';
import WordsList from './Wordlist/WordsList';
import classNames from 'classnames';
import { useContext } from 'react';
import { WordsContextContext } from './Wordlist/wordsContext';
import { tableCellsData } from './tableCellsData';

export default function Words() {
  const newWordsContext = useContext(WordsContextContext);

  return (
    <>
      <div className={styles.App} >
        <h1 className={styles.title}>Список слов</h1>
        <div className={styles.WordsList}>
          {
            tableCellsData.map(el =>
              <div className={classNames(`${styles.cell} ${styles.name}`)}>{el.nameCell}
              </div>
            )}
        </div>
        {newWordsContext.wordsChange.map((words, index) =>
          <WordsList key={index}
            id={words.id}
            english={words.english}
            transcription={words.transcription}
            russian={words.russian}
            index={index}
          />
        )
        }
      </div>
    </>
  )
}
