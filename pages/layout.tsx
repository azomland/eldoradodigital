
import { Source_Code_Pro } from 'next/font/google'
import '../styles/globals.css'

const inter = Source_Code_Pro({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
