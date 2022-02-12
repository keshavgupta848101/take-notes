import React from 'react'
import {useState} from 'react'
function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('')
    const charLimit = 200;
    const handleChange = (event) =>{
        if(charLimit - event.target.value.length >= 0 ){
            setNoteText(event.target.value)
        }
        // if(0 < count){
        // }

    }
    const handleSaveClick = () => {
        // const temp = 
        if(noteText.trim().length > 0)
            {
                handleAddNote(noteText)
                setNoteText('')
            }        
    }
    return (
        <div className="note new">
           <textarea  rows="8"
            cols="10"
            placeholder="Type new note"
            value={noteText}
            onChange={handleChange}
            >
           </textarea>
           <div className="note-footer">
                <small> {charLimit - noteText.length} </small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}

export default AddNote
