import Cell from "../../ui/cell";
import Icon from "../../ui/icon";
import styles from "./location.module.css";
import useGetWeather from "../../data/getWeather";

export default function Location({ latitude, longitude }) {
    const { isLoading, weatherData: data } = useGetWeather(longitude, latitude);

    if (isLoading || !data) {
        // todo: loading state
        return <Cell />;
    }

    const iconConditionMap = {
        cloudy: "cloud",
        rain: "rain",
        "clear-day": "clear",
    };

    const unitMap = {
        f: "Fahrenheit",
        c: "Celsius",
    };

    const dayMap = {
        Sun: "Sunday",
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
    };

    const { condition, conditionName, temperature, unit, location, upcomming: upcoming } = data;

    return (
        <Cell>
            <div className={styles.location}>
                <div className={styles.location__overview}>
                    <div className={styles.todo}>
                        <Icon type={iconConditionMap[condition]} scale={2} />
                    </div>
                    <div className={styles.todo}>
                        <div className={styles.location__temperature}>
                            {temperature}
                            <abbr className={styles.location__unit} title={unitMap[unit]}>
                                °{unit}
                            </abbr>
                        </div>
                        {conditionName}
                    </div>
                </div>
                <div className={styles.location__details}>
                    <div className={styles.location__uhhhhLocation}>{location}</div>
                    <div className={styles.location__upcoming}>
                        {upcoming.map((entry) => {
                            return (
                                <div className={styles.location__day}>
                                    <Icon type={iconConditionMap[entry.condition]} />
                                    <abbr title={dayMap[entry.day]}>{entry.day}</abbr>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Cell>
    );
}
