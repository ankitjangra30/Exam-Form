// import {
//   ArrowLeft,
//   Edit3,
//   CheckCircle2,
//   User,
//   GraduationCap,
//   BookOpen,
//   MapPin,
//   IndianRupee,
// } from "lucide-react";

// function FormPreview({ formData, onBack, onConfirm }) {
  
//     // console.log(formData?.subjects?.length);
//     const examFee =
//     formData.examType === "Regular"
//       ? 1200
//       : 500 + formData.subjects.length * 300;

//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Header */}
//       <header className="bg-white border-b border-slate-200">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
//           <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//             Examination Form Preview
//           </h1>

//           <p className="text-sm text-slate-500 mt-1">
//             Please verify all information before proceeding to payment.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

//         {/* Verification Notice */}
//         <div className="mb-6 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
//           <CheckCircle2 className="text-blue-600 mt-0.5" size={20} />

//           <div>
//             <p className="font-medium text-blue-800">
//               Verify your information
//             </p>

//             <p className="text-sm text-blue-700 mt-1">
//               Make sure your name, university number, subjects and
//               examination type are correct.
//             </p>
//           </div>
//         </div>

//         {/* Main Form */}
//         <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

//           {/* College Header */}
//           <div className="p-5 sm:p-7 border-b border-slate-200 text-center">

//             <div className="mx-auto w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
//               <GraduationCap size={30} />
//             </div>

//             <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-800">
//               YOUR COLLEGE NAME
//             </h2>

//             <p className="text-sm text-slate-500">
//               University Examination Cell
//             </p>

//             <p className="mt-3 text-base font-semibold text-slate-700">
//               EXAMINATION FORM
//             </p>

//           </div>

//           {/* Personal Information */}
//           <PreviewSection
//             icon={<User size={19} />}
//             title="Personal Information"
//           >
//             <Info label="Student Name" value={formData.studentName} />
//             <Info label="Father Name" value={formData.fatherName} />
//             <Info label="Roll Number" value={formData.rollNumber} />
//             <Info
//               label="University Number"
//               value={formData.universityNumber}
//             />
//             <Info
//               label="Date of Birth"
//               value={formData.dateOfBirth}
//             />
//             <Info label="Email" value={formData.email} />
//             <Info label="Mobile" value={formData.mobile} />
//           </PreviewSection>

//           {/* Academic */}
//           <PreviewSection
//             icon={<GraduationCap size={19} />}
//             title="Academic Information"
//           >
//             <Info label="Course" value={formData.course} />

//             <Info
//               label="Semester"
//               value={
//                 formData.semester
//                   ? `${formData.semester} Semester`
//                   : ""
//               }
//             />

//             <Info
//               label="Exam Type"
//               value={formData.examType}
//             />
//           </PreviewSection>

//           {/* Subjects */}
//           <PreviewSection
//             icon={<BookOpen size={19} />}
//             title="Selected Subjects"
//           >
//             <div className="md:col-span-2">

//               {formData.subjects.length === 0 ? (
//                 <p className="text-sm text-red-500">
//                   No subjects selected
//                 </p>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

//                   {formData.subjects.map((subject, index) => (
//                     <div
//                       key={subject}
//                       className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
//                     >
//                       <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
//                         {index + 1}
//                       </span>

//                       <span className="text-sm font-medium text-slate-700">
//                         {subject}
//                       </span>
//                     </div>
//                   ))}

//                 </div>
//               )}

//             </div>
//           </PreviewSection>

//           {/* Address */}
//           <PreviewSection
//             icon={<MapPin size={19} />}
//             title="Address"
//           >
//             <div className="md:col-span-2">

//               <p className="text-sm text-slate-700 leading-6">
//                 {formData.address || "—"}
//               </p>

//               <p className="text-sm text-slate-500 mt-2">
//                 {[formData.city, formData.state, formData.pincode]
//                   .filter(Boolean)
//                   .join(", ") || "—"}
//               </p>

//             </div>
//           </PreviewSection>

//           {/* Fee */}
//           <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-6">

//             <div className="flex items-center justify-between gap-4">

//               <div className="flex items-center gap-3">

//                 <div className="p-2.5 rounded-xl bg-white text-blue-600">
//                   <IndianRupee size={20} />
//                 </div>

//                 <div>
//                   <p className="font-medium text-slate-700">
//                     Total Examination Fee
//                   </p>

//                   <p className="text-xs text-slate-500">
//                     Based on selected exam type and subjects
//                   </p>
//                 </div>

//               </div>

//               <p className="text-2xl font-bold text-slate-800">
//                 ₹{examFee}
//               </p>

//             </div>

//           </div>

//         </div>

//         {/* Declaration */}
//         <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-5">

//           <label className="flex items-start gap-3 cursor-pointer">

//             <input
//               type="checkbox"
//               className="mt-1 w-4 h-4 accent-blue-600"
//             />

//             <span className="text-sm text-slate-600 leading-6">
//               I confirm that the information provided above is correct
//               and complete. I understand that incorrect information may
//               result in rejection of my examination form.
//             </span>

//           </label>

//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">

//           <button
//             onClick={onBack}
//             className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition"
//           >
//             <ArrowLeft size={18} />
//             Edit Form
//           </button>

//           <button
//             onClick={onConfirm}
//             className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
//           >
//             Confirm & Proceed to Payment
//             <IndianRupee size={18} />
//           </button>

//         </div>

//       </main>
//     </div>
//   );
// }


// /* Section */
// function PreviewSection({ icon, title, children }) {
//   return (
//     <section className="p-5 sm:p-6 border-b border-slate-200">

//       <div className="flex items-center gap-3 mb-5">

//         <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
//           {icon}
//         </div>

//         <h3 className="font-semibold text-slate-800">
//           {title}
//         </h3>

//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
//         {children}
//       </div>

//     </section>
//   );
// }


// /* Info */
// function Info({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-slate-500 uppercase tracking-wide">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-medium text-slate-800 wrap-break-word">
//         {value || "—"}
//       </p>
//     </div>
//   );
// }

// export default FormPreview;