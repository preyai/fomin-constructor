import { useState } from "react";
import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./ConsultationsStyles.module.scss"

const variants: RadioType[] = [
    {
        id: '1',
        label: 'Базовый   |   5 консультаций',
        description: '5 000 за 1 консультацию',
        price: 25000
    },
    {
        id: '2',
        label: 'Стандартный   |   8 консультаций',
        description: '4 500 за 1 консультацию',
        price: 36000
    },
    {
        id: '3',
        label: 'Расширенный   |   10 консультаций',
        description: '4 000 за 1 консультацию',
        price: 40000
    },
]

function Consultations() {
    const [curent, setCurent] = useState<RadioType>()

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={curent?.id === v.id} handler={(() => setCurent(v))} variant="large" />
            ))}
        </div>
    )
}

export default Consultations;