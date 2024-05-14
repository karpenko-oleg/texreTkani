

import React, { useState } from 'react';

//style
import "./tabComponent.scss";
//images
import tabItem_1 from "../../assets/img-giftCard/1.jpg";
import tabItem_2 from "../../assets/img-giftCard/2.jpg";
import tabItem_3 from "../../assets/img-giftCard/3.jpg";
import tabItem_4 from "../../assets/img-giftCard/4.jpg";
import tabItem_5 from "../../assets/img-giftCard/5.jpg";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Используем хук useState для хранения активной вкладки

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Обновляем состояние активной вкладки при клике
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <div className="tab-content">
            {activeTab === 'tab1' && <img src={tabItem_1}></img>}
            {activeTab === 'tab2' && <img src={tabItem_2}></img>}
            {activeTab === 'tab3' && <img src={tabItem_3}></img>}
            {activeTab === 'tab4' && <img src={tabItem_4}></img>}
            {activeTab === 'tab5' && <img src={tabItem_5}></img>}
        </div>
        <div className="tab-button-container">
        <button
            style={{borderRadius:"15px"}}
          className={activeTab === 'tab1' ? 'active-tab' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          <div className="tab-button-item">3 000</div>
        </button>
        <button
        style={{borderRadius:"15px"}}
          className={activeTab === 'tab2' ? 'active-tab' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          <div className="tab-button-item">5 000</div>
        </button>
        <button
        style={{borderRadius:"15px"}}
          className={activeTab === 'tab3' ? 'active-tab' : ''}
          onClick={() => handleTabClick('tab3')}
        >
         <div className="tab-button-item">8 000</div>
        </button>
        <button
        style={{borderRadius:"15px"}}
          className={activeTab === 'tab4' ? 'active-tab' : ''}
          onClick={() => handleTabClick('tab4')}
        >
          <div className="tab-button-item">10 000</div>
        </button>
        <button
        style={{borderRadius:"15px"}}
          className={activeTab === 'tab5' ? 'active-tab' : ''}
          onClick={() => handleTabClick('tab5')}
        >
          <div className="tab-button-item">15 000</div>
        </button>
        </div>
      </div>

    </div>
  );
};

export default TabComponent;
