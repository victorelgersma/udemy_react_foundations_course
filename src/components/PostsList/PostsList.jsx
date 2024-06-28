import { useState } from "react";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event) => {
    console.log(event.target.value);
    setEnteredBody(event.target.value);
  };

  function authorChangeHandler(event) {
    console.log("authorChangeHandler");
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course" />
      </ul>
    </>
  );
}
export default PostList;
