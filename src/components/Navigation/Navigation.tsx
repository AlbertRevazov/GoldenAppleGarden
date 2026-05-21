import React from 'react'
import { NavigationData } from '../../mocks/NavigationData'
import { Burger } from './Burger'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.nav} aria-label="Основная навигация">
      <ul className={styles.nav_list}>
        {NavigationData.map((link) => <li key={link.id + link.link} className={styles.navigation_link}>
          <a href={link.link}>{link.title}</a>
        </li>)}
      </ul>
      <Burger />
    </nav>
  )
}
