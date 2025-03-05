import React from "react";
import { FaSearch, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ManageAccountDeactivation = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Account Deactivation Management</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded pl-10"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
        </div>
      </div>
      
      {/* Deactivation Queue Table */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="font-medium mb-3">Deactivation Queue</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Priority</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Darlene Robertson</td>
              <td className="p-2">Development</td>
              <td className="p-2">
                <span className="text-yellow-600 bg-yellow-100 p-1 rounded text-sm">
                  Pending
                </span>
              </td>
              <td className="p-2">High</td>
              <td className="p-2">
                <Button className="bg-blue-500 text-white px-3 py-1 mr-2">Process</Button>
                <Button className="bg-gray-400 text-white px-3 py-1">Cancel</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Deactivation Checklist */}
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <h3 className="font-medium mb-3">Deactivation Checklist</h3>
        <ul className="list-disc ml-6">
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" /> Revoke System Access
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" /> Remove from Payroll
          </li>
          <li className="flex items-center text-gray-700">
            <FaTimesCircle className="text-red-500 mr-2" /> Notify HR Department
          </li>
        </ul>
      </div>
      
      {/* Notes & Comments Section */}
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <h3 className="font-medium mb-3">Notes & Comments</h3>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Add notes..."
        ></textarea>
      </div>
      
      {/* Bulk Actions */}
      <div className="mt-4 flex justify-end gap-3">
        <Button className="bg-gray-500 text-white px-4 py-2">Bulk Action</Button>
        <Button className="bg-green-500 text-white px-4 py-2">Process Deactivation</Button>
        <Button className="bg-blue-500 text-white px-4 py-2">Mark as Completed</Button>
      </div>
    </div>
  );
};

export default ManageAccountDeactivation;


// import { useState } from "react";
// import { FaSearch, FaCog, FaBell } from "react-icons/fa";
// import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const ManageAccountDeactivation = () => {
//   // Employee Deactivation Data
//   const [employees, setEmployees] = useState([
//     {
//       id: "EMP001",
//       name: "Ram Mahish",
//       department: "Marketing",
//       lastWorkingDate: "2024-02-28",
//       status: "Pending",
//       priority: "High",
//       profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: "EMP004",
//       name: "Ankush Singh",
//       department: "IT",
//       lastWorkingDate: "2024-02-20",
//       status: "Deactivation Completed",
//       priority: "Medium",
//       profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//   ]);

//   const [notes, setNotes] = useState([
//     {
//       author: "Rashmika (HR)",
//       time: "2 hours ago",
//       comment: "Employee has returned all company assets. Pending final clearance from IT department.",
//     },
//     {
//       author: "John Anderson",
//       time: "5 hours ago",
//       comment: "Email account deactivation completed for Sarah Johnson.",
//     },
//   ]);

//   const [newNote, setNewNote] = useState("");

//   // Handle Adding Notes
//   const handleAddNote = () => {
//     if (newNote.trim() === "") return;
//     setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
//     setNewNote("");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-100 p-6">
//         <h2 className="text-lg font-semibold">HRMS</h2>
//         <nav className="mt-6">
//           <ul>
//             <li className="mb-3">📊 Dashboard</li>
//             <li className="mb-3">📝 Employee Onboarding</li>
//             <li className="mb-3 bg-white p-2 rounded-md text-blue-600 font-semibold">
//               👥 Manage Account
//             </li>
//             <li className="mb-3">📅 Manage Work</li>
//             <li>⚙️ Setting</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">Employee Deactivation Management</h2>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <FaSearch className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <FaBell className="text-gray-500 cursor-pointer" />
//             {/* User Profile */}
//             <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
//               <img
//                 src="https://randomuser.me/api/portraits/women/1.jpg"
//                 alt="User"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span>Rashmika</span>
//               <MdKeyboardArrowDown />
//             </div>
//           </div>
//         </div>

//         {/* Filters & Buttons */}
//         <div className="flex gap-4 mb-4">
//           <div className="relative">
//             <FaSearch className="absolute top-3 left-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name, ID or email"
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <select className="border rounded-lg p-2">
//             <option>All Department</option>
//           </select>
//           <select className="border rounded-lg p-2">
//             <option>All Status</option>
//           </select>
//           <input type="date" className="border rounded-lg p-2" />
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//             <FaCog /> Process Deactivation
//           </button>
//           <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//             Mark as Completed
//           </button>
//         </div>

