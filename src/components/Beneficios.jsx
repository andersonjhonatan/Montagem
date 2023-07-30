'use client'
import React from 'react';
import { renderizarBeneficios } from '../functions/Global';
import styles from '../styles/Beneficio.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Beneficios = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Defina a duração da animação em milissegundos
    });
  
    const handleScroll = () => {
      AOS.refresh();
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.main} data-aos="fade-down" id='beneficios' >
      <h1 className={styles.title}>Benefícios</h1>
      <p className={styles.paragBeneficio}>
        Contratar um montador de móveis profissional traz diversos benefícios para você e
        para o seu projeto. Aqui estão alguns dos melhores benefícios de contratar um
        profissional especializado nessa área
      </p>
      <div className={styles.beneficios} data-aos="fade-right">{renderizarBeneficios()}</div>
    </div>
  );
};

export default Beneficios;
