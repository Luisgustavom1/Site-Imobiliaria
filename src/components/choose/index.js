import london from '../../assets/imgs/London.svg'
import sydney from '../../assets/imgs/Sydney.svg'
import newYork from '../../assets/imgs/newYork.svg'
import australia from '../../assets/imgs/australia.svg'
import tokyo from '../../assets/imgs/tokyo.svg'

import { ChooseStyle, CitysGrid } from './styled'
export default function Choose(){
    return(
        <ChooseStyle>
            <h1>Choose your perfect city</h1>
            <p>finding the dream for every owner</p>
            <CitysGrid>
                <div className='london'><img src={london} alt='Imagem cidade London'></img></div>
                <div className='sydney'><img src={sydney} alt='Imagem cidade London'></img></div>
                <div className='australia'><img src={australia} alt='Imagem cidade London'></img></div>
                <div className='NY'><img src={newYork} alt='Imagem cidade London'></img></div>
                <div className='tokyo'><img src={tokyo} alt='Imagem cidade London'></img></div>
            </CitysGrid>
        </ChooseStyle>
    )
}