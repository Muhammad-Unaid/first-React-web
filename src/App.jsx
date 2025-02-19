import Button from './components/Button'
import landingPageData from './constant/webData'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Features2 from './components/Features2'
import Testimonials from './components/testimonials'
function App() {
 console.log('landingPageData=>', landingPageData)
 const { header ,hero ,features , features2 , testimonials } = landingPageData;

  return (
    <>
    {/* nav bar */}
  <Header header={header}/>

{/* hero */}
 <Hero hero={hero}/>

{/* feature section */}
<Features features={features}/>

<Features2 features2={features2}/>
{/* contant section */}
<section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
           Pizza
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
          Cheese Pizza
            </h2>
          <p className="leading-relaxed text-base">
          Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/7777.jpg"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
          Pizza
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
          Pepperoni Pizza
          </h2>
          <p className="leading-relaxed text-base">
          Get our classic Pepperoni pizza with your choice of sauce and crust.
            
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/p1.jpg"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
          Pizza
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
          Vegetarian Pizza
          </h2>
          <p className="leading-relaxed text-base">
          Tomato Sauce, Mozzarella, Green Pepper, Onions,  Tomatoes, and Black Olives.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/899.jpg"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
          Pizza
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
          Delicious Pizza
          </h2>
          <p className="leading-relaxed text-base">
          A mix of Porcini Mushrooms and Decadent  Fresh Mushrooms, Caramelized Onions.


          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Testimonial */}
<Testimonials testimonials={testimonials}/>

{/* footer */}
<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <img src={landingPageData.header.logo} alt="image-r=error" width={150} />
        
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">
        © 2025 Tailblocks —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-500 ml-1"
          target="_blank"
        >
          @Muhammad Unaid
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg
            fill="currentColor"
            stroke="currentColornp"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


    </>
  )
}

export default App
