import React, { useState } from 'react';
import styles from './WordsList.module.css';
import classNames from 'classnames';





function WordsList (props) {
    let [edit,setEdit]=useState(false);

    const handleChange = () => {
        setEdit(!edit)
    };

    const{id,russian,transcription,english}=props;
    if(edit===false){


    return(
        <div>
    
    <div className={styles.WordsList}>
    <div className={classNames(`${styles.cell} ${styles.name}`)}>{id}
 </div>
        <div className={styles.cell}>{russian}</div>
        <div className={styles.cell}>{transcription}</div>
        <div className={styles.cell}>{english}</div>
        <div className={styles.cell}>
            <button className={classNames(`${styles.buttonEdit} ${styles.buttonsChange}`)} onClick={handleChange}>Edit</button>
            <button className={classNames(`${styles.buttonDel} ${styles.buttonsChange}`)}>Delete</button>
            </div>
    </div>

</div>
    )
}
else{
return (
    <div>
        
        <div className={styles.WordsList}>
        <div className={classNames(`${styles.buttonDel} ${styles.buttonsChange}`)}>{id}
     </div>
     <input className={styles.cell}/>
            <input className={styles.cell}/>
            <input className={styles.cell}/>
            <div className={styles.cell}>
            <button className={classNames(`${styles.buttonEdit} ${styles.buttonsChange}`)} onClick={handleChange}>Edit</button>
            <button className={classNames(`${styles.buttonDel} ${styles.buttonsChange}`)}>Delete</button>
                </div>
        </div>
    
    </div>
    
    
    );}
};

export default WordsList;