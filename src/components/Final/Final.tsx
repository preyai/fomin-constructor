import Container from "../Container";
import Header from "../Header";
import styles from "./FinalStyles.module.scss"
import ResultItem from "../ResultItem";
import { useAppSelector } from "../../store";
import Button from "../Button";


function Final() {
    const { result } = useAppSelector(state => state.steps)

    return (
        <Container>
            <Header variant="small" />
            <div className={styles.body}>
                <div className={styles.h1}>Ваши бонусы:</div>
                <div className={styles.h1}>Вы выбрали:</div>
                {result.map((result, index) => (
                    <ResultItem step={index} value={result} key={index} />
                ))}
                {/* <ResultItem step={1} value={result.city?.label || ""} />
                <ResultItem step={2} value={result.trimester?.label || ""} />
                <ResultItem step={3} value={result.doctor?.fio || ""} />
                <ResultItem step={4} value={result.visits?.label || ""} price={result.visits?.price} />
                <ResultItem step={6} value={result.consultations?.label || ""} price={result.consultations?.price} />
                <ResultItem step={7} value={result.analysis?.label || ""} price={result.analysis?.price} />
                <ResultItem step={8} value={result.nipt?.label || ""} price={result.nipt?.price} />
                <ResultItem step={9} value={result.psychologists?.label || ""} price={result.psychologists?.price} /> */}
            </div>
            <div className={styles.buttons}>
                <Button>Заказать программу</Button>
                <Button>Помогите выбрать</Button>
                <Button>Сохранить / распечатать</Button>
            </div>
        </Container>
    )
}

export default Final;