import london from '../../assets/imgs/London.svg'
import sydney from '../../assets/imgs/Sydney.svg'
import newYork from '../../assets/imgs/NewYork.svg'
import australia from '../../assets/imgs/Australia.svg'
import tokyo from '../../assets/imgs/Tokyo.svg'

import { ChooseStyle, CitysGrid } from './styled'
export default function Choose(){
    return(
        <ChooseStyle>
            <h1>Choose your perfect city</h1>
            <p>finding the dream for every owner</p>
            <CitysGrid>
                <img src={london} alt='Imagem cidade London'></img>
                <img src={sydney} alt='Imagem cidade London'></img>
                <img src={australia} alt='Imagem cidade London'></img>
                <img src={newYork} alt='Imagem cidade London'></img>
                <img src={tokyo} alt='Imagem cidade London'></img>
            </CitysGrid>
        </ChooseStyle>
    )
}