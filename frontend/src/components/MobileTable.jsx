import { artikelColors } from "../util/colors";

const MobileTable = ({ data }) => {
  const nominative = [
    {
      content: "Subject",
    },
    {
      content: "Who? What?",
    },
    {
      content: "der",
      color: artikelColors.der.Nominativ,
      isBold: true,
    },
    {
      content: "die",
      color: artikelColors.die.Nominativ,
      isBold: true,
    },
    {
      content: "das",
      color: artikelColors.das.Nominativ,
      isBold: true,
    },
    {
      content: "die",
      color: artikelColors.plural,
      isBold: true,
    },
  ];
  const labels = [
    "Function",
    "Questions",
    "Masculine",
    "Feminine",
    "Neuter",
    "Plural",
  ];
  const caseName = data[0]?.content || "";

  return (
    <div className="max-w-4xl mx-auto mt-12 overflow-x-auto">
      <table className="min-w-full bg-neutral-50 text-sm shadow-md border border-neutral-200">
        <thead className="bg-neutral-50 text-neutral-700 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 text-left">Case</th>
            <th className="px-4 py-3 text-left">Nominative</th>
            <th className="px-4 py-3 text-left">{caseName}</th>
          </tr>
        </thead>
        <tbody className="text-neutral-800">
          {labels.map((label, i) => (
            <tr
              key={i}
              className="border-t border-neutral-200 hover:bg-neutral-50 font-medium"
            >
              <td className="px-4 py-3">{label}</td>
              <td
                className={`px-4 py-3 ${
                  nominative[i].isBold ? "font-bold" : ""
                } ${nominative[i].color || ""}`}
              >
                {nominative[i].content}
              </td>
              <td
                className={`px-4 py-3 ${
                  data[i + 1].isBold ? "font-bold" : ""
                } ${data[i + 1].color || ""}`}
              >
                {data[i + 1].content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobileTable;
