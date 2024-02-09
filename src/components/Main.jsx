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
          <h1 className={styles.tituloMontagem}>Montagem de Móveis</h1>
          <p className={styles.paragrafoTitle}>
            <strong className="text-6xl">Bem-vindo ao nosso site!</strong> Se você
            adquiriu um novo móvel e precisa de ajuda profissional na montagem, estamos
            aqui para ajudar. Nossa equipe experiente e confiável de montadores de móveis
            está pronta para garantir que seu novo móvel seja montado com precisão e
            cuidado.
          </p>
          <button>AGENDAR AGORA</button>
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
