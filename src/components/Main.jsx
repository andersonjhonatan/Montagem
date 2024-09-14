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
            <strong className="text-6xl">Bem-vindo ao meu site,</strong> cada montagem que realizo vai além de simplesmente montar móveis; é sobre dar vida à sua visão e criar ambientes onde suas histórias serão vividas. Com paixão e cuidado, transformo peças em cenários perfeitos para seus momentos especiais. Deixe-me transformar seus sonhos em realidade!
          </p>
          <Link href="https://contate.me/montadorseu" target="_blank" className={styles.button}>AGENDAR AGORA</Link>
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
              Flexibilidade de agendamento, montador experiente, ferramentas adequadas e montagem rápida e precisa. Incluo ajustes necessários para garantir que seus móveis fiquem perfeitamente instalados, proporcionando uma experiência tranquila e satisfatória. Entre em contato para agendar!
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Main
