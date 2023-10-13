import { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./UltrasoundStyles.module.scss"
import { RadioType } from "../../types";
import { get } from "../../libs/api";
import { useAppDispatch, useAppSelector } from "../../store";
import { setResult } from "../../redux/stepsSlice";


interface Irow {
    [key: string]: string;
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

function Ultrasound() {
    const [variants, setVariants] = useState<RadioType[]>([])
    const [request, setRequest] = useState<any[]>([])
    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: RadioType) => {
        const _result = [...result]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('uzis')
            .then((r: any[]) => {
                setRequest(r)
                setVariants(r.reduce(reducer, []))
            })
    }, [])

    useEffect(() => console.log(variants), [variants])

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        {request.map(r => (
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
                            <Variant variant={v} key={v.id} active={v.id === result[step]?.id} handler={() => handler(v)} />
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}

function Variant({ variant, active, handler }: { variant: RadioType, active?: boolean, handler?: () => void }) {
    return (
        <div className={styles.col}>
            <span>{variant.price.toLocaleString()} руб.</span>
            <Button size="small" className={active ? styles.active : ""} onClick={handler}>{active ? "Выбран" : "Выбрать"}</Button>
        </div>
    )
}

export default Ultrasound;