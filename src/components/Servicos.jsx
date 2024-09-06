import styles from '../styles/Servicos.module.css'
import Image from 'next/image'
import montagem from '../../public/servicos/montagem.png'
import desmontagem from '../../public/servicos/desmontagem.png'
import manutencao from '../../public/servicos/manutenção.png'
import tv from '../../public/servicos/tv.png'
import dobradicas from '../../public/servicos/dobradicas.png'
import cortinas from '../../public/servicos/cortinas.png'

const Servicos = () => {
  return (
    <div className={styles.servicos} id="nossoservicos">
      <h1 className={styles.titulo}>Meus Serviços</h1>
      <div className={styles.bakcGround}>
        <div className={styles.mainServicos}>
          <div className={styles.mainMontagem}>
            <figure className={styles.mainFigure1}>
              <Image
                src={montagem}
                alt="montagem"
                className={styles.montagem}
                width={420}
                height={420}
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
                width={420}
                height={420}
              />
            </figure>
          </div>
          <div className={styles.mainManutencao}>
            <figure className={styles.mainFigure2}>
              <Image
                src={manutencao}
                alt="manutençao"
                className={styles.manutencao}
                width={420}
                height={420}
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
          {/* CORTINAS */}
          <div className={styles.mainCortinas}>
            <figure className={styles.mainFigure2}>
              <Image
                src={cortinas}
                alt="manutençao"
                className={styles.cortinas}
                width={420}
                height={420}
              />
            </figure>
          </div>
          {/* TV */}
          <div className={styles.mainTv}>
            <figure className={styles.mainFigure2}>
              <Image
                src={tv}
                alt="manutençao"
                className={styles.tv}
                width={420}
                height={420}
              />
            </figure>
          </div>
          {/* DOBRADICAS */}
          <div className={styles.mainDobradicas}>
            <figure className={styles.mainFigure2}>
              <Image
                src={dobradicas}
                alt="manutençao"
                className={styles.dobradicas}
                width={420}
                height={420}
              />
            </figure>
          </div>
        </div>
        <div className={styles.contentGaleria}>
          <div className={styles.galeriaDeFotos} id="galeria">
              <h2 className={styles.globalH2}>Registro de Fotos</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicos
