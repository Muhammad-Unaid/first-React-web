function Features2({features2})  {

    return(
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    {features2.map((feature) => (
      <div
        key={feature.id}
        className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
      >
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
          <img
            src={feature.image}
            alt={feature.title}   
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-white text-lg title-font font-medium mb-2">
            {feature.title}
          </h2>
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
    ))}
    {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button> */}
    
  </div>
</section>
    )
    
}
export default Features2;