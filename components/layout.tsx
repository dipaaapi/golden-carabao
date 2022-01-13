import Header from '../components/header'
import Footer from '../components/footer'
// import { children } from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default Layout