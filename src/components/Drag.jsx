import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";

const DragAndDrop = () => {
  const dispatch = useDispatch();
  const [showAll, setShowAll] = React.useState(false);
  const images = [
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url: "https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2-1024x684.jpg",
    },
    {
      url: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/0213_covid_0.jpg?itok=1LFJ4-Zv",
    },
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url: "https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2-1024x684.jpg",
    },
    {
      url: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/0213_covid_0.jpg?itok=1LFJ4-Zv",
    },
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
  ];

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const removePhoto = () => {
    dispatch({ type: "REMOVE_PHOTO" });
  };

  return (
    <div className={styles.imagePanel}>
      <button
        className={styles.showBtn}
        onClick={() => setShowAll((prev) => !prev)}
      >
        Развернуть
      </button>
      <button className={styles.showBtn} onClick={removePhoto}>
        Стереть
      </button>
      <div className={showAll ? styles.drag_items : styles.imagePanel8}>
        {images.map((el, i) => (
          <div className={styles.img} key={i}>
            <img
              key={el.id}
              src={el.url}
              alt=""
              className="drag-item"
              draggable
              onDragStart={(event) => handleDragStart(event, el.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
