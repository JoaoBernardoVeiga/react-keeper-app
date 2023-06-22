import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function AddNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function DeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea AddNoteFunction={AddNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          DeleteNoteFunction={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
