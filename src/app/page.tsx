import { Corner } from '@/components/corner'
import { Project } from '@/components/project'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#191919] h-screen w-screen">
      <div className='w-[90%] m-auto'>
        <Corner size={250} padding={18} twoCorners className='flex flex-col'>
          <div>
            <Image src={"/logo_pv_4_gray_2.png"} alt='logo' width={200} height={200}></Image>
          </div>
          <div className='flex mt-8 p-8'>
            <section className='flex flex-col pl-12 w-[60%]'>
              <h1 className='text-white text-8xl font-thin'>Bem Vindo</h1>
              <span className='text-white font-thin text-lg pl-3 mt-6'>
                Meu nome é Pedro Valério. Sou desenvolvedor full-stack, apaixonado por tecnologia e por resolver problemas.
              </span>
              <span className='text-white font-thin text-lg pl-3 mt-6'>
                Tenho experiencia proficional como egenheiro de software full-stack na Ápice Sistemas.
                Já desenvolvi muitas aplicações web, mobile e desktop.
                Dentre as aplicações que desenvolvi, destaco o ecommerce de uma grande empresa de cosmeticos.
              </span>
            </section>
            <section className='ml-20 mt-6'>
              <h1 className='text-white text-3xl font-extralight mb-4'>Projetos</h1>
              <Corner size={60} padding={4} className='m-6 flex flex-col gap-4'>
                <Project href='https://www.npmjs.com/package/ormize'>ormize</Project>
                <Project href='https://github.com/pedroddjkkk/ProjetoFazenda'>fazenda</Project>
                <Project href='https://github.com/pedroddjkkk/InhaLock'>inha lock</Project>
                <Project href='https://github.com/pedroddjkkk/CalculadoraReact'>calculadora</Project>
              </Corner>
            </section>
          </div>

        </Corner>
      </div>
    </main >
  )
}
