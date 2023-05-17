import styles from './styles.module.scss'
import { Playfair_Display } from '@next/font/google'
import Image from 'next/image'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ children, coverImg, title }) => {
  const container = {
    hidden: { opacity: 0, transition: { when: 'beforeChildren' } },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    exit: { x: -200, opacity: 0 }
  }

  const item = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { bounce: 0 } },
  }

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        bounce: 0,
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <motion.div variants={item}>
        <Image className={styles.cover} src={coverImg} alt="" priority />
      </motion.div>
      <motion.header className={styles.header} variants={item}>
        <h1 className={playfair.className}>
          {title}
        </h1>
        <Header />
      </motion.header>
      <motion.main variants={item}>
        {children}
      </motion.main>
      <Footer />
    </motion.div>
  )
}