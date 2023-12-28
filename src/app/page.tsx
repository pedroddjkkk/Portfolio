import { Corner } from '@/components/corner'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#191919] h-screen w-screen">
      <Corner size={250} padding={20} className='p-12'>
        <h1 className='text-white text-9xl font-thin p-8 pl-12'>Bem Vindo</h1>
      </Corner>
    </main >
  )
}
