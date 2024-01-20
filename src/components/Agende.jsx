'use client';
import styles from '../styles/Agende.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Agende = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Defina a duração da animação em milissegundos
      easing: 'ease-in-out', // Defina a curva de aceleração da animação (opcional)
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
    <div>
      <section className={styles.agende} data-aos='fade'>
        <h2> Venha agendar seu Montador de Móveis</h2>
        <div className={styles.traco}></div>
        <p>
          Facilite sua vida e garanta a montagem perfeita dos seus móveis com o nosso
          serviço profissional. Contrate agora mesmo o melhor montador de móveis para o
          seu projeto!
        </p>
        <button>Contrate agora</button>
      </section>
    </div>
  );
};

export default Agende;
