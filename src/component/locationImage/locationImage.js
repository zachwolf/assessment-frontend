import Image from "../../ui/image";
import styles from "./locationImage.module.css";

// stylized Image
export default function LocationImage(props) {
    return <Image className={styles.locationImage} {...props} />;
}
