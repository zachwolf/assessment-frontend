import styles from "./icon.module.css";
import { ReactComponent as IconAdd } from "./icons/add-box.svg";
import { ReactComponent as IconArrow } from "./icons/arrow-up.svg";
import { ReactComponent as IconClear } from "./icons/clear-day.svg";
import { ReactComponent as IconClock } from "./icons/clock.svg";
import { ReactComponent as IconCloud } from "./icons/cloudy.svg";
import { ReactComponent as IconRain } from "./icons/rain.svg";

export default function Icon(props) {
    const { role = "img", scale, type = null } = props;
    const iconMap = {
        add: IconAdd,
        arrow: IconArrow,
        clear: IconClear,
        clock: IconClock,
        cloud: IconCloud,
        rain: IconRain,
        [null]: () => {},
    };
    const Icon = iconMap[type];
    const iconClassNameList = [styles.icon];

    if (scale) {
        iconClassNameList.push(styles[`icon--x${scale}`]);
    }

    return (
        <div className={iconClassNameList.join(" ")}>
            <Icon className={styles.icon__img} role={role} />
        </div>
    );
}
