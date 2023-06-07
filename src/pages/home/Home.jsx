import './home.scss';
import HeroBanner from './heroBanner/HeroBanner';

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      {/* just to make the scrooll to test the nav bar */}
      {/* <div style={{ height: 500 }}></div> */}
    </div>
  );
};
export default Home;
