import { useState } from "react";
import { RadioType } from "../../types";
import styles from "./NiptStyles.module.scss"
import RadioItem from "../RadioItem";

const variants: RadioType[] = [
    {
        id: '1',
        label: 'Без НИПТ',
        price: 0
    },
    {
        id: '2',
        label: 'Вариант НИПТ  4',
        price: 13000
    },
    {
        id: '3',
        label: 'Базовый НИПТ',
        price: 19000
    },
    {
        id: '4',
        label: 'Вариант НИПТ  5',
        price: 24000
    },
    {
        id: '5',
        label: 'Полный НИПТ',
        price: 54000
    },
    {
        id: '6',
        label: 'Вариант НИПТ  6',
        price: 68000
    },
]

function Nipt() {
    const [curent, setCurent] = useState<RadioType>()

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={curent?.id === v.id} handler={(() => setCurent(v))} variant="medium" />
            ))}
        </div>
    )
}

export default Nipt;