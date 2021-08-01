import person1 from '../../assets/imgs/Ellipse 6.svg'
import person2 from '../../assets/imgs/Ellipse 8.svg'
import person3 from '../../assets/imgs/Ellipse 7.svg'
import LT from '../../assets/imgs/LT.svg'
import GT from '../../assets/imgs/LT.svg'

import { Circle, ClientsStyle, Line, TestimonialStyle } from './styled'

export default function Testimonial(){
    return(
        <TestimonialStyle>
            <div>
                <h1>Our Clients says</h1>
                <span></span>
                <p>We've put together a list of powerful slogan and taglines for your social media marketing business  a step-by-step guide on how to come up with a powerful slogan for your brand. marketing automation, web, mobile, e-commerce.</p>
            </div>
            <ClientsStyle>
                <Circle className='left'> <img src={LT} alt='Seta para esquerda'/> </Circle>
                <Line></Line>
                <article>
                    <img src={person1} alt='Imagem pessoa 1'></img>
                    <img src={person2} alt='Imagem pessoa 2'></img>
                    <img src={person3} alt='Imagem pessoa 3'></img>
                </article>
                <Circle className='right' > <img src={GT} alt='Seta para esquerda'/> </Circle>
            </ClientsStyle>
        </TestimonialStyle>
    )
}