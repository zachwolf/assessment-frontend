import Cell from "../../ui/cell";
import Icon from "../../ui/icon";
import styles from "./location.module.css";

export default function Location({ latitude, longitude }) {
    return (
        <Cell>
            <div className={styles.location}>
                <div className={styles.location__overview}>
                    <div className={styles.todo}>
                        <Icon type="cloud" scale={2} />
                    </div>
                    <div className={styles.todo}>
                        <div className={styles.location__temperature}>
                            78<abbr title="Fahrenheit">°F</abbr>
                        </div>
                        Cloudy
                    </div>
                </div>
                <div className={styles.location__details}>
                    <div className={styles.location__uhhhhLocation}>New York, NY</div>
                    <div className={styles.location__upcoming}>
                        <div className={styles.location__day}>
                            <Icon type="cloud" />
                            <abbr title="Friday">Fri</abbr>
                        </div>
                        <div className={styles.location__day}>
                            <Icon type="cloud" />
                            <abbr title="Saturday">Sat</abbr>
                        </div>
                        <div className={styles.location__day}>
                            <Icon type="rain" />
                            <abbr title="Sunday">Sun</abbr>
                        </div>
                    </div>
                </div>
            </div>
        </Cell>
    );
}
