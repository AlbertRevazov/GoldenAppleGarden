import React from 'react'
import styles from './Navigation.module.scss'
import { NavigationData } from '../../mocks/NavigationData'

export const Navigation = () => {
  return (
    <nav aria-label="Основная навигация">
      <ul className={styles.nav}> {NavigationData.map((link) => <li key={link.id + link.link} className={styles.navigation_link}><a href={link.link}>{link.title}</a></li>)}
      </ul>
    </nav>
  )
}
