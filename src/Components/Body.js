import Items from "./CrousalItems";
import ReactSimplyCarouselExample from "./CrousalBanner";
import CrousalRestaurant from "./CrousalRestaurant";

const Body = () => {
  return (
    <div className="body-container w-full  flex items-center justify-center">
      <div className="w-9/12 ml-7  overflow-hidden">
        <div className="heading w-full mt-5">
          <h1 className="font-bold text-2xl mb-4 mt-3 text-cstmblack">
            Best offers for you
          </h1>
          <ReactSimplyCarouselExample />
        </div>
        <div className=" mt-12 mb-12  w-full">
          <h1 className="font-bold text-2xl mb-4 text-cstmblack">
            What's on your mind?
          </h1>
          <div className="dish-container w-full flex justify-start ">
            <div className="dish-image w-full">
              <Items />
            </div>
          </div>
        </div>
        <div className="restaurants w-full ">
          <hr />
          <h1 className="font-bold text-2xl mt-5 mb-4 text-cstmblack">
            Top restaurant chains in Kolkata
          </h1>
          <div className="restaurant-container w-full flex justify-start ">
            <div className="restaurant-image w-full mt-4">
              <CrousalRestaurant />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
