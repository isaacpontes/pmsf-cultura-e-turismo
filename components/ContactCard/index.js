import styles from "./styles.module.scss"
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export default ({ title, address, phone }) => (
  <div className={styles.container}>
    <h2 className={playfair.className}>{title}</h2>
    {address && (
      <div className="address">
        <span>Endereço</span>
        <p>{address}</p>
      </div>
    )}
    {phone && (
      <div className="phone">
        <span>Contato</span>
        <p>{phone}</p>
      </div>
    )}
  </div>
)