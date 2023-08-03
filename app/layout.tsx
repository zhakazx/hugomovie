import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SWRProvider } from './swr-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HugoMovie',
  description: 'Temukan dunia magis sinema dalam genggaman Anda dengan HugoMovie! Nikmati beragam informasi film terbaru, ulasan mendalam, trailer, dan banyak lagi. Temukan film-film favorit dari berbagai genre, jelajahi sinopsis menarik, dan dapatkan rekomendasi yang disesuaikan dengan selera Anda. Rasakan pengalaman sinema yang tak terlupakan di setiap layar Anda dengan HugoMovie - Movies App!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SWRProvider>
      <html lang="en" data-theme="mytheme">
        <body className={inter.className}>{children}</body>
      </html>
    </SWRProvider>
  )
}
