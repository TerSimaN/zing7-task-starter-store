import { Metadata } from "next"
import { Rubik, Roboto } from "next/font/google"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik"
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${rubik.variable} ${roboto.variable}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
