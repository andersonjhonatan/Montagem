import Link from 'next/link.js';
import style from './GlobalFunction.module.css';
import { Beneficios, buttonNavs, Depoimentos } from '../data/global';
import Image from 'next/image';
const renderizarLinks=()=>buttonNavs.map(button=>{const [[link,name]]=Object.entries(button);return <li className={style.link} key={link}><Link href={link} className={style.buttonLink}>{name}</Link></li>})
const renderizarBeneficios=()=>Beneficios.data.map(beneficio=><div key={beneficio.id} className={style.beneficiosMain}><h4>{beneficio.exp}</h4><figure className={style.fotoBeneficio}>{beneficio.foto}</figure><p className={style.mensagem}>{beneficio.mensagem}</p></div>)
const renderizarDepoimentos=()=>Depoimentos.data.map(depoimento=><div key={depoimento.id} className={style.mainDepoimentos}><p className={style.depoimento}>{depoimento.comentario}</p><p><strong>Cliente: {depoimento.nome}</strong></p><figure className={style.fotoCliente}><strong>Montador: {depoimento.Montador}</strong></figure></div>)
const renderizarFotos=()=>Array.from({length:30},(_,i)=>i+1).map((foto,index)=><Image src={`/servicos/${foto}.png`} alt={`Trabalho de montagem realizado - foto ${foto}`} width={350} height={350} key={foto} priority={index<4} loading={index<4?undefined:'lazy'} sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" className={style.img}/>)
export {renderizarLinks,renderizarBeneficios,renderizarDepoimentos,renderizarFotos};
