import React, { createContext, useState } from "react";
import words from '../../../Words.json';

const NewWordContext = () => {
    const [wordsChange, setWordsChange] = useState(words);

    const lastWordId = wordsChange[wordsChange?.length - 1].id;
    const newWordId = Number(lastWordId) + 1;

    const lastIdWords = wordsChange.map(function (value) {
        return value.id;
    });
    const numIndex = lastIdWords.length - 1;
    const newId = Number(lastIdWords[numIndex]) + Number(1);

    const save = (engNewWord, transcriptionNewWord, rusNewWord) => {
        const arr = wordsChange.concat({
            "id": newWordId,
            "english": engNewWord,
            "transcription": transcriptionNewWord,
            "russian": rusNewWord,
        }
        )
        setWordsChange(arr);
    }

    return { wordsChange, save }
}

export const WordsContextContext = createContext('');

export default function WordsContext({ children }) {

    return (
        <>
            <WordsContextContext.Provider value={NewWordContext()}>
                {children}
            </WordsContextContext.Provider>
        </>
    )
}