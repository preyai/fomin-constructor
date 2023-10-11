import { RadioType } from "../../types";
import styles from "./RadioItemStyles.module.scss"

type RadioItemProps = {
    value: RadioType
    handler: () => void
    active?: boolean
    variant?: 'large' | 'medium' | 'small'
}

function RadioItem({ value, handler, active, variant }: RadioItemProps) {
    const classNames = `${styles.container} ${active ? styles.active : ""}`
    const classBox = [styles.box, variant === 'large' && styles.boxLarge, variant === 'medium' && styles.boxMedium].join(" ")

    return (
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
                    <div className={styles.info}>?</div>
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
    )
}

export default RadioItem;