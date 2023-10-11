import { useState } from "react";
import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./PsychologistsStyles.module.scss"

const variants: RadioType[] = [
    {
        id: '1',
        label: 'Без сопровождения',
        price: 0
    },
    {
        id: '2',
        label: 'Стандартный пакет   |   5 консультаций',
        price: 36000
    },
    {
        id: '3',
        label: 'Расширенный пакет   |   11 консультаций',
        price: 55000
    },
]

function Psychologists() {
    const [curent, setCurent] = useState<RadioType>()

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={curent?.id === v.id} handler={(() => setCurent(v))} variant="medium" />
            ))}
        </div>
    )
}

export default Psychologists;