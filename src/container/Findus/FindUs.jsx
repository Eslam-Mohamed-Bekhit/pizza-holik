import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import map from '../../assets/map.png'



const FindUs = () => {
  function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className="app__wrapper_img">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2443.797329483049!2d31.132467255637643!3d29.977954885203907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1723813531260!5m2!1sar!2seg" width="900" height="675"

          allowFullscreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">

        </iframe>

      </div>
    </div>)
};

export default FindUs;
