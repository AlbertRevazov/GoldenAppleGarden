import React, { FC } from 'react'
import { useScrollToTop } from './hooks'
import styles from './ScrollButton.module.scss'

export const ScrollButton: FC = () => {
  const { scrollToTop, visible } = useScrollToTop()

  return (
    <div>
      <button
        className={styles.scroll}
        style={{ opacity: visible ? 1 : 0 }}
        onClick={scrollToTop}
      >
        <img className={styles.scroll_icon} src='/image/scroll.png' loading='lazy'
          alt='scroll button icon' width={50} />
      </button>
    </div>
  )
}
