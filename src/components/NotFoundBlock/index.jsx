import React from "react";
import styles from "./NotFound.module.scss";

const NotFoundBlock = () => {
  console.log(styles);
  return (
    <div className={styles.root}>
      <span>{String.fromCodePoint("0x1f615")}</span>
      <br />
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует
      </p>
    </div>
  );
};
export default NotFoundBlock;
