import { useEffect, useState } from "react";
import styles from "./TableBoxStyles.module.scss"
import { RadioType } from "../../types";
import useStep from "../../hooks/useStep";
import Button from "../Button";


interface Irow {
    [key: string]: string;
}

interface TableBoxProps {
    variants: Irow[]
}

const rows: Irow = {
    "specialist": "Специалист",
    "leading_specialist": "Ведущий специалист",
    "expert": "Эксперт",
}

const reducer = (a: RadioType[], b: any) => {

    const _arr: RadioType[] = []

    for (const key of Object.keys(rows)) {
        _arr.push(
            {
                id: `${b.id}_${key}`,
                label: `${b.label} ${b.count} УЗИ`,
                price: b[key],
                description: rows[key]
            }
        )
    }
    return [...a, ..._arr]
}

function TableBox({ variants: _variants }: TableBoxProps) {
    const [variants, setVariants] = useState<RadioType[]>([])

    useEffect(() => {
        setVariants(_variants.reduce(reducer, []))
    }, [_variants])


    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        {_variants.map(r => (
                            <div className={styles.col} key={r.id}>
                                {r.label} <span>{r.count} УЗИ</span>
                                <div className={styles.info}>?</div>
                            </div>
                        ))}
                    </div>
                </div>
                {Object.keys(rows).map(row => (
                    <div className={styles.row} key={row}>
                        <div className={styles.col}>Специалист</div>
                        {variants.filter(v => v.description === rows[row]).map(v => (
                            <Variant variant={v} key={v.id} />
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}

function Variant({ variant }: { variant: RadioType, active?: boolean, handler?: () => void }) {
    const { active, handler } = useStep(variant)

    return (
        <div className={styles.col}>
            <span>{variant.price.toLocaleString()} руб.</span>
            <Button size="small" className={active ? styles.active : ""} onClick={handler}>{active ? "Выбран" : "Выбрать"}</Button>
        </div>
    )
}

export default TableBox;