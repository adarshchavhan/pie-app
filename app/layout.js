import '@/public/icons/mdb-flags.css'
import '@/public/icons/flaticon.css'
import '@/styles/globals.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'Multilingual Business Process Outsourcing Solutions, PIE Multi',
  description: 'Outsource to India and save cost by 50% on business service outsourcing. ✓ 24/7 Support ✓ Multilingual Business Process Outsourcing Solutions',
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,800;0,900;1,600;1,700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
