import { useEffect, useState } from "react";
import { VariantType } from "../../types";
import styles from "./TrimesterStyles.module.scss"
import SelectItem from "../SelectItem";
import { setResult } from "../../redux/stepsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { get } from "../../libs/api";


function Trimester() {
    // const variants: VariantType[] = _trim.map((item, index) => ({ label: item, id: index.toString() }))
    const [variants, setVariants] = useState<VariantType[]>([])

    const {result, step} = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: VariantType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('trimesters')
            .then(r => setVariants(r))
    }, [])

    return (
        <ul className={styles.container}>
            {variants.map(item => (
                <SelectItem variant={item} current={item.id === result[step]?.id} handler={() => handler(item)} key={item.id} />
            ))}
        </ul>
    )
}

export default Trimester;