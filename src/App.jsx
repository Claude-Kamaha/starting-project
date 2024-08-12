import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [openModal, setOpenModal] = useState();
  function hideModalHandler() {
    setOpenModal(false);
  }
  function showModalHandler() {
    setOpenModal(true);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isModalOpen={openModal} closeModal={hideModalHandler} />
    </main>
  );
}

export default App;
