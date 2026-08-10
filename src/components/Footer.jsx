import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { CiInstagram } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'
import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.logoFooter}>
          <Image src="/logo-baixo.png" alt="Seu Montador" width={170} height={170} className={styles.logo} />
          <p className={styles.tagline}>Montagem profissional, cuidado em cada detalhe.</p>
        </section>

        <div className={styles.menuFooter}>
          <nav aria-label="Links do rodapé">
            <ul>
              <li><Link href="#beneficios">Benefícios</Link></li>
              <li><Link href="#nossoservicos">Serviços</Link></li>
              <li><Link href="#galeria">Fotos</Link></li>
              <li><Link href="#montagem">Início</Link></li>
            </ul>
          </nav>

          <div className={styles.contentRedes}>
            <section className={styles.contentPhoneEmail}>
              <h2 className={styles.titleContact}>Contato</h2>
              <div className={styles.contentPhone}><FiPhoneCall size={20} /><p>(83) 9 8891-3749</p></div>
              <div className={styles.contentEmail}><MdOutlineEmail size={20} /><p>montadorseu@gmail.com</p></div>
            </section>

            <section className={styles.contentRedeSocial}>
              <h2 className={styles.titleRedesSocial}>Redes Sociais</h2>
              <div className={styles.contentRedesFigure}>
                <Link aria-label="Instagram do Seu Montador" href="https://www.instagram.com/montadorseu/" target="_blank" rel="noreferrer"><CiInstagram size={30} /></Link>
                <Link aria-label="WhatsApp do Seu Montador" href="https://contate.me/montadorseu" target="_blank" rel="noreferrer"><MdOutlineWhatsapp size={30} /></Link>
              </div>
            </section>
          </div>

          <div className={styles.horarios} id="horario">
            <h2 className={styles.titleHorarios}>Horários de Atendimento</h2>
            <div className={styles.gridContainer}>
              <strong>Dia</strong><strong>Horário</strong>
              <span>Segunda</span><span>09:00 - 19:00</span>
              <span>Terça</span><span>09:00 - 19:00</span>
              <span>Quarta</span><span>09:00 - 19:00</span>
              <span>Quinta</span><span>09:00 - 19:00</span>
              <span>Sexta</span><span>09:00 - 19:00</span>
              <span>Sábado</span><span>09:00 - 19:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <p>© {year} Seu Montador. Todos os direitos reservados.</p>
        <p className={styles.credit}>Desenvolvido por <strong>K2 Tech</strong></p>
      </div>
    </footer>
  )
}

export default Footer
