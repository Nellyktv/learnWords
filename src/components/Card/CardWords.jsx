import { useState } from 'react';
import Card from './Card';
import styles from './Card.module.css';
import classNames from 'classnames';

export default function CardWords({ words }) {
    const [indexCard, setIndexCard] = useState(0);
    const [clickBtn, setClickBtn] = useState(true);
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);

    const isFirstCard = indexCard === 0;
    const isLastCard = indexCard === words.length - 1;

    const next = () => {
        if (!isLastCard) {
            setIndexCard(indexCard + 1);
        }
        setClickBtn(true);
    };

    const prev = () => {
        if (isFirstCard) {
            setIndexCard(words.length - 1);
        } else {
            setIndexCard(indexCard - 1);
        }
        setClickBtn(true);
    };

    const countWords = () => {
        if (count < words.length - 1) {
            setCount(count + 1);
        }
    };

    const newGame = () => {
        setIndexCard(0);
        setClickBtn(true);
        setArr([]);
        setCount(0);
    };

    return (
        <div className={styles.containercard}>

            <button className={classNames(`${styles.nextprevbtn} ${isFirstCard ? styles.btnCardsLengthEnd : ''} ${styles.prev}`)}
                onClick={prev}
                disabled={isFirstCard}>
                Назад
            </button>

            <Card id={words[indexCard].id}
                english={words[indexCard].english}
                transcription={words[indexCard].transcription}
                russian={words[indexCard].russian}
                clickBtn={clickBtn}
                setClickBtn={setClickBtn}
                countWords={countWords}
                arr={arr}
                setArr={setArr}
                count={count} />

            <button className={classNames(`${styles.nextprevbtn} ${isLastCard ? styles.btnCardsLengthEnd : ''} ${styles.next}`)}
                onClick={next}
                disabled={isLastCard}>
                Вперед
            </button>

            {isLastCard &&
                <button className={classNames(styles.nextprevbtn, styles.newGame)} onClick={newGame}>
                    Начать игру заново
                </button>
            }
        </div>
    );
}