import { PropsWithChildren } from "react";
import styles from "./ButtonStyles.module.scss"


function Button({ children }: PropsWithChildren) {
    return (
        <button className={styles.container}>
            {children}
        </button>
    )
}

export default Button;