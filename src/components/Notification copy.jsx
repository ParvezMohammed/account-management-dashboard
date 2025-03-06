// import { FaBell } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// const Notification = () => {
//   const priorityAlerts = [
//     {
//       title: "New Account Request",
//       employee: "John Smith",
//       id: "EMP001",
//       role: "Software Engineer - Development Team",
//       time: "Requested 2 hours ago",
//       background: "bg-yellow-100",
//       buttons: [
//         { text: "Approve", style: "bg-green-500 text-white" },
//         { text: "Reject", style: "border border-gray-400 text-gray-700" },
//       ],
//     },
//     {
//       title: "Account Deactivation Request",
//       employee: "Sarah Johnson",
//       id: "EMP045",
//       role: "Marketing Specialist - Marketing Team",
//       time: "Requested 30 minutes ago",
//       background: "bg-red-100",
//       buttons: [
//         { text: "Process", style: "bg-yellow-600 text-white" },
//         { text: "View Details", style: "border border-gray-400 text-gray-700" },
//       ],
//     },
//   ];

//   const history = [
//     {
//       employee: "Michael Brown",
//       id: "EMP089",
//       action: "Account Creation",
//       processedBy: "Admin User",
//       status: "Completed",
//       time: "2 hours ago",
//     },
//     {
//       employee: "Emily Wilson",
//       id: "EMP076",
//       action: "Password Reset",
//       processedBy: "System",
//       status: "Completed",
//       time: "5 hours ago",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Notification</h2>
//         <div className="flex items-center space-x-4">
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/68.jpg"
//               alt="User"
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar & Filter Buttons (Buttons moved to the end) */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="relative flex-1 max-w-md">
//           <input
//             type="text"
//             placeholder="Search Notification"
//             className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//         <div className="space-x-2">
//           <button className="px-4 py-2 border rounded-md">All</button>
//           <button className="px-4 py-2 border rounded-md relative">
//             Unread
//             <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>
//           <button className="px-4 py-2 border rounded-md">Mark as read</button>
//           <button className="px-4 py-2 border rounded-md">Delete</button>
//         </div>
//       </div>

//       {/* Priority Alerts */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Priority Alerts</h3>
//         {priorityAlerts.map((alert, index) => (
//           <div key={index} className={`p-4 mb-3 rounded-lg ${alert.background}`}>
//             <p className="font-semibold">{alert.title}</p>
//             <p className="text-sm">
//               {alert.employee} (ID: {alert.id})
//             </p>
//             <p className="text-sm text-gray-500">{alert.role}</p>
//             <p className="text-xs text-gray-500">{alert.time}</p>
//             <div className="flex space-x-2 mt-2">
//               {alert.buttons.map((btn, i) => (
//                 <button key={i} className={`px-4 py-2 rounded-md ${btn.style}`}>
//                   {btn.text}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Notification History */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Notification History</h3>
//         {history.map((item, index) => (
//           <div key={index} className="flex justify-between items-center border-b py-3 last:border-b-0">
//             <div>
//               <p className="font-medium">
//                 {item.employee} (ID: {item.id}) - {item.action}
//               </p>
//               <p className="text-xs text-gray-500">Processed By - {item.processedBy}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md">
//                 {item.status}
//               </span>
//               <p className="text-xs text-gray-500">{item.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* System Status */}
//       <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           <p className="text-sm">System Status - Online</p>
//         </div>
//         <p className="text-sm text-gray-500">Last Sync: 5 minutes ago</p>
//         <p className="text-sm text-gray-500">3 Pending Requests</p>
//       </div>
//     </div>
//   );
// };

// export default Notification;

// import { FaBell } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// const Notification = () => {
//   const priorityAlerts = [
//     {
//       title: "New Account Request",
//       employee: "John Smith",
//       id: "EMP001",
//       role: "Software Engineer - Development Team",
//       time: "Requested 2 hours ago",
//       background: "bg-yellow-100",
//       buttons: [
//         { text: "Approve", style: "bg-green-500 text-white" },
//         { text: "Reject", style: "border border-gray-400 text-gray-700" },
//       ],
//     },
//     {
//       title: "Account Deactivation Request",
//       employee: "Sarah Johnson",
//       id: "EMP045",
//       role: "Marketing Specialist - Marketing Team",
//       time: "Requested 30 minutes ago",
//       background: "bg-red-100",
//       buttons: [
//         { text: "Process", style: "bg-yellow-600 text-white" },
//         { text: "View Details", style: "border border-gray-400 text-gray-700" },
//       ],
//     },
//   ];

