import Button from "../Button";
import Logo from "../Logo";
import styles from "./HeaderStyles.module.scss"


function Header() {
    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.info}>
                <a href="tel:84992901065" className={styles.phone}>8 (499) 290-10-65</a>
                <Button>Помогите выбрать</Button>
            </div>
        </div>
    )
}

export default Header;