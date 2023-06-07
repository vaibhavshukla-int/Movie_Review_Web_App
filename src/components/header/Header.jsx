import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movix-logo.svg';
import './header.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // to change scroll location based on the url change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('show');
      }
    } else {
      setShow('top');
    }
    setLastScrollY(window.scrollY);
  };
  // for scrolling effect
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
    // to close automatic after search operation done
    setTimeout(() => {
      setShowSearch(false);
    }, 1000);
  };

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie');
    } else {
      navigate('/explore/tv');
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="Logo of Movix" />
        </div>

        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler('movie')}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler('tv')}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        {/* for the mobile */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movies or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};
export default Header;
