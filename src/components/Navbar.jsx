// import {
//   Menu,
//   Bell,
//   UserCircle,
// } from "lucide-react";

// function Navbar({ setMenuOpen }) {
//   return (
//     <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">

//       {/* Left */}
//       <div className="flex items-center gap-4">

//         <button
//           onClick={() => setMenuOpen(true)}
//           className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
//         >
//           <Menu size={24} />
//         </button>

//         <div>
//           <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
//             Student Dashboard
//           </h2>

//           <p className="hidden sm:block text-sm text-slate-500">
//             Welcome back, Ankit
//           </p>
//         </div>

//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-3 sm:gap-5">

//         <button className="relative p-2 rounded-full hover:bg-slate-100">
//           <Bell size={21} />

//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         <div className="flex items-center gap-2">
//           <UserCircle size={34} className="text-blue-600" />

//           <div className="hidden sm:block">
//             <p className="text-sm font-medium text-slate-800">
//               Ankit
//             </p>

//             <p className="text-xs text-slate-500">
//               BCA Student
//             </p>
//           </div>
//         </div>

//       </div>

//     </header>
//   );
// }

// export default Navbar;