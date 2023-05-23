import React, { useState } from "react";
import Appearance from "./Appearance";

const SideBar = props => {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    return (
        <div className={sidebarClass}>
            <span>
                <Appearance/>
            </span>
            <button onClick={props.toggleSidebar} className="sidebar-toggle">
                Toggle Sidebar
            </button>
        </div>
    );
};
export default SideBar;

