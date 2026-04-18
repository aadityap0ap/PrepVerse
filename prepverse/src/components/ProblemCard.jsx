export default function ProblemCard({ problem }) {
  if (!problem) return null;

  return (
    <div className="flex justify-between items-center p-4 border-b hover:bg-gray-50">
      
      <span className="font-medium">{problem.title}</span>

      <span
        className={
          problem.difficulty === "Easy"
            ? "text-green-500"
            : problem.difficulty === "Medium"
            ? "text-yellow-500"
            : "text-red-500"
        }
      >
        {problem.difficulty}
      </span>

    </div>
  );
}