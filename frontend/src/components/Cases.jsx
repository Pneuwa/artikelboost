import Case from "./Case";
import Table from "./Table";
import { casesInfo } from "../util/cases";
import IndefiniteArticles from "./IndefiniteArticles";
import MobileTable from "./MobileTable";
import { useEffect, useState } from "react";

const Cases = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  return (
    <div className="container mx-auto flex flex-col justify-center mt-60 font-normal">
      {casesInfo.map((c) => (
        <div key={c.case_name} className="mb-10">
          <div key={c.case_en}>
            <Case
              case_name={c.case_name}
              case_en={c.case_en}
              description={c.description}
              examples={c.examples}
            />
          </div>
          {c.case_name != "Nominativ" && (
            <div key={`${c.case_name}${c.case_en}`}>
              {isMobile ? (
                <MobileTable case_name={c.case_name} data={c.table} />
              ) : (
                <Table data={c.table} />
              )}
            </div>
          )}
        </div>
      ))}
      <IndefiniteArticles />
    </div>
  );
};

export default Cases;
