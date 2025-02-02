import icons from '../assets/navicon.png';
import facebook from '../assets/social.png';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div className="mt-[50px]">
      <div className=" backdrop-blur-lg border-t createnow">
        <div className="max-w-7xl mx-auto px-4 py-16 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Information Column */}
            <div className="space-y-4">
              <h3 className="mb-4">
                <img src={icons} alt="footer icon" className="w-10" />
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    1729 N 2nd St Studio 204A,Minneapolis, MN 55411
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    <div className="flex gap-4">
                      <img
                        src={facebook}
                        alt=""
                        className="bg-white w-[22px] rounded-full"
                      />
                      <img
                        src={insta}
                        alt=""
                        className="bg-white w-[22px] rounded-full"
                      />
                      <img
                        src={linkedin}
                        alt=""
                        className="bg-white w-[22px] rounded-2xl"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Information</h3>
              <ul className="space-y-3 ">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Supports Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold  mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Fowzi Prints
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Fowzi Studios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Fowzi Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold  mb-4">Help center</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Supports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors text-white/80"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white">
              © 2024 Fowzi Media. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
