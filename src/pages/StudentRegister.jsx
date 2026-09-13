// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   GraduationCap,
//   User,
//   Mail,
//   Phone,
//   Hash,
//   Calendar,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const StudentRegister = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const password = watch("password");

//   const onSubmit = (data) => {
//     console.log("Student Registration:", data);

//     // Temporary navigation
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="hidden md:flex bg-blue-700 text-white p-10 flex-col justify-between">

//           <div>
//             <div className="flex items-center gap-3 mb-10">
//               <div className="bg-white/15 p-3 rounded-xl">
//                 <GraduationCap size={32} />
//               </div>

//               <div>
//                 <h1 className="text-xl font-bold">
//                   College Portal
//                 </h1>

//                 <p className="text-blue-200 text-sm">
//                   Student Management System
//                 </p>
//               </div>
//             </div>

//             <h2 className="text-4xl font-bold leading-tight">
//               Create Your
//               <br />
//               Student Account
//             </h2>

//             <p className="mt-5 text-blue-100 leading-7">
//               Register yourself to access attendance,
//               assignments, notices, academic information
//               and other college services.
//             </p>

//             <div className="mt-10 space-y-4 text-sm text-blue-100">

//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-white rounded-full" />
//                 Secure student account
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-white rounded-full" />
//                 Access academic information
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-white rounded-full" />
//                 Manage assignments and notices
//               </div>

//             </div>
//           </div>

//           <p className="text-sm text-blue-200">
//             © 2026 College Management System
//           </p>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="p-6 sm:p-10">

//           {/* Mobile Header */}
//           <div className="md:hidden flex items-center gap-3 mb-7">

//             <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
//               <GraduationCap size={28} />
//             </div>

//             <div>
//               <h1 className="font-bold text-lg text-slate-800">
//                 College Portal
//               </h1>

//               <p className="text-xs text-slate-500">
//                 Student Management System
//               </p>
//             </div>

//           </div>

//           <div className="mb-7">
//             <h2 className="text-3xl font-bold text-slate-800">
//               Student Registration
//             </h2>

//             <p className="text-slate-500 mt-2">
//               Create your student account
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-4"
//           >

//             {/* Full Name + Email */}
//             <div className="grid sm:grid-cols-2 gap-4">

//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Full Name
//                 </label>

//                 <div className="relative">
//                   <User
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Enter full name"
//                     className={`w-full pl-10 pr-3 py-3 rounded-xl border outline-none
//                       ${
//                         errors.name
//                           ? "border-red-500"
//                           : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                       }`}
//                     {...register("name", {
//                       required: "Name is required",
//                     })}
//                   />
//                 </div>

//                 {errors.name && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Enter email"
//                     className={`w-full pl-10 pr-3 py-3 rounded-xl border outline-none
//                       ${
//                         errors.email
//                           ? "border-red-500"
//                           : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                       }`}
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                         message: "Enter a valid email",
//                       },
//                     })}
//                   />
//                 </div>

//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//             </div>

//             {/* Mobile + Roll Number */}
//             <div className="grid sm:grid-cols-2 gap-4">

//               {/* Mobile */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Mobile Number
//                 </label>

//                 <div className="relative">
//                   <Phone
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="tel"
//                     placeholder="10 digit mobile"
//                     className={`w-full pl-10 pr-3 py-3 rounded-xl border outline-none
//                       ${
//                         errors.mobile
//                           ? "border-red-500"
//                           : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                       }`}
//                     {...register("mobile", {
//                       required: "Mobile number is required",
//                       pattern: {
//                         value: /^[6-9]\d{9}$/,
//                         message: "Enter a valid mobile number",
//                       },
//                     })}
//                   />
//                 </div>

//                 {errors.mobile && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.mobile.message}
//                   </p>
//                 )}
//               </div>

//               {/* Roll Number */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Roll Number
//                 </label>

//                 <div className="relative">
//                   <Hash
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Enter roll number"
//                     className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                     {...register("rollNumber", {
//                       required: "Roll number is required",
//                     })}
//                   />
//                 </div>

//                 {errors.rollNumber && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.rollNumber.message}
//                   </p>
//                 )}
//               </div>

//             </div>

//             {/* Enrollment + Course */}
//             <div className="grid sm:grid-cols-2 gap-4">

//               {/* Enrollment */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Enrollment Number
//                 </label>

//                 <div className="relative">
//                   <Hash
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Enrollment number"
//                     className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                     {...register("enrollment", {
//                       required: "Enrollment number is required",
//                     })}
//                   />
//                 </div>

//                 {errors.enrollment && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.enrollment.message}
//                   </p>
//                 )}
//               </div>

//               {/* Course */}
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-2">
//                   Course
//                 </label>

