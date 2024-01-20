import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.menuFooter}>
          <h1 className={styles.title}>Seu Montador</h1>
          <ul>
            <li>
              <a href="#beneficios">Benefícios</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#montagem">Montagem</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
          </ul>

          <div className={styles.contentRedes}>
            <section>
              <h2 className={styles.title}>Contato</h2>
              <p>Telefone: (83) 99359-5471</p>
              <p>Email: ajhonatan76@gmail.com</p>
            </section>
            <section>
              <h2 className={styles.title}>Redes Sociais</h2>
              <p>Instagram: @seumontador</p>
              <p>Facebook: SeuMontador</p>
            </section>
          </div>

          <div className={styles.horarios}>
            <h2 className={styles.title}>Horários de Atendimento</h2>
            <div className={styles.gridContainer}>
              <div className={styles.day}>Dia</div>
              <div className={styles.time}>Horário</div>

              <div className={styles.day}>Segunda</div>
              <div className={styles.time}>09:00 - 19:00</div>

              <div className={styles.day}>Terça</div>
              <div className={styles.time}>09:00 - 19:00</div>

              <div className={styles.day}>Quarta</div>
              <div className={styles.time}>09:00 - 19:00</div>

              <div className={styles.day}>Quinta</div>
              <div className={styles.time}>09:00 - 19:00</div>

              <div className={styles.day}>Sexta</div>
              <div className={styles.time}>09:00 - 19:00</div>

              <div className={styles.day}>Sábado</div>
              <div className={styles.time}>09:00 - 19:00</div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>&copy; 2023 - Seu Montador - Todos os direitos reservados -</p>
          <p>Desenvolvido por: Anderson Jhonatan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
