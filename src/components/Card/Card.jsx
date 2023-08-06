import React, { useState } from 'react';
import './Card.css';



export default function Card (props) {
    
    const [clickBtn, setClickBtn] = useState('false');

    const handleChange = () => {
        setClickBtn(!clickBtn);
    };
    
    const selected='hidden';
    const { english,transcription,russian}=props;

    return (

    <div className='card-container'><div className="Card">
    <p className='wordStyle'>{english}</p>
    <p className='transcriptionStyle'>{transcription}</p>
    <p className={`translateStyle ${clickBtn ? `${selected}` : ''}`}>{russian}</p>
    <button className= {`buttonCheck ${clickBtn ? `` : `${selected}`}`} onClick={handleChange}>Проверить</button>
        </div>
        </div>

    );
};
  


 