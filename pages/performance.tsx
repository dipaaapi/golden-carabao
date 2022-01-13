import type { NextPage } from 'next'
import Image from 'next/image'

const Performance: NextPage = () => {
    const db = {
        logo: '/img/carabaologo.png',
        title: 'golden carabao',
        subt: 'performance intelligence',
        subcon: {
            title1: 'Lorem ipsum.',
            p1: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.'
        },
        bg: '/img/bg1.gif'
    }
    return (
        <>
        <div className='w-full h-full fixed top-0 left-0 -z-50 object-cover object-center brightness-50'>
            <Image src={db.bg} layout='fill' />
        </div>
        <div className="justify-center items-center">
            <p className="text-center font-black text-5xl md:text-6xl uppercase text-white">{db.title}</p>
            <p className="text-center text-3xl text-white">{db.subt}</p>
            <hr className='w-1/3 mx-auto my-5 text-yellow-500' />
        </div>

        <div className="flex space-x-10 md:w-3/4 w-full justify-center my-5 mx-auto">
            <div className="md:w-1/3">
                <div className='mb-20 mb-0 w-max mx-auto text-white justify-center'>
                    <Image src='/img/shake.png' width={50} height={50} />
                </div>
                <p className='font-bold text-white text-center text-2xl my-3'>{db.subcon.title1}</p>
                <p className='font-thin text-white text-center text-base text-justify'>{db.subcon.p1}</p>
            </div>
            <div className="md:w-1/3">
                <div className='mb-20 mb-0 w-max mx-auto text-white justify-center'>
                    <Image src='/img/shake.png' width={50} height={50} />
                </div>
                <p className='font-bold text-white text-center text-2xl my-3'>{db.subcon.title1}</p>
                <p className='font-thin text-white text-center text-base text-justify'>{db.subcon.p1}</p>
            </div>
            <div className="md:w-1/3">
                <div className='mb-20 mb-0 w-max mx-auto text-white justify-center'>
                    <Image src='/img/shake.png' width={50} height={50} />
                </div>
                <p className='font-bold text-white text-center text-2xl my-3'>{db.subcon.title1}</p>
                <p className='font-thin text-white text-center text-base text-justify'>{db.subcon.p1}</p>
            </div>
        </div>
        </>
    )
}

export default Performance
