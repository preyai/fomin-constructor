import Container from "../Container";
import Header from "../Header";
import styles from "./StepStyles.module.scss";
import Pagination from "../Pagination";
import { StepType } from "../../types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";
import { useAppSelector } from "../../store";


type StepProps = {
    step: StepType
}

function Step({ step }: StepProps) {
    const nodeRef = useRef(null);
    const stepIndex = useAppSelector(state => state.steps.value)


    return (
        <Container>
            <Header />
            <div className={styles.h1}>{step.label}</div>
            <p className={styles.p}>{step.description}</p>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={stepIndex}
                    nodeRef={nodeRef}
                    timeout={200}
                    classNames={{
                        appear: styles.appear,
                        appearActive: styles.appearActive,
                        appearDone: styles.appearDone,
                        enter: [styles.enter].join(" "),
                        enterActive: [styles.enterActive].join(" "),
                        enterDone: styles.enterDone,
                        exit: [styles.exit].join(" "),
                        exitActive: [styles.exitActive].join(" "),
                        exitDone: styles.exitDone,
                    }}
                >
                    <div ref={nodeRef} >
                        {step.Component}
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Pagination />
        </Container >
    )
}

export default Step;