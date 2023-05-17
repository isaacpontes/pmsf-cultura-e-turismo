import Image from 'next/image'
import styles from './styles.module.scss'
import placeholder from '@/assets/images/placeholder-image.webp'
import { Playfair_Display } from '@next/font/google'
import { motion } from 'framer-motion'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ img = placeholder, title, description }) => (
  <motion.article
    className={styles.container}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ amount: 0.25 }}
  >
    <Image src={img} alt='' />
    <section>
      <h2 className={playfair.className}>{title}</h2>
      <p>{description}</p>
    </section>
  </motion.article>
)