//                 <select
//                   className="w-full px-3 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                   {...register("course", {
//                     required: "Please select a course",
//                   })}
//                 >
//                   <option value="">Select Course</option>
//                   <option value="BCA">BCA</option>
//                   <option value="BBA">BBA</option>
//                   <option value="BA">BA</option>
//                   <option value="BSc">B.Sc</option>
//                   <option value="BCom">B.Com</option>
//                   <option value="MCA">MCA</option>
//                   <option value="MBA">MBA</option>
//                 </select>

//                 {errors.course && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.course.message}
//                   </p>
//                 )}
//               </div>

//             </div>

//             {/* Date of Birth */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Date of Birth
//               </label>

//               <div className="relative">
//                 <Calendar
//                   size={18}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="date"
//                   className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                   {...register("dob", {
//                     required: "Date of birth is required",
//                   })}
//                 />
//               </div>

//               {errors.dob && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.dob.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Password
//               </label>

//               <div className="relative">
//                 <Lock
//                   size={18}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Create password"
//                   className={`w-full pl-10 pr-11 py-3 rounded-xl border outline-none
//                     ${
//                       errors.password
//                         ? "border-red-500"
//                         : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                     }`}
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 6,
//                       message: "Minimum 6 characters required",
//                     },
//                   })}
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowPassword(!showPassword)
//                   }
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>
//               </div>

//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Confirm Password
//               </label>

