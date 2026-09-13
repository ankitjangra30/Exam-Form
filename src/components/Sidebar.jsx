// import {
//   LayoutDashboard,
//   FileText,
//   CreditCard,
//   History,
//   User,
//   LogOut,
//   X,
// } from "lucide-react";

// function Sidebar({ menuOpen, setMenuOpen }) {
//   return (
//     <>
//       {/* Mobile Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-50 h-screen w-72 bg-slate-900 text-white
//         transform transition-transform duration-300
//         ${menuOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       >
//         {/* Logo */}
//         <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700">
//           <div>
//             <h1 className="text-xl font-bold">College Portal</h1>
//             <p className="text-xs text-slate-400">Student Panel</p>
//           </div>

//           <button
//             onClick={() => setMenuOpen(false)}
//             className="lg:hidden"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="p-4 space-y-2">

//           <NavItem
//             icon={<LayoutDashboard size={20} />}
//             text="Dashboard"
//           />

//           <NavItem
//             icon={<FileText size={20} />}
//             text="Exam Form"
//           />

//           <NavItem
//             icon={<CreditCard size={20} />}
//             text="Payments"
//           />

//           <NavItem
//             icon={<History size={20} />}
//             text="My Forms"
//           />

//           <NavItem
//             icon={<User size={20} />}
//             text="My Profile"
//           />

//         </nav>

//         {/* Logout */}
//         <div className="absolute bottom-5 left-4 right-4">
//           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-slate-800 transition">
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

// function NavItem({ icon, text }) {
//   return (
//     <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-blue-600 hover:text-white transition">
//       {icon}
//       <span>{text}</span>
//     </button>
//   );
// }

// export default Sidebar;