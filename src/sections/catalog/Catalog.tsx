import { CatalogData } from '../../mocks/Catalog'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Parallax } from 'swiper/modules';
import styles from './Catalog.module.scss'
import 'swiper/css';

export const Catalog = () => {
  return (
    <article className={styles.catalog}>
      <Swiper className={styles.catalog_list}
        modules={[Autoplay, Parallax]}
        autoplay
        parallax
        loop
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        speed={2700}
        direction='vertical'
      >
        {CatalogData.map((item) => {
          return <SwiperSlide className={styles.catalog_item} data-swiper-autoplay='3000' data-swiper-parallax-duration="600"
          >
            <header className={styles.catalog_header}>
              <h3 className={styles.item_title} data-swiper-parallax="-550" data-swiper-parallax-duration="1000">{item.title}</h3>
              <h4 className={styles.item_description} data-swiper-parallax="-650" data-swiper-parallax-duration="1100">{item.description}</h4>
              <button type='button' className={styles.button} disabled={!item.availability} data-swiper-parallax="-850" data-swiper-parallax-duration="1250">
                {item.availability ?
                  <a className={styles.link} href='#contacts' >
                    {item.price} - Заказать</a> : 'Нет в Наличии'}
              </button>
            </header>
            <img className={styles.item_image} src={item.image} alt='image for apple' loading='lazy' width={250} data-swiper-parallax="-750" data-swiper-parallax-duration="1200" />

          </SwiperSlide>
        }
        )}
      </Swiper>
    </article >
  )
}
