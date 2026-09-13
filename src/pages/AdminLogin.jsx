import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

// Zod Schema
const adminLoginSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = (data) => {
    console.log("Admin Login Data:", data);

    // API yaha connect karenge
    alert("Login successful!");

    reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex bg-blue-700 text-white p-10 flex-col justify-center">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={34} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Imperial College
              </h1>

              <p className="text-blue-100 text-sm">
                Hisar, Haryana
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold leading-tight">
            Admin Portal
          </h2>

          <p className="text-blue-100 mt-4 leading-7">
            Securely manage students, examination forms,
            payments and administrative activities from
            one powerful dashboard.
          </p>

          <div className="mt-10 space-y-5">

            <Feature
              icon={<ShieldCheck size={22} />}
              title="Secure Admin Access"
            />

            <Feature
              icon={<UserPlus size={22} />}
              title="Manage Students"
            />

            <Feature
              icon={<LockKeyhole size={22} />}
              title="Protected Dashboard"
            />

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 md:p-12">

          {/* HEADER */}
          <div className="mb-8">
            <div className="md:hidden w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <ShieldCheck size={28} />
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              Admin Login
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to access your admin dashboard.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2
                  -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-3
                  border rounded-xl outline-none transition
                  ${
                    errors.email
                      ? "border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2
                  -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  className={`w-full pl-12 pr-12 py-3
                  border rounded-xl outline-none transition
                  ${
                    errors.password
                      ? "border-red-400"
                      : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2
                  -translate-y-1/2 text-slate-400
                  hover:text-slate-600"
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

            {/* REMEMBER ME */}
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              Remember me
            </label>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
              text-white font-semibold py-3.5 rounded-xl
              transition duration-200 shadow-lg shadow-blue-200"
            >
              Login to Admin Panel
            </button>

          </form>

          {/* REGISTER */}
          <div className="text-center mt-7 text-sm text-slate-500">
            Don't have an admin account?

            <Link to={"/admin/register"} className="text-blue-600 font-semibold ml-1 hover:underline">
              Create Account
            </Link>
          </div>

          {/* BACK */}
          {/* <div className="text-center mt-5">
            <button className="text-sm text-slate-500 hover:text-blue-600">
              ← Back to Home
            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
}


// Feature Component
function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-11 h-11 rounded-xl bg-white/10
      flex items-center justify-center">
        {icon}
      </div>

      <span className="font-medium">
        {title}
      </span>

    </div>
  );
}

export default AdminLogin;