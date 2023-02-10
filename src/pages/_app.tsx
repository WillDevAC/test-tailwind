import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Nunito, Titillium_Web } from "@next/font/google"

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
      <Component {...pageProps} />
    </main>
  )
}
