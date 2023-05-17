import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import ArrowRight from '../icons/ArrowRight'
import { Playfair_Display } from '@next/font/google'
import { motion } from 'framer-motion'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ label, to, backgroundImage }) => (
  <motion.article
    className={styles.container}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ amount: 0.25 }}
  >
    <Image src={backgroundImage} alt='' />
    <h2 className={playfair.className}>{label}</h2>
    <Link href={to}>
      <ArrowRight />
    </Link>
  </motion.article>
)