import { createPortal } from "react-dom";
import { RadioType } from "../../types";
import styles from "./RadioItemStyles.module.scss"
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

type RadioItemProps = {
    value: RadioType
    handler: () => void
    active?: boolean
    variant?: 'large' | 'medium' | 'small'
}

function RadioItem({ value, handler, active, variant }: RadioItemProps) {
    const [show, setShow] = useState(false)
    const nodeRef = useRef(null);
    const classNames = `${styles.container} ${active ? styles.active : ""}`
    const classBox = [styles.box, variant === 'large' && styles.boxLarge, variant === 'medium' && styles.boxMedium].join(" ")

    return (
        <>
            <div className={classNames} onClick={handler}>
                <div className={styles.marker}></div>
                {variant === 'small' ?
                    <div className={styles.smallBox}>
                        <div>
                            <div className={styles.label}>{value.label}</div>
                            <div className={styles.info}>?</div>
                        </div>
                        <div className={styles.price}>{value.price} руб</div>
                    </div> :
                    <>
                        <div className={styles.label}>{value.label}</div>
                        <div className={styles.info} onClick={() => setShow(true)}>?</div>
                    </>
                }

                {
                    variant !== 'small' &&
                    <div className={classBox}>
                        <div className={styles.description}>{value.description}</div>
                        <div className={styles.price}>{value.price} руб</div>
                    </div>
                }
            </div >
            {createPortal(
                <CSSTransition
                    in={show}
                    nodeRef={nodeRef}
                    timeout={200}
                    classNames={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        enterDone: styles.enterDone,
                        exit: styles.exit,
                        exitActive: styles.exitActive,
                        exitDone: styles.exitDone,
                    }}
                >

                    <div ref={nodeRef} className={styles.modal} onClick={() => setShow(false)}>
                        <div className={styles.body}>
                            <div className={styles.title}>Базовый пакет анализов:</div>
                            <h3>Гинекологические анализы:</h3>
                            <p>2 микроскопии мазка, 1 жидкостная цитология, стрептококк группы B, 1 выявление возбудителей ИППП</p>
                            <h3>Анализы крови:</h3>
                            <p>1 биохимический скрининг I триместра, 3 клинических анализа крови, 3 ферритина, 2 стандартных биохимических анализа крови, 2 госпитальных комплекса, 2 коагулограммы, антитела к краснухе, группа крови, резус-фактор, ТТГ, глюкозотолерантный тест</p>
                            <h3>Анализы мочи:</h3>
                            <p>3 общих анализ мочи, 1 посев мочи на флору, экспресс-тесты на наличие белка в моче по мере необходимости</p>
                    </div>
                </div>
                </CSSTransition >
                , document.body)
}
        </>
    )
}

export default RadioItem;