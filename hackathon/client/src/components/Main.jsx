import ListItem from "./ListItem";
import Modal from "./Modal";
import { useState } from "react";

export default function Main(props) {
  // This state controls the modal "ListItem":
  const [showItem, setShowItem] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const menu = props.menu;
  const handleModal = (item) => {
    console.log(item);
    setShowItem(true);
    setModalContent(item);
  };
  const closeModal = (item) => {
    setShowItem(false);
    setModalContent(false);
  };
  return (
    <main>
      {showItem ? <div><Modal closeModal={closeModal} item={modalContent}/></div> : null}
      <ul>
        {menu.map((item) => (
          <ListItem
            handleModal={handleModal}
            item={item}
            show={showItem}
            setShow={setShowItem}
          />
        ))}
      </ul>
    </main>
  );
}
