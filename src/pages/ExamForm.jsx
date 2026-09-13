// import { useEffect, useState } from "react";
// import {
//   User,
//   GraduationCap,
//   BookOpen,
//   IndianRupee,
//   MapPin,
//   Upload,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// const courses = {
//   BCA: {
//     semesters: {
//       "1": [
//         "Computer Fundamentals",
//         "Programming in C",
//         "Mathematics",
//         "Communication Skills",
//       ],
//       "2": [
//         "Data Structures",
//         "C++ Programming",
//         "Database Management",
//         "Operating System",
//       ],
//       "3": [
//         "Java Programming",
//         "Computer Networks",
//         "Web Development",
//         "Software Engineering",
//       ],
//       "6": [
//         "Web Development",
//         "Java Programming",
//         "Database Management",
//         "Computer Networks",
//         "Software Engineering",
//       ],
//     },
//   },

//   BBA: {
//     semesters: {
//       "1": [
//         "Business Communication",
//         "Management Principles",
//         "Business Economics",
//       ],
//       "2": [
//         "Marketing Management",
//         "Financial Accounting",
//         "Human Resource Management",
//       ],
//     },
//   },
// };

// const fees = {
//   Regular: 1200,
//   Reappear: 500,
//   Improvement: 500,
// };

// function ExamForm() {
//   const [form, setForm] = useState({
//     studentName: "",
//     fatherName: "",
//     rollNumber: "",
//     universityNumber: "",
//     dateOfBirth: "",
//     email: "",
//     mobile: "",
//     course: "",
//     semester: "",
//     examType: "",
//     subjects: [],
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     photo: null,
//   });

//   const [availableSubjects, setAvailableSubjects] = useState([]);

//   useEffect(() => {
//     if (form.course && form.semester) {
//       const subjects =
//         courses[form.course]?.semesters[form.semester] || [];

//       setAvailableSubjects(subjects);

//       setForm((prev) => ({
//         ...prev,
//         subjects: [],
//       }));
//     } else {
//       setAvailableSubjects([]);
//     }
//   }, [form.course, form.semester]);

//   const updateField = (field, value) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const toggleSubject = (subject) => {
//     setForm((prev) => ({
//       ...prev,
//       subjects: prev.subjects.includes(subject)
//         ? prev.subjects.filter((item) => item !== subject)
//         : [...prev.subjects, subject],
//     }));
//   };

//   const calculateFee = () => {
//     if (!form.examType) return 0;

//     if (form.examType === "Regular") {
//       return fees.Regular;
//     }

//     return fees[form.examType] + form.subjects.length * 300;
//   };

//   const examFee = calculateFee();

//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Header */}
//       <div className="bg-white border-b border-slate-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">

//           <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//             Examination Form
//           </h1>

//           <p className="text-sm text-slate-500 mt-1">
//             Fill in your examination details carefully
//           </p>

//         </div>
//       </div>

//       <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

//         {/* Progress */}
//         <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6">

//           <div className="flex items-center justify-between text-xs sm:text-sm">

//             <span className="font-medium text-blue-600">
//               1. Details
//             </span>

//             <span className="text-slate-400">
//               2. Subjects
//             </span>

//             <span className="text-slate-400">
//               3. Preview
//             </span>

//             <span className="text-slate-400">
//               4. Payment
//             </span>

//           </div>

//           <div className="mt-3 h-2 bg-slate-100 rounded-full">
//             <div className="h-2 w-1/4 bg-blue-600 rounded-full"></div>
//           </div>

//         </div>


//         {/* Personal Information */}
//         <Section
//           icon={<User size={20} />}
//           title="Personal Information"
//           subtitle="Enter your basic student information"
//         >

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//             <Input
//               label="Student Name"
//               required
//               value={form.studentName}
//               onChange={(e) =>
//                 updateField("studentName", e.target.value)
//               }
//               placeholder="Enter student name"
//             />

//             <Input
//               label="Father Name"
//               required
//               value={form.fatherName}
//               onChange={(e) =>
//                 updateField("fatherName", e.target.value)
//               }
//               placeholder="Enter father name"
//             />

//             <Input
//               label="Roll Number"
//               required
//               value={form.rollNumber}
//               onChange={(e) =>
//                 updateField("rollNumber", e.target.value)
//               }
//               placeholder="Enter roll number"
//             />

//             <Input
//               label="University Number"
//               required
//               value={form.universityNumber}
//               onChange={(e) =>
//                 updateField("universityNumber", e.target.value)
//               }
//               placeholder="Enter university number"
//             />

//             <Input
//               type="date"
//               label="Date of Birth"
//               required
//               value={form.dateOfBirth}
//               onChange={(e) =>
//                 updateField("dateOfBirth", e.target.value)
//               }
//             />

//             <Input
//               label="Mobile Number"
//               required
//               value={form.mobile}
//               onChange={(e) =>
//                 updateField("mobile", e.target.value)
//               }
//               placeholder="Enter mobile number"
//             />

//             <Input
//               type="email"
//               label="Email Address"
//               value={form.email}
//               onChange={(e) =>
//                 updateField("email", e.target.value)
//               }
//               placeholder="Enter email address"
//             />

//             {/* Photo */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Student Photo
//               </label>

//               <label className="flex items-center justify-center gap-2 h-11 px-4 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-50">
//                 <Upload size={18} />
//                 <span className="text-sm text-slate-500">
//                   {form.photo
//                     ? form.photo.name
//                     : "Upload Photo"}
//                 </span>

//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) =>
//                     updateField("photo", e.target.files[0])
//                   }
//                 />
//               </label>
//             </div>

//           </div>

//         </Section>


