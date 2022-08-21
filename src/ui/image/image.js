import styles from "./image.module.css";
import Cell from "../cell";

export default function Image(props) {
    const { src, alt, ...rest } = props;
    return (
        <Cell collapse className={styles.wrapper}>
            <span className={null}>
                <img className={styles.img} src={src} alt={alt} {...rest} />
            </span>
        </Cell>
    );
}
