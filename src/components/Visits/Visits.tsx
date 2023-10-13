import styles from "./VisitsStyles.module.scss"
import RadioItem from "../RadioItem";
import { DoctorType, RadioType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store";
import { setResult } from "../../redux/stepsSlice";
import { useEffect, useState } from "react";
import { get } from "../../libs/api";



function Visits() {
    const [variants, setVariants] = useState<RadioType[]>([])

    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: RadioType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('visits')
            .then(r => setVariants(r))
    }, [])

    return (
        <div className={styles.container}>
            {result[3] &&
                <div className={styles.doctor}>
                    <img src={(result[3] as DoctorType).photo || ""} alt="doctor" />
                    <div className={styles.fio}>{(result[3] as DoctorType).fio}</div>
                </div>
            }
            <div className={styles.radioList}>
                {variants.map(item => (
                    <RadioItem value={item} handler={() => handler(item)} active={result[step]?.id === item.id} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Visits;