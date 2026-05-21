import { NavigationData } from '../../mocks/NavigationData'
import { useState } from 'react';
import styles from './Burger.module.scss'

export const Burger = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <button className={styles.burger_button} onClick={() => setToggle(!toggle)}>
        <img className={styles.burger_img} src='/image/burger2.png' loading='lazy' alt='burger menu icon' width={50} />
      </button>
      <div
        className={`${styles.burger_menu} ${toggle ? styles.open : ''}`}
      >
        <button className={styles.close_button} onClick={() => setToggle(false)} aria-label="Закрыть меню">
          X
        </button>
        <ul className={styles.burger_list}>
          {NavigationData.map((link) => (
            <li key={link.id} className={styles.burger_item}>
              <a
                className={styles.burger_link}
                href={link.link}
                onClick={() => setToggle(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