//   const history = [
//     {
//       employee: "Michael Brown",
//       id: "EMP089",
//       action: "Account Creation",
//       processedBy: "Admin User",
//       status: "Completed",
//       time: "2 hours ago",
//     },
//     {
//       employee: "Emily Wilson",
//       id: "EMP076",
//       action: "Password Reset",
//       processedBy: "System",
//       status: "Completed",
//       time: "5 hours ago",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Notification</h2>
//         <div className="flex items-center space-x-4">
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/68.jpg"
//               alt="User"
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar & Filter Buttons */}
//       <div className="flex items-center mb-6">
//         <div className="relative flex-1 max-w-md">
//           <input
//             type="text"
//             placeholder="Search Notification"
//             className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//         <div className="ml-4 space-x-2">
//           <button className="px-4 py-2 border rounded-md">All</button>
//           <button className="px-4 py-2 border rounded-md relative">
//             Unread
//             <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>
//           <button className="px-4 py-2 border rounded-md">Mark as read</button>
//           <button className="px-4 py-2 border rounded-md">Delete</button>
//         </div>
//       </div>

//       {/* Priority Alerts */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Priority Alerts</h3>
//         {priorityAlerts.map((alert, index) => (
//           <div key={index} className={`p-4 mb-3 rounded-lg ${alert.background}`}>
//             <p className="font-semibold">{alert.title}</p>
//             <p className="text-sm">
//               {alert.employee} (ID: {alert.id})
//             </p>
//             <p className="text-sm text-gray-500">{alert.role}</p>
//             <p className="text-xs text-gray-500">{alert.time}</p>
//             <div className="flex space-x-2 mt-2">
//               {alert.buttons.map((btn, i) => (
//                 <button key={i} className={`px-4 py-2 rounded-md ${btn.style}`}>
//                   {btn.text}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Notification History */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Notification History</h3>
//         {history.map((item, index) => (
//           <div key={index} className="flex justify-between items-center border-b py-3 last:border-b-0">
//             <div>
//               <p className="font-medium">
//                 {item.employee} (ID: {item.id}) - {item.action}
//               </p>
//               <p className="text-xs text-gray-500">Processed By - {item.processedBy}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md">
//                 {item.status}
//               </span>
//               <p className="text-xs text-gray-500">{item.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* System Status */}
//       <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           <p className="text-sm">System Status - Online</p>
//         </div>
//         <p className="text-sm text-gray-500">Last Sync: 5 minutes ago</p>
//         <p className="text-sm text-gray-500">3 Pending Requests</p>
//       </div>
//     </div>
//   );
// };

// export default Notification;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaBell } from "react-icons/fa";

// const Notification = () => {
//   const [notifications] = useState([
//     {
//       type: "New Account Request",
//       employee: "John Smith",
//       id: "EMP001",
//       role: "Software Engineer - Development Team",
//       time: "Requested 2 hours ago",
//       bgColor: "bg-yellow-50",
//       borderColor: "border-yellow-300",
//       actions: [
//         {
//           label: "Approve",
//           style: "bg-green-500 text-white hover:bg-green-600",
//         },
//         {
//           label: "Reject",
//           style: "bg-gray-200 text-gray-700 hover:bg-gray-300",
//         },
//       ],
//     },
//     {
//       type: "Account Deactivation Request",
//       employee: "Sarah Johnson",
//       id: "EMP045",
//       role: "Marketing Specialist - Marketing Team",
//       time: "Requested 30 minutes ago",
//       bgColor: "bg-red-50",
//       borderColor: "border-red-300",
//       actions: [
//         {
//           label: "Process",
//           style: "bg-yellow-600 text-white hover:bg-yellow-700",
//         },
//         {
//           label: "View Details",
//           style: "bg-gray-200 text-gray-700 hover:bg-gray-300",
//         },
//       ],
//     },
//   ]);

