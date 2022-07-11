import React from "react";

function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>MyNotes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari Catatan..."
          onChange={(event) => onSearch(event)}
        />
      </div>
    </div>
  );
}
export default NoteHeader;
