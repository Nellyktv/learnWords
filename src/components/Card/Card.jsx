import { useEffect, useRef } from 'react';
import styles from './Card.module.css';
import words from '../../Words.json';


export default function Card({ id, english, transcription, russian, clickBtn, setClickBtn, countWords, arr, count }) {
    const bntRef = useRef(null);
    

    const handleChange = () => {
        setClickBtn(!clickBtn);
        if (arr.includes(id)) {
        }
        else {
            arr.push(id);
            countWords();
        }
    };

    useEffect(() => {
        if (arr.includes(id)) {
            setClickBtn(!clickBtn);
        }
        bntRef.current.focus();
    }, [id, bntRef])

    return (
        <div><div className={styles.Card}>
            <p className={styles.wordStyle}>{english}</p>

            <p className={styles.transcriptionStyle}>{transcription}</p>

            {!clickBtn ? <p className={styles.translateStyle}>{russian}</p> :
                <button ref={bntRef} className={styles.buttonCheck} onClick={handleChange}>Проверить</button>}

            <p>Изучено {count} из {words.length} </p>

        </div>
        </div>
    );
};



