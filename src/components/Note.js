import {MdDeleteForever} from 'react-icons/md';
import React from 'react'

function Note({id, text, date, handleDelteNote}) {
    return (
        <div className="note">
             <span>{text}</span>
            <div className="note-footer">
                <small> {date} </small>
                <MdDeleteForever onClick={() => handleDelteNote(id)} className="delete-icon"  size=""/>
            </div>
        </div>
    )
}

export default Note
