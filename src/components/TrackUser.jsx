import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import profilePic from "./profile.png"; // Replace with actual profile image path

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
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
          <p className="text-gray-500">Good Morning</p>
        </div>

        {/* Search Bar & Profile */}
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

      {/* Work Management Section */}
      <div>
        <h3 className="text-xl font-semibold flex items-center">
          📖 Work Management
        </h3>
      </div>

      {/* Tabs */}
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

      {/* Employee Management Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Title & Search Bar Side by Side */}
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

        {/* Employee Table */}
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

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
          {/* Left Side: Page Information */}
          <p>Page 1 of 100</p>

          {/* Right Side: Pagination Controls */}
          <div className="flex items-center space-x-2">
            {/* Previous Page Button */}
            <button className="px-3 py-1 border rounded-md">{"◀"}</button>
            <button className="px-3 py-1 border rounded-md">Prev</button>

            {/* Page Number Input */}
            <span>Page:</span>
            <input
              type="text"
              value="1"
              className="w-10 text-center border rounded-md"
              readOnly
            />
            <span>of 100</span>

            {/* Items Per Page Dropdown */}
            <select className="border rounded-md px-2 py-1">
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </select>

            {/* Next Page Button */}
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

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaBell } from "react-icons/fa";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     { name: "Anjali Mehta", designation: "UI/UX Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Ali Ahamdan", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "On Leave" },
//     { name: "Mona Alghafoor", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "Half Day" },
//     { name: "Moustafa Adel", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Lunch Break" },
//     { name: "Jhon Nelson", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Kadi Manela", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left - Greeting (Two Lines) */}
//         <div>
//           <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
//           <p className="text-gray-500">Good Morning</p>
//         </div>

//         {/* Search Bar & Profile */}
//         <div className="flex items-center space-x-4">
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           <div className="flex items-center space-x-2">
//             <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Work Management Section */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center">
//           📖 Work Management
//         </h3>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mt-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-md shadow-md ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         {/* Title & Search Bar Side by Side */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Employee Management & Activities</h3>
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Employee Table */}
//         <div className="overflow-x-auto border rounded-md shadow">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3 text-left font-medium">Full Name</th>
//                 <th className="p-3 text-left font-medium">Designation</th>
//                 <th className="p-3 text-left font-medium">Assigned To</th>
//                 <th className="p-3 text-left font-medium">Team Lead</th>
//                 <th className="p-3 text-left font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((emp, index) => (
//                 <tr key={index} className="border-t bg-white hover:bg-gray-50">
//                   <td className="p-3">{emp.name}</td>
//                   <td className="p-3">{emp.designation}</td>
//                   <td className="p-3">{emp.department}</td>
//                   <td className="p-3">{emp.teamLead}</td>
//                   <td className="p-3 flex items-center gap-2">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         emp.status === "Working"
//                           ? "bg-green-200 text-green-800"
//                           : emp.status === "On Leave"
//                           ? "bg-yellow-200 text-yellow-800"
//                           : emp.status === "Half Day"
//                           ? "bg-blue-200 text-blue-800"
//                           : "bg-gray-200 text-gray-800"
//                       }`}
//                     >
//                       {emp.status}
//                     </span>
//                     <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded-md border">
//                       Track
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Next ▶</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaBell } from "react-icons/fa";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     { name: "Anjali Mehta", designation: "UI/UX Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Ali Ahamdan", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "On Leave" },
//     { name: "Mona Alghafoor", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "Half Day" },
//     { name: "Moustafa Adel", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Lunch Break" },
//     { name: "Jhon Nelson", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Kadi Manela", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left - Greeting (Two Lines) */}
//         <div>
//           <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
//           <p className="text-gray-500">Good Morning</p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           <div className="flex items-center space-x-2">
//             <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Work Management Section */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center">
//           📖 Work Management
//         </h3>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mt-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-md shadow-md ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         {/* Title and Search Bar Side by Side */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold">Employee Management & Activities</h3>
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Next ▶</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch, } from "react-icons/fi";
// import { FaBell } from "react-icons/fa";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     { name: "Anjali Mehta", designation: "UI/UX Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Ali Ahamdan", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "On Leave" },
//     { name: "Mona Alghafoor", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "Half Day" },
//     { name: "Moustafa Adel", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Lunch Break" },
//     { name: "Jhon Nelson", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Kadi Manela", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left - Greeting (Two Lines) */}
//         <div>
//           <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
//           <p className="text-gray-500">Good Morning</p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           <div className="flex items-center space-x-2">
//             <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Work Management Section */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center">
//           📖 Work Management
//         </h3>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mt-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-md shadow-md ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h3 className="font-semibold mb-4">Employee Management & Activities</h3>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <input type="text" placeholder="Search Here" className="w-full p-2 border rounded-md" />
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Next ▶</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch, FiBell } from "react-icons/fi";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     { name: "Anjali Mehta", designation: "UI/UX Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Ali Ahamdan", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "On Leave" },
//     { name: "Mona Alghafoor", designation: "Graphic Designer", department: "IT Department", teamLead: "Kadi Manela", status: "Half Day" },
//     { name: "Moustafa Adel", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Lunch Break" },
//     { name: "Jhon Nelson", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//     { name: "Kadi Manela", designation: "Graphic Designer", department: "HR Department", teamLead: "Kadi Manela", status: "Working" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left - Greeting */}
//         <div>
//           <h2 className="text-lg font-semibold">
//             Hello Rashmika 👋 <span className="text-gray-500">Good Morning</span>
//           </h2>
//         </div>

