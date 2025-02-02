import about from '../assets/about.png';
import about1 from '../assets/about1.png';

const About = () => {
  return (
    <div className="text-white mb-[150px]">
      {/* main */}
      <div className="flex justify-center items-center">
        <div>
          <div>
            <img src={about} alt="" className="w-[300px] h-[400px] rounded object-cover" />
          </div>
        </div>
        <div className='ms-[30px] space-y-[50px]'>
          <div>
            <img
              src={about1}
              alt=""
              className="rounded-[16px] w-[260px] h-[290px] object-cover"
            />
          </div>
          <div>
            <button className="border border-white w-[236px] h-[42px] rounded-[8px] flex items-center justify-center">
              Learn More
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
        <div>
          <div className="w-[450px] ms-[80px]">
            <span className='bg-gray-800 rounded-full px-[6px] py-[2px] '>About us</span>
            <h1 className='mt-[20px] font-bold text-[48px]'>
              About <span className='text-[#FF0101]'> Fowzi Media</span>
            </h1>
            <p className='text-white/80 text-[16px]'>
              We bring together digital, print, and studio services to help your
              business grow with an integrated approach. Our experienced team
              delivers high-quality results tailored to your brands needs.
              Visual: A single, clean icon or graphic that represents
              collaboration, such as three intersecting lines or shapes,
              symbolizing the three sub-brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
