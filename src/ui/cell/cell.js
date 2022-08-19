import styles from "./cell.module.css";

export default function Cell({ children }) {
    return <div className={styles.cell}>{children}</div>;
}
