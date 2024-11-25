import styles from "./styles.module.css";

const ContainerHome = () => {
    return (
        <div className={styles["home"]}>
            <div className={styles["title"]}>
                生活就算累得像條狗<br />
                還是要快樂
            </div>
            <div className={styles["home-wrapper"]}>
                <div className={styles["image"]}></div>
                <div className={styles["content"]}>
                    I'm happy<br />
                    with you.
                </div>
            </div>
        </div>
    );
}

export default ContainerHome;