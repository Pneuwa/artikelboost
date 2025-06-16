import Article from "./Article";
import { articleTips } from "../util/articles";

const Tips = () => {
  return (
    <div className="container mx-auto p-6 mt-60 md:p-8 lg:p-12">
      <h1 className="text-5xl font-nanum font-extrabold text-center mb-12 text-neutral-800">
        Tips & Tricks
      </h1>
      <p className="text-lg text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
        "Der, die, das... huh?" Don’t worry! German articles might seem wild,
        but they often follow clever little rules. Let’s decode the patterns and
        give you a fun jumpstart to guess like a pro!
      </p>
      {articleTips.map((artikelTip) => (
        <Article key={artikelTip.artikel} {...artikelTip} />
      ))}
      <div className="mt-20 mb-10 py-6 mx-auto">
        <h2 className="text-4xl font-nanum font-extrabold text-center text-rose-600 mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          Don't Forget!
        </h2>
        <p className="text-center text-neutral-600 font-roboto">
          Remember, these are general tips and exceptions always exist.
          Consistent practice is key!
        </p>
      </div>
    </div>
  );
};

export default Tips;
