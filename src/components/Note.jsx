import React from "react";

function handleClick(props) {
  props.onDelete(props.id);
}

function Note(props) {
  return (
    <div className="note">
      <div className="note-header">
        <h1>{props.title}</h1>
        <p className="date">{props.date}</p>
      </div>
      <p>{props.content}</p>
      <button onClick={() => handleClick(props)}>DELETE</button>
    </div>
  );
}

export default Note;