//         {/* Deactivation Queue */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Deactivation Queue</h3>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-2 text-left">Employee Name</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Last Working Date</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Priority</th>
//                 <th className="p-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((emp) => (
//                 <tr key={emp.id} className="border-t">
//                   <td className="p-2 flex items-center gap-2">
//                     <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
//                     <div>
//                       <div className="font-semibold">{emp.name}</div>
//                       <div className="text-sm text-gray-500">ID: {emp.id}</div>
//                     </div>
//                   </td>
//                   <td className="p-2 text-center">{emp.department}</td>
//                   <td className="p-2 text-center">{emp.lastWorkingDate}</td>
//                   <td className="p-2 text-center">
//                     <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
//                       {emp.status}
//                     </span>
//                   </td>
//                   <td className="p-2 text-center">{emp.priority}</td>
//                   <td className="p-2 text-center">
//                     <button className="text-blue-500 mr-2">
//                       <HiOutlinePencil size={20} />
//                     </button>
//                     <button className="text-red-500">
//                       <HiOutlineTrash size={20} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;


// import { useState } from "react";
// import { FaSearch, FaCog, FaBell, FaUserCircle } from "react-icons/fa";
// import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

// const ManageAccountDeactivation = () => {
//   // Employee Deactivation Data
//   const [employees, setEmployees] = useState([
//     {
//       id: "EMP001",
//       name: "Ram Mahish",
//       department: "Marketing",
//       lastWorkingDate: "2024-02-28",
//       status: "Pending",
//       priority: "High",
//       profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: "EMP004",
//       name: "Ankush Singh",
//       department: "IT",
//       lastWorkingDate: "2024-02-20",
//       status: "Deactivation Completed",
//       priority: "Medium",
//       profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//   ]);

//   const [notes, setNotes] = useState([
//     {
//       author: "Rashmika (HR)",
//       time: "2 hours ago",
//       comment:
//         "Employee has returned all company assets. Pending final clearance from IT department.",
//     },
//     {
//       author: "John Anderson",
//       time: "5 hours ago",
//       comment: "Email account deactivation completed for Sarah Johnson.",
//     },
//   ]);

//   const [newNote, setNewNote] = useState("");

//   // Handle Adding Notes
//   const handleAddNote = () => {
//     if (newNote.trim() === "") return;
//     setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
//     setNewNote("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Employee Deactivation Management</h2>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <FaSearch className="absolute top-3 left-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <FaBell className="text-gray-600 text-xl cursor-pointer" />
//           {/* User Profile */}
//           <div className="flex items-center gap-2">
//             <FaUserCircle className="text-3xl text-gray-600" />
//             <div>
//               <p className="font-semibold">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters & Search in Deactivation Queue */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <div className="flex gap-4 mb-4">
//           <input type="text" placeholder="Search by name, ID or email" className="border rounded-lg p-2 w-1/4" />
//           <select className="border rounded-lg p-2">
//             <option>All Department</option>
//           </select>
//           <select className="border rounded-lg p-2">
//             <option>All Status</option>
//           </select>
//           <input type="date" className="border rounded-lg p-2" />
//         </div>

//         {/* Buttons inside Deactivation Queue Box */}
//         <div className="flex justify-between mb-2">
//           <select className="border rounded-lg p-2">
//             <option>Bulk Action</option>
//           </select>
//           <div className="flex gap-2">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//               <FaCog /> Process Deactivation
//             </button>
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//               Mark as Completed
//             </button>
//           </div>
//         </div>

