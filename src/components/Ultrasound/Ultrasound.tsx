import Button from "../Button";
import styles from "./UltrasoundStyles.module.scss"


function Ultrasound() {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}>
                            Базовый пакет <span>3 УЗИ</span>
                            <div className={styles.info}>?</div>
                        </div>
                        <div className={styles.col}>
                            Стандартный пакет <span>5 УЗИ</span>
                            <div className={styles.info}>?</div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>Специалист</div>
                    <div className={styles.col}>
                        <span>15 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                    <div className={styles.col}>
                        <span>25 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>Ведущий специалист</div>
                    <div className={styles.col}>
                        <span>20 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                    <div className={styles.col}>
                        <span>35 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>Эксперт</div>
                    <div className={styles.col}>
                        <span>30 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                    <div className={styles.col}>
                        <span>45 000 руб.</span>
                        <Button size="small">Выбрать</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Ultrasound;