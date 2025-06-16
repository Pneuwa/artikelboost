import { Link } from "react-router-dom";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="font-roboto my-8">
        <div className="text-center max-w-2xl mx-auto text-neutral-900 font-semibold text-2xl px-4">
          <span className="font-nanum text-4xl">der, die, das...</span> confused
          yet? <br />
          No more guessing. <br /> Learn how articles work and when they change.
        </div>
        <div className="text-center mt-6">
          <Link
            to="/cases"
            className="inline-block px-6 py-2 rounded-full bg-rose-600 text-white text-3xl font-nanum font-semibold shadow-md hover:bg-rose-500 hover:text-shadow-lg hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 border-8 border-double border-bground"
          >
            Learn Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
