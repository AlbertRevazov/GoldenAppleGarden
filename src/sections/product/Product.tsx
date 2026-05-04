import React from "react"
import styles from './Product.module.scss'
import { ProductData } from "../../mocks/blocks/Product"

export const Product = () => {
  return (
    <section id='product' aria-label="блок продукции" className={styles.product}>
      {/* <h2 className={styles.product_title}>{ProductData.title}</h2> */}
      <h3 className={styles.product_description}>{ProductData.description}</h3>
      <ul className={styles.product_list}>{ProductData.list.map((item) => <li key={item.id} className={styles.product_item}>- {item.title}</li>)}</ul>
      <strong className={styles.product_ps}> {ProductData.ps}</strong>
    </section>
  )
}
