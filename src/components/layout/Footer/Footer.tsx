import {FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer className={`flex justify-center flex-col items-center h-1/5 p-4 w-full ${styles.footer}`}>
            <ul className='flex justify-center'>
                <li className='text-3xl mr-6 text-white hover:text-yellow-600 cursor-pointer hover:scale-125  duration-150'><FaFacebook /></li>
                <li className='text-3xl mr-6 text-white hover:text-yellow-600 cursor-pointer hover:scale-125  duration-150'><FaInstagram /></li>
                <li className='text-3xl mr-6 text-white hover:text-yellow-600 cursor-pointer hover:scale-125  duration-150'><FaEnvelope /></li>
                <li className='text-3xl mr-6 text-white hover:text-yellow-600 cursor-pointer hover:scale-125  duration-150'><FaGithub /></li>
                <li className='text-3xl mr-6 text-white hover:text-yellow-600 cursor-pointer hover:scale-125  duration-150'><FaLinkedin /></li>
            </ul>
            <p className='text-white'><span className='font-bold text-yellow-600'>Costs</span> &copy; 2023</p>
        </footer>
    )
}