import { useEffect } from "react";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchImage = async () => {
    const url = `https://www.reddit.com/r/aww/top/.json?t=all`;
    const fetchImage = await fetch(url);
    const result = await fetchImage.json();
    const data = result.data.children;
    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);

    setImages(list);
  };
  console.log(images);
  useEffect(() => {
    fetchImage();
  }, []);
  const handleClick = (dir) => {
    const last = images.length - 1;
    if (dir === "left") {
      if (index === 0) {
        setIndex(last);
      } else setIndex(index - 1);
    } else if (dir === "right") {
      if (index === last) {
        setIndex(0);
      } else setIndex(index + 1);
    }
  };
  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 3000);
    return () => {
      clearInterval(tid);
    };
  }, [index]);
  return (
    <>
      <ImageCarousel
        images={images}
        index={index}
        handleClick={handleClick}
      ></ImageCarousel>
    </>
  );
}

export default App;
