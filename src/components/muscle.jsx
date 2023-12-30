import IMAGES from "../assets/images";

function Muscle() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 to-gray-900">
        <div className="text-center lg:flex lg:items-center">
          {/* Left Side: Text */}
  

          {/* Right Side: Image */}
          <div className="hidden lg:flex lg:flex-1">
            <img
              src={IMAGES.body} // Replace with the actual path to your image
              alt="Picture in gym"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2">
          <div className="0 bg-opacity-90 text-emerald-300	 text-4xl font-normal font-spectral break-words">
  Transform your body<br/> within 30 days
</div>

            <br />
            <div className="text-white text-5xl font-normal font-krona-one break-words">
  Challenge yourself
</div>
            <button className="bg-slate-400 mt-6 hover:bg-blue-600 transition-transform transform hover:translate-y-1 focus:outline-none py-3 px-6 rounded-full ">
              Explore Workouts
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Muscle;
