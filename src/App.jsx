import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import ManageAccount from "./components/ManageAccount";
import ManageAccountActivation from "./components/ManageAccountActivation";
import ManageAccountDeactivation from "./components/ManageAccountDeactivation";
import Notification from "./components/Notification";
import TrackUser from "./components/TrackUser";


function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 p-6">
        {activePage === "dashboard" && <Dashboard setActivePage={setActivePage} />}
        {/* Placeholder for other pages */}
        {activePage === "onboarding" && <h1>Employee Onboarding</h1>}
        {/* {activePage === "manageAccount" && <h1>Manage Account</h1>} */}
        {activePage === "manageAccount" && <ManageAccount setActivePage={setActivePage} />}
        {activePage === "manageAccountActivation" && <ManageAccountActivation setActivePage={setActivePage} />}
        {activePage === "manageAccountDeactivation" && <ManageAccountDeactivation setActivePage={setActivePage} />}
        {activePage === "notification" && <Notification/>}
        {activePage === "manageWork" && <h1>Manage Work</h1>}
        {activePage === "settings" && <h1>Settings</h1>}
      </div>
    </div>
  );
}

export default App;