//         {/* Deactivation Queue Table */}
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Working Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Priority</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-t">
//                 <td className="p-2 flex items-center gap-2">
//                   <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
//                   <div>
//                     <div className="font-semibold">{emp.name}</div>
//                     <div className="text-sm text-gray-500">ID: {emp.id}</div>
//                   </div>
//                 </td>
//                 <td className="p-2 text-center">{emp.department}</td>
//                 <td className="p-2 text-center">{emp.lastWorkingDate}</td>
//                 <td className="p-2 text-center">
//                   <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.priority === "High" ? "bg-red-500" : "bg-orange-500"}`}>
//                     {emp.priority}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button className="text-blue-500 mr-2"><HiOutlinePencil size={20} /></button>
//                   <button className="text-red-500"><HiOutlineTrash size={20} /></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Checklist & Notes Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         {/* Checklist */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Deactivation Checklist</h3>
//           {["Email Account", "System Credentials", "Building Access", "VPN Access", "Software Licenses", "Company Assets"].map((item, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <input type="checkbox" className="w-4 h-4" />
//               <label>{item}</label>
//             </div>
//           ))}
//         </div>

//         {/* Notes & Comments */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Notes & Comments</h3>
//           <textarea className="w-full border rounded-lg p-2" rows={3} placeholder="Add a note here" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
//           <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
//             Add Note
//           </button>

//           {notes.map((note, index) => (
//             <div key={index} className="mt-4 border-t pt-2">
//               <p className="text-sm font-semibold">{note.author}</p>
//               <p className="text-xs text-gray-500">{note.time}</p>
//               <p className="text-sm">{note.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;


// import { useState } from "react";
// import { FaSearch, FaCog, FaBell } from "react-icons/fa";
// import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

// const ManageAccountDeactivation = () => {
//   // Employee Deactivation Data
//   const [employees, setEmployees] = useState([
//     {
//       id: "EMP001",
//       name: "Ram Mahish",
//       department: "Marketing",
//       lastWorkingDate: "2024-02-28",
//       status: "Pending",
//       priority: "High",
//       profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: "EMP004",
//       name: "Ankush Singh",
//       department: "IT",
//       lastWorkingDate: "2024-02-20",
//       status: "Deactivation Completed",
//       priority: "Medium",
//       profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//   ]);

//   const [notes, setNotes] = useState([
//     {
//       author: "Rashmika (HR)",
//       time: "2 hours ago",
//       comment:
//         "Employee has returned all company assets. Pending final clearance from IT department.",
//     },
//     {
//       author: "John Anderson",
//       time: "5 hours ago",
//       comment: "Email account deactivation completed for Sarah Johnson.",
//     },
//   ]);

//   const [newNote, setNewNote] = useState("");

//   // Handle Adding Notes
//   const handleAddNote = () => {
//     if (newNote.trim() === "") return;
//     setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
//     setNewNote("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Employee Deactivation Management</h2>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <FaSearch className="absolute top-3 left-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <FaBell className="text-gray-600 text-xl cursor-pointer" />
//           {/* User Profile */}
//           <div className="flex items-center gap-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="Rashmika"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-semibold">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters & Buttons */}
//       <div className="flex gap-4 mb-4">
//         <input type="text" placeholder="Search by name, ID or email" className="border rounded-lg p-2 w-1/4" />
//         <select className="border rounded-lg p-2">
//           <option>All Department</option>
//         </select>
//         <select className="border rounded-lg p-2">
//           <option>All Status</option>
//         </select>
//         <input type="date" className="border rounded-lg p-2" />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaCog /> Process Deactivation
//         </button>
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//           Mark as Completed
//         </button>
//       </div>

//       {/* Deactivation Queue */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Deactivation Queue</h3>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Working Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Priority</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-t">
//                 <td className="p-2 flex items-center gap-2">
//                   <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
//                   <div>
//                     <div className="font-semibold">{emp.name}</div>
//                     <div className="text-sm text-gray-500">ID: {emp.id}</div>
//                   </div>
//                 </td>
//                 <td className="p-2 text-center">{emp.department}</td>
//                 <td className="p-2 text-center">{emp.lastWorkingDate}</td>
//                 <td className="p-2 text-center">
//                   <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.priority === "High" ? "bg-red-500" : "bg-orange-500"}`}>
//                     {emp.priority}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button className="text-blue-500 mr-2"><HiOutlinePencil size={20} /></button>
//                   <button className="text-red-500"><HiOutlineTrash size={20} /></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Checklist & Notes Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         {/* Checklist */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Deactivation Checklist</h3>
//           {["Email Account", "System Credentials", "Building Access", "VPN Access", "Software Licenses", "Company Assets"].map((item, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <input type="checkbox" className="w-4 h-4" />
//               <label>{item}</label>
//             </div>
//           ))}
//         </div>

