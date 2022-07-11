import React from "react";
import NoteHeader from "./NoteHeader";

import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteActive from "./NoteActive";
import NoteArchived from "./NoteArchived";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
  }
  onAddHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        search: [
          ...prevState.search,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }
  onSearchHandler(event) {
    this.setState((prevState) => {
      return {
        search: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(event.target.value.toLowerCase())
        ),
      };
    });
  }
  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        search: prevState.search.map((note) => {
          if (note.id === id) {
            note.archived = !note.archived;
          }
          return note;
        }),
      };
    });
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const search = this.state.search.filter((note) => note.id !== id);
    this.setState({ notes, search });
  }
  render() {
    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler} />

        <div className="note-app__body">
          <NoteInput addNote={this.onAddHandler} />
          <h2>Catatan Aktif</h2>
          <NoteActive
            notes={this.state.search}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Archived</h2>
          <NoteArchived
            notes={this.state.search}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}
export default NoteApp;
