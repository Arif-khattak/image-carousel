import React from "react";

function ImageCarousel({ images, index, handleClick }) {
  return (
    <div className="image-carousel">
      <button onClick={() => handleClick("left")}>{">"}</button>
      <img src={images[index]} alt="" />
      <button onClick={() => handleClick("right")} className="right">
        {"<"}
      </button>
    </div>
  );
}

export default ImageCarousel;
