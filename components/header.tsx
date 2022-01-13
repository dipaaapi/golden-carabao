import Head from 'next/head'
import Navigation from '../components/nav'
const db = {
    title: 'Golden Carabao',
    logo: '/img/carabaologo.png',
    moto: '“Great results do not happen by coincidence”'
}

const Header = () => (
    <>
        <Head>
            <title>{db.title} | {db.moto}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href={db.logo} />
            <link href="https://dipaaapi.github.io/personal.json" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navigation />
    </>
)

export default Header