//         {/* Center - Search Bar */}
//         <div className="relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>

//         {/* Right - Notification & Profile */}
//         <div className="flex items-center space-x-4">
//           <FiBell className="text-gray-600 text-xl" />
//           <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md shadow">
//             <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Work Management Section */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center">
//           📖 Work Management
//         </h3>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mt-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-md shadow-md ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h3 className="font-semibold mb-4">Employee Management & Activities</h3>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <input type="text" placeholder="Search Here" className="w-full p-2 border rounded-md" />
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Next ▶</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     {
//       name: "Anjali Mehta",
//       designation: "UI/UX Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Ali Ahamdan",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "On Leave",
//     },
//     {
//       name: "Mona Alghafoor",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "Half Day",
//     },
//     {
//       name: "Moustafa Adel",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Lunch Break",
//     },
//     {
//       name: "Jhon Nelson",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Kadi Manela",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">
//           Hello Rashmika 👋
//         </h2>
//         <p className="text-gray-500">Good Morning</p>
//       </div>

//       {/* Search and User Profile */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200 w-full"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//         <div className="flex items-center space-x-2">
//           <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//           <div>
//             <p className="font-medium">Rashmika</p>
//             <p className="text-sm text-gray-500">HR Manager</p>
//           </div>
//         </div>
//       </div>

//       {/* Work Management Title */}
//       <h3 className="text-2xl font-bold flex items-center mb-4">
//         📖 Work Management
//       </h3>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map(
//           (tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2 rounded-md shadow-md ${
//                 activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           )
//         )}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h3 className="font-semibold mb-4">Employee Management & Activities</h3>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search Here"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
//               Next ▶
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     {
//       name: "Anjali Mehta",
//       designation: "UI/UX Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Ali Ahamdan",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "On Leave",
//     },
//     {
//       name: "Mona Alghafoor",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "Half Day",
//     },
//     {
//       name: "Moustafa Adel",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Lunch Break",
//     },
//     {
//       name: "Jhon Nelson",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Kadi Manela",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-lg font-semibold">
//           Hello Rashmika 👋 <span className="text-gray-500">Good Morning</span>
//         </h2>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map(
//           (tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2 rounded-md shadow-md ${
//                 activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           )
//         )}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h3 className="font-semibold mb-4">Employee Management & Activities</h3>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search Here"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
//               Next ▶
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import profilePic from "./profile.png"; // Replace with actual profile image path

// const TrackUser = () => {
//   const [activeTab, setActiveTab] = useState("Track User");

//   const employees = [
//     {
//       name: "Anjali Mehta",
//       designation: "UI/UX Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Ali Ahamdan",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "On Leave",
//     },
//     {
//       name: "Mona Alghafoor",
//       designation: "Graphic Designer",
//       department: "IT Department",
//       teamLead: "Kadi Manela",
//       status: "Half Day",
//     },
//     {
//       name: "Moustafa Adel",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Lunch Break",
//     },
//     {
//       name: "Jhon Nelson",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//     {
//       name: "Kadi Manela",
//       designation: "Graphic Designer",
//       department: "HR Department",
//       teamLead: "Kadi Manela",
//       status: "Working",
//     },
//   ];

//   return (
// <div className="p-6 bg-gray-100 min-h-screen">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-lg font-semibold">
//       Hello Rashmika 👋 <span className="text-gray-500">Good Morning</span>
//     </h2>
//     <div className="flex items-center space-x-4">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search"
//           className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//         />
//         <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//       </div>
//       <div className="flex items-center space-x-2">
//         <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
//         <div>
//           <p className="font-medium">Rashmika</p>
//           <p className="text-sm text-gray-500">HR Manager</p>
//         </div>
//       </div>
//     </div>
//   </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map(
//           (tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2 rounded-md shadow ${
//                 activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           )
//         )}
//       </div>

//       {/* Employee Management Section */}
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h3 className="font-semibold mb-4">Employee Management & Activities</h3>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search Here"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Full Name</th>
//               <th className="p-2 text-left">Designation</th>
//               <th className="p-2 text-left">Assigned To</th>
//               <th className="p-2 text-left">Team Lead</th>
//               <th className="p-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.designation}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.teamLead}</td>
//                 <td className="p-2 flex items-center gap-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       emp.status === "Working"
//                         ? "bg-green-200 text-green-800"
//                         : emp.status === "On Leave"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : emp.status === "Half Day"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
//                     Track
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
//           <p>Page 1 of 100</p>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md">◀ Prev</button>
//             <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
//               Next ▶
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackUser;
