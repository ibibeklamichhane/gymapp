import IMAGES from "../assets/images";

function Body() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 to-gray-900">
        <div className="text-center lg:flex lg:items-center">
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <span className="text-white text-5xl font-bold font-krona-one break-words">
              Build your body <br /> &
            </span>
            <span className="text-cyan-400 text-5xl font-bold font-krona-one break-words">
              shape Yourself
            </span>
            <br />
            <button className="bg-slate-400 mt-6 hover:bg-blue-600 transition-transform transform hover:translate-y-1 focus:outline-none py-3 px-6 rounded-full ">
              Explore Workouts
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="hidden lg:flex lg:flex-1">
            <img
              src={IMAGES.hero} // Replace with the actual path to your image
              alt="Picture in gym"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
