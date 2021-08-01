import illustration from '../../assets/imgs/Illustration.svg'
import { AboutStyle } from './styled'

export default function Abouts(){
    return(
        <AboutStyle>
            <aside>
                <div></div>
                <h1>Why picked us up?</h1>
                <p>This slogan produces a feeling of confidence and also helps clients remember the name of the agent. “As an analytical realtor.</p>
                <button>Read More &gt; </button>
            </aside>
            <img src={illustration} alt='Imagem de ilustração'></img>
        </AboutStyle>
    )
}