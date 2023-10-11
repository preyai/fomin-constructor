import { useAppDispatch, useAppSelector } from "../../store"
import Button from "../Button"
import styles from "./PaginationStyles.module.scss"
import arrow from "../../assets/arrow1.png"
import { setValue } from "../../redux/stepsSlice"
import { useMediaQuery } from "../../hooks/useMediaQuery"


function Pagination() {
    const step = useAppSelector(state => state.steps.value)
    const dispatch = useAppDispatch()
    const isPhone = useMediaQuery('(max-width: 768px)')

    const start = step > 1 ? step - 2 : step - 1
    const end = step > 1 ? step + 1 : step + 2

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
                {isPhone ?
                    <>
                        {steps.slice(start, end).map(s => (
                            <div
                                className={[styles.step, s === step && styles.active].join(" ")}
                                key={s}
                                onClick={() => dispatch(setValue(s))}
                            >
                                {s}
                            </div>
                        ))}
                    </> :
                    <>
                        {steps.map(s => (
                            <div
                                className={[styles.step, s === step && styles.active].join(" ")}
                                key={s}
                                onClick={() => dispatch(setValue(s))}
                            >
                                {s}
                            </div>
                        ))}
                    </>
                }
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