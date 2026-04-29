const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    popular: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btnText: "Get Started Free",
    btnStyle: "btn-outline border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600",
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    popular: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btnText: "Start Pro Trial",
    btnStyle: "bg-white text-violet-600 hover:bg-gray-100 border-none",
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    popular: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btnText: "Contact Sales",
    btnStyle: "btn-outline border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm mt-3">Choose the plan that fits your needs. Upgrade or downgrade at any time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-5 relative ${
                plan.popular
                  ? "bg-violet-600 text-white shadow-xl scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className={`text-xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.popular ? "text-violet-200" : "text-gray-500"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-violet-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 shrink-0 ${plan.popular ? "text-violet-200" : "text-violet-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? "text-violet-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn rounded-full w-full border-none mt-2 ${plan.btnStyle}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Pricing;