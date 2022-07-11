import React from "react";
import NoteItem from "./NoteItem";
function NoteArchived({ notes, onDelete, onArchive }) {
  const archived = notes.filter((note) => note.archived === true);
  if (archived.length === 0) {
    return <p className="notes-list__empty-message">Catatan Tidak ada</p>;
  } else {
    return (
      <>
        <div className="notes-list">
          {archived.map((note) => (
            <NoteItem
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              note={note}
            />
          ))}
        </div>
      </>
    );
  }
}
export default NoteArchived;
