import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./ConsultationsStyles.module.scss"
import { useAppDispatch, useAppSelector } from "../../store";
import { setResult } from "../../redux/stepsSlice";
import { useEffect, useState } from "react";
import { get } from "../../libs/api";


function Consultations() {
    const [variants, setVariants] = useState<RadioType[]>([])
    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: RadioType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('consultations')
            .then(r => setVariants(r.map((i: any) => ({ ...i, ...{ label: `${i.label} | ${i.count} консультаций`, description: `${i.price / i.count} за 1 консультацию` } }))))
    }, [])

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={result[step]?.id === v.id} handler={(() => handler(v))} variant="large" />
            ))}
        </div>
    )
}

export default Consultations;