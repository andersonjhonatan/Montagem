import Footer from '../components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTag'
import Whats from '../components/WhatsButton'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: {
    default: 'Seu Montador | Montagem Profissional de Móveis',
    template: '%s | Seu Montador',
  },
  description: 'Montagem profissional de móveis com cuidado, precisão e agendamento facilitado. Solicite seu orçamento e deixe seus móveis nas mãos de quem entende.',
  keywords: ['montador de móveis', 'montagem de móveis', 'montador profissional', 'montagem residencial', 'Seu Montador'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Seu Montador | Montagem Profissional de Móveis',
    description: 'Montagem de móveis com precisão, cuidado e atendimento profissional.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GoogleTagManager />
        {children}
        <Footer />
        <Whats />
      </body>
    </html>
  )
}
