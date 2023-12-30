import IMAGES from "../assets/images";

function Nutreints() {
 
  return (
    <section className="py-8 px-12 bg-slate-700">
         <h2 className="text-2xl font-bold mb-4 text-white text-center ">Nourish Your Body with Wholesome Goodness</h2>
      <div className="container  mt-10	 mx-auto flex justify-center">
        <div className="flex space-x-4">

          {/* First Card */}
          <div className="bg-slate-800 hover:bg-slate-500  rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4 ">
              <div className="flex flex-col items-center">
                <img
                  src={IMAGES.Ellipse4}
                  alt="Profile"
                  className=" w-52 h-52 content-center rounded-full overflow-hidden bg-red-50 border-6 border-black"
                />
              </div>


            </div>
            <p className=" text-white text-center  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>

          </div>

          {/* Second Card */}
          <div className="bg-slate-800 hover:bg-slate-500  rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">



              
            </div>
            <p className="text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>

            <div className="">
                <img
                  src={IMAGES.Ellipse5}
                  alt="Profile"
                  className=" w-52 h-52 rounded-full overflow-hidden bg-red-50 border-6 border-black"
                />
              </div>

          </div>

          {/* Third Card */}
          <div className="bg-slate-800 hover:bg-slate-500 rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
            <div className="">
                <img
                  src={IMAGES.Ellipse6}
                  alt="Profile"
                  className=" w-52 h-52 rounded-full overflow-hidden bg-red-50 border-6 border-black"
                />
              </div>

              
            </div>
            <p className="text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Nutreints;
//w-full h-full rounded-full border-6 border-slate-400"