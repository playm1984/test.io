import React, { useState } from "react";
import styles from "./style.module.css";
import { Modal } from "@mui/material";

const Card = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalCard}>
          <p>Продукт успешно добален в корзину</p>
        </div>
      </Modal>
      <div className={styles.wrapper}>
        <div className="card_title">
          <h1>My Project</h1>
          <p>Размер: 400x280мм (в развороте)</p>
        </div>
        <button className={styles.btnCard} onClick={handleOpen}>
          В корзину
        </button>
      </div>
    </>
  );
};

export default Card;
