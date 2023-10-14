import { useAppDispatch, useAppSelector } from "../../store"
import Button from "../Button"
import styles from "./PaginationStyles.module.scss"
import arrow from "../../assets/arrow1.png"
import { setStep } from "../../redux/stepsSlice"
import { useMediaQuery } from "../../hooks/useMediaQuery"


function Pagination() {
    const { step, steps: _steps, result } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()
    const isPhone = useMediaQuery('(max-width: 768px)')
    const steps = _steps.map((_v, i) => i)

    if (step === undefined)
        return

    const start = step > 1 ? step - 2 : step - 1
    const end = step > 1 ? step + 1 : step + 2



    return (
        <div className={styles.container}>
            {step > 0 &&
                <Button
                    className={styles.btn}
                    type="gray"
                    onClick={() => dispatch(setStep(step - 1))}
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
                                className={[styles.step, s === step && styles.active, result[s] !== undefined && styles.fill].join(" ")}
                                key={s}
                                onClick={() => dispatch(setStep(s))}
                            >
                                {s + 1}
                            </div>
                        ))}
                    </> :
                    <>
                        {steps.map(s => (
                            <div
                                className={[styles.step, s === step && styles.active, result[s] !== undefined && styles.fill].join(" ")}
                                key={s}
                                onClick={() => dispatch(setStep(s))}
                            >
                                {s + 1}
                            </div>
                        ))}
                    </>
                }
            </div>
            {step < steps.length - 1 &&
                <Button
                    className={[styles.btn, !result[step] && styles.invisible].join(" ")}
                    type="gray"
                    onClick={() => dispatch(setStep(step + 1))}
                >
                    Далее
                    <img src={arrow} alt="Далее" className={styles.arrow2} />
                </Button>
            }
            {step === steps.length - 1 &&
                <Button
                    className={[styles.btn, !result[step] && styles.invisible].join(" ")}
                    type="gray"
                    onClick={() => dispatch(setStep(step + 1))}
                >
                    Завершить
                </Button>
            }

        </div>
    )
}

export default Pagination;