import React from 'react'
import styles from '../styles/ModalAgendamento.module.css'

function ModalAgendamento({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Formulário de Agendamento</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required className={styles.inputs} />
          <label htmlFor="message">Qual sua necessidade ?</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Escreva sua necessidade:"
          className={styles.inputs}
          />

          <label htmlFor="Endereço">Endereço:</label>
          <input
            type="text"
            id="Endereço"
            name="Endereço"
            required
            className={styles.inputs}
          />

          <label htmlFor="date">Data:</label>
          <input type="date" id="date" name="date" required className={styles.inputs} />
          <button type="submit" className={styles.buttonEnviar}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
export default ModalAgendamento
