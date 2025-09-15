import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SideBar from "./components/SideBar.jsx";
import TopBar from "./components/TopBar.jsx";
import ViewMyTask from "./pages/ViewMyTask";
import Dashboard from "./pages/Dashboard.jsx";
import MyTask from "./pages/MyTask.jsx";// your dashboard page
function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen relative bg-gray-50 w-[99vw]">
      <TopBar onMenuClick={toggleSidebar} />

      <div className="flex pt-16 md:pt-20">
        {/* Sidebar */}
        <SideBar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main content */}
        <main
          className="flex-1 w-[100%] min-w-0 p-2 md:p-4 lg:p-6 xl:p-8 lg:ml-65"
        >
          <Routes>
            <Route path="/app" element={<App />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/mytask" element={<MyTask />} />
             <Route path="/viewmytask/:id" element={<ViewMyTask />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </StrictMode>
);