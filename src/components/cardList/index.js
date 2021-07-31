export default function CardList(){
    return(
        <div>
            <div>
                <label for='location'>LOCATION</label>
                <input id='_location' name='location'></input>
                <datalist id='location'>
                    <option value='NewWork'>New York</option>
                    <option value='Hawai'>Hawai</option>
                </datalist>
            </div>
        </div>
    )
}