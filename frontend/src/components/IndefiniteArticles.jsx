const IndefiniteArticles = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-nanum font-bold text-center mb-2">
        Indefinite Articles in All Cases
      </h2>
      <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-6">
        The form of the indefinite article (<em>ein / eine</em>) changes
        depending on gender and grammatical case. <br /> This table shows how{" "}
        <strong>masculine</strong>, <strong>feminine</strong>, and{" "}
        <strong>neuter</strong> nouns behave in each case. <br /> Note: There is
        no plural form of the indefinite article in German.
      </p>
      <div className="container mx-auto mt-6 font-roboto">
        <table className="min-w-full table-auto border-collapse border border-neutral-300 text-center text-sm mb-12">
          <thead className="bg-neutral-100">
            <tr>
              <th className="border border-neutral-300 py-2">Case</th>
              <th className="border border-neutral-300 py-2">Masculine</th>
              <th className="border border-neutral-300 py-2">Feminine</th>
              <th className="border border-neutral-300 py-2">Neuter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-300 py-2 font-semibold">
                Nominative
              </td>
              <td className="border border-neutral-300 py-2">ein</td>
              <td className="border border-neutral-300 py-2">eine</td>
              <td className="border border-neutral-300 py-2">ein</td>
            </tr>
            <tr className="bg-neutral-50">
              <td className="border border-neutral-300 py-2 font-semibold">
                Accusative
              </td>
              <td className="border border-neutral-300 py-2">einen</td>
              <td className="border border-neutral-300 py-2">eine</td>
              <td className="border border-neutral-300 py-2">ein</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 py-2 font-semibold">
                Dative
              </td>
              <td className="border border-neutral-300 py-2">einem</td>
              <td className="border border-neutral-300 py-2">einer</td>
              <td className="border border-neutral-300 py-2">einem</td>
            </tr>
            <tr className="bg-neutral-50">
              <td className="border border-neutral-300 py-2 font-semibold">
                Genitive
              </td>
              <td className="border border-neutral-300 py-2">eines</td>
              <td className="border border-neutral-300 py-2">einer</td>
              <td className="border border-neutral-300 py-2">eines</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndefiniteArticles;