//   const history = [
//     {
//       employee: "Michael Brown",
//       id: "EMP089",
//       action: "Account Creation",
//       status: "Completed",
//       time: "2 hours ago",
//       processedBy: "Admin User",
//     },
//     {
//       employee: "Emily Wilson",
//       id: "EMP076",
//       action: "Password Reset",
//       status: "Completed",
//       time: "5 hours ago",
//       processedBy: "System",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Notification</h2>
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Notification"
//               className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           {/* Bell Icon */}
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           {/* User Profile */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/50.jpg"
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-3 mb-4">
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
//           All
//         </button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100 relative">
//           Unread
//           <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
//             •
//           </span>
//         </button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
//           Mark as read
//         </button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
//           Delete
//         </button>
//       </div>

//       {/* Priority Alerts */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Priority Alerts</h3>
//         {notifications.map((alert, index) => (
//           <div
//             key={index}
//             className={`p-4 mb-3 ${alert.bgColor} border-l-4 ${alert.borderColor} rounded-md`}
//           >
//             <p className="font-semibold">{alert.type}</p>
//             <p>
//               {alert.employee} (ID: {alert.id})
//             </p>
//             <p className="text-sm text-gray-500">{alert.role}</p>
//             <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
//             <div className="mt-2 flex gap-2">
//               {alert.actions.map((action, i) => (
//                 <button
//                   key={i}
//                   className={`px-4 py-1 rounded-md ${action.style}`}
//                 >
//                   {action.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Notification History */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Notification History</h3>

//         {/* Search Bar for Notification History */}
//         <div className="relative mb-4">
//           <input
//             type="text"
//             placeholder="Search Notification History"
//             className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200 w-full"
//           />
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>

//         {history.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center border-b py-3 last:border-b-0"
//           >
//             <div>
//               <p className="font-medium">
//                 {item.employee} (ID: {item.id}) - {item.action}
//               </p>
//               <p className="text-xs text-gray-500">
//                 Processed By - {item.processedBy}
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md">
//                 {item.status}
//               </span>
//               <p className="text-xs text-gray-500">{item.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* System Status */}
//       <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           <p className="text-sm">System Status - Online</p>
//         </div>
//         <p className="text-sm text-gray-500">Last Sync: 5 minutes ago</p>
//         <p className="text-sm text-blue-600">3 Pending Requests</p>
//       </div>
//     </div>
//   );
// };

// export default Notification;

// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaBell } from "react-icons/fa";

// const Notification = () => {
//   const [notifications] = useState([
//     {
//       type: "New Account Request",
//       employee: "John Smith",
//       id: "EMP001",
//       role: "Software Engineer - Development Team",
//       time: "Requested 2 hours ago",
//       bgColor: "bg-yellow-50",
//       borderColor: "border-yellow-300",
//       actions: [
//         { label: "Approve", style: "bg-green-500 text-white hover:bg-green-600" },
//         { label: "Reject", style: "bg-gray-200 text-gray-700 hover:bg-gray-300" },
//       ],
//     },
//     {
//       type: "Account Deactivation Request",
//       employee: "Sarah Johnson",
//       id: "EMP045",
//       role: "Marketing Specialist - Marketing Team",
//       time: "Requested 30 minutes ago",
//       bgColor: "bg-red-50",
//       borderColor: "border-red-300",
//       actions: [
//         { label: "Process", style: "bg-yellow-600 text-white hover:bg-yellow-700" },
//         { label: "View Details", style: "bg-gray-200 text-gray-700 hover:bg-gray-300" },
//       ],
//     },
//   ]);

//   const history = [
//     {
//       employee: "Michael Brown",
//       id: "EMP089",
//       action: "Account Creation",
//       status: "Completed",
//       time: "2 hours ago",
//       processedBy: "Admin User",
//     },
//     {
//       employee: "Emily Wilson",
//       id: "EMP076",
//       action: "Password Reset",
//       status: "Completed",
//       time: "5 hours ago",
//       processedBy: "System",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Notification</h2>
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Notification"
//               className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           {/* Bell Icon */}
//           <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//           {/* User Profile */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/50.jpg"
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-medium">Rashmika</p>
//               <p className="text-sm text-gray-500">HR Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="flex-end gap-3 mb-4">
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">All</button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100 relative">
//           Unread
//           <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">•</span>
//         </button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Mark as read</button>
//         <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Delete</button>
//       </div>

//       {/* Priority Alerts */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Priority Alerts</h3>
//         {notifications.map((alert, index) => (
//           <div key={index} className={`p-4 mb-3 ${alert.bgColor} border-l-4 ${alert.borderColor} rounded-md`}>
//             <p className="font-semibold">{alert.type}</p>
//             <p>{alert.employee} (ID: {alert.id})</p>
//             <p className="text-sm text-gray-500">{alert.role}</p>
//             <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
//             <div className="mt-2 flex gap-2">
//               {alert.actions.map((action, i) => (
//                 <button key={i} className={`px-4 py-1 rounded-md ${action.style}`}>{action.label}</button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Notification History */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold mb-4">Notification History</h3>
//         {history.map((item, index) => (
//           <div key={index} className="flex justify-between items-center border-b py-3 last:border-b-0">
//             <div>
//               <p className="font-medium">{item.employee} (ID: {item.id}) - {item.action}</p>
//               <p className="text-xs text-gray-500">Processed By - {item.processedBy}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md">{item.status}</span>
//               <p className="text-xs text-gray-500">{item.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* System Status */}
//       <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           <p className="text-sm">System Status - Online</p>
//         </div>
//         <p className="text-sm text-gray-500">Last Sync: 5 minutes ago</p>
//         <p className="text-sm text-blue-600">3 Pending Requests</p>
//       </div>
//     </div>
//   );
// };

// export default Notification;
