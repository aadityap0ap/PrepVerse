import ProblemCard from "../components/ProblemCard";

const problems = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Longest Substring", difficulty: "Medium" },
  { id: 3, title: "DP Problem", difficulty: "Hard" },
];

export default function ProblemList() {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">Problems</h2>

      <div className="bg-white shadow rounded">
        {problems.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>
    </div>
  );
}