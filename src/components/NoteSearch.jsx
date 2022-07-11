import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={(event) => onSearch(event)}
      />
    </div>
  );
}

export default NoteSearch;
