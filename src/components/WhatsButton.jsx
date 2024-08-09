import React from 'react'
import styles from '../styles/Whats.module.css'
import Link from 'next/link'
import { MdOutlineWhatsapp } from 'react-icons/md'

function WhatsButton() {
  return (
    <div className={styles.whatsButton}>
      <Link href="https://contate.me/seumontador" target="_blank">
        <MdOutlineWhatsapp size={30} color="#fff" />
      </Link>
    </div>
  )
}

export default WhatsButton
