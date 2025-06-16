import { useEffect, useState } from "react";

const Dashboard = () => {
  const [categories, setCategories] = useState();
  const [stats, setStats] = useState({
    total: 0,
    derCount: 0,
    dieCount: 0,
    dasCount: 0,
  });

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/api/counts`);
    const data = await response.json();
    setStats({
      total: data.total_unique_words,
      derCount: data.der,
      dieCount: data.die,
      dasCount: data.das,
    });
    setCategories(data.categories);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold font-nanum text-neutral-800 mb-2">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-8">
        <StatCard
          label="Total Unique Words"
          value={stats.total}
          color="text-purple-600"
        />
        <StatCard
          label="der (Nominativ)"
          value={stats.derCount}
          color="text-blue-500"
        />
        <StatCard
          label="die (Nominativ)"
          value={stats.dieCount}
          color="text-rose-500"
        />
        <StatCard
          label="das (Nominativ)"
          value={stats.dasCount}
          color="text-green-500"
        />
      </div>
      <h2 className="text-4xl font-semibold font-nanum text-neutral-800 mb-2">
        Categorical Distribution
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {categories &&
          categories.map((c, i) => (
            <StatCard key={i} label={c.category} value={c.value} />
          ))}
      </div>
    </section>
  );
};

const StatCard = ({ label, value, color }) => (
  <div className="bg-neutral-50 rounded-xl shadow px-2 py-6 text-center">
    <h4 className="text-gray-500 text-sm mb-1">{label}</h4>
    <p className={`text-3xl font-bold ${color || "text-indigo-500"}`}>
      {value}
    </p>
  </div>
);

export default Dashboard;
