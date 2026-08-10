import Link from 'next/link'
import styles from '../styles/Agende.module.css'
const Agende=()=> <section className={styles.wrap} id="contato"><div className={styles.agende}><div><span>PRONTO PARA COMEÇAR?</span><h2>Seu móvel merece uma montagem bem feita.</h2><p>Envie as informações do serviço pelo WhatsApp e solicite seu orçamento de forma simples e direta.</p></div><div className={styles.actions}><Link href="https://contate.me/montadorseu" target="_blank" className={styles.primary}>Solicitar orçamento</Link><a href="tel:+5583988913749" className={styles.secondary}>Ligar agora</a></div></div></section>
export default Agende
