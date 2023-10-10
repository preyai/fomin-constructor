import { MouseEventHandler, PropsWithChildren } from "react";
import styles from "./ButtonStyles.module.scss"

interface ButtonProps extends PropsWithChildren {
    className?: string
    type?: string | undefined
    size?: "small" | "medium"
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({ children, type, size = "medium", className, onClick }: ButtonProps) {

    const classNames = [
        styles.container,
        styles[size] || "",
        type === 'gray' && styles.gray,
        className && className
    ]
    return (
        <button onClick={onClick} className={classNames.join(" ")}>
            {children}
        </button>
    )
}

export default Button;