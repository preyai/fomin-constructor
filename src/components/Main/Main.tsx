import { useEffect, useState } from "react";
import { setValue } from "../../redux/stepsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { StepType } from "../../types";
import Button from "../Button";
import Container from "../Container";
import Header from "../Header";
import Step1 from "../Step1";
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

function stepFabric(label: string, component?: JSX.Element): StepType {
    return {
        label,
        type: 'SELECT',
        variants: [],
        description: 'Пояснялка, что тут нужно тыкать',
        Component: component || <Step1 />
    }
}

function Main() {
    const [steps, setSteps] = useState<StepType[]>([])
    const step = useAppSelector(state => state.steps.value)
    const dispatch = useAppDispatch()
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

    if (step === 0) {
        return (
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
        )
    }
    else {
        return <Step step={steps[step]} />
    }
}

export default Main;