import { CardListStyle } from './styled'

export default function CardList(){
    return(
        <CardListStyle>
            <div>
                <label for='location'>Location</label>
                <select id='location'>
                    <option value='NewWork'>New York</option>
                    <option value='Hawai'>Hawai</option>
                </select>
            </div>
            <div>
                <label for='location'>Property</label>
                <select id='location'>
                    <option value='NewWork'>Deluxe</option>
                    <option value='Hawai'>Simple</option>
                </select>
            </div>
            <div>
                <label for='location'>Max Price</label>
                <select id='location'>
                    <option value='NewWork'>R$7000</option>
                    <option value='Hawai'>R$5000</option>
                </select>
            </div>
            <button>Search</button>
        </CardListStyle>
    )
}