import { DoctorType } from "../../types";
import Button from "../Button";
import styles from "./DoctorCardStyles.module.scss"

type DoctorCardProps = {
    doctor: DoctorType
}

function DoctorCard({ doctor }: DoctorCardProps) {
    return (
        <div className={styles.container}>
            <img src={doctor.photo} alt={doctor.fio} />
            <div className={styles.fio}>{doctor.fio}</div>
            <div className={styles.price}>
                <div>Наблюдение</div>
                от {doctor.price} руб.
            </div>
            <Button size="small" className={styles.btn}>Выбрать</Button>
        </div>
    )
}

export default DoctorCard;