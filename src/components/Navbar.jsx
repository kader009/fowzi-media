import icon from '../assets/navicon.png';

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
          <button className="w-[236px] h-[42px] rounded-[8px] bg-[#FF0101] text-white">
            Explore Fowzi Prints
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
