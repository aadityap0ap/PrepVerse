import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProblemList from "../pages/ProblemList";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Layout */}
      <div className="flex">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <ProblemList />
        </div>

      </div>
    </div>
  );
}