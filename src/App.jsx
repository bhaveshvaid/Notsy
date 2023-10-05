import "./css/App.css";
import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import HeadComp from "./components/HeadComp";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-list"));
    // console.log('hook working');
    if (savedNotes.length) {
      // console.log('data present')
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    // console.log('hook notes wala working');
    localStorage.setItem("notes-list", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      content: text,
      date: date.toLocaleDateString(),
    };
    const newlist = [...notes, newNote];
    setNotes(newlist);
    // console.log(text);
  };

  const deleteNote = (id) => {
    // console.log('delete called'+'id i=' + id);
    notes.splice(id, 1);
    const deletedList = [...notes];
    setNotes(deletedList);
  };
  return (
    <div className={`light-mode ${darkMode && "dark-mode"}`}>
      <HeadComp handleToggler={setDarkMode} />
      <Search handleSearchNote={setSearchTxt}></Search>
      <div className="container">
        <NotesList
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(searchTxt.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
