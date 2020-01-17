import React from "react";
import preloader from "../assets/images/loading.svg";
import styles from "./common-in-1-ui-styles/Common.module.css"

const Preloader = () => {
    return <div className={styles.wrapper}>
        <img alt={'Preloader'} src={preloader}/>
    </div>
};

export default Preloader;
