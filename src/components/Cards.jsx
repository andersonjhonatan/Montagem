'use client'

import { renderizarFotos } from "@/functions/Global"
import styles from '../styles/Cards.module.css'

const CardsGaleria = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <figure className={styles.figureservices}>{renderizarFotos()}</figure>
            </div>
          </div>  
        </div>            
      </div>
    </div>
  )
}

export default CardsGaleria
