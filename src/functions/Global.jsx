import Link from 'next/link.js';
import style from './GlobalFunction.module.css';
import { Beneficios, buttonNavs, Depoimentos } from '../data/global';
import Image from 'next/image';

const renderizarLinks = () => {
  return buttonNavs.map((button) => {
    const [[link, name]] = Object.entries(button);
    return (
      <li className={style.link} key={link}>
        <Link href={link} passHref className={style.buttonLink}>
          {name}
        </Link>
      </li>
    );
  });
};

const renderizarBeneficios = () => {
  return Beneficios.data.map((beneficio) => {
    return (
      <div key={beneficio.id} className={style.beneficiosMain} id='beneficios'>
        <h4>{beneficio.exp}</h4>
        <figure>{beneficio.foto}</figure>
        <p className={style.mensagem}>{beneficio.mensagem}</p>
      </div>
    );
  });
};

const renderizarDepoimentos = () => {
  return Depoimentos.data.map((depoimento) => {
    return (
      <div key={depoimento.id} className={style.mainDepoimentos}>
        <>
          <p className={style.depoimento}>{depoimento.comentario}</p>
          <p>
            <strong>Cliente: {depoimento.nome}</strong>
          </p>
          <figure className={style.fotoCliente}>
            <Image src={depoimento.foto} alt='depoimentos' width={100} height={100} />
            <strong>Montador: {depoimento.Montador}</strong>
          </figure>
        </>
      </div>
    );
  });
};

const renderizarFotos = () => {
  return Array.from({ length: 30 }, (_, i) => i + 1).map((foto, index) => {
    return (
      <Image
        src={`/servicos/${foto}.png`}
        alt='figure image'
        width={350}
        height={350}
        key={index}
        priority
        className={style.img}
      />
    );
  });
};

export { renderizarLinks, renderizarBeneficios, renderizarDepoimentos, renderizarFotos };
