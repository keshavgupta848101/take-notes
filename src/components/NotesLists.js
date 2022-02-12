import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesLists({notes, handleAddNote, handleDelteNote}) {
    return (
        <div className="notes-list">
            {notes.map((notes) => <Note id={notes.id} text={notes.text} date={notes.date} handleDelteNote={handleDelteNote} />)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesLists
