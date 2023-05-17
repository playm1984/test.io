import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";

const Fone = () => {
  const dispatch = useDispatch();
  const images = [
    {
      url: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg",
    },
  ];

  const choiceBG = (bg) => {
    dispatch({ type: "ADD_BG", payload: bg });
  };

  return (
    <div className={styles.imagePanel}>
      <div className={styles.drag_items}>
        {images.map((el, i) => (
          <div className={styles.img} key={i}>
            <img
              key={el.id}
              src={el.url}
              alt=""
              className="drag-item"
              onClick={() => choiceBG(el.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fone;
