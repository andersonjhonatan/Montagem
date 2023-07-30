import Image from 'next/image';
import Logo2 from '../../public/Logo2.png';
import carpenter from '../../public/carpenter.svg';
import rating from '../../public/rating.svg';
import payment from '../../public/payment.svg';
import tools from '../../public/tools.svg';
import quotationEsquerda from '../../public/quotation-esquerda.svg';
import quotationDireita from '../../public/quotation-direita.svg';
import teste1 from '../../public/teste1.jpg';
import teste2 from '../../public/teste2.jpg';
import teste3 from '../../public/teste3.jpg';
import teste4 from '../../public/teste4.jpg';

const buttonNavs = [
  {'#montagem': 'Home'},
  {'#beneficios': 'Benefícios'},
  {'#contato': 'Contato'},
  {'#depoimentos': 'Depoimentos'},
  {'/nossoservicos': 'Nossos Serviços'},
]

const Beneficios = {
  data: [
    {
      id: 1,
      exp: 'Experiência',
      foto: <Image src={carpenter} alt='Experiencia' width={100} height={100} />,
      mensagem: 'Profissional com Experiência',
    },
    {
      id: 2,
      exp: 'Avaliação',
      foto: <Image src={rating} alt='rating' width={100} height={100} />,
      mensagem: 'Profissional bem avaliado',
    },
    {
      id: 3,
      exp: 'Pagamento',
      foto: <Image src={payment} alt='Pagamento' width={100} height={100} />,
      mensagem: 'Você escolhe a forma de pagamento Pix, Cartão de crédito e débito',
    },
    {
      id: 4,
      exp: 'Sem Preocupação',
      foto: <Image src={tools} alt='Sem Preocupação' width={100} height={100} />,
      mensagem: 'Não precisa sem preocupar com as ferramentas',
    },
  ],
};

const Depoimentos = {
  data: [
    {
      id: 1,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'Mike',
      foto: '/teste1.jpg',
      Montador: 'Anderson',
    },
    {
      id: 2,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'Pride',
      foto: '/teste2.jpg',
      Montador: 'Anderson',
    },
    {
      id: 3,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'Matheus',
      foto: '/teste3.jpg',
      Montador: 'Anderson',
    },
    {
      id: 4,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'Josefa',
      foto: '/teste4.jpg',
      Montador: 'Anderson',
    },
    {
      id: 5,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'NOVO CLIENTE',
      foto: '/teste4.jpg',
      Montador: 'Anderson',
    },
    {
      id: 6,
      esquerda: (
        <Image src={quotationEsquerda} alt='quotationDireita' width={20} height={20} />
      ),
      comentario: 'O melhor montador que já contratei',
      direita: (
        <Image src={quotationDireita} alt='quotationDireita' width={20} height={20} />
      ),
      nome: 'NOVO CLIENTE',
      foto: '/teste4.jpg',
      Montador: 'Anderson',
    },
  ],
};

export { buttonNavs, Beneficios, Depoimentos };
