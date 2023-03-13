import styles from './styles.module.scss'
import { Playfair_Display } from '@next/font/google'
import Image from 'next/image'
import Header from '@/components/Header'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ children, coverImg, title }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.cover} src={coverImg} alt="" priority />
      <main>
        <header className={styles.header}>
          <h1 className={playfair.className}>
            {title}
          </h1>
          <Header />
        </header>
        {children}
      </main>
    </div>
  )
}