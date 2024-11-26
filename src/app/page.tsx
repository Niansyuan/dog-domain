import ContainerHome from "./home";
import ContainerLetter from "./letter";
import styles from "./styles.module.css";

const Page = () => {
    return (
        <div className={styles["page"]}>
            <ContainerHome />
            <ContainerLetter />
        </div>
    );
};

export default Page;
