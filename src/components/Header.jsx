'use client'
import React, { useEffect, useState } from 'react'
import { renderizarLinks } from '../functions/Global'
import styles from '../styles/Header.module.css'
import { BsAlarm } from 'react-icons/bs'
import Link from 'next/link'

const Header = (props) => {
  const [showBorder, setShowBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setShowBorder(false)
      } else {
        setShowBorder(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.header}>
      <nav className={`nav ${showBorder ? styles.nav : styles.nav1}`}>
        <h1>Seu Montador</h1>
        <ul className={styles.linksButton}>{renderizarLinks()}</ul>
        <Link href="#horario">
          <BsAlarm size={25} className={styles.iconAlarm} />
        </Link>
      </nav>
    </div>
  )
}

export default Header
