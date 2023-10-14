import { useEffect, useRef, useState } from "react";
import { setStep, setSteps } from "../../redux/stepsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { StepType } from "../../types";
import Button from "../Button";
import Container from "../Container";
import Header from "../Header";
import Step from "../Step";
import styles from "./MainStyles.module.scss"
import Cities from "../Cities";
import Trimester from "../Trimester";
import Doctors from "../Doctors";
import Visits from "../Visits";
import Ultrasound from "../Ultrasound";
import Consultations from "../Consultations";
import Analysis from "../Analysis";
import Nipt from "../Nipt";
import Psychologists from "../Psychologists";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Final from "../Final";
import { get } from "../../libs/api";



function Main() {
    const { step, steps } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()
    const nodeRef = useRef(null);

    const start = () => {
        dispatch(setStep(0))
    }

    useEffect(() => {
        get('steps')
            .then(r => dispatch(setSteps(r as StepType[])))
    }, [])

    useEffect(() => {
        console.log(steps);
    }, [steps])


    return (
        <SwitchTransition>
            <CSSTransition
                key={(step === undefined || step === steps.length).toString()}
                timeout={300}
                nodeRef={nodeRef}
                classNames="alert"
                unmountOnExit
            >
                <div ref={nodeRef}>
                    {step === undefined ?
                        <div className={styles.container}>
                            <Container>
                                <Header />
                                <div className={styles.body}>
                                    <h1>Конструктор
                                        программ ведения
                                        беременности</h1>
                                    {steps.length > 0 &&
                                        <Button onClick={start}>Запустить</Button>
                                    }
                                </div>
                            </Container>
                        </div>
                        :
                        step < steps.length ?
                            <Step />
                            :
                            <Final />
                    }
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}


export default Main;