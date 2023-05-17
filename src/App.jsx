import React from "react";
import styles from "./App.module.css";

import Car from "./components/Car/index.tsx";
import TabsPanel from "./components/Tabs";
import Card from "./components/Card";

const App = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Card />
        <Car />
        <TabsPanel />
      </div>
    </main>
  );
};

export default App;
