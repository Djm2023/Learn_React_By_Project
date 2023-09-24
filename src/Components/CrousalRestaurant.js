import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import CROUSAL_API from "./utils/constants";

const CrousalRestaurant = () => {
  const [activeSlideIndexTwo, setActiveSlideIndexTwo] = useState(0);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json);
    const restaurants = await json?.data?.cards[2]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
  };
  if (listOfRestaurant?.length === 0) {
    return <div>Hello</div>;
  }

  return (
    <div className="w-full flex justify-start">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndexTwo}
        onRequestChange={setActiveSlideIndexTwo}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            marginTop: "-31%",
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
            top: "3%",
            background: "#e2e2e7",
            marginLeft: "80%",
            marginTop: "-6%",
            marginBottom: "4%",
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
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={700}
        easing="ease"
      >
        {listOfRestaurant?.map((items) => (
          <div
            key={items.info.id}
            className="w-[321] h-[284.8] mb-8 pr-[32] pl-[16] mt-24 mr-7 transition ease-in-out delay-150 hover:scale-x-90 hover:scale-y-90 duration-300"
          >
            <img
              className="w-[273] h-[182] rounded-md"
              src={CROUSAL_API + items.info.cloudinaryImageId}
            />
            <div className="res-info w-[261] h-[90.8] ml-[12]">
              <div className="res-name w-[261] h-[24]">
                <div>
                  <h1 className="font-sans text-cstmblackone text-ellipsis overflow-hidden whitespace-nowrap leading-6 text-lg antialiased font-bold">
                    {items.info.name}
                  </h1>
                </div>
              </div>
              <div className="rating w-[261] h-[22.8] flex">
                <div className="w-[24] h-[24]  bg-green-700 rounded-full mr-2 pl-[3]">
                  <i className="fa-solid fa-star text-white w-[5] h-[5]"></i>
                </div>
                <div className="w-[19.88] h-[19] text-base font-sans font-medium ">
                  {items.info.avgRating}
                </div>
              </div>
              <div className="res-card-description w-[261] h-[40] text-base text-cstmcuisine font-cstmresfont font-extralight leading-5 overflow-hidden">
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {items.info.cuisines.join(",")}
                </div>
                <div>{items.info.areaName}</div>
              </div>
            </div>
          </div>
          
        ))}
        <hr/>
        <hr/>
        <hr/>
        <hr/>
      </ReactSimplyCarousel>
    </div>
  );
};

export default CrousalRestaurant;
