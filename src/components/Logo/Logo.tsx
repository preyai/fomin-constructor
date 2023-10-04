import styles from "./LogoStyles.module.scss"
import logo from "../../assets/logo.svg"

function Logo() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
        </div>
)
}

export default Logo;