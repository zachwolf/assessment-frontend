import styles from "./image.module.css";
import Cell from "../cell";

export default function Image(props) {
    console.log("props", props);
    const { src, alt, ...rest } = props;
    console.log("src", src);
    console.log("rest", rest);
    return (
        <Cell collapse className={styles.wrapper}>
            <span className={null}>
                <img className={styles.img} src={src} alt={alt} {...rest} />
            </span>
        </Cell>
    );
}
