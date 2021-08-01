import { SaleStyle } from "./styled"

export default function Announce(){
    return(
        <SaleStyle>
            <h1>Do you Own the property</h1>
            <p>Here is a list of the greatest real estate company</p>
            <label>Digite seu email</label>
            <input placeholder='Your Email Adress'></input>
            <button>Subscribe</button>
        </SaleStyle>
    )
}