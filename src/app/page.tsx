import { Corner } from '@/components/corner'
import { Project } from '@/components/project'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaNpm } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#191919] h-fit md:pb-0 min-h-screen pb-10 flex justify-center pr-[18px]">
      <div className='w-[90%] md:mt-32 mt-8 max-w-[1530px]'>
        <Corner size={250} padding={18} twoCorners className='flex flex-col bg-[#17191a]'>
          <div className='md:p-8 pt-4 w-full flex justify-between items-center'>
            <Image src={"/logo_pv_4_gray_2.png"} alt='logo' width={50} height={50} className='ml-4'/>
            <div className='flex gap-6'>
              <Link href={"mailto:contato@pedrovalerio.com"} target='_blank'>
                <MdOutlineEmail className="text-gray-400 hover:text-gray-300 transition-colors duration-300" size={32} />
              </Link>
              <Link href={"https://github.com/pedroddjkkk"} target='_blank'>
                <FaGithub className="text-gray-400 hover:text-gray-300 transition-colors duration-300" size={32} />
              </Link>
              <Link href={"https://www.npmjs.com/~pedroddjkkk"} target='_blank'>
                <FaNpm className="text-gray-400 hover:text-gray-300 transition-colors duration-300" size={32} />
              </Link>
            </div>
          </div>
          <div className='flex md:p-8 p-0 pt-4 md:pt-0 flex-col md:flex-row items-center'>
            <section className='flex flex-col md:pl-12 p-2 md:w-[60%] w-full'>
              <h1 className='text-white sm:text-8xl text-6xl font-thin text-center md:text-start'>Bem Vindo</h1>
              <span className='text-white font-thin text-lg pl-3 mt-6 text-center md:text-start'>
                Meu nome é Pedro Valério. Sou desenvolvedor full-stack, apaixonado por tecnologia e por resolver problemas.
              </span>
              <span className='text-white font-thin text-lg pl-3 mt-6 text-center md:text-start'>
                Tenho experiencia proficional como egenheiro de software full-stack na Ápice Sistemas.
                Já desenvolvi muitas aplicações web, mobile e desktop.
                Dentre as aplicações que desenvolvi, destaco o ecommerce de uma grande empresa de cosmeticos.
              </span>
            </section>
            <section className='md:ml-20 sm:mt-6 mt-10 md:mb-0 mb-12'>
              <h1 className='text-white text-3xl font-extralight mb-4'>Projetos</h1>
              <Corner size={60} padding={4} className='sm:m-6 ml-4 mt-3 flex flex-col gap-4'>
                <Project href='https://www.npmjs.com/package/ormize'>ormize</Project>
                <Project href='https://github.com/pedroddjkkk/ProjetoFazenda'>fazenda</Project>
                <Project href='https://github.com/pedroddjkkk/InhaLock'>inha lock</Project>
                <Project href='https://github.com/pedroddjkkk/Inhax'>inhax</Project>
                <Project href='https://github.com/pedroddjkkk/CalculadoraReact'>calculadora</Project>
              </Corner>
            </section>
          </div>

        </Corner>
      </div>
    </main >
  )
}
