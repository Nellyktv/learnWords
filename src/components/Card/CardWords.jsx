import { useState } from 'react'
import Card from './Card';
import styles from './Card.module.css';
import classNames from 'classnames';



export default function CardWords({words}) {

    const [indexCard, setIndexCard] = useState(0);
    const [clickBtn, setClickBtn] = useState(true);
    const[count,setCount]= useState(0);
    const [arr,setArr]=useState([]);

    
    const [buttonActive,buttonDeactivation]=useState('enable');
    let disabledBtn = () =>{
        buttonDeactivation('disable');
    }

    let next = () => {
 if (indexCard < words.length - 1) {
            setIndexCard(indexCard + Number(1));
        }
        setClickBtn(true);
    };
const prev = () => {
        if (indexCard === 0) {
            setIndexCard(words.length - 1);
            
        } else if (indexCard > 0) {
            setIndexCard(indexCard - 1);
            
            }
            setClickBtn(true);
    };


    const countWords = () => {
        if (count !== words.length-1) {
            setCount(count + 1);
        }
    };

    const newGame = () =>{
        setIndexCard(0);
        setClickBtn(true);
        arr=[];
        setCount(0);
       
    }



    let stylePrevBtn = styles.nextprevbtn;

    return (
        
        
        <div className={styles.containercard} >
            
            {indexCard !== 0 ? 
            <button className={classNames(`${styles.nextprevbtn} ${styles.prev}`)} onClick={prev}>Назад</button>:''}
            <Card 
            id={words[indexCard].id}
            english={words[indexCard].english}
            transcription={words[indexCard].transcription}
            russian={words[indexCard].russian}
            clickBtn = {clickBtn}
            setClickBtn = {setClickBtn}
            countWords ={countWords}
            arr={arr} 
            setArr={setArr}
            count={count}
            />  
            
            {indexCard === words.length-1 ? stylePrevBtn=styles.btnCardsLengthEnd  :''}
            {indexCard === words.length-1 ? next=disabledBtn :''}
            
            <button className={classNames(`${stylePrevBtn} ${styles.next}`)} onClick={next}>Вперед</button>     
            {indexCard === words.length-1 ?<button className={classNames(`${styles.nextprevbtn} ${styles.newGame}`)} onClick={newGame}>Начать игру заново</button>:''}
            
                 </div>

    )
}