import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name Validation
    if (formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter and one number",
      );
      return;
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      login(response.user, response.token);

      navigate("/customer/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans">
      {/* Universal Ambient Indigo Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 my-8">
        {/* Back Link to Gateway */}
        <div className="mb-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to main gateway
          </Link>
        </div>

        {/* Unified Glassmorphism Card */}
        <div className="bg-white/[0.01] border border-white/[0.05] p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-md">
          {/* Brand & Heading */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-xs text-slate-500 mt-1 tracking-wide">
              START MANAGING YOUR SUPPORT REQUESTS
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
              <p className="text-xs text-slate-500 mt-2">
                Password must contain:
                <br />
                • At least 6 characters
                <br />
                • One uppercase letter
                <br />
                • One lowercase letter
                <br />• One number
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </form>

          {/* Bottom Redirect Line */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] text-center">
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors ml-1"
              >
                Login instead
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6 tracking-wide">
          By signing up you agree to enterprise-grade support terms.
        </p>
      </div>
    </div>
  );
};

export default Register;
