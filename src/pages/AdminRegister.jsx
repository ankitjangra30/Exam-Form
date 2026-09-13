import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminRegisterSchema } from "../schemas/adminSchema";
import {
  User,
  Mail,
  Phone,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

function AdminRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(adminRegisterSchema) });

  const onSubmit = (data) => {
    console.log("Admin Data:", data);

    alert("Admin account created successfully!");

    reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex bg-blue-700 text-white p-10 flex-col justify-start">

            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={42} />
              <div>
                <h1 className="text-2xl font-bold">
                  Imperial College
                </h1>

                <p className="text-blue-100">
                  Hisar, Haryana
                </p>
              </div>
            </div>
          <div className="mb-10">

            <h2 className="text-3xl font-bold mt-8">
              Examination Form Portal
            </h2>

            <p className="text-blue-100 mt-4 leading-7">
              Manage students, examination forms and
              administrative activities from one secure dashboard.
            </p>
          </div>

          <div className="space-y-5">

            <Feature
              icon={<User size={22} />}
              title="Student Management"
            />

            <Feature
              icon={<ShieldCheck size={22} />}
              title="Secure Administration"
            />

            <Feature
              icon={<LockKeyhole size={22} />}
              title="Protected Admin Access"
            />

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Admin Registration
            </h2>

            <p className="text-slate-500 mt-2">
              Create your admin account to access the dashboard.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* NAME */}
            <InputField
              label="Full Name"
              icon={<User size={19} />}
              placeholder="Enter your full name"
              error={errors.name?.message}
              {...register("name")}
            />

            {/* EMAIL */}
            <InputField
              label="Email Address"
              icon={<Mail size={19} />}
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />

            {/* MOBILE */}
            <InputField
              label="Mobile Number"
              icon={<Phone size={19} />}
              type="tel"
              placeholder="Enter your mobile number"
              error={errors.mobile?.message}
              {...register("mobile")}
            />

            {/* PASSWORD */}
            <PasswordField
              label="Password"
              placeholder="Enter your password"
              show={showPassword}
              setShow={setShowPassword}
              error={errors.password?.message}
              {...register("password")}
            />

            {/* CONFIRM PASSWORD */}
            <PasswordField
              label="Confirm Password"
              placeholder="Confirm your password"
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
              text-white font-semibold py-3.5 rounded-xl
              transition duration-200 shadow-lg shadow-blue-200"
            >
              Create Admin Account
            </button>

          </form>

          <div className="text-center mt-6 text-sm text-slate-500">
            Already have an account?

            <Link to={"/admin/login"} className="text-blue-600 font-semibold ml-1">
              Login
            </Link>
          </div>

          {/* <button className="mt-5 text-sm text-slate-500 hover:text-blue-600">
            ← Back to Home
          </button> */}

        </div>

      </div>
    </div>
  );
}


// Reusable Input Component
function InputField({
  label,
  icon,
  error,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <div className="relative">

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          {...props}
          className={`w-full pl-12 pr-4 py-3 border rounded-xl
          outline-none transition
          ${
            error
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
function PasswordField({
  label,
  show,
  setShow,
  error,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <div className="relative">

        <LockKeyhole
          size={19}
          className="absolute left-4 top-1/2
          -translate-y-1/2 text-slate-400"
        />

        <input
          {...props}
          type={show ? "text" : "password"}
          className={`w-full pl-12 pr-12 py-3 border rounded-xl
          outline-none transition
          ${
            error
              ? "border-red-400"
              : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }`}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2
          -translate-y-1/2 text-slate-400"
        >
          {show ? <EyeOff size={19} /> : <Eye size={19} />}
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

export default AdminRegister;