import Beneficios from '../components/Beneficios'
import Header from '../components/Header'
import Main from '../components/Main'
import Agende from '../components/Agende'
import Depoimentos from '../components/Depoimentos'

export default function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Beneficios />
      <Agende />
      <Depoimentos />
    </div>
  )
}
