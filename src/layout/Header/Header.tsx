
import { Navigation } from "../../components/Navigation/Navigation"
import styles from './Header.module.scss'

export const Header = () => {
  return <header className={styles.header}><img src='image/logo.webp' height={100} width={100} loading="lazy" alt='logo'/><Navigation /></header>
}

