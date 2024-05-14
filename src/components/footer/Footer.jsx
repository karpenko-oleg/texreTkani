
//style
import "./footer.scss"

import logo from "../../assets/img-header/logo.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";
import vkontakte from "../../assets/icon/vkontakte.svg";
import arrowLink from "../../assets/icon/arrowLink.svg";
import locShop from "../../assets/img-shop/locShop.png";
import netShop from "../../assets/img-shop/netShop.png";

export default function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div className="footer-top-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-top-social">
                    <img src={vkontakte} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-list">
                    <h2>КАТАЛОГ ТОВАРОВ</h2>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Шенилл</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Велюр</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Рогожка</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Флок</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Искусственная замша</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Искусственная кожа</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Жаккард</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Поролон мебельный</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Букле</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Гобелен</span><img src={arrowLink} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><span>Уличная ткань</span><img src={arrowLink} alt="" /></a></li>
                    </ul>
                </div>
                <div className="footer-bottom-link">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${netShop})`}}>
                        <h4>Наш сайт</h4>
                        <h5><span>купить онлайн</span><img src={arrowLink} alt="" /></h5>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${locShop})`}}>
                        <h4>Наш магазин</h4>
                        <h5><span>посмотреть в магазине</span><img src={arrowLink} alt="" /></h5>
                    </a>
                </div>
            </div>
        </footer>
    )
}