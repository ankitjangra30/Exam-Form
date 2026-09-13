import React from "react";
import { useForm } from "react-hook-form";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if(data.email=="ankit122@gmail.com" && data.password=="1232124"){
    //   alert("Login Successfully!");
    //   navigate("/student-dashboard");
      
    //   console.log("Student Login Data:", data);
    // }
    // else{
    //   alert("Please, Enter register email and password");
    // }

    console.log("Student Login Data:", data);
    navigate("/student-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex bg-blue-700 text-white p-10 flex-col justify-between">

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
              Welcome Back,
              <br />
              Student!
            </h2>

            <p className="mt-5 text-blue-100 leading-7">
              Access your academic information, attendance,
              assignments, notices and other college services
              from one place.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-blue-100">
            <ShieldCheck size={20} />
            <span>Secure Student Portal</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 lg:p-12">

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-3 mb-8">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <GraduationCap size={28} />
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-800">
                College Portal
              </h1>
              <p className="text-xs text-slate-500">
                Student Management System
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Student Login
            </h2>

            <p className="text-slate-500 mt-2">
              Login to access your student account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition
                    ${
                      errors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full pl-11 pr-12 py-3 rounded-xl border outline-none transition
                    ${
                      errors.password
                        ? "border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-blue-600"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-600"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-md hover:shadow-lg"
            >
              Login
              <ArrowRight size={19} />
            </button>

          </form>

          {/* Register */}
          <p className="text-center text-sm text-slate-500 mt-7">
            Don't have an account?{" "}
            <Link
              to="/student-register"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Register Now
            </Link>
          </p>

          <p className="text-center text-xs text-slate-400 mt-8">
            © 2026 College Management System
          </p>

        </div>
      </div>
    </div>
  );
};

export default StudentLogin;


