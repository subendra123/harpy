import "../styles/Footer.css"
import {AppIcon} from "./AppIcon";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="container-in">
                    <div className="grid-4-4-1">
                        <div>
                            <AppIcon/>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet,<br/>
                                consectetur adipiscing elit, sed do
                            </p>
                            <div className="flex mt-10 social-links dark">
                                <a href="#!"><i className="ri-facebook-fill"/></a>
                                <a href="#!"><i className="ri-instagram-line"/></a>
                                <a href="#!"><i className="ri-music-fill"/></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="mv-10">Company</h4>
                            <div className="quick-links">
                                <a href="#!">About us</a>
                                <a href="#!">Conservation</a>
                                <a href="#!">Contact support</a>
                                <a href="#!">Careers</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="mv-10">Legal</h4>
                            <div className="quick-links">
                                <a href="#!">Privacy policy</a>
                                <a href="#!">Terms of use</a>
                                <a href="#!">Conditions of sale</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="mv-10">Connect with us</h4>
                            <div className="quick-links">
                                <a className="flex flex-middle" href="#!">
                                    <i className="ri-mail-open-line mr-5"/>
                                    <span>wingsout@harpyhats.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const FooterBanner = () => {
    let year = new Date().getFullYear();
    return (
        <div className="footer-banner">
            <div className="container text-sm">
                <div className="container-in text-center">
                    &copy; {year} Mockup. All rights reserved.
                </div>
            </div>
        </div>
    );
}