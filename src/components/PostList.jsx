import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostList({ isModalOpen, closeModal }) {
  const [posts, setPosts] = useState([]);
  function addPostsHandler(postData) {
    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
    console.log("HERE IS THE pOST dATA OF pOSTLIST", posts);
  }
  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewPost stopCreation={closeModal} onAddPost={addPostsHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <li>
            <Post author={post.author} text={post.body} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default PostList;
