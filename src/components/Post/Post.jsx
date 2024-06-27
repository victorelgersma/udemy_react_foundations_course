import { post, author, text } from "./Post.module.css";

export function Post(props) {
  console.log(props.author);
  return (
    <li className={post}>
      <p className={author}>{props.author}</p>
      <p className={text}>{props.body}</p>
    </li>
  );
}

export default Post;
