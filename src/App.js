import './styles/App.css';
import 'remixicon/fonts/remixicon.css'

import {Header, HeaderBanner} from "./widgets/Header";
import {Footer, FooterBanner} from "./widgets/Footer";
import {Registration} from "./Registration";
import {ShootingStar} from "./widgets/ShootingStar";
import {Bubbles} from "./widgets/Bubbles";

function App() {
    return (
        <>
            <ShootingStar/>
            <Bubbles/>
            <header>
                <HeaderBanner/>
                <Header/>
            </header>

            <div className="body">
                <Registration/>
            </div>
            <footer>
                <Footer/>
                <FooterBanner/>
            </footer>
        </>
    );
}

export default App;
