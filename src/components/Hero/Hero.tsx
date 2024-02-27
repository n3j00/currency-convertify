import Lottie from 'lottie-react';
import animationData from '../../assets/heroanimation.json';

import './hero.scss';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="left-side">
        <h1>Currency Convertify</h1>
        <p>
          Currency Convertify is a simple web application that allows you to
          convert currencies and check the current exchange rate.
        </p>

        <div className="hero-buttons">
          <button className="btn" onClick={() => navigate('/conventer')}>
            Convert Currency
          </button>
        </div>
      </div>
      <div className="right-side">
        <Lottie animationData={animationData} className="animation" />
      </div>
    </div>
  );
};

export default Hero;
