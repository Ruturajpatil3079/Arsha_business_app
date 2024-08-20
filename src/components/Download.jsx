import React from 'react';
import appstore from '../assets/images/appstore.png';
import playstore from '../assets/images/playstore.png';

function Download(props) {
    return (
        <div>
           <section className="download section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center white">
          <h3>Download Our App</h3>
          <span className="line"></span>
          <p className="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="section-content text-center">
          <ul>
            <li><a href="#"><img src={appstore} className="wow fadeInUp" data-wow-delay="0.4s"/></a></li>
            <li><a href="#"><img src={playstore} className="wow fadeInUp" data-wow-delay="0.7s"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section> 
        </div>
    );
}

export default Download;