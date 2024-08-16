import React, { useState } from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => {
  const [tagss, settagss] = useState(['large', 'medium', 'small']);
  const [newprice, setnewprice] = useState(price);
  const handleClickTags = (e) => {
    console.log(Array.from(e.target.parentNode.children).forEach(e => e.className = ''))
    e.target.className = 'app__menu-acive'
    setnewprice(Math.floor(price / Number(e.target.getAttribute('index'))))
  }
  return (<div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant-title" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant-price">{newprice}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans-variant app__menu-tags" style={{ color: '#AAAAAA' }}>

        {tagss.map((e, index) =>

        (
          index === 0
            ?
            (
              <span
                index={index + 1}
                key={index}
                onClick={handleClickTags}
                className='app__menu-acive'>{e}</span>
            ) : (
              <span
                key={index}
                index={index + 1}
                onClick={handleClickTags}> | {e}</span>
            )
        ))


        }
      </p>
    </div>
  </div>
  )
};

export default MenuItem;
