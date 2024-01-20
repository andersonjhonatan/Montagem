'use client'
import Servicos from '../components/Servicos'
import Footer from '../components/Footer'
import Head from 'next/head'

const NossoServicos = () => {
  return (
    <div>
      <Head>
        <title>Nossos Serviços</title>
      </Head>
      <Servicos />
      <Footer />
    </div>
  )
}

export default NossoServicos
