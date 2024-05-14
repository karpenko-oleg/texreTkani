

import React, {useEffect, useRef} from 'react';
import LocomotiveScroll from 'locomotive-scroll';

// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Accordion from "./components/accordion/Accordion.jsx";

//obj
import objVelur from "./assets/obj/velur.js";

//icon
import arrowLink from "./assets/icon/arrowLink.svg";
import lineImg from "./assets/icon/line.svg";
import metroIcon from "./assets/icon/icon-metro.png";
import arrowSchewron from "./assets/icon/arrowSchewron.svg";

//images master
import item_1 from "./assets/img-master/rectangle.png";
import bgMaster from "./assets/img-master/bg-master.svg";
import nextArrow from "./assets/img-master/Group 51.svg";
import prewArrow from "./assets/img-master/Group 52.svg";
//recomendatiom
import tkaniRecomend_1 from "./assets/img-recomindation/gobelenTematiches.jpg";
import tkaniRecomend_2 from "./assets/img-recomindation/porolon.jpg";
import tkaniRecomend_3 from "./assets/img-recomindation/ecokoja.jpg";
import tkaniRecomend_4 from "./assets/img-recomindation/multiFlock.jpeg";
//benefit
import benefitImgMain from "./assets/img-benefit/benefitImg.jpg";
//shop
import shopBg from "./assets/img-shop/shopBg.mp4";
import location from "./assets/icon/location.svg";
//comments
import leftCommentsBg from "./assets/img-comment/commentBg.png";
import rightCommentsBg from "./assets/img-comment/bgComments.svg";
import arrowLeft from "./assets/img-comment/Arrow left.svg";
import arrowRight from "./assets/img-comment/Arrow right.svg";
import star from "./assets/img-comment/star.svg";
import starPol from "./assets/img-comment/starPol.svg";
import yandex from "./assets/img-comment/yandex.png";
import avito from "./assets/img-comment/avito.png";
import comentCreative from "./assets/img-comment/creative1.png";
//forms
import formsBg from "./assets/img-forms/bg-forms.jpg";
// import creativeForm from "./assets/img-forms/creative1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//style
import './App.scss';
//components
import Product from './components/product/Product.jsx';
import TabComponent from './components/tabComponent/TabComponent.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header'



