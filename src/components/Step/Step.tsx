import Container from "../Container";
import Header from "../Header";
import styles from "./StepStyles.module.scss";
import Pagination from "../Pagination";
import { DoctorType, InputType, StepType } from "../../types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store";
import SelectBox from "../SelectBox";
import { get } from "../../libs/api";
import DoctorBox from "../DoctorBox";
import RadioBox from "../RadioBox";
import DoctorCard from "../DoctorCard";
import TableBox from "../TableBox";


type StepProps = {
    // step: StepType
}



function Step({ }: StepProps) {
    const nodeRef = useRef(null);
    const [prevStep, setPrevStep] = useState(0)
    const { step: stepIndex, steps, result } = useAppSelector(state => state.steps)
    const [variants, setVariants] = useState([])
    useEffect(() => {
        if (stepIndex !== steps.length)
            getData()
    }, [stepIndex])

    if (stepIndex === undefined || stepIndex === steps.length)
        return <></>

    const className = prevStep > stepIndex ? styles.revers : ""
    const step = steps[stepIndex]
    const Component = getComponent()

    function getComponent() {
        let props: any = { variants }
        switch (step.type) {
            case 'SELECT':
                switch (step.data) {
                    case 'cityes':
                        props.size = 4
                        break;
                    case 'trimesters':
                        props.size = 3
                        props.fullSizeFirst = true
                        break
                    default:
                        break;
                }
                return <SelectBox {...props} />
            case 'RADIO':
                switch (step.data) {
                    case 'visits':
                        const _index = steps.findIndex(s => s.data === 'doctors')
                        if (_index !== -1 && result[_index])
                            props.children = <DoctorCard doctor={result[_index] as DoctorType} small />
                        break;

                    case 'consultations':
                        props.variants = props.variants.map((i: any) => ({ ...i, ...{ label: `${i.label} | ${i.count} консультаций`, description: `${i.price / i.count} за 1 консультацию` } }))
                        props.size = 'large'
                        break;
                    case 'analysises':
                        props.size = 'small'
                        props.columns = 3
                        break;
                    case 'nipts':
                        props.size = 'medium'
                        props.columns = 2
                        break;
                    case 'psychologists':
                        props.size = 'medium'
                        break;
                    default:
                        break;
                }
                return <RadioBox {...props} />
            case 'CARD':
                return <DoctorBox {...props} />
            case 'TABLE':
                return <TableBox {...props} />
            default:
                return <></>
        }
    }

    function getData() {
        get(step.data)
            .then(r => setVariants(r))
    }

    

    return (
        <Container>
            <Header />
            <div className={styles.h1}>{step.label}:</div>
            <p className={styles.p}>{step.description}</p>
            <SwitchTransition mode="out-in" >
                <CSSTransition
                    key={stepIndex}
                    nodeRef={nodeRef}
                    timeout={200}
                    onEnter={() => {

                        setPrevStep(stepIndex)
                    }}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        appear: styles.appear,
                        appearActive: styles.appearActive,
                        appearDone: styles.appearDone,
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        enterDone: styles.enterDone,
                        exit: styles.exit,
                        exitActive: styles.exitActive,
                        exitDone: styles.exitDone,
                    }}
                >
                    <div ref={nodeRef} className={className} >
                        {Component}
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Pagination />
        </Container >
    )
}

export default Step;