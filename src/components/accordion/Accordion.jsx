

import React, { useState, useRef } from "react";
import chevron from "../../assets/icon/arrowSchewron.svg";

import benefitIcon_1 from "../../assets/img-benefit/Webcam.svg";
import benefitIcon_2 from "../../assets/img-benefit/success.svg";
import benefitIcon_3 from "../../assets/img-benefit/box.svg";
import benefitIcon_4 from "../../assets/img-benefit/shop.svg";
import benefitIcon_5 from "../../assets/img-benefit/user.svg";

import "./accordion.scss";


function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <h2 className="accordion__title">{props.title}</h2>
        <img src={chevron} className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}`}}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