function App() {

  const scrollRef = useRef(null);
  useEffect(() =>{
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });
    return () => {
      scroll.destroy();
    }
  }, []);

  return (
    <>
      <main ref={scrollRef} className="scroll-container" data-scroll-container>
        <Header />
        <section className="master" data-scroll data-scroll-speed={-1}>
          <div className="header-application">
            <h1>
              Поможем <b>вам</b> обновить вашу мебель
            </h1>
            <p>
              «Texru» - современная, активно развивающаяся компания в сфере
              продажи мебельных тканей
            </p>
            <button className="master-btn yellow-btn">Оставить заявку</button>
          </div>
          <div className="header-swiper">
            <img className="header-swiper-bg" src={bgMaster} alt="" />
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              speed={700}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperNavigations />
            </Swiper>
          </div>
        </section>

        <section className="recomendation" data-scroll data-scroll-speed={1}>
          <div className="recomendation-action">
            <div className="recomendation-action-text">
              <p>
                <img src={lineImg} alt="line" />
                <b>Популярные товары</b>
              </p>
              <h2>Наших клиентов</h2>
            </div>
            <button className="recomendation-btn transparent-button">
              Заказать звонок
            </button>
          </div>
          <div className="recomendation-swiper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation
              speed={700}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recomendation-slide"
                  style={{ backgroundImage: `url(${tkaniRecomend_1})` }}
                >
                  <h2>Редкий гобелен Уильям Моррис</h2>
                  <p>
                    <b>от 2999.00</b>
                    <i>
                      <img src={arrowLink} alt="" />
                    </i>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recomendation-slide"
                  style={{ backgroundImage: `url(${tkaniRecomend_2})` }}
                >
                  <h2>Поролон мебельный</h2>
                  <p>
                    <b>от 2999.00</b>
                    <i>
                      <img src={arrowLink} alt="" />
                    </i>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recomendation-slide"
                  style={{ backgroundImage: `url(${tkaniRecomend_3})` }}
                >
                  <h2>Искусственная кожа</h2>
                  <p>
                    <b>от 2999.00</b>
                    <i>
                      <img src={arrowLink} alt="" />
                    </i>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recomendation-slide"
                  style={{ backgroundImage: `url(${tkaniRecomend_4})` }}
                >
                  <h2>Мебельная ткань мультифлок</h2>
                  <p>
                    <b>от 2999.00</b>
                    <i>
                      <img src={arrowLink} alt="" />
                    </i>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recomendation-slide"
                  style={{ backgroundImage: `url(${tkaniRecomend_1})` }}
                >
                  <h2>Редкий гобелен Уильям Моррис</h2>
                  <p>
                    <b>от 2999.00</b>
                    <i>
                      <img src={arrowLink} alt="" />
                    </i>
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="benefit" data-scroll data-scroll-speed={1}>
          <h2 className="body__title">
            <b>Наши</b> преимущества
          </h2>
          <div className="benefit__container">
            <div className="benefit-option">
              <p>
                <img src={lineImg} alt="" />
                <span>Почему стоит выбрать нас</span>
              </p>
              <Accordion
                title="Проверенные поставщики"
                content="Мы наладили поставки качественных тканей, топовых производителей!"
              />
              <Accordion
                title="Удобный сервис"
                content="Вы можете оформить заказ на нашем сайте, в группе ВКонтакте, на Авито, по телефону, а также лично в магазине рядом со станцией метро Удельная."
              />
              <Accordion
                title="Доставка по всей россии"
                content="Наш магазин осуществляет доставку тканей по всей России. Работаем по предоплате."
              />
              <Accordion
                title="Семилетний опыт"
                content="Вы можете посмотреть наши отзывы и убедись, что мы продаем качественные мебельные ткани."
              />
              <Accordion
                title="Профессиональная консультация"
                content="Наши специалисты помогут вам в выборе цвета, рисунка и плотности ткани."
              />
            </div>
            <div className="benefit-images">
              <img src={benefitImgMain} alt="" />
            </div>
          </div>
        </section>

        <section className="product">
          <h2 className="body__title" data-scroll data-scroll-speed={2}>
            Наши <b>колекции</b>
          </h2>
          <div className="product-container">
            <Product props={objVelur} title="Велюр" />
            <Product props={objVelur} title="Рогожка" />
            <Product props={objVelur} title="Велюр" />
            <Product props={objVelur} title="Велюр" />
            <Product props={objVelur} title="Велюр" />
          </div>
          <button className="product-btn transparent-button">
            Перейти на сайт
          </button>
        </section>

        <section className="promo">
          <h2 className="body__title">
            <b>Акции и</b> предложения
          </h2>
          <div className="promo-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
              speed={700}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="master-slide">
                  <img src={item_1} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="giftCard">
          <h2 className="body__title">
            Подарочная <b>карта</b>
          </h2>
          <div className="giftCard-container">
            <div className="giftCard-text">
              <h2>Не знаешь что подарить? Подарочная карта решит эту задачу</h2>
              <p>
                У нас в магазине вы всегда можете заказать подарочную карту для
                ваших близких.
              </p>
              <p>
                Можете воспользоваться ей при покупке тканей и при оплате
                перетяжки мебели.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="giftCard-btn yellow-btn"
              >
                Заказать карту
              </a>
            </div>
            <div className="giftCard-tabs">
              <TabComponent />
            </div>
          </div>
        </section>

        <section className="shop">
          <h2 className="body__title">
            <b>Ждем вас в</b> нашем магазине
          </h2>
          <div className="shop-container">
            <video autoPlay muted loop>
              <source src={shopBg} />
            </video>
            <h2>г. Санкт-Петербург, 2-й ​Муринский проспект, д3</h2>
            <h3>
              <img src={metroIcon} alt="" />
              <b>Удельная</b>
            </h3>
            <h4>
              Пн-Пт с 11:00 до 20:00,
              <br /> Сб-Вс 11:00-18:00{" "}
            </h4>
            <a
              href="https://yandex.ru/maps/-/CDRhFOmP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location} alt="" />
            </a>
          </div>
        </section>

        <section className="about" data-scroll data-scroll-speed={2}>
          <h2 className="body__title" style={{ zIndex: "10" }}>
            О <b>нас</b>
          </h2>
          <div className="about-container">
            <div className="about-text">
              <p style={{ marginBottom: "20px" }}>
                Мы объединили наш многолетний, богатый опыт и создали свой
                проект. Среди огромного многообразия тканей мы выбираем только
                самое лучшее, красивое и практичное. У нас вы найдете уникальные
                мебельные ткани, поролон различных марок и плотностей, а также
                разнообразные комплектующие для мягкой мебели. Мы поставляем
                продукцию в любых объемах.
              </p>
              <p>
                Искренне верим, что, помогая нашим клиентам, делаем
                сотрудничество взаимовыгодным и плодотворным. Наши специалисты с
                удовольствием поделятся своими знаниями об особенностях
                мебельных тканей, методиками ухода за ними.
              </p>
            </div>
            <div className="about-images">
              <img src={item_1} alt="" />
            </div>
          </div>
        </section>

        <section className="comments">
          <h2 className="body__title">
            <b>Отзывы</b> клиентов
          </h2>
          <div className="comments-container">
            <div className="comments-img-right">
              <div className="comments-img-left">
                <img src={leftCommentsBg} alt="" />
              </div>
              <div className="comments-img-right-bg">
                <img src={rightCommentsBg} alt="" />
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                speed={700}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper__wrapper__commets"
              >
                <SwiperSlide>
                  <div className="comments-slide">
                    <h2>
                      Отзыв какой-нибудь компании Отзыв какой-нибудь компании
                    </h2>
                    <div className="comments-slide-reiting">
                      <div className="comments-slide-reiting-star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={starPol} alt="" />
                        <b style={{ marginLeft: "10px" }}>4.5</b>
                      </div>
                      <h3>Ольга Середницкая</h3>
                    </div>
                    <p>
                      Ольга Середницкая расскажет о том, как сделала покупку в
                      магазинеОльга Середницкая расскажет о том, как сделала
                      покупку в магазине
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="comments-slide">
                    <h2>
                      Отзыв какой-нибудь компании Отзыв какой-нибудь компании
                    </h2>
                    <div className="comments-slide-reiting">
                      <div className="comments-slide-reiting-star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={starPol} alt="" />
                        <b style={{ marginLeft: "10px" }}>4.5</b>
                      </div>
                      <h3>Ольга Середницкая</h3>
                    </div>
                    <p>
                      Ольга Середницкая расскажет о том, как сделала покупку в
                      магазинеОльга Середницкая расскажет о том, как сделала
                      покупку в магазине
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperNavComments />
              </Swiper>
            </div>
          </div>
          <div className="comments-mes">
            <img className="comments-mes-bg" src={comentCreative} alt="" />
            <div className="comments-mes-top">
              <div className="comments-mes-top-text">
                <p>
                  Мы глубоко уважаем наших клиентов, и ваше доверие - наш
                  приоритет. Возможно, вы захотите взглянуть на отзывы в
                  Яндексе, чтобы убедиться в качестве нашего обслуживания и
                  продуктов.
                </p>
                <a
                  className="comments-button transparent-button"
                  style={{ width: "200px" }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Посмотреть</span>
                  <img src={arrowSchewron} alt="" />
                </a>
              </div>
              <div className="comments-mes-top-img">
                <img src={yandex} alt="" />
              </div>
            </div>
            <div className="comments-mes-bottom">
              <div
                className="comments-mes-top-img"
                style={{ marginRight: "10px" }}
              >
                <img src={avito} alt="" />
              </div>
              <div className="comments-mes-top-text">
                <p>
                  Ваше доверие для нас имеет огромное значение и мы гордимся
                  тем, что наши услуги оцениваются настолько высоко. Можете
                  взглянуть на страницу с отзывами на Авито.
                </p>
                <a
                  className="comments-button transparent-button"
                  style={{ width: "200px" }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Посмотреть</span>
                  <img src={arrowSchewron} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="forms"
          style={{ backgroundImage: `url(${formsBg})` }}
        >
          <div className="forms-text">
            <h2 className="body__title">
              Остались <b> вопросы?</b>
            </h2>
            <p>
              Также вы можете напрямую связаться с нами, чтобы задать все
              вопросы{" "}
            </p>
          </div>
          <form>
            <h4>Отправить заявку</h4>
            <div className="form-container">
              <input
                className="form-container-input"
                type="text"
                placeholder="Имя"
              />
              <input
                className="form-container-input"
                type="text"
                placeholder="Телефон"
              />
              <input
                className="form-container-input"
                type="text"
                placeholder="Email"
              />
              <input
                className="form-container-btn"
                type="submit"
                value="Отправить"
              />
            </div>
          </form>
          <div className="forms-action">
            <h3>Связаться с менеджером </h3>
            <a
              className="forms-action-btn"
              href="tel:"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7 (800) 555-35-35
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
const SwiperNavigations = () => {
  const swiper = useSwiper();
  return (
    <div className="navigation-btns nav__button">
      <button onClick={() => swiper.slidePrev()} ><img className='buttonPrev header-arrow' src={nextArrow} alt="" /></button>
      <button onClick={() => swiper.slideNext()} ><img className='buttonNex header-arrow' src={prewArrow} alt="" /></button>
    </div>
  );
};
const SwiperNavComments = () => {
  const swiper = useSwiper();

  return (
    <div className='swiperComments'>
      <button onClick={() => swiper.slidePrev()} ><img className='swiperComments-btn' src={arrowLeft} alt="" /></button>
      <button onClick={() => swiper.slideNext()} ><img className='swiperComments-btn' src={arrowRight} alt="" /></button>
    </div>
  );
};
export default App;

