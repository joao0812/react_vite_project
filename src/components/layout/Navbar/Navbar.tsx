import { Link } from "react-router-dom"

import { Container } from "../container/Container"

import style from './Navbar.module.css'
import coin_logo from '../../../images/coin_logo.png'

export function Navbar() {
    return (
        <nav className={`${style.navbar}`}>
            <Container>
                <Link to="/"><img className="w-12" src={coin_logo} alt="Coin Logo Cost"/></Link>
                <ul className={`${style.navbar} flex justify-between p-4 text-white`}>
                    <li className="mr-4 hover:text-yellow-500"><Link to='/'>Home</Link></li>
                    <li className="mr-4 hover:text-yellow-500"><Link to='/projects'>Projects</Link></li>
                    <li className="mr-4 hover:text-yellow-500"><Link to='/company'>Company</Link></li>
                    <li className="mr-4 hover:text-yellow-500"><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}