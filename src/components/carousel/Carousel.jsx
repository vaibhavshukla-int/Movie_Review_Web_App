import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Image";
import PosterFallback from "../../assets/no-poster.png";
import "./carousel.scss";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigationHandler = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skeletonItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigationHandler("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigationHandler("right")}
        />

        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <Img
                      src={posterUrl}
                      alt="poster of trending series or movies"
                    />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};
export default Carousel;
