import IMAGES from "../assets/images";

function Workouts() {
 
  return (
    <section className="py-8 px-12 bg-slate-800">
         <h2 className="text-2xl font-bold mb-4 text-white text-center ">Popular Workouts</h2>
      <div className="container  mt-10	 mx-auto flex justify-center">
        <div className="flex space-x-4">

          {/* First Card */}
          <div className="bg-slate-800 hover:bg-slate-500  rounded-lg shadow-lgc">
            <div className="flex items-center mb-4 ">
              <div className="flex flex-col items-center">
                <img
                  src={IMAGES.eclipse1}
                  alt="Profile"
                  className=" w-52 h-52 content-center rounded-full overflow-hidden bg-red-50 border-6 border-black"
                />
              </div>


            </div>
            <h3 className="text-xl font-semibold text-white text-center  ">
                Muscle Building
              </h3>
            <p className=" text-white text-center  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Learn more
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-slate-800 hover:bg-slate-500  rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">

            <div className=" rounded border-6 content-center border-slate-400">
                <img
                  src={IMAGES.Ellipse2}
                  alt="Profile"
                  className="  w-52 h-52 rounded-full overflow-hidden bg-red-50 border-6 border-black "
                />
              </div>

             
            </div>
            <h3 className="text-xl font-semibold text-white text-center  ">Six Packs</h3>
            <p className="text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Learn More
            </button>
          </div>

          {/* Third Card */}
          <div className="bg-slate-800 hover:bg-slate-500 rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
            <div className="">
                <img
                  src={IMAGES.Ellipse3}
                  alt="Profile"
                  className=" w-52 h-52 rounded-full overflow-hidden bg-red-50 border-6 border-black"
                />
              </div>

              
            </div>
            <h3 className="text-xl font-semibold text-white text-center ">Weight Loss</h3>
            <p className="text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Workouts;
//w-full h-full rounded-full border-6 border-slate-400"