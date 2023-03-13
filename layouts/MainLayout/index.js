import styles from './styles.module.scss'
import { Playfair_Display } from '@next/font/google'
import Image from 'next/image'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ children, coverImg }) => {
  return (
    <>
      <main className={styles.container}>
        <Image className={styles.cover} src={coverImg} alt="" priority />
        <h1 className={playfair.className}>
          Conheça São Fidélis
        </h1>
        {children}
      </main>
    </>
  )
}