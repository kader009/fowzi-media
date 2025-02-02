const Footer = () => {
  return (
    <div className="mt-[50px]">
      <div className=" backdrop-blur-lg border-t createnow">
        <div className="max-w-7xl mx-auto px-4 py-16 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Information Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FF0101] mb-4">
                Information
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FF0101] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Fowzi Prints
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Fowzi Studios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Fowzi Digital
                  </a>
                </li>
              </ul>
            </div>

            {/* Supports Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FF0101] mb-4">
                Supports
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Help center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF0101] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Address Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FF0101] mb-4">
                Our Studios
              </h3>
              <div className="space-y-2">
                <p className="text-white/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  1729 N 2nd St Studio
                </p>
                <p className="text-white/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  204A, Minneapolis, MN 55411
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Fowzi Media. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
