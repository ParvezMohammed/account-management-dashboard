import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import profilePic from "./profile.png";

const TrackUser = () => {
  const [activeTab, setActiveTab] = useState("Track User");

  const employees = [
    {
      name: "Anjali Mehta",
      designation: "UI/UX Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
    },
    {
      name: "Ali Ahamdan",
      designation: "Graphic Designer",
      department: "IT Department",
      teamLead: "Kadi Manela",
      status: "On Leave",
    },
    {
      name: "Mona Alghafoor",
      designation: "Graphic Designer",
      department: "IT Department",
      teamLead: "Kadi Manela",
      status: "Half Day",
    },
    {
      name: "Moustafa Adel",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Lunch Break",
    },
    {
      name: "Jhon Nelson",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
    },
    {
      name: "Kadi Manela",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
          <p className="text-gray-500">Good Morning</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaBell className="text-2xl text-gray-600 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <img src={profilePic} alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
            <div>
              <p className="font-medium cursor-pointer">Rashmika</p>
              <p className="text-sm text-gray-500 cursor-pointer">HR Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold flex items-center">
          📖 Work Management
        </h3>
      </div>

      <div className="flex space-x-4 mt-4 mb-6">
        {[
          "Create User Accounts",
          "Manage Roles",
          "Track User",
          "Reset Password",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-md shadow-md ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">
            Employee Management & Activities
          </h3>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="overflow-x-auto border rounded-md shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-medium">Full Name</th>
                <th className="p-3 text-left font-medium">Designation</th>
                <th className="p-3 text-left font-medium">Assigned To</th>
                <th className="p-3 text-left font-medium">Team Lead</th>
                <th className="p-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="border-t bg-white hover:bg-gray-50">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.designation}</td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.teamLead}</td>
                  <td className="p-3 flex flex-col items-center space-y-2">
                    <button className="px-5 py-2 border border-blue-400 text-blue-600 rounded-md text-sm w-full text-center">
                      {emp.status}
                    </button>
                    <button className="px-5 py-2 border border-[#8B7D6B] bg-[#D9D2BA] text-[#8B7D6B] rounded-md text-sm w-full text-center ">
                      Track
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
          <p>Page 1 of 100</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border rounded-md">{"◀"}</button>
            <button className="px-3 py-1 border rounded-md">Prev</button>
            <span>Page:</span>
            <input
              type="text"
              value="1"
              className="w-10 text-center border rounded-md"
              readOnly
            />
            <span>of 100</span>

            <select className="border rounded-md px-2 py-1">
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </select>

            <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackUser;