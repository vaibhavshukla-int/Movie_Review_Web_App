import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// eslint-disable-next-line react/prop-types
const Image = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || ''} alt="" effect="blur" src={src} />
  );
};
export default Image;
