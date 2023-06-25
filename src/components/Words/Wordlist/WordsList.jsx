import './WordsList.css';



function WordsList (props) {
return (
<div>
    
    <div className="WordsList">
    <div className='cell name'>{props.id}
 </div>
        <div className='cell'>{props.russian}</div>
        <div className='cell'>{props.transcription}</div>
        <div className='cell'>{props.english}</div>
        <div className='cell'>
            <button className='buttonEdit buttonsChange'>Edit</button>
            <button className='buttonDel buttonsChange'>Delete</button>
            </div>
    </div>

</div>


);
};

export default WordsList;