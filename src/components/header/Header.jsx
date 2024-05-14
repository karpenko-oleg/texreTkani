

import logo from "../../assets/img-header/logo.svg"; 
import metro from "../../assets/icon/icon-metro.png"; 

//style
import "./header.scss";

export default function Header(){
    return(
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="header-menu">
                    <li><a href="#">Товары</a></li>
                    <li><a href="#">Рекомендации</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
            <div className="header-adress">
                <a href="https://yandex.ru/maps/-/CDRDNB1W">
                    <h2><img src={metro} alt="" /><b>Удельная</b></h2>
                    <p>2-й Муринский проспект, 3Б</p>
                </a>
                <a className="header-button yellow-btn" href="tel:+78122407719">Позвонить</a>
            </div>
        </header>
    )
}