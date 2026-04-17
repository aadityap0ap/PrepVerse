export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">PrepVerse</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded"
      />

      {/* Profile */}
      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
    </div>
  );
}