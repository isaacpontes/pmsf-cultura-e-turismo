import Image from 'next/image'
import styles from './styles.module.scss'
import placeholder from '@/assets/images/placeholder-image.webp'
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ img = placeholder, title, description }) => (
  <article className={styles.container}>
    <Image src={img} alt='' />
    <section>
      <h2 className={playfair.className}>{title}</h2>
      <p>{description}</p>
    </section>
  </article>
)