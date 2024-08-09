'use client'
import React, { useEffect, useState } from 'react'
import { renderizarLinks } from '../functions/Global'
import styles from '../styles/Header.module.css'
import { BsAlarm } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
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
      <Image
          src="/logo-s.png"
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
          priority
        />
        <ul className={styles.linksButton}>{renderizarLinks()}</ul>
        <Link href="#horario">
          <BsAlarm size={25} className={styles.iconAlarm} />
        </Link>
      </nav>
    </div>
  )
}

export default Header
