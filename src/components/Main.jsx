'use client'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import Logo from '../../public/Logo.png'
import Logo2 from '../../public/arrasta2.png'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import montagem from '../../public/arrasta.png'
import ferramentas from '../../public/ferramentas.png'
import Link from 'next/link'

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    })

    const handleScroll = () => {
      AOS.refresh()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <main className={styles.main} id="montagem" data-aos="fade-down">
      <div className={styles.montagem}>
        <section className={styles.bemVindo}>
          <h1 className={styles.tituloMontagem}>Montador de Móveis</h1>
          <p className={styles.paragrafoTitle}>
            <strong className="text-6xl">Bem-vindo ao meu site,</strong> Eu acredito que cada montagem é uma jornada – começando com a visão do cliente e terminando com a satisfação de ver essa visão se tornar realidade. Com cada parafuso apertado e cada prateleira fixada, não estou apenas construindo móveis; estou construindo ambientes onde momentos especiais acontecerão, onde memórias serão criadas. E é isso que me motiva: saber que o meu trabalho é parte da sua história, do seu dia a dia. Monto móveis com a mesma paixão e cuidado que você tem ao escolher cada peça. Porque para mim, a montagem é mais que um serviço – é a arte de transformar sonhos em realidade.
          </p>
          <Link href="https://contate.me/seumontador" target="_blank" className={styles.button}>AGENDAR AGORA</Link>
        </section>
        <section className={styles.imagem}>
          <Image
            src={montagem}
            alt="montador e furadeira"
            className={styles.montadeDeMoveisPicture1}
            priority
          />
        </section>
      </div>

      <section className={styles.imagemFerramentas}>
          <Image
            src={ferramentas}
            alt="montador e furadeira"
            className={styles.backFerramentas}
            priority
          />
       
        </section>
      <div className={styles.montagem1}>
        <section className={styles.sectionImagem1}>
          <Image
            src={Logo2}
            alt="montador e furadeira"
            className={styles.montadeDeMoveisPicture2}
            priority
          />
        </section>
        <section data-aos="fade-down" className={styles.sectionPara1}>
          <h3>Como Funciona</h3>
          <div className={styles.funcionaParag}>
            <strong>
              Experimente nosso serviço profissional de montagem de móveis
            </strong>
            <p>
              Agende com flexibilidade, montador experiente, ferramentas adequadas,
              montagem rápida e precisa, serviço completo com ajustes necessários,
              satisfação garantida. Entre em contato para agendar. Ao utilizar nosso
              serviço de montagem de móveis, você contará com uma experiência profissional
              excepcional. Nossa equipe de montadores altamente qualificados estará pronta
              para atendê-lo.
            </p>
            <p>
              Além da montagem em si, nosso serviço inclui ajustes necessários para deixar
              seus móveis perfeitamente instalados. Estamos comprometidos em proporcionar
              a máxima satisfação aos nossos clientes, buscando sempre superar suas
              expectativas.
            </p>
            <p>
              Conte conosco para tornar a montagem de seus móveis uma experiência
              tranquila e sem complicações. Satisfação garantida é o nosso compromisso.
              Não perca mais tempo, entre em contato e deixe que cuidemos de tudo para
              você.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Main
