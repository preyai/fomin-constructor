import styles from "./RadioBoxStyles.module.scss"
import RadioItem from "../RadioItem";
import { RadioType } from "../../types";
import { PropsWithChildren } from "react";

interface RadioBoxProps extends PropsWithChildren {
    variants: RadioType[],
    size?: 'large' | 'medium' | 'small',
    columns?: number
}

function RadioBox({ variants, children, size,columns }: RadioBoxProps) {

    return (
        <div className={styles.container}>
            {children}
            <div className={[styles.radioList, columns && styles[`col${columns}`]].join(" ")}>
                {variants.map(item => (
                    <RadioItem variant={item} size={size} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default RadioBox;