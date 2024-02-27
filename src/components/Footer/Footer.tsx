import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <a href="https://github.com/n3j00">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/nikodem-stach-148399280/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer-center">
        <h3>nejoo.</h3>
      </div>
      <div className="footer-right">
        <p>© 2024 Nikodem Stach</p>
      </div>
    </div>
  );
};

export default Footer;