//         {/* Notes & Comments */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Notes & Comments</h3>
//           <textarea className="w-full border rounded-lg p-2" rows={3} placeholder="Add a note here" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
//           <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
//             Add Note
//           </button>

//           {notes.map((note, index) => (
//             <div key={index} className="mt-4 border-t pt-2">
//               <p className="text-sm font-semibold">{note.author}</p>
//               <p className="text-xs text-gray-500">{note.time}</p>
//               <p className="text-sm">{note.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;

// import { useState } from "react";
// import { FaSearch, FaCog, FaCheck } from "react-icons/fa";
// import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

// const ManageAccountDeactivation = () => {
//   // Employee Deactivation Data
//   const [employees, setEmployees] = useState([
//     {
//       id: "EMP001",
//       name: "Ram Mahish",
//       department: "Marketing",
//       lastWorkingDate: "2024-02-28",
//       status: "Pending",
//       priority: "High",
//       profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: "EMP004",
//       name: "Ankush Singh",
//       department: "IT",
//       lastWorkingDate: "2024-02-20",
//       status: "Deactivation Completed",
//       priority: "Medium",
//       profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//   ]);

//   const [notes, setNotes] = useState([
//     {
//       author: "Rashmika (HR)",
//       time: "2 hours ago",
//       comment: "Employee has returned all company assets. Pending final clearance from IT department.",
//     },
//     {
//       author: "John Anderson",
//       time: "5 hours ago",
//       comment: "Email account deactivation completed for Sarah Johnson.",
//     },
//   ]);

//   const [newNote, setNewNote] = useState("");

//   // Handle Adding Notes
//   const handleAddNote = () => {
//     if (newNote.trim() === "") return;
//     setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
//     setNewNote("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Employee Deactivation Management</h2>

//         {/* User Profile */}
//         <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow">
//           <img
//             src="https://randomuser.me/api/portraits/women/1.jpg"
//             alt="User"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <p className="font-semibold">Rashmika</p>
//             <p className="text-sm text-gray-500">HR Admin</p>
//           </div>
//         </div>
//       </div>

//       {/* Search & Filters */}
//       <div className="flex gap-4 mb-4">
//         <div className="relative flex-grow">
//           <FaSearch className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by name, ID or email"
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <select className="border rounded-lg p-2">
//           <option>All Department</option>
//         </select>
//         <select className="border rounded-lg p-2">
//           <option>All Status</option>
//         </select>
//         <input type="date" className="border rounded-lg p-2" />
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4 mb-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaCog /> Process Deactivation
//         </button>
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaCheck /> Mark as Completed
//         </button>
//       </div>

//       {/* Deactivation Queue */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Deactivation Queue</h3>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Working Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Priority</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-t">
//                 <td className="p-2 flex items-center gap-2">
//                   <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
//                   <div>
//                     <div className="font-semibold">{emp.name}</div>
//                     <div className="text-sm text-gray-500">ID: {emp.id}</div>
//                   </div>
//                 </td>
//                 <td className="p-2 text-center">{emp.department}</td>
//                 <td className="p-2 text-center">{emp.lastWorkingDate}</td>
//                 <td className="p-2 text-center">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-white text-sm ${
//                       emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-white text-sm ${
//                       emp.priority === "High" ? "bg-red-500" : "bg-orange-500"
//                     }`}
//                   >
//                     {emp.priority}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button className="text-blue-500 mr-2">
//                     <HiOutlinePencil size={20} />
//                   </button>
//                   <button className="text-red-500">
//                     <HiOutlineTrash size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Checklist & Notes Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         {/* Checklist */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Deactivation Checklist</h3>
//           {["Email Account", "System Credentials", "Building Access", "VPN Access", "Software Licenses", "Company Assets"].map(
//             (item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <label>{item}</label>
//               </div>
//             )
//           )}
//         </div>

//         {/* Notes & Comments */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Notes & Comments</h3>
//           <textarea
//             className="w-full border rounded-lg p-2"
//             rows={3}
//             placeholder="Add a note here"
//             value={newNote}
//             onChange={(e) => setNewNote(e.target.value)}
//           />
//           <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
//             Add Note
//           </button>

