import Container from "../Container";
import Header from "../Header";
import styles from "./StepStyles.module.scss"
import Pagination from "../Pagination";
import { StepType } from "../../types";


type StepProps = {
    step: StepType
}

function Step({ step }: StepProps) {

    return (
        <Container>
            <Header />
            <div className={styles.h1}>{step.label}</div>
            <p className={styles.p}>{step.description}</p>
            {step.Component}
            <Pagination />
        </Container>
    )
}

export default Step;