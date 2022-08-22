import styles from "./cell.module.css";

export default function Cell(props) {
    const { children, collapse, className: passThroughClassname = null } = props;
    return (
        <div
            className={`${styles.cell} ${
                collapse ? styles["cell--isCollapsed"] : ""
            } ${passThroughClassname}`}
        >
            {children}
        </div>
    );
}
