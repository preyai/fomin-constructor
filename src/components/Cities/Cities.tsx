import { useState } from "react";
import styles from "./CitiesStyles.module.scss"
import { VariantType } from "../../types";
import SelectItem from "../SelectItem";

const _cities = [
    'Москва',
    'Санкт-Петербург',
    'Калуга',
    'Тверь',
    'Пенза',
    'Краснодар',
    'Уфа',
    'Пермь',
    'Воронеж',
    'Сочи',
    'Тула',
]

function Cities() {
    const cities: VariantType[] = _cities.map((item, index) => ({ label: item, value: index.toString() }))
    const [current, setCurrent] = useState<VariantType>()

    return (
        <div className={styles.container}>
            <ul className={styles.cities}>
                {cities.map(city => (
                    <SelectItem variant={city} current={city.value === current?.value} handler={() => setCurrent(city)} key={city.value} />
                ))}
            </ul>
        </div>
    )
}

export default Cities;