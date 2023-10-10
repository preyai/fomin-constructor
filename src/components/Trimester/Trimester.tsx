import { useState } from "react";
import { VariantType } from "../../types";
import styles from "./TrimesterStyles.module.scss"
import SelectItem from "../SelectItem";

const _trim = [
    "Вся беременность",
    "1 триместр",
    "2 триместр",
    "3 триместр",
]

function Trimester() {
    const variants: VariantType[] = _trim.map((item, index) => ({ label: item, value: index.toString() }))
    const [current, setCurrent] = useState<VariantType>()

    return (
        <ul className={styles.container}>
            {variants.map(item => (
                <SelectItem variant={item} current={item.value === current?.value} handler={() => setCurrent(item)} key={item.value} />
            ))}
        </ul>
    )
}

export default Trimester;