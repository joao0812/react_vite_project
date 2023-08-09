import {FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer className='flex justify-center flex-col items-center'>
            <ul className='flex justify-center'>
                <li className='text-3xl mr-6 hover:text-yellow-600 cursor-pointer'><FaFacebook /></li>
                <li className='text-3xl mr-6 hover:text-yellow-600 cursor-pointer'><FaInstagram /></li>
                <li className='text-3xl mr-6 hover:text-yellow-600 cursor-pointer'><FaEnvelope /></li>
                <li className='text-3xl mr-6 hover:text-yellow-600 cursor-pointer'><FaGithub /></li>
                <li className='text-3xl mr-6 hover:text-yellow-600 cursor-pointer'><FaLinkedin /></li>
            </ul>
            <p><span className='font-bold text-yellow-600'>Costs</span> &copy; 2023</p>
        </footer>
    )
}