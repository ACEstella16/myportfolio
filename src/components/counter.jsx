import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./counter.css";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => Array.from({ length }, (_, index) => index);
  
  return (
    <div className="star-rating-container">
      <div className="stars">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

const Star = ({ selected, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} className="star" />
);

StarRating.propTypes = {
  totalStars: PropTypes.number
};

StarRating.defaultProps = {
  totalStars: 5
};

Star.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
};

Star.defaultProps = {
  selected: false
};
