import { useEffect, useState } from "react";
import styles from "./CitiesStyles.module.scss"
import { VariantType } from "../../types";
import SelectItem from "../SelectItem";
import { useAppDispatch, useAppSelector } from "../../store";
import { setResult } from "../../redux/stepsSlice";
import { get } from "../../libs/api";

// const _cities = [
//     'Москва',
//     'Санкт-Петербург',
//     'Калуга',
//     'Тверь',
//     'Пенза',
//     'Краснодар',
//     'Уфа',
//     'Пермь',
//     'Воронеж',
//     'Сочи',
//     'Тула',
// ]

function Cities() {
    // const cities: VariantType[] = _cities.map((item, index) => ({ label: item, value: index.toString() }))
    const [cities, setCities] = useState<VariantType[]>([])

    const {result, step} = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (city: VariantType) => {
        const _result = [ ...result ]
        _result[step] = city
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('cityes')
            .then(r => setCities(r))
    }, [])

    return (
        <div className={styles.container}>
            <ul className={styles.cities}>
                {cities.map(city => (
                    <SelectItem variant={city} current={city.id === result[step]?.id} handler={() => handler(city)} key={city.id} />
                ))}
            </ul>
        </div>
    )
}

export default Cities;