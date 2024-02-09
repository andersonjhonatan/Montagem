'use client'
import styles from '../styles/Agende.module.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/navigation'
import ModalAgendamento from './ModalAgendamento'
const Agende = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000, // Defina a duração da animação em milissegundos
      easing: 'ease-in-out', // Defina a curva de aceleração da animação (opcional)
    })

    const handleScroll = () => {
      AOS.refresh()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickAgenda = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <section className={styles.agende} data-aos="fade">
        <p>
          Facilite sua vida e garanta a montagem perfeita dos seus móveis com o nosso
          serviço profissional. Contrate agora mesmo o melhor montador de móveis para o
          seu projeto!
        </p>
        <button onClick={onClickAgenda} className={styles.buttonAgendar}>
          Contrate agora
        </button>
      </section>
      {isModalOpen && <ModalAgendamento onClose={closeModal} />}
    </div>
  )
}

export default Agende
