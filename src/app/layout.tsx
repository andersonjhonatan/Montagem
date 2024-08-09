import Footer from '../components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

import Whats from '../components/WhatsButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Montador de Móveis',
  description: 'Montador de Móveis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
        <Whats />
      </body>
    </html>
  )
}
