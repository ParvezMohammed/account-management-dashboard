import { useState } from "react";
import { FaUserCheck, FaUserTimes, FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill, BsExclamationCircleFill } from "react-icons/bs";

const ManageAccount = () => {
  const [employees, setEmployees] = useState([
    {
      id: "EMP003",
      name: "Darlene Robertson",
      department: "Development",
      lastActive: "2024-02-20 9:30 AM",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "EMP006",
      name: "Marvin McKinney",
      department: "Design",
      lastActive: "2024-02-19 3:45 PM",
      status: "Inactive",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    {
      action: "Account Deactivated",
      employee: "Marvin McKinney",
      id: "EMP006",
      date: "2024-02-19 15:45 PM",
      reason: "Termination",
      icon: <BsXCircleFill className="text-red-500 text-lg" />,
    },
    {
      action: "Account Activated",
      employee: "John Smith",
      id: "EMP025",
      date: "2024-01-12 11:20 AM",
      reason: "New Employee Onboarding",
      icon: <BsCheckCircleFill className="text-green-500 text-lg" />,
    },
    {
      action: "Account Suspended",
      employee: "Michael Chen",
      id: "EMP013",
      date: "2024-11-02 12:42 PM",
      reason: "Security Policy Violation",
      icon: <BsExclamationCircleFill className="text-yellow-500 text-lg" />,
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Account Management Header */}
        <h2 className="text-xl font-semibold mb-4">Account Management</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { title: "Active Accounts", count: "2847" },
            { title: "Inactive Accounts", count: "156" },
            { title: "Pending Action", count: "2847" },
            { title: "New Accounts (30d)", count: "2847" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 border rounded-md flex flex-col items-center bg-gray-50">
              <p className="text-gray-600">{item.title}</p>
              <p className="text-lg font-bold">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Employee Status Control */}
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-semibold mb-2">Employee Status Control</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by name, ID or email"
              className="p-2 border rounded-md flex-1"
            />
            <select className="p-2 border rounded-md">
              <option>All Departments</option>
            </select>
            <select className="p-2 border rounded-md">
              <option>All Status</option>
            </select>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="w-50 bg-blue-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition">
              <FaUserCheck className="mr-2" /> Batch Activated
            </button>
            <button className="w-50 bg-red-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-red-600 transition">
              <FaUserTimes className="mr-2" /> Batch Deactivated
            </button>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Employee Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Last Active</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 flex items-center gap-3">
                    <img src={emp.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">{emp.name}</p>
                      <p className="text-sm text-gray-500">{emp.id}</p>
                    </div>
                  </td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.lastActive}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs rounded-md ${emp.status === "Active" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-3">
                    <button className="text-blue-500">
                      <FaEdit />
                    </button>
                    <button className="text-red-500">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center mt-3">
            <span className="text-gray-600 text-sm mr-4">Showing 1 to 10 of 97 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-md">&lt;</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md">1</button>
              <button className="px-3 py-1 bg-gray-200 rounded-md">2</button>
              <button className="px-3 py-1 bg-gray-200 rounded-md">3</button>
              <button className="px-3 py-1 bg-gray-200 rounded-md">&gt;</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Status Update Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Status Update Form</h3>

            <label className="block text-sm font-medium">Reason for Deactivation</label>
            <select className="w-full border rounded-lg p-2 mt-1">
              <option>Select reason</option>
            </select>

            <label className="block text-sm font-medium mt-4">Effective Date</label>
            <input type="date" className="w-full border rounded-lg p-2 mt-1" />

            <label className="block text-sm font-medium mt-4">Comments</label>
            <textarea className="w-full border rounded-lg p-2 mt-1" rows="3"></textarea>

            <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4">Submit Update</button>
          </div>

          {/* Recent Activity Log */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Activity Log</h3>
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 mb-4">
                {activity.icon}
                <div>
                  <p className="font-semibold">{activity.action}: {activity.employee} ({activity.id})</p>
                  <p className="text-sm text-gray-500">Modified by Admin · {activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;

// import { useState } from "react";
// import { FaUserCheck, FaUserTimes, FaEdit, FaTrashAlt } from "react-icons/fa";

// const ManageAccount = () => {
//   const [employees] = useState([
//     {
//       id: "EMP003",
//       name: "Darlene Robertson",
//       department: "Development",
//       lastActive: "2024-02-20 9:30 AM",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/women/3.jpg",
//     },
//     {
//       id: "EMP006",
//       name: "Marvin McKinney",
//       department: "Design",
//       lastActive: "2024-02-19 3:45 PM",
//       status: "Inactive",
//       avatar: "https://randomuser.me/api/portraits/men/6.jpg",
//     },
//   ]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Account Management</h2>

//         {/* Status Cards */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           {[
//             "Active Accounts",
//             "Inactive Accounts",
//             "Pending Action",
//             "New Accounts (30d)",
//           ].map((title, idx) => (
//             <div
//               key={idx}
//               className="p-4 border rounded-md flex flex-col items-center"
//             >
//               <p className="text-gray-600">{title}</p>
//               <p className="text-lg font-bold">2847</p>
//             </div>
//           ))}
//         </div>

//         {/* Employee Status Control */}
//         <div className="bg-gray-50 p-4 rounded-md mb-6">
//           <h3 className="font-semibold mb-2">Employee Status Control</h3>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search by name, ID or email"
//               className="p-2 border rounded-md flex-1"
//             />
//             <select className="p-2 border rounded-md">
//               <option>All Departments</option>
//             </select>
//             <select className="p-2 border rounded-md">
//               <option>All Status</option>
//             </select>
//           </div>
//           <div className="mt-4 flex gap-2">
//             <button className="flex-1 bg-blue-500 text-white p-2 rounded-md flex items-center justify-center">
//               <FaUserCheck className="mr-2" /> Batch Activated
//             </button>
//             <button className="flex-1 bg-red-500 text-white p-2 rounded-md flex items-center justify-center">
//               <FaUserTimes className="mr-2" /> Batch Deactivated
//             </button>
//           </div>
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse border border-gray-300 bg-white">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Active</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2 flex items-center gap-2">
//                   <img
//                     src={emp.avatar}
//                     alt="avatar"
//                     className="w-8 h-8 rounded-full"
//                   />
//                   {emp.name}{" "}
//                   <span className="text-sm text-gray-500">{emp.id}</span>
//                 </td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.lastActive}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 text-xs rounded-md ${
//                       emp.status === "Active"
//                         ? "bg-green-200 text-green-700"
//                         : "bg-red-200 text-red-700"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 flex gap-2">
//                   <button className="text-blue-500">
//                     <FaEdit />
//                   </button>
//                   <button className="text-red-500">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Status Update Form */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-4">Status Update Form</h3>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">
//                 Reason for Deactivation
//               </label>
//               <select className="w-full border rounded-lg p-2 mt-1">
//                 <option>Select reason</option>
//                 <option>Resignation</option>
//                 <option>Termination</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">
//                 Effective Date
//               </label>
//               <div className="relative">
//                 <input
//                   type="date"
//                   className="w-full border rounded-lg p-2 mt-1"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">Comments</label>
//               <textarea
//                 className="w-full border rounded-lg p-2 mt-1"
//                 rows="3"
//               ></textarea>
//             </div>

//             <div className="mb-4 flex items-center">
//               <input type="checkbox" id="confirmAction" className="mr-2" />
//               <label htmlFor="confirmAction" className="text-sm">
//                 I understand this action will affect user access to company
//                 resources.
//               </label>
//             </div>

//             <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
//               Submit Update
//             </button>
//           </div>

//           {/* Recent Activity Log */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-4">Recent Activity Log</h3>

//             <div className="space-y-4">
//               {/* Activity 1 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-red-500 text-lg">🚫</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Deactivated: Marvin McKinney (EMP 006)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/02/19 15:45 PM
//                   </p>
//                   <p className="text-sm text-gray-600">Reason: Termination</p>
//                 </div>
//               </div>

//               {/* Activity 2 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-green-500 text-lg">✅</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Activated: John Smith (EMP 025)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/01/12 11:20 AM
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Reason: New Employee Onboarding
//                   </p>
//                 </div>
//               </div>

//               {/* Activity 3 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-yellow-500 text-lg">⚠️</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Suspended: Michael Chen (EMP 013)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/11/02 12:42 PM
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Reason: Security Policy Violation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccount;

// import { useState } from "react";
// import { FaUserCheck, FaUserTimes, FaEdit, FaTrashAlt } from "react-icons/fa";

// const ManageAccount = () => {
//   const [employees] = useState([
//     {
//       id: "EMP003",
//       name: "Darlene Robertson",
//       department: "Development",
//       lastActive: "2024-02-20 9:30 AM",
//       status: "Active",
//       avatar: "https://randomuser.me/api/portraits/women/3.jpg",
//     },
//     {
//       id: "EMP006",
//       name: "Marvin McKinney",
//       department: "Design",
//       lastActive: "2024-02-19 3:45 PM",
//       status: "Inactive",
//       avatar: "https://randomuser.me/api/portraits/men/6.jpg",
//     },
//   ]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Account Management</h2>

//         {/* Status Cards */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           {[
//             "Active Accounts",
//             "Inactive Accounts",
//             "Pending Action",
//             "New Accounts (30d)",
//           ].map((title, idx) => (
//             <div
//               key={idx}
//               className="p-4 border rounded-md flex flex-col items-center"
//             >
//               <p className="text-gray-600">{title}</p>
//               <p className="text-lg font-bold">2847</p>
//             </div>
//           ))}
//         </div>

//         {/* Employee Status Control */}
//         <div className="bg-gray-50 p-4 rounded-md mb-6">
//           <h3 className="font-semibold mb-2">Employee Status Control</h3>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search by name, ID or email"
//               className="p-2 border rounded-md flex-1"
//             />
//             <select className="p-2 border rounded-md">
//               <option>All Departments</option>
//             </select>
//             <select className="p-2 border rounded-md">
//               <option>All Status</option>
//             </select>
//           </div>
//           <div className="mt-4 flex gap-2">
//             <button className="flex-1 bg-blue-500 text-white p-2 rounded-md flex items-center justify-center">
//               <FaUserCheck className="mr-2" /> Batch Activated
//             </button>
//             <button className="flex-1 bg-red-500 text-white p-2 rounded-md flex items-center justify-center">
//               <FaUserTimes className="mr-2" /> Batch Deactivated
//             </button>
//           </div>
//         </div>

//         {/* Employee Table */}
//         <table className="w-full border-collapse border border-gray-300 bg-white">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">Employee Name</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Last Active</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2 flex items-center gap-2">
//                   <img
//                     src={emp.avatar}
//                     alt="avatar"
//                     className="w-8 h-8 rounded-full"
//                   />
//                   {emp.name}{" "}
//                   <span className="text-sm text-gray-500">{emp.id}</span>
//                 </td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.lastActive}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 text-xs rounded-md ${
//                       emp.status === "Active"
//                         ? "bg-green-200 text-green-700"
//                         : "bg-red-200 text-red-700"
//                     }`}
//                   >
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="p-2 flex gap-2">
//                   <button className="text-blue-500">
//                     <FaEdit />
//                   </button>
//                   <button className="text-red-500">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Status Update Form */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-4">Status Update Form</h3>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">
//                 Reason for Deactivation
//               </label>
//               <select className="w-full border rounded-lg p-2 mt-1">
//                 <option>Select reason</option>
//                 <option>Resignation</option>
//                 <option>Termination</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">
//                 Effective Date
//               </label>
//               <div className="relative">
//                 <input
//                   type="date"
//                   className="w-full border rounded-lg p-2 mt-1"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">Comments</label>
//               <textarea
//                 className="w-full border rounded-lg p-2 mt-1"
//                 rows="3"
//               ></textarea>
//             </div>

//             <div className="mb-4 flex items-center">
//               <input type="checkbox" id="confirmAction" className="mr-2" />
//               <label htmlFor="confirmAction" className="text-sm">
//                 I understand this action will affect user access to company
//                 resources.
//               </label>
//             </div>

//             <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
//               Submit Update
//             </button>
//           </div>

//           {/* Recent Activity Log */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-4">Recent Activity Log</h3>

//             <div className="space-y-4">
//               {/* Activity 1 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-red-500 text-lg">🚫</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Deactivated: Marvin McKinney (EMP 006)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/02/19 15:45 PM
//                   </p>
//                   <p className="text-sm text-gray-600">Reason: Termination</p>
//                 </div>
//               </div>

//               {/* Activity 2 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-green-500 text-lg">✅</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Activated: John Smith (EMP 025)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/01/12 11:20 AM
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Reason: New Employee Onboarding
//                   </p>
//                 </div>
//               </div>

//               {/* Activity 3 */}
//               <div className="flex items-start space-x-3">
//                 <span className="text-yellow-500 text-lg">⚠️</span>
//                 <div>
//                   <p className="font-semibold">
//                     Account Suspended: Michael Chen (EMP 013)
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Modify by Admin User · 2024/11/02 12:42 PM
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Reason: Security Policy Violation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAccount;
