// import { useState } from "react";

// import {
//   FileText,
//   Clock,
//   CheckCircle,
//   CreditCard,
//   ArrowRight,
// } from "lucide-react";

// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import ExamForm from "./ExamForm";

// function StudentDashboard() {

//   const [menuOpen, setMenuOpen] = useState(false);

  
//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Sidebar */}
//       <Sidebar
//         menuOpen={menuOpen}
//         setMenuOpen={setMenuOpen}
//       />

//       {/* Main */}
//       <div className="lg:ml-72">

//         <Navbar setMenuOpen={setMenuOpen} />

//         <main className="p-4 sm:p-6 lg:p-8">

//           {/* Welcome */}
//           <div className="mb-6">
//             <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
//               Welcome, Ankit 👋
//             </h1>

//             <p className="mt-1 text-slate-500">
//               Manage your examination forms and payments.
//             </p>
//           </div>


//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

//             <DashboardCard
//               icon={<FileText />}
//               title="Exam Forms"
//               value="03"
//             />

//             <DashboardCard
//               icon={<Clock />}
//               title="Pending Forms"
//               value="01"
//             />

//             <DashboardCard
//               icon={<CheckCircle />}
//               title="Approved Forms"
//               value="02"
//             />

//             <DashboardCard
//               icon={<CreditCard />}
//               title="Total Payment"
//               value="₹2,400"
//             />

//           </div>


//           {/* Recent Form */}
//           <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm">

//             <div className="p-5 sm:p-6 border-b flex items-center justify-between">

//               <div>
//                 <h2 className="text-lg font-semibold text-slate-800">
//                   Recent Exam Form
//                 </h2>

//                 <p className="text-sm text-slate-500 mt-1">
//                   Your latest examination application
//                 </p>
//               </div>

//               <button className="hidden sm:flex items-center gap-2 text-blue-600 text-sm font-medium">
//                 View All
//                 <ArrowRight size={17} />
//               </button>

//             </div>


//             {/* Form */}
//             <div className="p-5 sm:p-6">

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

//                 <Info
//                   title="Course"
//                   value="BCA"
//                 />

//                 <Info
//                   title="Semester"
//                   value="6th Semester"
//                 />

//                 <Info
//                   title="Exam Type"
//                   value="Regular"
//                 />

//                 <Info
//                   title="Exam Fee"
//                   value="₹1,200"
//                 />

//               </div>


//               <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

//                 <div>
//                   <p className="text-sm text-slate-500">
//                     Form Status
//                   </p>

//                   <span className="inline-block mt-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
//                     Payment Pending
//                   </span>
//                 </div>

//                 <button className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition">
//                   Continue Form
//                 </button>

//               </div>

//             </div>

//           </div>


//           {/* Quick Action */}
//           <div className="mt-6">

//             <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-sm transition"
//               type="button"
//               onClick={ExamForm}
//             >
//               + Apply For Examination
//             </button>

//           </div>

//         </main>

//       </div>

//     </div>
//   );
// }


// function DashboardCard({ icon, title, value }) {

//   return (
//     <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

//       <div className="flex items-center justify-between">

//         <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
//           {icon}
//         </div>

//         <p className="text-2xl font-bold text-slate-800">
//           {value}
//         </p>

//       </div>

//       <p className="mt-4 text-sm text-slate-500">
//         {title}
//       </p>

//     </div>
//   );
// }


// function Info({ title, value }) {

//   return (
//     <div>
//       <p className="text-sm text-slate-500">
//         {title}
//       </p>

//       <p className="mt-1 font-semibold text-slate-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// export default StudentDashboard;


import React from 'react'

const StudentDashboard = () => {
  return (
    <div>StudentDashboard</div>
  )
}

export default StudentDashboard;