//               <div className="relative">
//                 <Lock
//                   size={18}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm password"
//                   className={`w-full pl-10 pr-11 py-3 rounded-xl border outline-none
//                     ${
//                       errors.confirmPassword
//                         ? "border-red-500"
//                         : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                     }`}
//                   {...register("confirmPassword", {
//                     required: "Please confirm your password",
//                     validate: (value) =>
//                       value === password ||
//                       "Passwords do not match",
//                   })}
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowConfirmPassword(
//                       !showConfirmPassword
//                     )
//                   }
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>
//               </div>

//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.confirmPassword.message}
//                 </p>
//               )}
//             </div>

//             {/* Terms */}
//             <div className="flex items-start gap-2 pt-1">

//               <input
//                 type="checkbox"
//                 className="w-4 h-4 mt-1 accent-blue-600"
//                 {...register("terms", {
//                   required: "You must accept the terms",
//                 })}
//               />

//               <p className="text-sm text-slate-600">
//                 I agree to the{" "}
//                 <span className="text-blue-600 font-medium">
//                   Terms & Conditions
//                 </span>
//               </p>

//             </div>

//             {errors.terms && (
//               <p className="text-red-500 text-xs">
//                 {errors.terms.message}
//               </p>
//             )}

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-md hover:shadow-lg"
//             >
//               Create Account
//               <ArrowRight size={19} />
//             </button>

//           </form>

//           {/* Login Link */}
//           <div className="flex justify-center mt-6">

//             <Link
//               to="/"
//               className="flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-700"
//             >
//               <ArrowLeft size={17} />
//               Back to Student Login
//             </Link>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentRegister;


import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from 'react-router-dom';

import { studentRegisterSchema } from "../schemas/studentSchema";

import { User, Mail, Phone, Hash, GraduationCap, ArrowLeft, ArrowRight, EyeOff, Eye, ShieldCheck, CalendarDays, LockKeyhole, } from "lucide-react";

const StudentRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: zodResolver(studentRegisterSchema) });

    const onSubmit = (data) => {
        console.log("Student Data", data);
        alert("Registration Successfully!");
        reset();
        navigate("/");
    };
    return (
        <div className='min-h-screen flex justify-center px-4 py-8 bg-gray-100'>
            <div className='w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2'>
                {/*Left Side  */}
                <div className='hidden lg:flex flex-col justify-between gap-5 bg-blue-700 text-slate-100 p-10 rounded'>
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="bg-white/15 p-3 rounded-xl">
                                <GraduationCap size={32} />
                            </div>

                            <div>
                                <h1 className="text-xl font-bold">
                                    College Portal
                                </h1>
                                <p className="text-blue-200 text-sm">
                                    Student Management System
                                </p>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold leading-tight">
                            Create your
                            <br />
                            Student Account
                        </h2>

                        <p className="mt-5 text-blue-100 leading-7">
                            Register yourself to access attendance, notices, academic information and other college services from one place.
                        </p>
                        <ul className='list-disc pl-5 text-white text-sm my-5'>
                            <li className='my-3'>Secure student account</li>
                            <li className='my-3'>Access academic information</li>
                            <li className='my-3'>Manage assignments and notices</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3 text-sm text-blue-100'>
                        <ShieldCheck size={20} />
                        <span>Secure Student Portal</span>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <div className='p-8'>
                        {/* header */}
                        <div className='lg:hidden flex items-center justify-start gap-3 mb-5 rounded-lg'>
                            <div className='p-3 bg-blue-100 rounded-lg'>
                                <GraduationCap size={32} color='blue' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-xl font-bold'>College Portal</h1>
                                <p className='text-gray-500 text-xs'>Student Management System</p>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h1 className='text-3xl font-bold mb-2'>Student Registration</h1>
                            <p className='text-gray-500 text-base'>Create your student account</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* fullname + email */}
                            <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                                {/* fullname */}
                                <InputField
                                    label="Full Name"
                                    icon={<User size={19} />}
                                    placeholder="Enter your full name"
                                    error={errors.name?.message}
                                    {...register("name")}
                                />
                                {/* email */}
                                <InputField
                                    label="Email Address"
                                    icon={<Mail size={19} />}
                                    type="email"
                                    placeholder="Enter your email"
                                    error={errors.email?.message}
                                    {...register("email")}
                                />
                            </div>

                            {/* mobile + Roll */}
                            <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                                {/* mobile */}
                                <InputField
                                    label="Mobile Number"
                                    icon={<Phone size={19} />}
                                    placeholder="10 digit mobile"
                                    error={errors.mobile?.message}
                                    {...register("mobile")}
                                />
                                
                                {/* rollNumber */}
                                <InputField
                                    label="Roll Number"
                                    icon={<Hash size={19} />}
                                    placeholder="Enter roll number"
                                    error={errors.rollNumber?.message}
                                    {...register("rollNumber")}
                                />
                                
                            </div>

                            {/* university + course */}
                            <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                                {/* university */}
                                <InputField
                                    label="University Number"
                                    icon={<Hash size={19} />}
                                    placeholder="Enter University roll number"
                                    error={errors.university?.message}
                                    {...register("university")}
                                />
                                {/* course */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Course</label>
                                    <div className='relative'>
                                    <GraduationCap size={20}
                                        className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
                                    />
                                    <select
                                        {...register("course")}
                                        className='w-full pl-10 pr-4 py-3 border rounded-xl outline-none transition border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-800'
                                    >
                                        <option value="">Select Course</option>
                                        <option value="BA">BA</option>
                                        <option value="BBA">BBA</option>
                                        <option value="BCA">BCA</option>
                                    </select>
                                    </div>
                                    {errors.course && (
                                        <p className='text-red-500 text-xs mt-1'>
                                            {errors.course.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Date of birth */}
                            <InputField
                                label="Date of Birth"
                                icon={<CalendarDays size={19} />}
                                type='date'
                                error={errors.dob?.message}
                                {...register("dob")}
                            />

                            {/* password */}
                            <PasswordField
                                label="Password"
                                placeholder="Enter your password"
                                show={showPassword}
                                setShow={setShowPassword}
                                error={errors.password?.message}
                                {...register("password")}
                            />
                            {/* Confirm Password */}
                            <PasswordField
                                label="Confirm Password"
                                placeholder="Confirm your password"
                                show={showConfirmPassword}
                                setShow={setShowConfirmPassword}
                                error={errors.confirmPassword?.message}
                                {...register("confirmPassword")}
                            />

                            {/* Terms */}
                            <div className="flex items-start gap-2 pt-2 pb-3">

                                <input
                                    type="checkbox"
                                    className="w-4 h-4 mt-1 accent-blue-600"
                                    {...register("terms", {
                                        required: "You must accept the terms",
                                    })}
                                />

                                <p className="text-sm text-slate-600">
                                    I agree to the{" "}
                                    <span className="text-blue-600 font-medium">
                                        Terms & Conditions
                                    </span>
                                </p>

                            </div>
                            {errors.terms && (
                                <p className="text-red-500 text-xs">
                                    {errors.terms.message}
                                </p>
                            )}

                            {/* submit button */}
                            <div className='my-2'>
                                <button
                                    type="submit"
                                    className='w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2'
                                >
                                    Create Account
                                    <ArrowRight size={19} />
                                </button>
                            </div>
                        </form>
                        <div className='flex justify-center mt-6'>
                            <Link to="/"
                                className='flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700'
                            >
                                <ArrowLeft size={19} />
                                Back to Student Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Reusable Input Component
function InputField({ label, icon, error, ...props }) {
    return (
        <div className='pb-1'>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
                {label}
            </label>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    {icon}
                </span>

                <input
                    {...props}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl outline-none transition
                    ${error
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                />
            </div>
            {error && (
                <p className="text-red-500 text-xs mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

// Password Component
function PasswordField({ label, show, setShow, error, ...props }) {
    return (
        <div className='py-2.5'>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
                {label}
            </label>

            <div className="relative">
                <LockKeyhole size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    {...props}
                    type={show ? "text" : "password"}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl outline-none transition
                    ${error
                        ? "border-red-400"
                        : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

            </div>

            {error && (
                <p className="text-red-500 text-xs mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

export default StudentRegister