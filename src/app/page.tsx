import { Corner } from '@/components/corner'

export default function Home() {
  return (
    <main className="bg-[#191919] h-screen w-screen">
      <div className='w-[90%] m-auto'>
        <Corner size={250} padding={18} twoCorners className='flex mt-8 p-8'>
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
          <section>
            <h1 className='text-white text-2xl font-thin '>Projetos</h1>
          </section>
        </Corner>
      </div>
    </main >
  )
}
