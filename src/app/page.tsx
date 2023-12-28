import { Corner } from '@/components/corner'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#191919] h-screen w-screen">
      <Corner size={200} padding={15} className='p-4'>
        <h1 className='text-white text-2xl'>Bem Vindo</h1>
      </Corner>
    </main>
  )
}
