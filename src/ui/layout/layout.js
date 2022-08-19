import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.root}>
            <div className={styles.layout}>{children}</div>
        </div>
    );
}
