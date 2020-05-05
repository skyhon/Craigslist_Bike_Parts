import React from "react";
import styles from "../css/styles.module.css";

const BikePartsPage = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p className={styles.bodyColor}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        officia iure, sint mollitia temporibus magnam consequatur laborum quia
        similique. Provident expedita odio ullam, eaque excepturi eos nobis
        doloremque suscipit aut.Cumque, corrupti nam? Repellat, quaerat illo
        nobis laudantium numquam, optio exercitationem aperiam nulla quo
        reprehenderit similique sequi officiis, omnis consectetur? Nihil
        explicabo accusantium soluta sed necessitatibus facere cupiditate
        doloremque veritatis!
      </p>
    </React.Fragment>
  );
};

export default BikePartsPage;
