import { useAppDispatch, useAppSelector } from "../../store"
import Button from "../Button"
import styles from "./PaginationStyles.module.scss"
import arrow from "../../assets/arrow1.png"
import {  setValue } from "../../redux/stepsSlice"


function Pagination() {
    const step = useAppSelector(state => state.steps.value)
    const dispatch = useAppDispatch()

    const steps: number[] = Array.from({ length: 9 }, (_, i) => i + 1)

    return (
        <div className={styles.container}>
            {step > 1 &&
                <Button
                    className={styles.btn}
                    type="gray"
                    onClick={() => dispatch(setValue(step - 1))}
                >
                    <img src={arrow} alt="" />
                    Назад
                </Button>
            }
            <div className={styles.steps}>
                {steps.map(s => (
                    <div
                        className={[styles.step, s === step && styles.active].join(" ")}
                        key={s}
                        onClick={() => dispatch(setValue(s))}
                    >
                        {s}
                    </div>
                ))}
            </div>
            {step < 9 &&
                <Button
                    className={styles.btn}
                    type="gray"
                    onClick={() => dispatch(setValue(step + 1))}
                >
                    Далее
                    <img src={arrow} alt="Далее" className={styles.arrow2} />
                </Button>
            }
        </div>
    )
}

export default Pagination;