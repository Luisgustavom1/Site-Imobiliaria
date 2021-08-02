import Logo from '../../assets/imgs/Logo.png'
import facebook from '../../assets/imgs/Facebook.svg'
import twitter from '../../assets/imgs/Twitter.svg'
import youtube from '../../assets/imgs/Youtube.svg'
import instagram from '../../assets/imgs/Instagram.png'

import { FooterStyle, AsideFooter, SectionFooter } from './styled'

export default function Footer(){
    return(
        <FooterStyle>
            <SectionFooter>
                <AsideFooter>
                    <img src={Logo} alt='Logo'></img>
                    <p>I chose strategy punchy and it connects</p>
                    <span>
                        <img src={facebook} alt='Icone Facebook'></img>
                        <img src={twitter} alt='Icone Twitter'></img>
                        <img src={youtube} alt='Icone Youtube'></img>
                        <img src={instagram} alt='Icone Instagram' style={{width: '29px'}}></img>
                    </span>
                </AsideFooter>
                <div>
                    <h1>SUPPORT</h1>
                    <p>Client Support</p>
                    <p>Vendor Support</p>
                    <p>COVID-19 Resource Center</p>
                </div>
                <div>
                    <h1>CONTACT</h1>
                    <p>1.877.313.5433</p>
                    <p>Level One Login</p>
                </div>
                <div>
                    <h1>REALPAGE</h1>
                    <p>Analytics</p>
                    <p>Company</p>
                </div>
            </SectionFooter>
            <footer>
                <p>HubSpot Logo</p>
                <p>Copyright © HubSpot.Inc</p>
                <p>Legal Stuff Privacy Policy</p>
            </footer>
        </FooterStyle>
    )
}