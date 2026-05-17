import { CatalogData } from '../../mocks/Catalog'
import styles from './Catalog.module.scss'

export const Catalog = () => {
  return (
    <article className={styles.catalog}>
      <ul className={styles.catalog_list}>{CatalogData.map((item) =>
        <li className={styles.catalog_item}>
          <h3 className={styles.item_title}>{item.title}</h3>
          <h4 className={styles.item_description}>{item.description}</h4>
          <img className={styles.item_image} src={item.image} alt='image for apple' loading='lazy' width={250} />
          <button type='button' className={styles.button} disabled={!item.availability}>{item.availability ? <a className={styles.link} href='#contacts'>{item.price} - Заказать</a> : 'Нет в Наличии'}</button>
        </li>)}
      </ul>
    </article>
  )
}
