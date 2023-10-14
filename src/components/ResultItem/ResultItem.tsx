import styles from "./ResultItemStyles.module.scss"
import editIcon from "../../assets/edit.png"
import { useAppDispatch } from "../../store"
import { setStep } from "../../redux/stepsSlice"
import { ResultType } from "../../types"

export type ResultItemProps = {
    step: number,
    value: ResultType,
}

const labels = [
    '',
    'Город',
    'Триместр',
    'Акушер-гинеколог',
    'Частота посещения',
    'Пакета УЗИ',
    'Пакет консультаций других специалистов',
    'Пакета анализов',
    'НИПТ',
    'Сопровождения перинатального психолога'
]

function ResultItem({ step, value }: ResultItemProps) {
    if (!value)
        return

    const dispatch = useAppDispatch()

    const handlerEdit = () => {
        dispatch(setStep(step))
    }

    let label: string = ""
    let description: string = ""
    let price: number | undefined

    if ("fio" in value) {
        label = value.fio
    } else {
        label = value.label || ""
        if ("price" in value && value.price)
            price = value.price
        if ("description" in value && value.description)
            description = value.description
    }


    return (
        <div className={styles.container}>
            <div className={styles.number}>{step + 1}</div>
            <div className={styles.info}>
                <div className={styles.label}>{labels[step]}</div>
                <div className={styles.value}>{label}</div>
            </div>
            {price &&
                <div className={styles.box}>
                    {description &&
                        <div className={styles.description}>{description}</div>}
                    <div className={styles.price}>{price.toLocaleString()} руб</div>
                </div>
            }
            <div className={styles.edit} onClick={handlerEdit}>
                <img src={editIcon} alt="edit" />
            </div>
        </div>
    )
}

export default ResultItem;