import { useState } from "react";
import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./AnalysisStyles.module.scss"

const variants: RadioType[] = [
    {
        id: '1',
        label: 'Базовый',
        price: 26000
    },
    {
        id: '2',
        label: 'Стандартный',
        price: 46000
    },
    {
        id: '3',
        label: 'Расширенный',
        price: 56000
    },
]

function Analysis() {
    const [curent, setCurent] = useState<RadioType>()

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={curent?.id === v.id} handler={(() => setCurent(v))} variant="small" />
            ))}
        </div>
    )
}

export default Analysis;