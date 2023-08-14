import { useState } from 'react'
import Card from './Card';
import styles from './Card.module.css';
import classNames from 'classnames';

export default function CardWords({words}) {

    const [indexCard, setIndexCard] = useState(0);
    const [clickBtn, setClickBtn] = useState('false');

    const next = () => {
        if (indexCard === words.length - 1) {
            setIndexCard(0);
        } else if (indexCard < words.length - 1) {
            setIndexCard(indexCard + Number(1));
        }
        setClickBtn('false');
    };

    const prev = () => {
        if (indexCard === 0) {
            setIndexCard(words.length - 1);
            
        } else if (indexCard > 0) {
            setIndexCard(indexCard - 1);
            
            }
            setClickBtn('false');
    };


    return (
        
        
        <div className={styles.containercard} >
            <button className={classNames(`${styles.nextprevbtn} ${styles.prev}`)} onClick={prev}>Назад</button>
            <Card id={words[indexCard].id}
            english={words[indexCard].english}
            transcription={words[indexCard].transcription}
            russian={words[indexCard].russian}
            clickBtn = {clickBtn}
            setClickBtn = {setClickBtn}
            />  
            <button className={classNames(`${styles.nextprevbtn} ${styles.next}`)} onClick={next}>Вперед</button>

                
                 </div>

    )
}