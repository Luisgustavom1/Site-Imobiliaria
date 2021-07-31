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
                <div className='one'>
                    <article>
                        <h1>London</h1> 
                        <p>45 Properties</p>
                    </article>
                </div>
                <div className='two'>
                    <article>
                        <h1>London</h1> 
                        <p>45 Properties</p>
                    </article>
                </div>
                <div className='three'>
                    <article>
                        <h1>London</h1> 
                        <p>45 Properties</p>
                    </article>
                </div>
                <div className='four'>
                    <article>
                        <h1>London</h1> 
                        <p>45 Properties</p>
                    </article>
                </div>
                <div className='five'>
                    <article>
                        <h1>London</h1> 
                        <p>45 Properties</p>
                    </article>
                </div>
            </CitysGrid>
        </ChooseStyle>
    )
}