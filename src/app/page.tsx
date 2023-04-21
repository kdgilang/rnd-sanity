import Image from 'next/image'
import { Inter } from 'next/font/google'
import getPagesService from './services/getPagesService'

const inter = Inter({ subsets: ['latin'] })

export default async function Page() {
  const data = await getPagesService()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  )
}
