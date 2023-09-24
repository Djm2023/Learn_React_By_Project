const Header = () => {
    return (
      <div className="global-nav w-full h-20 shadow-lg">
        <div className="nav-bar w-full  flex items-center">
          <div className="left-nav w-5/12  flex justify-end">
            <div className="left-nav-container w-10/12  flex ">
              <div className=" image-container w-2/12">
                <img className="h-16 mt-2 ml-8" src={require("../logo1.png")} />
              </div>
              <div className="location-container w-10/12 flex items-center">
                <input
                  className="w-7/12 h-6 pl-16 text-sm font-[cstmfont] font-light outline-0 cursor-pointer"
                  type="text"
                  placeholder="Enter  Your  Location  Here " onChange={(e) => console.log(e.target.value)}
                />
                <span>
                  <i className="fa-solid fa-angle-down text-cstmorange"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="right-nav w-7/12 h-20 flex justify-center items-center">
            <div className="nav-links w-9/12 ">
              <ul className="flex justify-evenly items-start text-lg text-cstmsilver cursor-pointer font-light">
                <li className="hover:text-cstmorange">
                  <i className="fa-solid fa-magnifying-glass text-base"></i>
                  <span className="pl-4 font-[cstmfont] font-base">Search</span>
                </li>
                <li className="hover:text-cstmorange">
                  <i className="fa-solid fa-percent text-base"></i>
                  <span className="pl-4 font-[cstmfont] font-base">Offers</span>
                </li>
                <li className="hover:text-cstmorange">
                  <i className="fa-solid fa-handshake-angle text-base"></i>
                  <span className="pl-4 font-[cstmfont] font-base">Help</span>
                </li>
                <li className="hover:text-cstmorange">
                  <i className="fa-regular fa-user text-base"></i>
                  <span className="pl-4 font-[cstmfont] font-base">Sign In</span>
                </li>
                <li className="hover:text-cstmorange">
                  <i className="fa-solid fa-cart-shopping text-base"></i>
                  <span className="pl-4 font-[cstmfont] font-base">Cart</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Header;