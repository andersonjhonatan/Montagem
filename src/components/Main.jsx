'use client'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import Logo2 from '../../public/arrasta2.png'
import montagem from '../../public/arrasta.png'
import ferramentas from '../../public/ferramentas.png'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 })
  }, [])

  return (
    <main className={styles.main} id="montagem">
      <section className={styles.hero}>
        <div className={styles.heroCopy} data-aos="fade-up">
          <span className={styles.eyebrow}>MONTAGEM PROFISSIONAL DE MÓVEIS</span>
          <h1>Seu móvel montado <span>do jeito certo.</span></h1>
          <p className={styles.lead}>Cuidado, precisão e experiência para transformar caixas e peças em um ambiente pronto para você aproveitar.</p>
          <div className={styles.actions}>
            <Link href="https://contate.me/montadorseu" target="_blank" className={styles.primary}>Solicitar orçamento</Link>
            <Link href="#nossoservicos" className={styles.secondary}>Conhecer serviços</Link>
          </div>
          <div className={styles.trust}>
            <span><strong>✓</strong> Atendimento profissional</span>
            <span><strong>✓</strong> Agendamento facilitado</span>
            <span><strong>✓</strong> Ferramentas adequadas</span>
          </div>
        </div>
        <div className={styles.heroVisual} data-aos="fade-left">
          <div className={styles.glow} />
          <Image src={montagem} alt="Profissional realizando montagem de móveis" className={styles.heroImage} priority />
          <div className={styles.floatingCard}><strong>Montagem com precisão</strong><span>Cuidado do início ao acabamento.</span></div>
        </div>
      </section>

      <section className={styles.process} data-aos="fade-up">
        <div className={styles.processVisual}>
          <Image src={Logo2} alt="Serviço profissional de montagem" className={styles.processImage} />
        </div>
        <div className={styles.processCopy}>
          <span className={styles.eyebrow}>COMO FUNCIONA</span>
          <h2>Simples para contratar. Profissional na execução.</h2>
          <p>Você entra em contato, combina o melhor horário e recebe um serviço realizado com organização e atenção aos detalhes.</p>
          <div className={styles.steps}>
            <article><b>01</b><div><strong>Envie os detalhes</strong><span>Conte qual móvel precisa montar e envie fotos quando necessário.</span></div></article>
            <article><b>02</b><div><strong>Combine o atendimento</strong><span>Definimos disponibilidade e alinhamos o serviço antes da visita.</span></div></article>
            <article><b>03</b><div><strong>Montagem e acabamento</strong><span>O móvel é montado, ajustado e conferido antes da finalização.</span></div></article>
          </div>
          <Link href="https://contate.me/montadorseu" target="_blank" className={styles.textLink}>Falar agora pelo WhatsApp →</Link>
        </div>
      </section>

      <section className={styles.toolsBanner} aria-label="Ferramentas profissionais">
        <Image src={ferramentas} alt="Ferramentas utilizadas no serviço" className={styles.toolsImage} />
        <div><span>Ferramentas adequadas</span><strong>Mais precisão. Menos improviso.</strong></div>
      </section>
    </main>
  )
}

export default Main
