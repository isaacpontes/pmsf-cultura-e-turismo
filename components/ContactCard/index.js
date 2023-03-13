import styles from "./styles.module.scss"
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ title, address, phone }) => (
  <div className={styles.container}>
    <h2 className={playfair.className}>{title}</h2>
    <span>Endereço</span>
    <p>{address}</p>
    <span>Contato</span>
    <p>{phone}</p>
  </div>
)