//           {notes.map((note, index) => (
//             <div key={index} className="mt-4 border-t pt-2">
//               <p className="text-sm font-semibold">{note.author}</p>
//               <p className="text-xs text-gray-500">{note.time}</p>
//               <p className="text-sm">{note.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;


// import React from "react";

// const ManageAccountDeactivation: React.FC = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-100 p-6">
//         <h2 className="text-lg font-semibold">HRMS</h2>
//         <nav className="mt-6">
//           <ul>
//             <li className="py-2">Dashboard</li>
//             <li className="py-2">Employee Onboarding</li>
//             <li className="py-2 bg-blue-300 rounded-lg">Manage Account</li>
//             <li className="py-2">Manage Work</li>
//             <li className="py-2">Setting</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-white rounded-lg shadow-md">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-4">
//           <h2 className="text-xl font-semibold">Employee Deactivation Management</h2>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-4 py-2 border rounded-md"
//             />
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/user-avatar.png"
//                 alt="User"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="text-sm font-semibold">Rashmika</p>
//                 <p className="text-xs text-gray-500">HR Admin</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search & Filters */}
//         <div className="mt-4 flex space-x-4">
//           <input
//             type="text"
//             placeholder="Search by name, ID or email"
//             className="flex-1 px-4 py-2 border rounded-md"
//           />
//           <select className="px-4 py-2 border rounded-md">
//             <option>All Department</option>
//           </select>
//           <select className="px-4 py-2 border rounded-md">
//             <option>All Status</option>
//           </select>
//           <input type="date" className="px-4 py-2 border rounded-md" />
//         </div>

//         {/* Deactivation Queue */}
//         <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
//           <div className="flex justify-between items-center pb-3 border-b">
//             <h3 className="font-semibold">Deactivation Queue</h3>
//             <div className="flex space-x-2">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded">Process Deactivation</button>
//               <button className="px-4 py-2 bg-green-500 text-white rounded">Mark as Completed</button>
//             </div>
//           </div>
//           {/* Employee List */}
//           <div className="mt-3">
//             <div className="grid grid-cols-6 font-semibold py-2 border-b">
//               <div>Employee Name</div>
//               <div>Department</div>
//               <div>Last Working Date</div>
//               <div>Status</div>
//               <div>Priority</div>
//               <div>Action</div>
//             </div>

//             {/* Employee Row */}
//             <div className="grid grid-cols-6 py-2 border-b">
//               <div className="flex items-center space-x-2">
//                 <img src="/avatar1.png" alt="Avatar" className="w-8 h-8 rounded-full" />
//                 <div>
//                   <p className="font-semibold">Ram Mahish</p>
//                   <p className="text-xs text-gray-500">EMP001</p>
//                 </div>
//               </div>
//               <div>Marketing</div>
//               <div>2024-02-28</div>
//               <div className="text-yellow-600">Pending</div>
//               <div className="text-red-500">High</div>
//               <div className="flex space-x-2">
//                 <button className="text-blue-500">✏️</button>
//                 <button className="text-red-500">🗑️</button>
//               </div>
//             </div>

//             {/* Another Employee Row */}
//             <div className="grid grid-cols-6 py-2">
//               <div className="flex items-center space-x-2">
//                 <img src="/avatar2.png" alt="Avatar" className="w-8 h-8 rounded-full" />
//                 <div>
//                   <p className="font-semibold">Ankush Singh</p>
//                   <p className="text-xs text-gray-500">EMP004</p>
//                 </div>
//               </div>
//               <div>IT</div>
//               <div>2024-02-20</div>
//               <div className="text-green-600">Deactivation Completed</div>
//               <div className="text-yellow-500">Medium</div>
//               <div className="flex space-x-2">
//                 <button className="text-blue-500">✏️</button>
//                 <button className="text-red-500">🗑️</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Deactivation Checklist & Notes */}
//         <div className="mt-6 grid grid-cols-2 gap-4">
//           {/* Checklist */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow">
//             <h3 className="font-semibold">Deactivation Checklist</h3>
//             <div className="mt-2 space-y-2">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Email Account</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>System Credentials</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Building Access</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>VPN Access</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Software Licenses</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Company Assets</span>
//               </label>
//             </div>
//           </div>

