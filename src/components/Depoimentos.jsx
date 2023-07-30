'use client'
import { renderizarDepoimentos } from '../functions/Global';
import styles from '../styles/Depoimento.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Depoimentos = () => {

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
    <div  data-aos="fade-down" id='depoimentos'>
      <h2 className={styles.h2}>Depoimentos de Clientes</h2>
      <div className={styles.mainDepoi} >
        <section>{renderizarDepoimentos()}</section>
      </div>
    </div>
  );
};

export default Depoimentos;
