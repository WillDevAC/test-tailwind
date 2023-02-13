import type { AppProps } from "next/app"
import { Nunito, Titillium_Web } from "@next/font/google"
import { AuthProvider } from "../contexts/auth.context"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import "../styles/globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
})

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-titillium",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${nunito.variable} font-sans,
        ${titillium.variable} font-sans,
      bg-black-700`}
    >
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer/>
      </AuthProvider>
    </main>
  )
}
