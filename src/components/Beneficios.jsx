'use client'
import { renderizarBeneficios } from '../functions/Global'
import styles from '../styles/Beneficio.module.css'
const Beneficios=()=> <section id="beneficios" className={styles.containerBeneficio}><div className={styles.inner}><div className={styles.titleBeneficios}><span>POR QUE CONTRATAR</span><h2 className={styles.title}>Um serviço pensado para evitar dor de cabeça.</h2><p className={styles.paragBeneficio}>Mais do que juntar peças: organização, ferramentas adequadas e atenção ao acabamento para entregar um resultado seguro e bem feito.</p></div><div className={styles.beneficios}>{renderizarBeneficios()}</div></div></section>
export default Beneficios
