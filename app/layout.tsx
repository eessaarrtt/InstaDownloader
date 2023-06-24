import Navigation from './Components/navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta",
  description:
    "FastSaveInsta is an Instagram video downloader. Download Videos, Reels, Photos, Stories and IGTV from Instagram for all devices (PC, Mac, Android, iOS).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
