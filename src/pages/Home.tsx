
import React from "react"
import { Header } from "../layout/Header/Header"
import { Product } from "../sections/product/Product"
import { Catalog } from "../sections/catalog/Catalog"
import { History } from "../sections/history/History"
import { About } from "../sections/about/About"
import { Contacts } from "../sections/contacts/Contacts"
import { Footer } from "../layout/Footer/Footer"
import { ScrollButton } from "../components/ScrollButton/ScrollButton"

export const Home = () => {

  return (
    <>
      <Header />
      <Product />
      <Catalog />
      <History />
      <About />
      <Contacts />
      <Footer />
      <ScrollButton />
    </>
  )
}
