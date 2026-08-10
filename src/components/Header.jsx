'use client'
import { useEffect, useState } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [['#montagem','Início'],['#beneficios','Benefícios'],['#nossoservicos','Serviços'],['#galeria','Trabalhos']]

const Header = () => {
  const [scrolled,setScrolled] = useState(false)
  const [open,setOpen] = useState(false)
  useEffect(() => { const onScroll=()=>setScrolled(window.scrollY>30); onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll) },[])
  return <header className={`${styles.header} ${scrolled?styles.scrolled:''}`}>
    <nav className={styles.nav} aria-label="Navegação principal">
      <Link href="#montagem" className={styles.brand} aria-label="Seu Montador - início"><Image src="/logo-s.png" alt="Seu Montador" width={82} height={82} className={styles.logo} priority /></Link>
      <div className={`${styles.menu} ${open?styles.menuOpen:''}`}>
        {links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
        <Link href="https://contate.me/montadorseu" target="_blank" className={styles.cta} onClick={()=>setOpen(false)}>Pedir orçamento</Link>
      </div>
      <button className={styles.toggle} onClick={()=>setOpen(!open)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open}>{open?<FiX size={25}/>:<FiMenu size={25}/>}</button>
    </nav>
  </header>
}
export default Header
