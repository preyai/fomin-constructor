import { useEffect, useRef, useState } from "react";
import { setValue } from "../../redux/stepsSlice";
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

function stepFabric(label: string, component: JSX.Element): StepType {
    return {
        label,
        type: 'SELECT',
        variants: [],
        description: 'Пояснялка, что тут нужно тыкать',
        Component: component
    }
}

function Main() {
    const [steps, setSteps] = useState<StepType[]>([])
    const step = useAppSelector(state => state.steps.value)
    const dispatch = useAppDispatch()
    const nodeRef = useRef(null);

    const start = () => {
        dispatch(setValue(1))
    }

    useEffect(() => {
        const _steps: StepType[] = [{} as StepType]
        _steps.push(stepFabric('Выберите город:', <Cities />))
        _steps.push(stepFabric('Выберите триместр:', <Trimester />))
        _steps.push(stepFabric('Выбор акушера-гинеколога:', <Doctors />))
        _steps.push(stepFabric('Выбор частоты посещения:', <Visits />))
        _steps.push(stepFabric('Выбор пакета УЗИ:', <Ultrasound />))
        _steps.push(stepFabric('Выбор пакета консультаций врачей-специалистов:', <Consultations />))
        _steps.push(stepFabric('Выбор пакета анализов:', <Analysis />))
        _steps.push(stepFabric('Выбор НИПТ:', <Nipt />))
        _steps.push(stepFabric('Выбор сопровождения перинатального психолога:', <Psychologists />))
        setSteps(_steps)
    }, [])


    return (
        <SwitchTransition>
            <CSSTransition
                key={(step === 0).toString()}
                timeout={300}
                nodeRef={nodeRef}
                classNames="alert"
                unmountOnExit
            >
                <div ref={nodeRef}>
                    {step === 0 ?
                        <div className={styles.container}>
                            <Container>
                                <Header />
                                <div className={styles.body}>
                                    <h1>Конструктор
                                        программ ведения
                                        беременности</h1>
                                    <Button onClick={start}>Запустить</Button>
                                </div>
                            </Container>
                        </div>
                        :
                        <Step step={steps[step]} />
                    }
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}


export default Main;