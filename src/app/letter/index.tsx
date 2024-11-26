import { CONTENT } from "../constants/content";
import styles from "./styles.module.css";


const ContainerLetter = () => {
    return (
        <div className={styles["letter"]}>
            <div className={styles["paragraph-left"]}>
                <div className={styles["row"]}>{CONTENT["row-1"]}</div>
                <div className={styles["row"]}>{CONTENT["row-2"]}</div>
                <div className={styles["row"]}>{CONTENT["row-3"]}</div>
                <div className={styles["row"]}>{CONTENT["row-4"]}</div>
                <div className={styles["row"]}>{CONTENT["row-5"]}</div>
                <div className={styles["row"]}>{CONTENT["row-6"]}</div>
            </div>
            <div className={styles["paragraph-center"]}>
                <div className={styles["row"]}>{CONTENT["row-7"]}</div>
            </div>
            <div className={styles["paragraph-right"]}>
                <div className={styles["row"]}>{CONTENT["row-8"]}</div>
                <div className={styles["row"]}>{CONTENT["row-9"]}</div>
            </div>
            <div className={styles["paragraph-right"]}>
                <div className={styles["row"]}>{CONTENT["row-10"]}</div>
                <div className={styles["row"]}>{CONTENT["row-11"]}</div>
                <div className={styles["row"]}>{CONTENT["row-12"]}</div>
            </div>
            <div className={styles["paragraph-left"]}>
                <div className={styles["row"]}>{CONTENT["row-13"]}</div>
                <div className={styles["row"]}>{CONTENT["row-14"]}</div>
                <div className={styles["row"]}>{CONTENT["row-15"]}</div>
            </div>
            <div className={styles["paragraph-right"]}>
                <div className={styles["row"]}>{CONTENT["row-16"]}</div>
                <div className={styles["row"]}>{CONTENT["row-17"]}</div>
            </div>
            <div className={styles["paragraph-left"]}>
                <div className={styles["row"]}>{CONTENT["row-18"]}</div>
                <div className={styles["row"]}>{CONTENT["row-19"]}</div>
                <div className={styles["row"]}>{CONTENT["row-20"]}</div>
            </div>
            <div className={styles["paragraph-right"]}>
                    <div className={styles["row"]}>{CONTENT["row-21"]}</div>
                    <div className={styles["row"]}>{CONTENT["row-22"]}</div>
                    <div className={styles["row"]}>{CONTENT["row-23"]}</div>
                </div>
            <div className={styles["pic-3"]}></div>
            <div className={styles["pic-4"]}></div>
            <div className={styles["pic-5"]}></div>
        </div>
    );
}

export default ContainerLetter;