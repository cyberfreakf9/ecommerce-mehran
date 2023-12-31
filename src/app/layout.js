import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SlickSlider from '@/components/slider'
import GlobalState from '@/context'
import AuthProvider from '@/context/AuthProvider'
import NavBar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mehran Filter',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className=" overflow-x-hidden">
        <AuthProvider>
          <GlobalState>
            {/* <Header /> */}
            <NavBar />
            <SlickSlider />
            <main> {children} </main>
            <Footer />
          </GlobalState>
        </AuthProvider>
      </body>
    </html>
  )
}
