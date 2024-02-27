import Hero from '../../components/Hero/Hero';
import Info from '../../components/Info/Info';
import './home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <Hero />
      </div>
      <div className="info-section">
        <Info />
      </div>
    </div>
  );
};

export default Home;
