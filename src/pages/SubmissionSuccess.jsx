// import {
//   CheckCircle2,
//   Download,
//   Printer,
//   FileText,
//   Clock3,
//   Hash,
//   CalendarDays,
//   ArrowLeft,
// } from "lucide-react";

// function SubmissionSuccess({ formData, applicationNumber, onDashboard }) {

//   const submittedDate = new Date().toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     window.print();
//   };

//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Header */}
//       <header className="bg-white border-b border-slate-200 print:hidden">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">

//           <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//             Examination Form
//           </h1>

//           <p className="text-sm text-slate-500 mt-1">
//             Application submission confirmation
//           </p>

//         </div>
//       </header>


//       <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">

//         {/* Success Card */}
//         <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

//           {/* Success Header */}
//           <div className="text-center px-5 sm:px-8 py-8 sm:py-10 border-b border-slate-200">

//             <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
//               <CheckCircle2
//                 size={42}
//                 className="text-green-600"
//               />
//             </div>

//             <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-slate-800">
//               Form Submitted Successfully!
//             </h1>

//             <p className="mt-2 text-sm sm:text-base text-slate-500">
//               Your examination form has been submitted successfully.
//             </p>

//           </div>


//           {/* Application Number */}
//           <div className="p-5 sm:p-7">

//             <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">

//               <div className="flex items-center justify-center gap-2 text-blue-700">
//                 <Hash size={19} />
//                 <span className="text-sm font-medium">
//                   Application Number
//                 </span>
//               </div>

//               <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-wide text-blue-800">
//                 {applicationNumber}
//               </p>

//               <p className="mt-2 text-xs sm:text-sm text-blue-600">
//                 Please save this number for future reference.
//               </p>

//             </div>


//             {/* Status */}
//             <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

//               <StatusCard
//                 icon={<CheckCircle2 size={19} />}
//                 title="Form Status"
//                 value="Submitted"
//                 type="success"
//               />

//               <StatusCard
//                 icon={<Clock3 size={19} />}
//                 title="Payment Status"
//                 value="Under Verification"
//                 type="warning"
//               />

//               <StatusCard
//                 icon={<CalendarDays size={19} />}
//                 title="Submitted On"
//                 value={submittedDate}
//                 type="normal"
//               />

//             </div>


//             {/* Form Details */}
//             <div className="mt-7 border border-slate-200 rounded-2xl overflow-hidden">

//               <div className="px-5 py-4 bg-slate-50 border-b border-slate-200">

//                 <h2 className="font-semibold text-slate-800">
//                   Application Details
//                 </h2>

//               </div>


//               <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

//                 <Info
//                   label="Student Name"
//                   value={formData.studentName}
//                 />

//                 <Info
//                   label="University Number"
//                   value={formData.universityNumber}
//                 />

//                 <Info
//                   label="Roll Number"
//                   value={formData.rollNumber}
//                 />

//                 <Info
//                   label="Course"
//                   value={formData.course}
//                 />

//                 <Info
//                   label="Semester"
//                   value={`${formData.semester} Semester`}
//                 />

//                 <Info
//                   label="Exam Type"
//                   value={formData.examType}
//                 />

//                 <Info
//                   label="Subjects"
//                   value={`${formData.subjects.length} Selected`}
//                 />

//                 <Info
//                   label="Examination Fee"
//                   value={`₹${calculateFee(formData)}`}
//                 />

//               </div>

//             </div>


//             {/* Important Notice */}
//             <div className="mt-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200">

//               <p className="text-sm font-medium text-yellow-800">
//                 Important
//               </p>

//               <p className="text-xs sm:text-sm text-yellow-700 mt-1 leading-5">
//                 Your payment is currently under verification by the
//                 college examination department. You will be able to
//                 download the final approved examination form after
//                 verification.
//               </p>

//             </div>


//             {/* Actions */}
//             <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 print:hidden">

//               <button
//                 onClick={handlePrint}
//                 className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition"
//               >
//                 <Printer size={18} />
//                 Print
//               </button>

//               <button
//                 onClick={handleDownload}
//                 className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition"
//               >
//                 <Download size={18} />
//                 Download
//               </button>

//               <button
//                 onClick={onDashboard}
//                 className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
//               >
//                 <FileText size={18} />
//                 Go to Dashboard
//               </button>

//             </div>


//             {/* Back */}
//             <button
//               onClick={onDashboard}
//               className="mt-5 mx-auto flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 print:hidden"
//             >
//               <ArrowLeft size={16} />
//               Back to Student Dashboard
//             </button>

//           </div>

//         </div>

//       </main>
//     </div>
//   );
// }


// /* Status Card */
// function StatusCard({
//   icon,
//   title,
//   value,
//   type,
// }) {

//   const styles = {
//     success: "bg-green-50 border-green-200 text-green-700",
//     warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
//     normal: "bg-slate-50 border-slate-200 text-slate-700",
//   };

//   return (
//     <div
//       className={`rounded-xl border p-4 ${styles[type]}`}
//     >

//       <div className="flex items-center gap-2">
//         {icon}

//         <span className="text-xs font-medium">
//           {title}
//         </span>
//       </div>

//       <p className="mt-2 text-sm font-semibold">
//         {value}
//       </p>

//     </div>
//   );
// }


// /* Info */
// function Info({ label, value }) {

//   return (
//     <div>
//       <p className="text-xs uppercase tracking-wide text-slate-500">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-slate-800 wrap-break-word">
//         {value || "—"}
//       </p>
//     </div>
//   );
// }


// /* Fee */
// function calculateFee(formData) {

//   if (formData.examType === "Regular") {
//     return 1200;
//   }

//   return 500 + formData.subjects.length * 300;
// }


// export default SubmissionSuccess;