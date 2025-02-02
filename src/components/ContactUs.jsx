import contact from '../assets/contact.png';

const ContactUs = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex justify-between items-center w-[1140px] mx-auto">
        <div className="text-white">
          <span className="bg-gray-800 rounded-full px-[6px] py-[2px] ">
            contact us
          </span>
          <h1 className="font-bold text-[48px] mt-[20px]">
            Lets Get <span className="text-[#FF0101]">Started</span>
          </h1>
          <p className="text-white/80 text-[16px] mb-[25px] w-[480-px]">
            We did love to discuss how we can help your business. Contact us
            today
          </p>

          {/* start */}

          <div className="w-96 rounded-lg">
            <form className="space-y-4">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-[550px] h-[45px] p-3 border rounded-md border-[#918c8c80] placeholder-white focus:ring-2  focus:outline-none"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-[550px] h-[45px] p-3 border rounded-md border-[#918c8c80] placeholder-white focus:ring-2  focus:outline-none"
              />

              {/* Phone Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-[550px] h-[45px] p-3 border rounded-md border-[#918c8c80] placeholder-white focus:ring-2  focus:outline-none"
              />

              {/* Topic Selector */}
              <select
                name="topic"
                className="w-[550px] h-[45px] p-3 border rounded-md border-[#918c8c80] text-white focus:ring-2  focus:outline-none"
              >
                <option value="">Select service interest</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>

              {/* Message Box */}
              <textarea
                name="message"
                placeholder=" Message"
                rows="4"
                className="w-[550px] h-[145px] p-3 border border-[#918c8c80] rounded-md placeholder-white focus:ring-2  focus:outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-[10px] text-white rounded-md transition bg-[#FF0101]"
              >
                Submit
              </button>
            </form>
          </div>
          {/* end */}
        </div>
        <div>
          <img
            src={contact}
            alt="contact images"
            className="w-[470px] h-[490px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
