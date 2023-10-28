import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 education',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Noto+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"></link> */}
    
      <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Inter&family=Roboto+Mono:wght@300;500&display=swap" rel="stylesheet"/>


      </head>
      <ThemeProvider>
      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
