import useStep from "../../hooks/useStep";
import { DoctorType } from "../../types";
import Button from "../Button";
import styles from "./DoctorCardStyles.module.scss"

type DoctorCardProps = {
    doctor: DoctorType,
    small?: boolean
}

function DoctorCard({ doctor, small }: DoctorCardProps) {
    const { active, handler } = useStep(doctor)

    return (
        <div className={styles.container}>
            <img src={doctor.photo} alt={doctor.fio} />
            <div className={styles.fio}>{doctor.fio}</div>
            {!small &&
                <>
                    <div className={styles.price}>
                        <div>Наблюдение</div>
                        от {doctor.price.toLocaleString()} руб.
                    </div>
                    <Button onClick={handler} size="small" className={[styles.btn, active && styles.active].join(" ")}>{active ? 'Выбран' : 'Выбрать'}</Button>
                </>
            }
        </div>
    )
}

export default DoctorCard;