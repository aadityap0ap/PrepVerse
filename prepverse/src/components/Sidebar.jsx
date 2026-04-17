export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      
      <h2 className="text-lg mb-6">Menu</h2>

      <ul className="space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Problems</li>
        <li className="hover:text-gray-300 cursor-pointer">Sheets</li>
        <li className="hover:text-gray-300 cursor-pointer">Revision</li>
      </ul>

    </div>
  );
}