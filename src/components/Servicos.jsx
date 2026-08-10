import styles from '../styles/Servicos.module.css'
import Image from 'next/image'
import montagem from '../../public/servicos/montagem.png'
import desmontagem from '../../public/servicos/desmontagem.png'
import manutencao from '../../public/servicos/manutenção.png'
import tv from '../../public/servicos/tv.png'
import dobradicas from '../../public/servicos/dobradicas.png'
import cortinas from '../../public/servicos/cortinas.png'
const services=[{title:'Montagem de móveis',text:'Montagem cuidadosa e precisa, respeitando estrutura, ferragens e orientações do fabricante.',image:montagem},{title:'Desmontagem',text:'Desmontagem organizada para mudanças, reformas ou realocação, preservando peças e ferragens.',image:desmontagem},{title:'Manutenção e ajustes',text:'Correções, regulagens e pequenos reparos para recuperar estabilidade e funcionamento do móvel.',image:manutencao},{title:'Instalação de cortinas',text:'Instalação alinhada e segura para deixar o ambiente pronto e bem acabado.',image:cortinas},{title:'Suporte para TV',text:'Instalação de suporte com atenção ao posicionamento, nivelamento e segurança.',image:tv},{title:'Dobradiças e regulagens',text:'Ajuste e substituição de dobradiças para portas mais alinhadas e funcionamento adequado.',image:dobradicas}]
const Servicos=()=> <section className={styles.servicos} id="nossoservicos"><div className={styles.heading}><span>SERVIÇOS</span><h2>Soluções para deixar tudo no lugar.</h2><p>Do móvel novo aos ajustes do dia a dia, um atendimento focado em execução cuidadosa e acabamento.</p></div><div className={styles.grid}>{services.map((s,i)=><article className={styles.card} key={s.title}><div className={styles.imageWrap}><Image src={s.image} alt={s.title} className={styles.image} sizes="(max-width: 700px) 100vw, 33vw" /></div><div className={styles.cardBody}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div><div className={styles.galleryIntro} id="galeria"><span>TRABALHOS REALIZADOS</span><h2>Detalhes que mostram o cuidado na execução.</h2></div></section>
export default Servicos
