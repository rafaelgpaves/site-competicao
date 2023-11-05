import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import FooterNav from './components/FooterNav'
// import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [data, setData] = useState([])

  // useEffect(() => {
    
  // }, [])
  
  return (
    <>

    <Navbar></Navbar>
    
    <main
      className={`flex min-h-screen flex-col items-center p-24 bg-blue-500 ${inter.className}`}
    >

      <h1 className='text-4xl hover:text-yellow-400 mb-20'>Gosta de competir? Você veio para o lugar certo!</h1>

      <img src="https://rotaperdidablog.files.wordpress.com/2016/05/celular-x-relogio.png" alt="pessoas olhando no celular" className='mb-10 w-full' />

      <h2 className='font-bold text-xl'>Criar uma competição é fácil!</h2>

      <div className='w-screen h-80 p-4 flex flex-row my-3 justify-around'>
        <div className='flex flex-col justify-around'>
          <h2 className='text-2xl font-medium'>Passo 1:</h2>
          <p className='pl-5 text-3xl'>Escreva o nome da sua competição.</p>
        </div>
        <img src="https://pbs.twimg.com/media/EmyURxlXMAQSmHD.png" alt="nome" className='w-fit h-full' />
      </div>
      
      {/* https://static.vecteezy.com/ti/vetor-gratis/p1/2919386-time-of-e-sports-atleta-competicao-em-competicao-de-esporte-vetor.jpg */}
      <div className='w-screen h-80 p-4 flex flex-row my-3 justify-around'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLt9x61RpLkSYmqC-GQgFrPR2d193x4UV-Q&usqp=CAU" alt="categoria" className='w-fit h-full' />
        <div className='flex flex-col justify-around'>
          <h2 className='text-2xl font-medium'>Passo 2:</h2>
          <p className='pr-5 text-3xl'>Escolha a categoria da sua competição.</p>
        </div>
      </div>

      <div className='w-screen h-80 p-4 flex flex-row my-3 justify-around'>
        <div className='flex flex-col justify-around'>
          <h2 className='text-2xl font-medium'>Passo 3:</h2>
          <p className='pl-5 text-3xl'>Defina um preço para entrar (ou 0, se for grátis :O).</p>
        </div>
        <img src="https://www.supplymidia.com.br/wp-content/uploads/2020/09/searching-magnifier-glass-dollar-dollar-icon-under-magnifying-glass-picture-id1180233758-724x480.jpg" alt="preço" className='w-fit h-full' />
      </div>

      <div className='w-screen h-80 p-4 flex flex-row my-3 justify-around'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4g25PGJjN26sGNlR6X2Rye1gwfkK9ViMKA&usqp=CAU" alt="premio" className='w-fit h-full' />
        <div className='flex flex-col justify-around'>
          <h2 className='text-2xl font-medium'>Passo 4:</h2>
          <p className='pr-5 text-3xl'>Defina um prêmio (ou 0, se não tiver prêmio).</p>
        </div>
      </div>

      <div className='w-screen h-80 p-4 flex flex-row my-3 justify-around'>
        <div className='flex flex-col justify-around'>
          <h2 className='text-2xl font-medium'>Passo 5:</h2>
          <p className='pl-5 text-3xl'>Defina quem receberá o prêmio.</p>
        </div>
        <img src="https://emvisao.com/wp-content/uploads/2019/11/competi%C3%A7%C3%A3o-capa.png" alt="ganhadores" className='w-fit h-full' />
      </div>

      <h2 className='my-4 underline'>Crie uma conta agora para começar a competir!</h2>
      <form action="" className='flex flex-col m-3 items-center w-full'>

        <div className='flex flex-col'>
          <div className='flex flex-row h-10'>
            <div className='flex flex-row'>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" className='text-black mx-5' />
            </div>
            <div className='flex flex-row'>
              <label htmlFor="preco">Senha:</label>
              <input type="password" name="senha" className='text-black mx-5'  />
            </div>
          </div>

          <div className='flex flex-row m-3'>
            <label htmlFor="premio">Email:</label>
            <input type="email" name="email" className='text-black mx-5 w-full'  />
          </div>
        </div>

        <button type="submit" className='border border-gray-50 m-5 p-5 bg-slate-400 hover:bg-slate-500'>Criar conta!</button>
      </form>

      <button className='text-xl border border-black p-3 my-20 bg-slate-400 hover:bg-slate-500'>Ou veja todas as competições já criadas</button>
      <img className='w-full' src="https://media.istockphoto.com/id/89285817/pt/foto/pessoas-de-neg%C3%B3cios-a-caminho.jpg?s=612x612&w=0&k=20&c=6ozHiepq1d-E16Tkek5DJjTqXJULuBZM0GVLomDcu4M=" alt="" />
    </main>

    <FooterNav></FooterNav>

    </>
  )
}
