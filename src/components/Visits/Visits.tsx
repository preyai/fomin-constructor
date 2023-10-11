import styles from "./VisitsStyles.module.scss"
import photo from "../../assets/doctor.png";
import RadioItem from "../RadioItem";
import { RadioType } from "../../types";
import { useState } from "react";

const variants: RadioType[] = [
    {
        id: '1',
        label: 'Стандартная программа',
        description: '10 консультаций',
        price: 35500
    },
    {
        id: '2',
        label: 'Неограниченное посещение',
        description: 'Любое количество консультаций',
        price: 75000
    }
]

function Visits() {
    const [curent, setCurent] = useState<RadioType>()

    return (
        <div className={styles.container}>
            <div className={styles.doctor}>
                <img src={photo} alt="doctor" />
                <div className={styles.fio}>Иванов Иван Иванович</div>
            </div>
            <div className={styles.radioList}>
                {variants.map(item => (
                    <RadioItem value={item} handler={() => { setCurent(item) }} active={curent?.id === item.id} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Visits;