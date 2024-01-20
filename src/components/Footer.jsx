import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { CiInstagram } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.menuFooter}>
          <section className={styles.logoFooter}>
            <h1 className={styles.title}>Seu Montador</h1>
            <p>Seus móveis em boas mãos!</p>
          </section>
          <ul>
            <li>
              <Link href="#beneficios">Benefícios</Link>
            </li>
            <li>
              <Link href="/nossoservicos">Serviços</Link>
            </li>
            <li>
              <Link href="#montagem">Montagem</Link>
            </li>
            <li>
              <Link href="#depoimentos">Depoimentos</Link>
            </li>
          </ul>

          <div className={styles.contentRedes}>
            <section className={styles.contentPhoneEmail}>
              <h2 className={styles.titleContact}>Contato</h2>
              <div className={styles.contentPhone}>
                <FiPhoneCall size={20} className={styles.iconPhone} />
                <p>(83) 9 9359-5471</p>
              </div>
              <div className={styles.contentEmail}>
                <MdOutlineEmail size={20} className={styles.iconEmail} />

                <p>ajhonatan76@gmail.com</p>
              </div>
            </section>
            <section className={styles.contentRedeSocial}>
              <h2 className={styles.titleRedesSocial}>Redes Sociais</h2>
              <div>
                <Link href="https://www.instagram.com/montadorseu/" target="_blank">
                  <CiInstagram size={30} className={styles.iconInstagram} />
                </Link>
              </div>
            </section>
          </div>

          <div className={styles.horarios} id='horario'>
            <h2 className={styles.titleHorarios}>Horários de Atendimento</h2>
            <div className={styles.gridContainer}>
              <div className={styles.dayTitle}>Dia</div>
              <div className={styles.timeTitle}>Horário</div>

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
