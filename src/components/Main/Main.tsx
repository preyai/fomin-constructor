import Button from "../Button";
import Header from "../Header";
import Logo from "../Logo";
import styles from "./MainStyles.module.scss"


function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <Header />
                <div className={styles.body}>
                    <h1>Конструктор
                        программ ведения
                        беременности</h1>
                    <Button>Запустить</Button>
                </div>
            </div>
        </div>
    )
}

export default Main;