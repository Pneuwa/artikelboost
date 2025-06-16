const Article = ({ artikel, type, color, labelColor, contentColor, tips }) => {
  return (
    <section className="bg-neutral-50 rounded-lg shadow-xl p-6 md:p-8 border border-neutral-200 mb-12 max-w-4xl mx-auto">
      <h1 className="font-nanum font-bold text-5xl md:text-6xl text-neutral-900 leading-tight  mb-10">
        <span className={`underline decoration-3 ${color}`}>{artikel}</span>
        <span className="font-semibold text-3xl md:text-4xl ml-2 text-neutral-600">
          ({type})
        </span>
      </h1>
      {tips.map((tip, index) => (
        <div
          key={index}
          className="mb-8 last:mb-0 font-roboto border-b-1 border-neutral-200 last:border-b-0"
        >
          <h3
            className={`text-4xl font-nanum underline font-bold mb-4 ${labelColor}`}
          >
            {tip.label}
          </h3>
          <ul className="space-y-4 pb-6">
            {tip.content.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-neutral-800 bg-neutral-50 p-3 rounded-md hover:bg-neutral-100 transition-colors duration-200"
              >
                <div>
                  <strong className={`font-bold ${contentColor}`}>
                    {item.title}:
                  </strong>
                  {item.value && (
                    <span className="ml-2 text-neutral-600 italic font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Article;
