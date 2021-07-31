import roomImg from '../../assets/imgs/roomImg.svg'
import map from '../../assets/imgs/Map.svg'
import rooms from '../../assets/imgs/Rooms.svg'
import beds from '../../assets/imgs/Bed.svg'
import bathtubs from '../../assets/imgs/Banheira.svg'
import { OurFeatureStyle, HotelsCardsStyle } from './styled'

export default function OurFeature(){
    return(
        <OurFeatureStyle>
            <h1>Our Feature</h1>
            <p>Creating real value in property and places.</p>
            <HotelsCardsStyle>
                <div>
                    <img src={roomImg} alt='Imagem do quarto'></img>
                    <section>
                        <h2>Ample Floor Apartment</h2>
                        <p> <img src={map} alt='Icone marcador'></img> 1900 built, 20th St, New York</p>
                        <span>
                            <p> <img src={rooms} alt='Icone quantidade de quartos'></img> 3</p>
                            <p> <img src={beds} alt='Icone quantidade de camas'></img> 3</p>
                            <p> <img src={bathtubs} alt='Icone quantidade de banheira'></img> 2</p>
                        </span>
                    </section>
                </div>
                <div>
                    <img src={roomImg} alt='Imagem do quarto'></img>
                    <section>
                        <h2>Ample Floor Apartment</h2>
                        <p> <img src={map} alt='Icone marcador'></img> 1900 built, 20th St, New York</p>
                        <span>
                            <p> <img src={rooms} alt='Icone quantidade de quartos'></img> 3</p>
                            <p> <img src={beds} alt='Icone quantidade de camas'></img> 3</p>
                            <p> <img src={bathtubs} alt='Icone quantidade de banheira'></img> 2</p>
                        </span>
                    </section>
                </div>
                <div>
                    <img src={roomImg} alt='Imagem do quarto'></img>
                    <section>
                        <h2>Ample Floor Apartment</h2>
                        <p> <img src={map} alt='Icone marcador'></img> 1900 built, 20th St, New York</p>
                        <span>
                            <p> <img src={rooms} alt='Icone quantidade de quartos'></img> 3</p>
                            <p> <img src={beds} alt='Icone quantidade de camas'></img> 3</p>
                            <p> <img src={bathtubs} alt='Icone quantidade de banheira'></img> 2</p>
                        </span>
                    </section>
                </div>
            </HotelsCardsStyle>
        </OurFeatureStyle>
    )
}