import Container from "../Container";
import Header from "../Header";
import styles from "./StepStyles.module.scss";
import Pagination from "../Pagination";
import { StepType } from "../../types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef, useState } from "react";
import { useAppSelector } from "../../store";


type StepProps = {
    step: StepType
}

function Step({ step }: StepProps) {
    const nodeRef = useRef(null);
    const [prevStep, setPrevStep] = useState(0)
    const stepIndex = useAppSelector(state => state.steps.value)
    const className = prevStep > stepIndex ? styles.revers : ""

    return (
        <Container>
            <Header />
            <div className={styles.h1}>{step.label}</div>
            <p className={styles.p}>{step.description}</p>
            <div>{prevStep}//{stepIndex} __ {className}</div>
            <SwitchTransition mode="out-in" >
                <CSSTransition
                    key={stepIndex}
                    nodeRef={nodeRef}
                    timeout={200}
                    onEnter={() => {
                        console.log(prevStep > stepIndex);

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
                        {step.Component}
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Pagination />
        </Container >
    )
}

export default Step;