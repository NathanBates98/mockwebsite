import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import SideBar from "./components/SideBar";


function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div style={{ 
      backgroundImage: "url(/placeHolderImage.png)", 
      height: "100vh",
      width: "100vw",
      backgroundRepeat: 'no-repeat',
      }}>
      <span>
       <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
     </span>
    </div>
  );
}

export default App;
