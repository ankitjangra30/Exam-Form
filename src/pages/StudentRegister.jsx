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
import { Link } from 'react-router-dom';

import { studentRegisterSchema } from "../schemas/studentSchema";

import { GraduationCap, ArrowLeft, ArrowRight, EyeOff, Eye} from "lucide-react";

const StudentRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(studentRegisterSchema)});

    const onsubmit = (data) =>{
        console.log("Student Data",data);
        
    };
  return (
    <div className='min-h-screen flex justify-center px-4 py-8'>
        <div className='w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2'>
            {/*Left Side  */}
            <div className='hidden lg:flex flex-col justify-start bg-blue-700 text-slate-100 p-10 rounded'>
                <div className='flex items-center justify-start gap-2 mb-5 '>
                    <div className='p-2 bg-blue-600 rounded-lg'>
                        <GraduationCap size={32} />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold'>College Portal</h1>
                        <p className='text-gray-300 text-sm'>Student Management System</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>Create your<br />Student Account</h1>
                    <p className='text-gray-300 text-base'>Register yourself to access attendance, notices, academic information and other college services from one place.</p>
                    <ul className='text-gray-300 text-sm'>
                        <li>Secure student account</li>
                        <li>Access academic information</li>
                        <li>Manage assignments and notices</li>
                    </ul>
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

                    <form onSubmit={handleSubmit(onsubmit)}>
                        {/* fullname + email */}
                        <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                            {/* fullname */}
                            <div>
                                <label className='text-sm font-medium'>Full Name</label>
                                <input 
                                    placeholder='Enter full name'
                                    className='w-full mt-2 px-4 py-3  border border-gray-300 rounded-lg'
                                    {...register("name")}
                                />
                                {errors.name &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            {/* email */}
                            <div>
                                <label className='text-sm font-medium'>Email Address</label>
                                <input 
                                    placeholder='Enter email'
                                    className='w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("email")}
                                />
                                {errors.email &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* mobile + Roll */}
                        <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                            {/* mobile */}
                            <div>
                                <label className='text-sm font-medium'>Mobile Number</label>
                                <input 
                                    placeholder='10 digit mobile'
                                    className='w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("mobile")}
                                />
                                {errors.mobile &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.mobile.message}
                                    </p>
                                )}
                            </div>
                            {/* rollNumber */}
                            <div>
                                <label className='text-sm font-medium'>Roll Number</label>
                                <input 
                                    placeholder='Enter roll number'
                                    className='w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("rollNumber")}
                                />
                                {errors.rollNumber &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.rollNumber.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        
                        {/* university + course */}
                        <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                            {/* university */}
                            <div>
                                <label className='text-sm font-medium'>University Number</label>
                                <input 
                                    placeholder='University roll number'
                                    className='w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("university")}
                                />
                                {errors.university &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.university.message}
                                    </p>
                                )}
                            </div>
                            {/* course */}
                            <div>
                                <label className='text-sm font-medium'>Course</label>
                                <select 
                                    className='w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("course")}
                                >
                                    <option value="">Select Course</option>
                                    <option value="BA">BA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BCA">BCA</option>
                                </select>
                                {errors.course &&(
                                    <p className='text-red-500 text-sm'>
                                        {errors.course.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Date of birth */}
                        <div>
                            <label className='text-sm font-medium'>Date of Birth</label>
                            <input 
                                type='date'
                                className='w-full my-2 px-4 py-3 border border-gray-300 rounded-lg'
                                {...register("dob")}
                            />
                            {errors.dob &&(
                                <p className='text-red-500 text-sm'>
                                    {errors.dob.message}
                                </p>
                            )}
                        </div>
                        {/* password */}
                        <div className='my-2'>
                            <label className='text-sm font-medium'>Password</label>
                            <div className='relative'>
                            <input 
                                type={showPassword ?"text":'password'}
                                placeholder='Create password'
                                className='w-full my-2 px-4 py-3 border border-gray-300 rounded-lg'
                                {...register("password")}
                            />
                            <button 
                                type='button'
                                onClick={()=>
                                    setShowPassword(!showPassword)
                                }
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'
                            >
                                {showPassword ?(<EyeOff size={18} />):(<Eye size={18} />)}
                            </button>
                            </div>
                            {errors.password &&(
                                <p className='text-red-500 text-sm'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        {/* Confirm Password */}
                        <div className='my-2'>
                            <label className='text-sm font-medium'>Confirm Password</label>
                            <div className='relative'>
                                <input 
                                    type={showConfirmPassword ? "text":"password"}
                                    placeholder='Confirm password'
                                    className='w-full my-2 px-4 py-3 border border-gray-300 rounded-lg'
                                    {...register("confirmPassword")}
                                />
                                <button
                                    type='button'
                                    onClick={()=>
                                        setShowConfirmPassword(!showConfirmPassword)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'
                                >
                                    {showConfirmPassword ? (<EyeOff size={18} />):(<Eye size={18} />)}
                                </button>
                            </div>
                            {errors.confirmPassword &&(
                                <p className='text-red-500 text-sm'>
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* submit button */}
                        <div className='my-2'>
                            <button 
                                type="submit"
                                // onClick={onSubmit}
                                className='w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2'
                            >
                                Create Account
                                <ArrowRight size={17} />
                            </button>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Link to="/"
                                className='flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700'
                            >
                                <ArrowLeft size={17} />
                                Back to Student Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentRegister