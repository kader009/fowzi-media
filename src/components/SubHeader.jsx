import Subhero from '../assets/subhero.png';
import Subhero1 from '../assets/sub1.png';
import Subhero2 from '../assets/sub2.png';

const SubHeader = () => {
  return (
    <div className="my-[150px] ms-[240px] ml-[40px]">
      <div className="bg-white/10 backdrop-brightness-100 rounded-lg w-[1140px] h-[384px] ms-[300px]">
        <div className=" flex justify-between items-center p-6 ">
          <div className="w-[432px] h-[156px] text-white">
            <h1 className="font-bold text-[32px]">
              High-Quality Print Solutions
            </h1>
            <p className="mb-[25px] text-white/80">
              From business cards to banners, Fowzi prints delivers exceptional
              results tailored to your needs.
            </p>
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
          <div>
            <img
              src={Subhero}
              alt="sub hero images"
              className="w-[455px] h-[330px] rounded-[8px] "
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] mt-[20px] ms-[300px]">
        <div className="flex w-[560px] bg-white/10 backdrop-brightness-100 rounded-lg p-6 items-center">
          <div className="text-white">
            <h1 className="font-bold text-[24px] w-[222px] h-[70px] mb-[10px]">
              State-of-the-Art Studio Rentals
            </h1>
            <p className="mb-[22px] text-white/80 text-[14px]">
              Fowzi Studios provides professional-grade spaces for all your
              creative projects.
            </p>
            <button className="border border-white w-[236px] h-[42px] rounded-[8px] flex items-center justify-center">
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
          </div>
          <div>
            <img
              src={Subhero1}
              alt="fowzi studios"
              className="w-[310px] h-[180px] rounded-[8px]"
            />
          </div>
        </div>
        <div className="flex w-[560px] bg-white/10 backdrop-brightness-100 rounded-lg p-6 items-center">
          <div className="text-white">
            <h1 className="font-bold text-[24px] w-[222px] h-[70px] mb-[10px]">
              Innovative Digital Solutions
            </h1>
            <p className="mb-[22px] text-white/80 text-[14px]">
              From website design to social media, Fowzi Digital <br /> helps
              build your online presence.
            </p>
            <button className="border border-white w-[236px] h-[42px] rounded-[8px] flex items-center justify-center">
              Discover Fowzi Digitals
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
          <div>
            <img
              src={Subhero2}
              alt="fowzi studios"
              className="w-[280px] h-[180px] rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
