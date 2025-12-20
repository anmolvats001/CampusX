import userflow from "../assets/user-flow.svg";

const Help = () => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-12 lg:px-20 pt-20 flex justify-center bg-[#F9FAFB]">
      <div className="border border-gray-300 shadow-lg px-4 sm:px-6 md:px-8 py-6 md:py-10 rounded-2xl bg-transparent w-full max-w-7xl">
        
        <h1 className="text-center text-[#1E293B] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
          UNDERSTAND THE WEBSITE
        </h1>

        {/* Scrollable container with better UX */}
        <div className="relative w-full overflow-hidden">
          {/* Instruction for users */}
          <div className="text-center text-sm text-gray-500 mb-2 sm:hidden">
            ← Scroll horizontally to view full diagram →
          </div>
          
          {/* Scrollable area */}
          <div className="overflow-x-auto pb-4">
            {/* Image container with original size - adjust min-width based on your SVG size */}
            <div className="min-w-[1200px] sm:min-w-[1400px] lg:min-w-[1600px] xl:min-w-[1800px]">
              <img
                src={userflow}
                alt="User Flow Chart"
                className="
                  w-full      /* Takes full width of container */
                  h-auto      /* Maintains aspect ratio */
                  min-h-[400px] /* Minimum height for visibility */
                  object-scale-down /* Shrinks if too big, but doesn't stretch */
                  drop-shadow-lg
                "
              />
            </div>
          </div>
          
          {/* Scroll indicators for mobile */}
          <div className="flex justify-center gap-2 mt-3 sm:hidden">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Help;