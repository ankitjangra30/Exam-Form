// import { useState } from "react";
// import {
//   CreditCard,
//   IndianRupee,
//   Upload,
//   CheckCircle2,
//   Copy,
//   ArrowLeft,
//   ShieldCheck,
// } from "lucide-react";

// function Payment({ formData, onBack, onSubmit }) {
//   const [transactionId, setTransactionId] = useState("");
//   const [screenshot, setScreenshot] = useState(null);
//   const [copied, setCopied] = useState(false);

//   const examFee =
//     formData.examType === "Regular"
//       ? 1200
//       : 500 + formData.subjects.length * 300;

//   // Demo UPI ID
//   const upiId = "collegeexam@upi";

//   const copyUPI = async () => {
//     try {
//       await navigator.clipboard.writeText(upiId);
//       setCopied(true);

//       setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!transactionId.trim()) {
//       alert("Please enter Transaction ID.");
//       return;
//     }

//     if (!screenshot) {
//       alert("Please upload payment screenshot.");
//       return;
//     }

//     onSubmit({
//       transactionId,
//       screenshot,
//       amount: examFee,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Header */}
//       <header className="bg-white border-b border-slate-200">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">

//           <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//             Examination Fee Payment
//           </h1>

//           <p className="text-sm text-slate-500 mt-1">
//             Complete your payment and submit the transaction details.
//           </p>

//         </div>
//       </header>


//       <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

//         {/* Progress */}
//         <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6">

//           <div className="flex items-center justify-between text-xs sm:text-sm">

//             <span className="text-slate-400">
//               ✓ Details
//             </span>

//             <span className="text-slate-400">
//               ✓ Preview
//             </span>

//             <span className="font-semibold text-blue-600">
//               3. Payment
//             </span>

//             <span className="text-slate-400">
//               4. Submit
//             </span>

//           </div>

//           <div className="mt-3 h-2 bg-slate-100 rounded-full">
//             <div className="h-2 w-3/4 bg-blue-600 rounded-full"></div>
//           </div>

//         </div>


//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* Payment Area */}
//           <div className="lg:col-span-2 space-y-6">

//             {/* Amount */}
//             <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">

//               <div className="flex items-center gap-3">

//                 <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
//                   <IndianRupee size={22} />
//                 </div>

//                 <div>
//                   <p className="text-sm text-slate-500">
//                     Total Examination Fee
//                   </p>

//                   <p className="text-3xl font-bold text-slate-800">
//                     ₹{examFee}
//                   </p>
//                 </div>

//               </div>

//               <div className="mt-5 grid grid-cols-2 gap-4">

//                 <div className="bg-slate-50 rounded-xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Course
//                   </p>

//                   <p className="font-semibold mt-1">
//                     {formData.course}
//                   </p>
//                 </div>

//                 <div className="bg-slate-50 rounded-xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Exam Type
//                   </p>

//                   <p className="font-semibold mt-1">
//                     {formData.examType}
//                   </p>
//                 </div>

//               </div>

//             </section>


//             {/* Online Payment */}
//             <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">

//               <div className="flex items-center gap-3 mb-5">

//                 <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
//                   <CreditCard size={20} />
//                 </div>

//                 <div>
//                   <h2 className="font-semibold text-slate-800">
//                     Online Payment
//                   </h2>

//                   <p className="text-sm text-slate-500">
//                     Pay using UPI / payment gateway
//                   </p>
//                 </div>

//               </div>


//               {/* Payment Box */}
//               <div className="border border-slate-200 rounded-2xl p-5 text-center">

//                 <div className="mx-auto w-40 h-40 bg-slate-100 rounded-xl flex items-center justify-center">
//                   <span className="text-sm text-slate-400">
//                     QR CODE
//                   </span>
//                 </div>

//                 <p className="mt-4 text-sm text-slate-500">
//                   Scan QR code to pay
//                 </p>

//                 <p className="mt-1 text-2xl font-bold text-slate-800">
//                   ₹{examFee}
//                 </p>


//                 <div className="mt-4 flex items-center justify-center gap-2">

//                   <code className="px-3 py-2 bg-slate-100 rounded-lg text-sm">
//                     {upiId}
//                   </code>

