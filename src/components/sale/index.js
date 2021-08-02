import { SaleStyle, LabelHiddenStyle, Square } from "./styled"
import patten from '../../assets/imgs/patten.svg'
import square from '../../assets/imgs/square.svg'

export default function Announce(){
    return(
        <SaleStyle>
            <h1>Do you Own the property</h1>
            <p>Here is a list of the greatest real estate company</p>
            <LabelHiddenStyle>Digite seu email</LabelHiddenStyle>
            <input placeholder='Your Email Adress'></input>
            <button>Subscribe</button>
            <Square> <img src={square} alt='Imagem ilustração'></img> </Square>
            <img src={patten} alt='Imagem de ilustração' className='imgPontilhada' ></img>
        </SaleStyle>
    )
}