import { VariantType } from "../../types";
import SelectItem from "../SelectItem";
import styles from "./SelectBoxStyles.module.scss"

type SelectBoxProps = {
    variants: VariantType[],
    size?: number,
    fullSizeFirst?: boolean
}

function SelectBox({ variants, size, fullSizeFirst }: SelectBoxProps) {


    return (
        <ul className={[styles.container, styles[`size${size}`]].join(" ")} >
            {variants.map((item, index) => (
                <SelectItem variant={item} key={item.id} style={fullSizeFirst && index === 0 ? { gridColumnStart: 1, gridColumnEnd: (size || 3) + 1 } : undefined} />
            ))}
        </ul>
    )
}

export default SelectBox;