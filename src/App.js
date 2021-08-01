import GlobalStyle from "./styles/global";
import { Main } from './styles/main'

import Header from './components/header'
import HeroArea from "./components/heroArea";
import OurFeature from "./components/OurFeature";
import Abouts from "./components/abouts";
import Choose from "./components/choose";
import SocialProof from "./components/socialProof";
import Testimonial from "./components/testimonial";
import Sale from './components/sale'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <HeroArea/>
      <Main>
        <OurFeature/>
        <Abouts/>
        <Choose/>
        <SocialProof/>
        <Testimonial/>
        <Sale/>
      </Main>
    </>
  );
}

export default App;
