import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [noteState, SetNoteState] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false)

  function handleChange(event) {
    const { value, name } = event.target;
    SetNoteState((prevNoteState) => {
      return {...prevNoteState,
        [name]: value
      }
    });
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          value={noteState.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          hidden={!isExpanded}
        />
        <textarea
          value={noteState.content}
          onFocus={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom name="zoom" in={isExpanded}>
        <Fab
          onClick={(event) => {
            event.preventDefault();
            props.AddNoteFunction(noteState);
            SetNoteState({ title: "", content: "" });
            setExpanded(false);
          }}
        >
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
