import banner from "../assets/banner.png";
import play from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="bg-white py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

        <div className="w-full lg:w-1/2 space-y-5">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
            New AI-Powered Tools Available
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-violet-600 font-semibold text-sm cursor-pointer hover:underline">
            Explore Products
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 border-none">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full px-6 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 flex items-center gap-2">
              <span className="w-6 h-6 bg-violet-200 rounded-full flex items-center justify-center">
                <img src={play} className="w-3 h-3" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Digital Workflow"
            className="w-full max-w-sm lg:max-w-lg object-contain rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;