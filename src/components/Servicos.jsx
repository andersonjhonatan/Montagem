import { renderizarFotos } from '../functions/Global'
import styles from '../styles/Servicos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import back from '../../public/back-svgrepo-com.svg'
import montagem from '../../public/servicos/montagem.png'
import desmontagem from '../../public/servicos/desmontagem.png'
import manutencao from '../../public/servicos/manutenção.png'
import picture from '../../public/picture-svgrepo-com.svg'

const Servicos = () => {
  return (
    <div className={styles.servicos}>
      <div className={styles.mainServicosHeader}>
        <section className={styles.section}>
          <Link href="/">
            <Image
              src={back}
              alt="Back"
              className={styles.backButton}
              width={60}
              height={60}
            />
          </Link>
          <h1 className={styles.nossoServic}>Nossos Serviços</h1>
          <Link href="#galeria">
            <Image
              src={picture}
              alt="picture"
              className={styles.picture}
              width={60}
              height={60}
            />
          </Link>
        </section>
      </div>
      
      <div className={styles.bakcGround}>
        <div className={styles.mainServicos}>
          <div className={styles.mainMontagem}>
            <figure className={styles.mainFigure1}>
              <Image
                src={montagem}
                alt="montagem"
                className={styles.montagem}
                width={780}
                height={780}
              />
            </figure>
            <section className={styles.sectionMontagem}>
              <h1 className={styles.globalH1}>Montagem</h1>
              <div className={styles.traco1}></div>
              <p className={styles.globalParagrafo}>
                A montagem de móveis é o processo de transformar peças soltas em um todo
                funcional e esteticamente agradável. Profissional experiente irá montar
                seus móveis com precisão, seguindo as instruções do fabricante para
                garantir um resultado final perfeito. Desfrute de um ambiente
                personalizado e organizado, onde cada peça se encaixa harmoniosamente,
                proporcionando conforto e praticidade.
              </p>
            </section>
          </div>
          <div className={styles.mainDesmontagem}>
            <section className={styles.sectionDesmontagem}>
              <h1 className={styles.globalH1}>Desmontagem</h1>
              <div className={styles.traco2}></div>
              <p className={styles.globalParagrafo}>
                A desmontagem é o procedimento cuidadoso e estratégico de desfazer móveis
                de maneira segura e eficiente. Seja para uma mudança, reforma ou
                relocação, profissional é especialista em desmontar seus móveis sem causar
                danos, garantindo a preservação das peças e facilitando sua reutilização
                futura. Conte conosco para desmontar seus móveis com agilidade e
                profissionalismo.
              </p>
            </section>
            <figure className={styles.mainFigure}>
              <Image
                src={desmontagem}
                alt="desmontagem"
                className={styles.desmontagem}
                width={780}
                height={780}
              />
            </figure>
          </div>
          <div className={styles.mainManutencao}>
            <figure className={styles.mainFigure2}>
              <Image
                src={manutencao}
                alt="manutençao"
                className={styles.manutencao}
                width={780}
                height={780}
              />
            </figure>
            <section className={styles.sectionManutencao}>
              <h1 className={styles.globalH1}>Manutenção</h1>
              <div className={styles.traco3}></div>
              <p className={styles.globalParagrafo}>
                A manutenção de móveis é essencial para garantir sua durabilidade e
                funcionalidade ao longo do tempo. Nossos serviços especializados de
                manutenção abrangem desde reparos pontuais até a realização de ajustes e
                lubrificação periódica. Dessa forma, seus móveis permanecerão em
                excelentes condições, evitando desgastes e prolongando sua vida útil.
                Deixe-nos cuidar dos seus móveis para que você possa desfrutar de um
                ambiente sempre impecável e bem cuidado.
              </p>
            </section>
          </div>
        </div>
        <div className={styles.galeriaDeFotos} id="galeria">
          <section>
            <h2 className={styles.globalH2}>Galeria de Fotos</h2>
            <div className={styles.tracoH2}></div>
          </section>
        </div>
        <figure className={styles.render}>{renderizarFotos()}</figure>
      </div>
    </div>
  )
}

export default Servicos
