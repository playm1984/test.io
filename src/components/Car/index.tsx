import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./styles.css";

interface IItems {
  id: number;
  bg: string;
  photo: string;
  isPhoto: boolean;
}

const Item = ({ page, item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // Получаем данные из перетаскиваемого элемента
    const droppedItem = JSON.parse(event.dataTransfer.getData("text/plain"));
    // Здесь можно выполнить логику обработки перетаскивания элемента

    dispatch({ type: "ADD_PHOTO", payload: { droppedItem, page } });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="modal"
          style={
            item.bg
              ? { backgroundImage: `url(${item.bg})` }
              : { backgroundImage: "noone" }
          }
        >
          <img src={item.photo} alt="" />
        </div>
      </Modal>
      <div
        className="car_item"
        style={{ backgroundImage: `url(${item.bg})` }}
        onClick={handleOpen}
      >
        <div
          className={item.isPhoto ? "drop-zone dragging" : "drop-zone"}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {item.isPhoto ? (
            <img src={item.photo} alt="" />
          ) : (
            <p>Перетащите элемент из галлереи</p>
          )}
        </div>
      </div>
    </>
  );
};

const Car = () => {
  const { items, curPage }: any = useSelector((state) => state);

  const dispatch = useDispatch();

  const [index, setIndex] = useState<number>(0);

  // const [curPage, setCurPage] = useState<number>(1);

  const handleChange = (now, previou) => {
    setIndex(now);
    dispatch({ type: "CURRENT_PAGE", payload: now + 1 });
  };

  const addPage = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  const nextPage = () => {
    setIndex((prev) => prev + 1);
    dispatch({ type: "CURRENT_PAGE", payload: curPage + 1 });
  };

  const prevPage = () => {
    setIndex((prev) => prev - 1);
    dispatch({ type: "CURRENT_PAGE", payload: curPage - 1 });
  };
  console.log(items.length);

  return (
    <div>
      <Item page={index + 1} item={items[index]} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {curPage > 1 && (
          <button onClick={prevPage} className="btnChangePage">
            &#8592;
          </button>
        )}
        <p className="page_num">
          Страница {index + 1} из {items.length}
        </p>
        {items.length !== curPage && (
          <button onClick={nextPage} className="btnChangePage">
            &#8594;
          </button>
        )}
      </div>
      <div className="add_remove_page">
        <button onClick={addPage}>Add Page</button>
      </div>
    </div>
  );
};

export default Car;
