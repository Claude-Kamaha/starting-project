import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitForm(event) {
    console.log("here is the event", event);
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    props.stopCreation();
    console.log("here is the postData", postData);
  }
  return (
    <form className={classes.form} onSubmit={submitForm}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={props.stopCreation}>
          Close
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
