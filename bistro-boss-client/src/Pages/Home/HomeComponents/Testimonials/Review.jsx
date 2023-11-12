import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  const { rating, details, name } = review;

  return (
    <SwiperSlide className="max-w-lg mx-auto space-y-4 text-center lg:my-8">
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        starDimension="40px"
        starSpacing="8px"
        name="rating"
      />
      <br />
      <FontAwesomeIcon icon={faQuoteLeft} className="text-7xl" />
      <p>{details}</p>
      <h2 className="text-amber-500 uppercase text-3xl">{name}</h2>
    </SwiperSlide>
  );
};

export default Review;
