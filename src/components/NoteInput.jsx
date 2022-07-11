import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: { title: "", body: "" },
      titleLimit: { input: "", limit: 15, char: 15 },
    };
    this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleEventHandler(event) {
    if (event.target.value.length <= 15) {
      this.setState((prevState) => {
        return {
          titleLimit: {
            ...prevState.titleLimit,
            input: event.target.value,
            char: prevState.titleLimit.limit - event.target.value.length,
          },
          note: {
            ...prevState.note,
            title: event.target.value,
          },
        };
      });
    }
  }
  onBodyEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        note: {
          ...prevState.note,
          body: event.target.value,
        },
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState((prevState) => {
      return {
        note: {
          title: "",
          body: "",
        },
        titleLimit: {
          ...prevState.tileLimit,
          input: "",
          char: 15,
        },
      };
    });
  }
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p
            className={`note-input__title__char-limit ${
              this.state.titleLimit.char === 0 ? "zero" : ""
            }`}
          >
            Sisa karakter: {this.state.titleLimit.char}
          </p>
          <input
            type="text"
            className="note-input__title"
            value={this.state.note.title}
            onChange={this.onTitleEventHandler}
            placeholder="Tulis Judul Catatanmu"
            required
          />
          <textarea
            placeholder="Tulis Catatanmu.."
            className="note-input__body"
            type="text"
            value={this.state.note.body}
            onChange={this.onBodyEventHandler}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
