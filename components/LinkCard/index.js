import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import ArrowRight from '../icons/ArrowRight'
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ label, to, backgroundImage }) => (
  <article className={styles.container}>
    <Image src={backgroundImage} alt='' />
    <h2 className={playfair.className}>{label}</h2>
    <Link href={to}>
      <ArrowRight />
    </Link>
  </article>
)