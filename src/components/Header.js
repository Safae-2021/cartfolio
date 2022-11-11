import React from 'react';
import Image from '../assets/404.jpg';
import '../styles/Header.css'
function Header() {


    return (
        <div className='mt-5  text-center' >
           <img src={Image} alt='sgd' id='img' />
        </div>
    )
}

export default Header;