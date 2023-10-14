import { CSSProperties } from "react";
import { VariantType } from "../../types";
import styles from "./SelectItemStyles.module.scss"
import useStep from "../../hooks/useStep";

export type SelectItemProps = {
    variant: VariantType,
    style?: CSSProperties
}

function SelectItem({ variant, style }: SelectItemProps) {
    const { active, handler } = useStep(variant)
    const classNames = [styles.li, active ? styles.active : ""].join(" ")

    return (
        <li
            onClick={handler}
            className={classNames}
            style={style}
        >
            {variant.label || variant.id}
        </li>
    )
}

export default SelectItem;