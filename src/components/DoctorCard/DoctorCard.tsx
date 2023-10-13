import { DoctorType } from "../../types";
import Button from "../Button";
import styles from "./DoctorCardStyles.module.scss"

type DoctorCardProps = {
    doctor: DoctorType,
    handler?: () => void,
    active?: boolean
}

function DoctorCard({ doctor, handler, active }: DoctorCardProps) {
    return (
        <div className={styles.container}>
            <img src={doctor.photo} alt={doctor.fio} />
            <div className={styles.fio}>{doctor.fio}</div>
            <div className={styles.price}>
                <div>Наблюдение</div>
                от {doctor.price.toLocaleString()} руб.
            </div>
            <Button onClick={handler} size="small" className={[styles.btn, active && styles.active].join(" ")}>{active ? 'Выбран' : 'Выбрать'}</Button>
        </div>
    )
}

export default DoctorCard;