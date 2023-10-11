import { VariantType } from "../../types";
import styles from "./SelectItemStyles.module.scss"

export type SelectItemProps = {
    variant: VariantType,
    current: boolean,
    handler: () => void
}

function SelectItem({ variant, current, handler }: SelectItemProps) {

    const classNames = [styles.li, current ? styles.active : ""].join(" ")

    return (
        <li
            onClick={handler}
            className={classNames}
        >
            {variant.label || variant.value}
        </li>
    )
}

export default SelectItem;