//                   <button
//                     type="button"
//                     onClick={copyUPI}
//                     className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
//                   >
//                     {copied ? (
//                       <CheckCircle2
//                         size={18}
//                         className="text-green-600"
//                       />
//                     ) : (
//                       <Copy size={18} />
//                     )}
//                   </button>

//                 </div>

//                 {copied && (
//                   <p className="text-xs text-green-600 mt-2">
//                     UPI ID copied
//                   </p>
//                 )}

//               </div>

//             </section>


//             {/* Transaction Details */}
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6"
//             >

//               <div className="mb-5">
//                 <h2 className="font-semibold text-slate-800">
//                   Payment Details
//                 </h2>

//                 <p className="text-sm text-slate-500 mt-1">
//                   Enter the details after completing your payment.
//                 </p>
//               </div>


//               {/* Transaction ID */}
//               <div>

//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Transaction ID
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>

//                 <input
//                   type="text"
//                   value={transactionId}
//                   onChange={(e) =>
//                     setTransactionId(e.target.value)
//                   }
//                   placeholder="Enter payment transaction ID"
//                   className="w-full h-12 px-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//               </div>


//               {/* Screenshot */}
//               <div className="mt-5">

//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Payment Screenshot
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>

//                 <label className="min-h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 transition p-5 text-center">

//                   <Upload
//                     size={26}
//                     className="text-slate-400"
//                   />

//                   <span className="text-sm font-medium text-slate-700">
//                     {screenshot
//                       ? screenshot.name
//                       : "Upload payment screenshot"}
//                   </span>

//                   <span className="text-xs text-slate-400">
//                     JPG, PNG up to 5MB
//                   </span>

//                   <input
//                     type="file"
//                     accept="image/png,image/jpeg"
//                     className="hidden"
//                     onChange={(e) =>
//                       setScreenshot(e.target.files[0])
//                     }
//                   />

//                 </label>

//               </div>


//               {/* Security */}
//               <div className="mt-5 flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">

//                 <ShieldCheck
//                   size={20}
//                   className="text-green-600 shrink-0"
//                 />

//                 <p className="text-xs sm:text-sm text-green-700">
//                   Your payment information will be submitted
//                   securely for verification by the college.
//                 </p>

//               </div>


//               {/* Buttons */}
//               <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3">

//                 <button
//                   type="button"
//                   onClick={onBack}
//                   className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-50"
//                 >
//                   <ArrowLeft size={18} />
//                   Back
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
//                 >
//                   Submit Payment Details
//                   <CheckCircle2 size={18} />
//                 </button>

//               </div>

//             </form>

//           </div>


//           {/* Order Summary */}
//           <aside className="lg:col-span-1">

//             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sticky top-5">

//               <h2 className="font-semibold text-slate-800">
//                 Payment Summary
//               </h2>

//               <div className="mt-5 space-y-4">

//                 <Summary
//                   label="Student"
//                   value={formData.studentName}
//                 />

//                 <Summary
//                   label="University No."
//                   value={formData.universityNumber}
//                 />

//                 <Summary
//                   label="Course"
//                   value={formData.course}
//                 />

//                 <Summary
//                   label="Semester"
//                   value={`${formData.semester} Semester`}
//                 />

//                 <Summary
//                   label="Exam Type"
//                   value={formData.examType}
//                 />

//                 <Summary
//                   label="Subjects"
//                   value={`${formData.subjects.length} Selected`}
//                 />

//               </div>

//               <div className="border-t border-slate-200 mt-5 pt-5 flex items-center justify-between">

//                 <span className="font-medium text-slate-700">
//                   Total
//                 </span>

//                 <span className="text-xl font-bold text-slate-800">
//                   ₹{examFee}
//                 </span>

//               </div>

//             </div>

//           </aside>

//         </div>

//       </main>
//     </div>
//   );
// }


// function Summary({ label, value }) {
//   return (
//     <div className="flex items-start justify-between gap-3 text-sm">

//       <span className="text-slate-500">
//         {label}
//       </span>

//       <span className="font-medium text-slate-800 text-right break-words">
//         {value || "—"}
//       </span>

//     </div>
//   );
// }

// export default Payment;