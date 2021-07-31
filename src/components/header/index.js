import React from 'react'

import { HeaderStyled } from '../header/styled'
import logo from '../../assets/imgs/Logo.png'
export default function Header(){

    return(
        <HeaderStyled>
            <img src={logo} alt='Imagem da logo'/>
            <nav>
                <p>Home</p>
                <p>Feature</p>
                <p>Pricing</p>
                <p>About</p>
                <p>Contact</p>
            </nav>
            <button>Sign in</button>
        </HeaderStyled>
    )
}