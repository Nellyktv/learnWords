import { useState } from 'react'
import './Card.css';
import Card from './Card';

export default function Test({words}) {

    const [indexCard, setIndexCard] = useState(0);


    const next = () => {
        if (indexCard === words.length - 1) {
            setIndexCard(0);
        } else if (indexCard < words.length - 1) {
            setIndexCard(indexCard + Number(1));
        }
    };

    const prev = () => {
        if (indexCard === 0) {
            setIndexCard(words.length - 1);
        } else if (indexCard > 0) {
            setIndexCard(indexCard - 1);
            }
    };


    return (
        
        
        <div className='container-card' key={words[indexCard].id}>
            <button className='nextprevbtn prev' onClick={prev}>Назад</button>
            <Card id={words[indexCard].id}
            english={words[indexCard].english}
            transcription={words[indexCard].transcription}
            russian={words[indexCard].russian}
            />  
            <button className='nextprevbtn next' onClick={next}>Вперед</button>

                
                 </div>

    )
}