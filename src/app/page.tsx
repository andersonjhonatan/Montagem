import Beneficios from '../components/Beneficios'
import Header from '../components/Header'
import Main from '../components/Main'
import Agende from '../components/Agende'
import Cardsgaleria from '../components/Cards'

export default function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Beneficios />
      <Cardsgaleria />
      <Agende />
      {/* <Depoimentos /> */}
    </div>
  )
}
