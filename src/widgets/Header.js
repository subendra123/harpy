import "../styles/Header.css"
import {AppIcon} from "./AppIcon";
import {useClickOutside} from "use-events";
import {useRef, useState} from "react";


export const HeaderBanner = () => {
    return (
        <div className="header-banner">
            <div className="container">
                <div className="flex flex-middle">
                    <div className="flex-fill text-sm">Enjoy 30% off on selected styles</div>
                    <div className="flex social-links">
                        <a href="#!"><i className="ri-facebook-fill"/></a>
                        <a href="#!"><i className="ri-instagram-line"/></a>
                        <a href="#!"><i className="ri-music-fill"/></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);


    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="container-in">
                        <div className="flex flex-bottom flex-end">
                            <a onClick={() => {
                                setMobileNav(!mobileNav);
                            }} className="show-s header-content menu" href="#">
                                {mobileNav ? <i className="ri-close-line"/> : <i className="ri-menu-4-fill"/>}
                            </a>
                            <div style={{flex: "2"}} className="flex-fill"/>
                            <nav className="navbar hide-s header-content flex flex-middle mr-20">
                                <a href="#!">Home</a>
                                <a href="#!">Shop</a>
                            </nav>

                            <div className="app-icon-up">
                                <AppIcon/>
                            </div>
                            <nav className="navbar hide-s header-content flex flex-middle mr-20">
                                <a href="#!">About</a>
                                <a href="#!">Contact</a>
                            </nav>
                            <div className="flex-fill"/>
                            <div className="flex header-content nav-right flex-middle">
                                <div className="input-group hide-m mr-10">
                                    <input placeholder="Search"/>
                                    <i className="ri-search-2-line"/>
                                </div>
                                <a className="show-m" href="#!">
                                    <i className="ri-search-2-line"/>
                                </a>
                                <a href="#!">
                                    <i className="ri-user-3-line"/>
                                </a>
                                <a className="badge-tr" href="#!">
                                    <i className="ri-shopping-cart-fill"/>
                                    <span className="badge">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={"mobile-nav show-s flex flex-space flex-middle" + (mobileNav ? " show" : "")}>
                <a href="#!">Home</a>
                <a href="#!">Shop</a>
                <a href="#!">About</a>
                <a href="#!">Contact</a>
            </nav>
        </>
    );
}