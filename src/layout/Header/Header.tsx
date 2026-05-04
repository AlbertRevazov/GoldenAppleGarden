
import { Navigation } from "../../components/Navigation/Navigation"
import styles from './Header.module.scss'

export const Header = () => {
  return <header className={styles.header}><img src='image/logo.jpeg' height={73} width={73} loading="lazy" alt='logo'/><Navigation /></header>
}

