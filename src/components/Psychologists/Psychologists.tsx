import { RadioType } from "../../types";
import RadioItem from "../RadioItem";
import styles from "./PsychologistsStyles.module.scss"
import { setResult } from "../../redux/stepsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { get } from "../../libs/api";


function Psychologists() {
    const [variants, setVariants] = useState<RadioType[]>([])


    const {result, step} = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: RadioType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('psychologists')
            .then(r => setVariants(r))
    }, [])

    return (
        <div className={styles.container}>
            {variants.map(v => (
                <RadioItem value={v} active={result[step]?.id === v.id} handler={(() => handler(v))} variant="medium" />
            ))}
        </div>
    )
}

export default Psychologists;