const Stats = () => {
  return (
    <div className="bg-violet-600 py-10 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-violet-400">

        <div className="flex flex-col items-center py-6 sm:py-0 sm:px-16 w-full sm:w-auto">
          <span className="text-4xl font-extrabold text-white">50K+</span>
          <span className="text-violet-200 text-sm mt-1">Active Users</span>
        </div>

        <div className="flex flex-col items-center py-6 sm:py-0 sm:px-16 w-full sm:w-auto">
          <span className="text-4xl font-extrabold text-white">200+</span>
          <span className="text-violet-200 text-sm mt-1">Premium Tools</span>
        </div>

        <div className="flex flex-col items-center py-6 sm:py-0 sm:px-16 w-full sm:w-auto">
          <span className="text-4xl font-extrabold text-white">4.9</span>
          <span className="text-violet-200 text-sm mt-1">Rating</span>
        </div>

      </div>
    </div>
  );
};

export default Stats;