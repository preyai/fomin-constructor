import { useState } from "react";
import Container from "../Container";
import Header from "../Header";
import styles from "./Step1Styles.module.scss"
import Pagination from "../Pagination";


const cities = [
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

function Step1() {
    const [current, setCurrent] = useState<string>('')


    return (
        <Container>
            <Header />
            <div className={styles.h1}>Выберите город:</div>
            <p className={styles.p}>Пояснялка, что тут нужно тыкать</p>
            <ul className={styles.cities}>
                {cities.map(city => (
                    <li
                        key={city}
                        onClick={() => setCurrent(city)}
                        className={current == city ? styles.active : ""}
                    >
                        {city}
                    </li>
                ))}
            </ul>
            <Pagination/>
        </Container>
    )
}

export default Step1;