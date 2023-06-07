import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="infoText">
          Culpa labore magna culpa in velit incididunt quis eu qui ut qui aute
          deserunt duis. Sint ex duis dolor culpa duis elit ad. Veniam ea do non
          quis.Aliquip in ullamco dolor esse. Id magna aliquip in enim minim
          nulla velit tempor do aliqua. Officia esse fugiat deserunt do ad
          minim. Magna nisi nostrud Lorem amet ea enim exercitation culpa ex.
        </div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
