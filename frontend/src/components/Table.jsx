import { artikelColors } from "../util/colors";

const Table = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto mt-12 overflow-x-auto">
      <table className="min-w-full bg-neutral-50 text-sm shadow-md border border-neutral-200">
        <thead className="bg-neutral-50 text-neutral-700 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 text-left">Case</th>
            <th className="px-4 py-3 text-left">Function</th>
            <th className="px-4 py-3 text-left">Questions</th>
            <th className="px-4 py-3 text-left">Masculine</th>
            <th className="px-4 py-3 text-left">Feminine</th>
            <th className="px-4 py-3 text-left">Neuter</th>
            <th className="px-4 py-3 text-left">Plural</th>
          </tr>
        </thead>
        <tbody className="text-neutral-800">
          <tr className="border-t border-neutral-200 hover:bg-neutral-50 font-medium">
            <td className="px-4 py-3">Nominative</td>
            <td className="px-4 py-3">Subject</td>
            <td className="px-4 py-3">Who? What?</td>
            <td className="px-4 py-3">
              <span className={`${artikelColors.der.Nominativ}`}>der</span>
            </td>
            <td className="px-4 py-3">
              <span className={`${artikelColors.die.Nominativ}`}>die</span>
            </td>
            <td className="px-4 py-3">
              <span className={`${artikelColors.das.Nominativ}`}>das</span>
            </td>
            <td className="px-4 py-3">
              <span className={`${artikelColors.plural}`}>die</span>
            </td>
          </tr>

          <tr className="border-t border-neutral-200 hover:bg-neutral-50">
            {data.map((cell, i) => (
              <td
                key={i}
                className={`px-4 py-3 ${cell.isBold ? "font-bold" : ""} ${
                  cell.color || ""
                }`}
              >
                {cell.content}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
