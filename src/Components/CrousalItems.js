import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import CROUSAL_API from "./utils/constants";

const Items = () => {
  const [activeSlideIndex1, setActiveSlideIndexOne] = useState(0);
  const [cuisine, setCuisines] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json);
    const cuisineBanner = await json?.data?.cards[1]?.card?.card?.imageGridCards
      ?.info;
    setCuisines(cuisineBanner);
    // console.log(bannerRestaurant);
  };
  if (cuisine.length === 0) {
    return <div>Hello</div>
  }

  return (
    <div className="w-full flex justify-start">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex1}
        onRequestChange={setActiveSlideIndexOne}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            marginTop: "-20%",
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
            position: "relative",
            top: "12.9%",
            background: "#e2e2e7",
            marginLeft: "80%",
            marginTop: "-6%",
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
            itemsToShow: 6,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={700}
        easing="ease"
      >
        {cuisine?.map((items) => (
          <div key={items.id} className="w-[186] h-[184] mt-20">
            <img
              className="w-[180] h-[144]"
              src={CROUSAL_API + items.imageId}
            />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Items;
