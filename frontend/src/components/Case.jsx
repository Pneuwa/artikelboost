import { artikelColors } from "../util/colors";

const Case = ({ case_name, case_en, description, examples }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 bg-neutral-50 rounded-2xl shadow-md mb-10">
      <div className="mb-6">
        <h1 className="font-nanum font-bold text-5xl md:text-6xl text-neutral-900 leading-tight">
          <span className="underline decoration-3 decoration-rose-500">
            {case_name}
          </span>
          <span className="font-semibold text-3xl md:text-4xl ml-2 text-neutral-600">
            (The {case_en} Case)
          </span>
        </h1>
      </div>

      <article className="font-roboto text-lg text-neutral-800 space-y-2">
        <p>
          The <span className="font-semibold">{case_en} case</span>{" "}
          {description.purpose}. It answers the question
          <em className="font-semibold text-rose-500">
            {" "}
            "{description.questions[0]}?"
          </em>{" "}
          or
          <em className="font-semibold text-rose-500">
            {" "}
            "{description.questions[1]}?"
          </em>{" "}
          {description.question_desc}. {description.note}
        </p>

        <div className="mt-8">
          <h2 className="flex justify-center font-nanum font-semibold text-3xl text-neutral-800 mb-3">
            Examples
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map(({ parts, example_en }, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center bg-neutral-50 rounded-xl p-4 border border-neutral-200 shadow-sm text-sm"
              >
                <p>
                  {parts.map((p, j) => {
                    const className = p.highlight
                      ? `${
                          artikelColors[p.article?.toLowerCase()]?.[p.case] ||
                          ""
                        } font-semibold`
                      : "";
                    return (
                      <span key={j} className={className}>
                        {p.text}
                      </span>
                    );
                  })}
                </p>
                {example_en && (
                  <p className="text-neutral-500 italic">{example_en}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Case;
