import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SideBar from "./components/SideBar.jsx";
import TopBar from "./components/TopBar.jsx";
import Dashboard from "./pages/Dashboard.jsx"; // your dashboard page

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen relative">
        
        <TopBar className="w-full fixed top-0 left-0 z-50" />

        <div className="flex pt-20 ml-70">
         
          <SideBar />

         
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/app" element={<App />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
);
