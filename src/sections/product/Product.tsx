import React from "react"
import styles from './Product.module.scss'
import { ProductData } from "../../mocks/Product"

export const Product = () => {
  return (
    <section id='product' aria-label="блок продукции" className={styles.product}>
      <h2 className={styles.product_title}>{ProductData.title}</h2>
      <ul className={styles.product_list}>{ProductData.list.map((item) => <li key={item.id} className={styles.product_item}>- {item.title}</li>)}</ul>
    </section>
  )
}
