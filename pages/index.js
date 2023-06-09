import Head from 'next/head'
import styles from './index.module.scss'
import LinkCard from '@/components/LinkCard'
import imgCover from '@/assets/images/cover-home.webp'
import imgTurismo from '@/assets/images/card-turismo.webp'
import imgCultura from '@/assets/images/card-cultura.webp'
// import imgHotelaria from '@/assets/images/pexels-pixabay-164595.jpg'
// import imgGastronomia from '@/assets/images/pexels-sydney-troxell-718742.jpg'
// import imgOutros from '@/assets/images/outros-servicos.webp'
import MainLayout from '@/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Conheça São Fidélis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout coverImg={imgCover}>
        <section className={styles.cardsSection}>
          <LinkCard to="/turismo" label="Turismo" backgroundImage={imgTurismo} />
          <LinkCard to="/cultura" label="Cultura" backgroundImage={imgCultura} />
          {/* <LinkCard to="/gastronomia" label="Gastronomia" backgroundImage={imgGastronomia} />
          <LinkCard to="/hotelaria" label="Hotelaria" backgroundImage={imgHotelaria} />
          <LinkCard to="/outros-servicos" label="Outros Serviços" backgroundImage={imgOutros} /> */}
        </section>
      </MainLayout>
    </>
  )
}
