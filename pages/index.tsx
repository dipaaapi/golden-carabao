import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  const db = {
    logo: '/img/carabaologo.png',
    title: 'golden carabao',
    subt: 'Hospitality Group',
    moto: '“Great results do not happen by coincidence”',
    firstp: 'prides itself with our passion and commitment to the industry.  Backed by Chef Philip John Golding, a well-established figure in the restaurant and hospitality scene, we bring necessary ingredients to help facilitate the success of your business.',
    bg: '/img/bg1.gif'
  }
  return (
    <>
      {/* <video typeof='video/mp4' src={db.video1} className='w-full h-full fixed top-0 left-0 -z-50 object-cover object-center brightness-50' autoPlay loop controls/> */}
      <div className='w-full h-full fixed top-0 left-0 -z-50 object-cover object-center brightness-50'>
        <Image src={db.bg} layout='fill' />
      </div>
      <div className="justify-center items-center">
        <div className='mx-auto w-max mt-10 md:mt-20'>
          <Image src={db.logo} width={150} height={80} />
        </div>
        <p className="text-center font-black text-5xl md:text-6xl uppercase text-white">{db.title}</p>
        <p className="text-center text-3xl text-white">{db.subt}</p>
        <p className="text-center text-base italic text-white">{db.moto}</p>
        <hr className='w-1/3 mx-auto my-5 text-yellow-500' />
        <p className="text-center text-base text-white p-5 md:p-0 w-full md:w-1/3 mx-auto">{db.firstp}</p>
      </div>

      <div className='animate-bounce mt-20 mb-20 mb-0 w-max mx-auto text-white'>
        <Image src='/img/arrowdown.png' width={30} height={20} />
      </div>
    </>
  )
}

export default Home
