const steps = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const Steps = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-sm mt-3">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center relative border border-gray-100 hover:shadow-md transition-shadow">
              <span className="absolute top-4 right-4 text-xs font-bold text-violet-500 bg-violet-50 w-7 h-7 rounded-full flex items-center justify-center">
                {step.id}
              </span>

              <div className="bg-violet-50 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Steps;