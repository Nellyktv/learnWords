import React, { useState, useContext } from 'react';
import styles from './WordsList.module.css';
import classNames from 'classnames';
import { WordsContextContext } from './wordsContext';

function WordsList({ id, russian, transcription, english }) {

    const [edit, setEdit] = useState(false);

    const [validationRus, setValidationRus] = useState(false);
    const [validationEng, setValidationEng] = useState(false);
    const [validationTranscription, setValidationTranscription] = useState(false);

    const [changeRussian, setChangeRussian] = useState('');
    const [changeEnglish, setChangeEnglish] = useState('');
    const [changeTranscription, setChangeTranscription] = useState('');

    const [disabledBtn, setDisabledBtn] = useState(false);

    const [inpRedRus, setInpRedRus] = useState('');
    const [inpRedTrans, setInpRedTrans] = useState('');
    const [inpRedEng, setInpRedEng] = useState('');

    const wordsChangeContext = useContext(WordsContextContext);

    const handleChangeRussian = (e) => {
        const russianLetterRegex = /[а-яёА-ЯЁ]/;
        setChangeRussian(e.target.value);
        setValidationRus(russianLetterRegex.test(e.target.value));
        if (russianLetterRegex.test(e.target.value)) {
            setChangeRussian(e.target.value);
            setInpRedRus('');
            setDisabledBtn(false);
        }
        else {
            setChangeRussian('');
            setInpRedRus(styles.redCellInp);
        }
    };

    const handleChangeEnglish = (e) => {
        const englishWordRegex = /^[a-zA-Z]+$/;
        setChangeEnglish(e.target.value);
        setValidationEng(englishWordRegex.test(e.target.value));
        if (englishWordRegex.test(e.target.value)) {
            setChangeEnglish(e.target.value);
            setInpRedEng('');
            setDisabledBtn(false);
        }
        else {
            setChangeEnglish('');
            setInpRedEng(styles.redCellInp);
        }
    };

    const handleChangeTranscription = (e) => {
        setChangeTranscription(e.target.value);
        if (!e.target.value?.length) {
            setInpRedTrans(styles.redCellInp);
        }
        else {
            setInpRedTrans('');
            setValidationTranscription(true);
            setDisabledBtn(false);
        }
    };

    const checkInpWordRus = () => {
        if (!changeRussian?.length) {
            setDisabledBtn(true);
            setInpRedRus(styles.redCellInp);
        }
        else {
            setValidationRus(true);
        }
    }

    const checkInpWordTrans = () => {
        if (!changeTranscription?.length) {
            setDisabledBtn(true);
            setInpRedTrans(styles.redCellInp);
            console.log(changeTranscription);
        }
        else {
            setValidationTranscription(true);
        }
    }

    const checkInpWordEng = () => {
        if (!changeEnglish?.length) {
            setDisabledBtn(true);
            setInpRedEng(styles.redCellInp);
        }
        else {
            setValidationEng(true);
        }
    }

    const checkInpWord = () => {
        checkInpWordEng();
        checkInpWordTrans();
        checkInpWordRus();
    }

    const handleChangeCancel = () => {
        setEdit(!edit);
        setDisabledBtn(false);
        setInpRedRus('');
        setInpRedTrans('');
        setInpRedEng('');
        setChangeRussian('');
        setChangeEnglish('');
        setChangeTranscription('');
    };

    const onClickSave = () => {
        if (validationRus && validationTranscription && validationEng) {
            wordsChangeContext.save(changeEnglish, changeTranscription, changeRussian)
        }
        else {
            checkInpWord();
        }
    }

    if (edit === false) {
        return (
            <div>
                <div className={styles.WordsList}>
                    <div className={classNames(`${styles.cell} ${styles.name}`)}>{id}
                    </div>
                    <div className={styles.cell}>{russian}</div>
                    <div className={styles.cell}>{transcription}</div>
                    <div className={styles.cell}>{english}</div>
                    <div className={styles.cell}>
                        <button className={classNames(`${styles.buttonEdit} ${styles.buttonsChange}`)} onClick={handleChangeCancel}>Edit</button>
                        <button className={classNames(`${styles.buttonSave} ${styles.buttonsChange}`)} >Save</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className={styles.WordsList}>
                    <div className={classNames(` ${styles.cell} ${styles.name}`)}>{id}
                    </div>

                    <input type='text' value={changeRussian} onChange={handleChangeRussian} className={classNames(` ${styles.name} ${inpRedRus}`)} />
                    <input type='text' value={changeTranscription} onChange={handleChangeTranscription} className={classNames(` ${styles.name} ${inpRedTrans}`)} />
                    <input type='text' value={changeEnglish} onChange={handleChangeEnglish} className={classNames(` ${styles.name} ${inpRedEng}`)} />
                    <div className={styles.cell}>
                        <button className={classNames(` ${styles.buttonsChange} ${styles.buttonDel}`)} onClick={handleChangeCancel}>Отмена</button>
                        {disabledBtn ?
                            <button className={classNames(`${styles.buttonDisabled} ${styles.buttonsChange}`)} onClick={checkInpWord} disabled={disabledBtn}>Save</button>
                            :
                            <button className={classNames(`${styles.buttonSave} ${styles.buttonsChange}`)} onClick={onClickSave} >Save</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default WordsList;