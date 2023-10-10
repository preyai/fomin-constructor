import { PropsWithChildren } from "react";
import styles from "./ContainerStyles.module.scss"


function Container({ children }: PropsWithChildren) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                {children}
            </div>
        </div>
    )
}

export default Container;