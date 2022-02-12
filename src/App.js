import { useState, useEffect } from "react";
import NotesLists from "./components/NotesLists";
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Headers from './components/Header'

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Dummy text",
      date: '15/21/20'
    },
    {
      id: nanoid(),
      text: "Dummy text",
      date: '15/21/20'
    },
    {
      id: nanoid(),
      text: "Dummy text",
      date: '15/21/20'
    },
    {
      id: nanoid(),
      text: "Dummy text",
      date: '15/21/20'
    }
  ])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  // const findNotes = (text) => {
  //   const findNote = notes.filter((note) => note.text == text );
  //   console.log(findNote);
  // }
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Headers handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} notes={notes} />
        <NotesLists notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDelteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
