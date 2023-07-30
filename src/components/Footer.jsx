import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; 2023 - Seu Montador - Todos os direitos reservados -</p>
          <p>Desenvolvido por: Anderson Jhonatan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
