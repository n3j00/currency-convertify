import Conventer from '../../components/Conventer/Conventer';
import Lottie from 'lottie-react';
import animationData from '../../assets/exchangeanimation.json';
import { motion } from 'framer-motion';
import './currency.scss';

const Currency = () => {
  return (
    <div className="currency-page">
      <div className="top-section">
        <Lottie animationData={animationData} className="animation" />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="currency-description"
        >
          <h1>Currency Converter</h1>
          <p>
            Convert from one currency to another with the most recent exchange
            rates.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="conventer-section"
      >
        <Conventer />
      </motion.div>
    </div>
  );
};

export default Currency;