//         {/* Academic Information */}
//         <Section
//           icon={<GraduationCap size={20} />}
//           title="Academic Information"
//           subtitle="Select your course, semester and examination type"
//         >

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//             <Select
//               label="Course"
//               required
//               value={form.course}
//               onChange={(e) =>
//                 updateField("course", e.target.value)
//               }
//               options={Object.keys(courses)}
//             />

//             <Select
//               label="Semester"
//               required
//               value={form.semester}
//               onChange={(e) =>
//                 updateField("semester", e.target.value)
//               }
//               options={
//                 form.course
//                   ? Object.keys(
//                       courses[form.course].semesters
//                     )
//                   : []
//               }
//             />

//             <Select
//               label="Exam Type"
//               required
//               value={form.examType}
//               onChange={(e) =>
//                 updateField("examType", e.target.value)
//               }
//               options={[
//                 "Regular",
//                 "Reappear",
//                 "Improvement",
//               ]}
//             />

//           </div>

//         </Section>


//         {/* Subjects */}
//         <Section
//           icon={<BookOpen size={20} />}
//           title="Subject Selection"
//           subtitle="Select the subjects for your examination"
//         >

//           {!form.course || !form.semester ? (
//             <div className="text-center py-8 text-slate-500">
//               Please select course and semester first.
//             </div>
//           ) : availableSubjects.length === 0 ? (
//             <div className="text-center py-8 text-slate-500">
//               No subjects available.
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

//               {availableSubjects.map((subject) => {

//                 const selected =
//                   form.subjects.includes(subject);

//                 return (
//                   <label
//                     key={subject}
//                     className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition
//                     ${
//                       selected
//                         ? "border-blue-500 bg-blue-50"
//                         : "border-slate-200 hover:bg-slate-50"
//                     }`}
//                   >

//                     <input
//                       type="checkbox"
//                       checked={selected}
//                       onChange={() =>
//                         toggleSubject(subject)
//                       }
//                       className="w-4 h-4 accent-blue-600"
//                     />

//                     <span className="text-sm font-medium text-slate-700">
//                       {subject}
//                     </span>

//                   </label>
//                 );
//               })}

//             </div>
//           )}

//         </Section>


//         {/* Address */}
//         <Section
//           icon={<MapPin size={20} />}
//           title="Address"
//           subtitle="Enter your current residential address"
//         >

//           <div className="space-y-5">

//             <textarea
//               rows="4"
//               value={form.address}
//               onChange={(e) =>
//                 updateField("address", e.target.value)
//               }
//               placeholder="Enter complete address"
//               className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

//               <Input
//                 label="City"
//                 value={form.city}
//                 onChange={(e) =>
//                   updateField("city", e.target.value)
//                 }
//                 placeholder="City"
//               />

//               <Input
//                 label="State"
//                 value={form.state}
//                 onChange={(e) =>
//                   updateField("state", e.target.value)
//                 }
//                 placeholder="State"
//               />

//               <Input
//                 label="PIN Code"
//                 value={form.pincode}
//                 onChange={(e) =>
//                   updateField("pincode", e.target.value)
//                 }
//                 placeholder="PIN Code"
//               />

//             </div>

//           </div>

//         </Section>


//         {/* Fee Summary */}
//         <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">

//           <div className="flex items-center gap-3 mb-5">
//             <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
//               <IndianRupee size={20} />
//             </div>

//             <div>
//               <h2 className="font-semibold text-slate-800">
//                 Examination Fee
//               </h2>

//               <p className="text-sm text-slate-500">
//                 Fee is calculated automatically
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

//             <div>
//               <p className="text-sm text-slate-500">
//                 {form.examType || "Exam Type"} Fee
//               </p>

//               <p className="text-3xl font-bold text-slate-800 mt-1">
//                 ₹{examFee}
//               </p>
//             </div>

//             <button
//               type="button"
//               className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
//             >
//               Preview Form
//             </button>

//           </div>

//         </div>


//         {/* Bottom Buttons */}
//         <div className="mt-6 flex flex-col-reverse sm:flex-row justify-between gap-3">

//           <button className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 bg-white rounded-xl text-slate-700 hover:bg-slate-50">
//             <ArrowLeft size={18} />
//             Back
//           </button>

//           <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium">
//             Save & Continue
//             <ArrowRight size={18} />
//           </button>

//         </div>

//       </main>
//     </div>
//   );
// }


// /* Reusable Section */
// function Section({ icon, title, subtitle, children }) {
//   return (
//     <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-6">

//       <div className="flex items-start gap-3 mb-6">

//         <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
//           {icon}
//         </div>

//         <div>
//           <h2 className="font-semibold text-slate-800">
//             {title}
//           </h2>

//           <p className="text-sm text-slate-500 mt-1">
//             {subtitle}
//           </p>
//         </div>

//       </div>

//       {children}

//     </section>
//   );
// }


// /* Input */
// function Input({
//   label,
//   required,
//   type = "text",
//   value,
//   onChange,
//   placeholder,
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-2">
//         {label}

//         {required && (
//           <span className="text-red-500 ml-1">*</span>
//         )}
//       </label>

//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full h-11 px-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       />
//     </div>
//   );
// }


// /* Select */
// function Select({
//   label,
//   required,
//   value,
//   onChange,
//   options,
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-2">
//         {label}

//         {required && (
//           <span className="text-red-500 ml-1">*</span>
//         )}
//       </label>

//       <select
//         value={value}
//         onChange={onChange}
//         className="w-full h-11 px-4 border border-slate-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <option value="">
//           Select {label}
//         </option>

//         {options.map((option) => (
//           <option key={option} value={option}>
//             {label === "Semester"
//               ? `${option} Semester`
//               : option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default ExamForm;