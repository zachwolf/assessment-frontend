import styles from "./image.module.css";
import Cell from "../cell";

export default function Image(props) {
    const { alt, className, src, ...rest } = props;
    return (
        <Cell collapse className={`${styles.wrapper} ${className ? className : ""}`}>
            <span className={null}>
                <img className={styles.img} src={src} alt={alt} {...rest} />
            </span>
        </Cell>
    );
}
