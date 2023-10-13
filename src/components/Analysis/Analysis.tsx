import { useEffect, useState } from "react";
import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./AnalysisStyles.module.scss"
import { useAppDispatch, useAppSelector } from "../../store";
import { get } from "../../libs/api";
import { setResult } from "../../redux/stepsSlice";



function Analysis() {
    const [variants, setVariants] = useState<RadioType[]>([])
    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: RadioType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('analysises')
            .then(r => setVariants(r))
    }, [])

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={result[step]?.id === v.id} handler={(() => handler(v))} variant="small" />
            ))}
        </div>
    )
}

export default Analysis;