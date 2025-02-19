function Features({ features }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
            FEATURES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            What We Offer
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map((feature) => (
            <div key={feature.id} className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-15 h-15 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    {feature.icon ? (
                      <span>{feature.icon}</span> // Agar icon hai toh ise display karein
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-16 h-16"
                      /> // Agar image hai toh ise display karein
                    )}
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    {feature.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {feature.description}
                  </p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
