import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex">
        
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">
            Welcome to PrepVerse 🚀
          </h1>
        </div>

      </div>
    </div>
  );
}