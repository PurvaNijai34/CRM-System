import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      if (response.user.role !== "admin") {
        alert("Admin access only");
        return;
      }

      login(response.user, response.token);
      navigate("/admin/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans">
      
      {/* Landing Page Ambient Indigo Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Back Link */}
        <div className="mb-6 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to main gateway
          </Link>
        </div>

        {/* Unified Glassmorphism Card */}
        <div className="bg-white/[0.01] border border-white/[0.05] p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-md">
          
          {/* Brand/Heading Layout */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Admin Gateway
            </h1>
            <p className="text-xs text-indigo-400/70 font-medium mt-1 tracking-wider uppercase">
              Secure Infrastructure Control
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Admin Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="admin@supportcrm.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3.5 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Secret Password Access
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 px-4 py-3.5 rounded-xl outline-none transition-all focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/[0.04]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5"
            >
              Sign In to Dashboard
            </button>
          </form>

        </div>

        <p className="text-center text-xs text-slate-600 mt-6 tracking-wide">
          Protected environment. System logs active.
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;