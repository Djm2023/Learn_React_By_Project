import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import CROUSAL_API from "./utils/constants";

const ReactSimplyCarouselExample = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [listOfBanner, setListOfBanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json);
    const bannerRestaurant = await json?.data?.cards[0]?.card?.card
      ?.imageGridCards?.info;
    setListOfBanner(bannerRestaurant);
    console.log(bannerRestaurant);
  };
  if (listOfBanner?.length === 0) {
    return <div className="w-full h-screen">hii</div>;
  }

  return (
    <div className="w-full flex justify-start">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            marginTop: "-26.5%",
            marginLeft: "91%",
            background: "#e2e2e7",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: (
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          ),
        }}
        backwardBtnProps={{
          style: {
            background: "#e2e2e7",
            marginLeft: "80%",
            marginTop: "-4.5%",
            marginBottom: "2%",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: (
            <span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>
          ),
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={700}
        easing="ease"
      >
        {listOfBanner?.map((items) => (
          <div className="flex justify-start">
            <div key={items.id} className="w-[425] pr-7">
              <img
                className="w-[425] h-[252]"
                src={CROUSAL_API + items.imageId}
              />
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default ReactSimplyCarouselExample;
