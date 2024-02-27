import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/animationdata.json';
import './info.scss';

const Info = () => {
  return (
    <div className="info-section">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="currency-info"
      >
        <div className="animation">
          <Lottie animationData={animationData} />
        </div>
        <div className="description">
          <h1>Currency Rates Data</h1>
          <p>
            To provide u with the most accurate currency rates, we use the
            latest data from API that is updated every 10 minutes.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
