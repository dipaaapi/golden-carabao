import Link from 'next/link'
import Image from 'next/image'
const db = {
    logo: '/img/carabaologo.png',
    links: {
        first: '/performance',
        second: '/acquisition',
    }
}

const Navigation = () => (
    <div className="w-full">
        <nav className='p-3'>
            <ul className='flex text-center align-middle justify-between'>
                <li className='font-semibold'>
                    <Link href="/">
                        <a className=''>
                            <Image src={db.logo} alt="golden carabao logo" width={60} height={30} />
                        </a>
                    </Link>
                </li>
                <div className='flex space-x-4'>
                    <li className='text-white font-semibold'>
                        <Link href={db.links.first}>
                        <a>Performance Intelligence</a>
                        </Link>
                    </li>
                    <li className='text-white font-semibold'>
                        <Link href={db.links.second}>
                        <a>Acquisition & Development</a>
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
)

export default Navigation
