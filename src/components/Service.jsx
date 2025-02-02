const Service = () => {
  return (
    <div>
      <div className="mb-[100px]">
        <div className="text-center text-white">
          <span className="bg-gray-800 rounded-full px-[6px] py-[2px] ">
            Service
          </span>
          <h1 className="font-bold text-[48px] mt-[20px] mb-[10px]">
            Why <span className="text-[#FF0101]">Fowzi Media</span>
          </h1>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-4 py-16 text-white">
            <div className="grid grid-cols-3">
              {/* Service Card 1 - Comprehensive Services */}
              <div className="bg-white/7 p-8 rounded-xl backdrop-blur-lg border border-white/5 hover:bg-white/15 transition-all w-[340px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-600 mb-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">
                  Comprehensive Services
                </h3>
                <p className="text-white/70">
                  Everything you need under one roof—creative, digital, and
                  print solutions.
                </p>
              </div>

              {/* Service Card 2 - Tailored Approach */}
              <div className="bg-white/7 p-8 rounded-xl backdrop-blur-lg border border-white/5 hover:bg-white/15 transition-all w-[340px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-600 mb-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0M9.75 3.104V4.5c-.36.031-.715.084-1.063.156M4.5 14.5v5.714c0 .597.237 1.17.659 1.591L9.75 21.5M14.25 3.104c.251.023.501.05.75.082M19.5 14.5v5.714c0 .597-.237 1.17-.659 1.591L14.25 21.5m3.75-18c.36.031.715.084 1.063.156M1.5 9.372a48.152 48.152 0 016-.435M3 17.25v-1.157c0-.621.504-1.125 1.125-1.125m18 0c.621 0 1.125.504 1.125 1.125v1.157m-6 6a48.567 48.567 0 01-3-.435"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Tailored Approach</h3>
                <p className="text-white/70">
                  We adapt to your unique business needs to provide results that
                  matter.
                </p>
              </div>

              {/* Service Card 3 - Experienced Team */}
              <div className="bg-white/7 p-8 rounded-xl backdrop-blur-lg border border-white/5 hover:bg-white/15 transition-all w-[340px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-600 mb-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
                <p className="text-white/70">
                  Our team of experts is committed to delivering high-quality,
                  respectful solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
