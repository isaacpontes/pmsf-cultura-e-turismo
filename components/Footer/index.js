import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div>
        Para maiores informações, solicitação de acréscimo ou mudança nos dados, entre em contato com a Secretaria Municipal de Cultura e Turismo de São Fidélis - RJ.
      </div>
      <div>
        <div>
          E-mail: <a href='mailto:culturaeturismo.sf@gmail.com'>culturaeturismo.sf@gmail.com</a>
        </div>
        <div>
          Telefone: (22) 2758-6829
        </div>
      </div>
    </footer>
  )
}