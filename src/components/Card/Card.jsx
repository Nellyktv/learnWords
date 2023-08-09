import React, { useState } from 'react';
import styles from './Card.module.css';



export default function Card (props) {
    
    const [clickBtn, setClickBtn] = useState('false');

    const handleChange = () => {
        setClickBtn(!clickBtn);
    };
    
    const selected=styles.hidden;
    const { english,transcription,russian}=props;

    return (

    <div className={styles.cardcontainer}><div className={styles.Card}>
    <p className={styles.wordStyle}>{english}</p>
    <p className={styles.transcriptionStyle}>{transcription}</p>
    <p className={`${styles.translateStyle} ${clickBtn ? `${selected}` : ''}`}>{russian}</p>
    <button className= {`${styles.buttonCheck} ${clickBtn ? `` : `${selected}`}`} onClick={handleChange}>Проверить</button>
        </div>
        </div>

    );
};
  


 