import { useSelector } from "react-redux";
import "./genres.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  // console.log(genres);
  return (
    <div className="genres">
      {data?.map((genres_id, index) => {
        //for caution
        if (!genres[genres_id]?.name) return;
        return (
          <div className="genre" key={index}>
            {genres[genres_id]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
