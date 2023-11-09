import Image from 'next/image'
import { Inter } from 'next/font/google'
import LayoutContainer from '@/containers/LayoutContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutContainer title={`Robert`}>
      PEPEP
    </LayoutContainer>
  )
}
