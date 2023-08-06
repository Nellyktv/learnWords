import React, { useState } from 'react';
import './WordsList.css';





function WordsList (props) {
    let [edit,setEdit]=useState(false);

    const handleChange = () => {
        setEdit(!edit)
    };

    const{id,russian,transcription,english}=props;
    if(edit===false){


    return(
        <div>
    
    <div className="WordsList">
    <div className='cell name'>{id}
 </div>
        <div className='cell'>{russian}</div>
        <div className='cell'>{transcription}</div>
        <div className='cell'>{english}</div>
        <div className='cell'>
            <button className='buttonEdit buttonsChange' onClick={handleChange}>Edit</button>
            <button className='buttonDel buttonsChange'>Delete</button>
            </div>
    </div>

</div>
    )
}
else{
return (
    <div>
        
        <div className="WordsList">
        <div className='cell name'>{id}
     </div>
     <input className='cell'/>
            <input className='cell'/>
            <input className='cell'/>
            <div className='cell'>
                <button className='buttonEdit buttonsChange' onClick={handleChange} >Edit</button>
                <button className='buttonDel buttonsChange'>Delete</button>
                </div>
        </div>
    
    </div>
    
    
    );}
};

export default WordsList;