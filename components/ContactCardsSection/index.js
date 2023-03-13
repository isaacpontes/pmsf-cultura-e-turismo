import styles from "./styles.module.scss"

export default ({ children }) => (
  <section className={styles.container}>
    {children}
  </section>
)