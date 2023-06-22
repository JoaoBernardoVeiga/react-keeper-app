import React, { useState } from "react";

function CreateArea(props) {
  const [noteState, SetNoteState] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    SetNoteState((prevNoteState) => {
      return {...prevNoteState,
        [name]: value
      }
    });
  }

  return (
    <div>
      <form>
        <input
          value={noteState.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={noteState.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.AddNoteFunction(noteState);
            SetNoteState({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
