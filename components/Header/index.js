import Image from "next/image"
import Link from "next/link"
import menuIcon from '@/assets/chevron-left.svg'
import styles from "./styles.module.scss"
import { useState } from "react"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src={menuIcon} alt="Menu" className={isOpen ? styles.menuTransform : ''} priority />
      </button>
      <nav className={isOpen ? styles.nav : styles.navClosed}>
        <Link href="/">Início</Link>
        <Link href="/turismo">Turismo</Link>
        <Link href="/cultura">Cultura</Link>
        {/* <Link href="/gastronomia">Gastronomia</Link>
        <Link href="/hotelaria">Hotelaria</Link>
        <Link href="/outros-servicos">Outros</Link> */}
      </nav>
    </div>
  )
}