'use client'
import { renderizarFotos } from '@/functions/Global'
import styles from '../styles/Cards.module.css'
const CardsGaleria=()=> <section className={styles.gallery} aria-label="Galeria de trabalhos realizados"><div className={styles.grid}>{renderizarFotos()}</div></section>
export default CardsGaleria