//           {/* Notes & Comments */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow">
//             <h3 className="font-semibold">Notes & Comments</h3>
//             <textarea
//               className="w-full mt-2 p-2 border rounded-md"
//               placeholder="Add a note here"
//             />
//             <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Note</button>

//             <div className="mt-4 text-sm">
//               <p><strong>Rashmika (HR)</strong> - Added 2 hours ago</p>
//               <p className="text-gray-500">Employee has returned all company assets. Pending final clearance from IT.</p>

//               <p className="mt-2"><strong>John Anderson</strong> - Added 5 hours ago</p>
//               <p className="text-gray-500">Email account deactivation completed for Sarah Johnson.</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;

// import { useState } from "react";
// import { FaSearch, FaCog } from "react-icons/fa";
// import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

// const ManageAccountDeactivation = () => {
//   // Employee Deactivation Data
//   const [employees, setEmployees] = useState([
//     {
//       id: "EMP001",
//       name: "Ram Mahish",
//       department: "Marketing",
//       lastWorkingDate: "2024-02-28",
//       status: "Pending",
//       priority: "High",
//       profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       id: "EMP004",
//       name: "Ankush Singh",
//       department: "IT",
//       lastWorkingDate: "2024-02-20",
//       status: "Deactivation Completed",
//       priority: "Medium",
//       profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//   ]);

//   const [notes, setNotes] = useState([
//     {
//       author: "Rashmika (HR)",
//       time: "2 hours ago",
//       comment: "Employee has returned all company assets. Pending final clearance from IT department.",
//     },
//     {
//       author: "John Anderson",
//       time: "5 hours ago",
//       comment: "Email account deactivation completed for Sarah Johnson.",
//     },
//   ]);

//   const [newNote, setNewNote] = useState("");

//   // Handle Adding Notes
//   const handleAddNote = () => {
//     if (newNote.trim() === "") return;
//     setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
//     setNewNote("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Employee Deactivation Management</h2>
//         <div className="relative">
//           <FaSearch className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by name, ID or email"
//             className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* Filters & Buttons */}
//       <div className="flex gap-4 mb-4">
//         <select className="border rounded-lg p-2">
//           <option>All Department</option>
//         </select>
//         <select className="border rounded-lg p-2">
//           <option>All Status</option>
//         </select>
//         <input type="date" className="border rounded-lg p-2" />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaCog /> Process Deactivation
//         </button>
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//           Mark as Completed
//         </button>
//       </div>

//       {/* Deactivation Queue */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Deactivation Queue</h3>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Working Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Priority</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-t">
//                 <td className="p-2 flex items-center gap-2">
//                   <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
//                   <div>
//                     <div className="font-semibold">{emp.name}</div>
//                     <div className="text-sm text-gray-500">ID: {emp.id}</div>
//                   </div>
//                 </td>
//                 <td className="p-2 text-center">{emp.department}</td>
//                 <td className="p-2 text-center">{emp.lastWorkingDate}</td>
//                 <td className="p-2 text-center">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-white text-sm ${
//                       emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-white text-sm ${
//                       emp.priority === "High" ? "bg-red-500" : "bg-orange-500"
//                     }`}
//                   >
//                     {emp.priority}
//                   </span>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button className="text-blue-500 mr-2">
//                     <HiOutlinePencil size={20} />
//                   </button>
//                   <button className="text-red-500">
//                     <HiOutlineTrash size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Checklist & Notes Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         {/* Checklist */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Deactivation Checklist</h3>
//           {["Email Account", "System Credentials", "Building Access", "VPN Access", "Software Licenses", "Company Assets"].map(
//             (item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <label>{item}</label>
//               </div>
//             )
//           )}
//         </div>

//         {/* Notes & Comments */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Notes & Comments</h3>
//           <textarea
//             className="w-full border rounded-lg p-2"
//             rows={3}
//             placeholder="Add a note here"
//             value={newNote}
//             onChange={(e) => setNewNote(e.target.value)}
//           />
//           <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
//             Add Note
//           </button>

//           {notes.map((note, index) => (
//             <div key={index} className="mt-4 border-t pt-2">
//               <p className="text-sm font-semibold">{note.author}</p>
//               <p className="text-xs text-gray-500">{note.time}</p>
//               <p className="text-sm">{note.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccountDeactivation;