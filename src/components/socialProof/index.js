import img7 from '../../assets/imgs/image 7.svg'
import img8 from '../../assets/imgs/image 8.svg'
import img10 from '../../assets/imgs/image 10.svg'
import img11 from '../../assets/imgs/image 11.svg'
import img12 from '../../assets/imgs/image 12.svg'

import { SocialProofStyle, CompaneysStyle } from './styled'
export default function SocialProof(){
    return(
        <SocialProofStyle>
            <h1>Our properties partners</h1>
            <p>Outstanding partners. Outstanding Results</p>
            <CompaneysStyle>
                <img src={img7} alt='Companey 1'></img>
                <img src={img8} alt='Companey 2'></img>
                <img src={img10} alt='Companey 3'></img>
                <img src={img11} alt='Companey 4'></img>
                <img src={img12} alt='Companey 5'></img>
            </CompaneysStyle>
        </SocialProofStyle>
    )
}