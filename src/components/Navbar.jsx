import icon from '../assets/navicon.png';
import heroimg from '../assets/heroimages.png';

const Navbar = () => {
  return (
    <div>
      <nav className=" p-4">
        <div className="mx-[140px] flex justify-between items-center ">
          <div>
            <img src={icon} alt="nav icon" className="w-[35px] h-[35px]" />
          </div>
          <div className="space-x-[50px] text-[18px]">
            <a href="#" className="text-white font-bold">
              Home
            </a>
            <a href="#" className="text-white">
              About us
            </a>
            <a href="#" className="text-white">
              Sub brand
            </a>
            <a href="#" className="text-white">
              Choose
            </a>
            <a href="#" className="text-white">
              Contact us
            </a>
          </div>
          <button className="w-[236px] h-[42px] rounded-[8px] bg-[#FF0101] text-white flex items-center justify-center">
            Explore Fowzi Prints
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className="mt-[120px]">
        <div className="text-center text-white">
          <h2 className="font-bold text-[56px] w-[626px] h-[142px] flex mx-auto mb-[8px] leading-[70px]">
            Creative Solutions for Modern Brands
          </h2>
          <p className="font-normal"> Direct and minimal explanation.</p>

          <div className="flex items-center">
            <div>
              <img
                src={heroimg}
                alt=""
                className="w-[209px] h-[120px] ms-[200px] -mt-[50px]"
              />
            </div>
            <div className="ms-[110px] space-x-[16px] flex">
              <button className="bg-[#FF0101] w-[236px] h-[42px] rounded-[8px] flex items-center justify-center">
                Visit Fowzi Studios
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>

              <button className="border border-white w-[236px] h-[42px] rounded-[8px] flex items-center justify-center">
                Discover Fowzi Digital
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
