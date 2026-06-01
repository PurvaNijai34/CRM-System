// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     total: 0,
//     open: 0,
//     inProgress: 0,
//     closed: 0,
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const response = await api.get("/tickets");
//       const tickets = response.data.data;

//       setStats({
//         total: tickets.length,
//         open: tickets.filter((ticket) => ticket.status === "Open").length,
//         inProgress: tickets.filter((ticket) => ticket.status === "In Progress").length,
//         closed: tickets.filter((ticket) => ticket.status === "Closed").length,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
//       {/* Exact Landing Page Background Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10 pt-6">

//         {/* Dashboard Title Header Block */}
//         <div className="mb-12 pb-6 border-b border-white/[0.05]">
//           <div className="flex items-center gap-3">
//             <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
//               Admin Dashboard
//             </h1>
//             <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
//               Control Panel
//             </span>
//           </div>
//           <p className="text-slate-400 text-sm mt-2">
//             Manage support tickets and monitor real-time CRM operational pipelines.
//           </p>
//         </div>

//         {/* Unified Stats Grid (Elevated from raw solid color blocks) */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

//           {/* Total Tickets */}
//           <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-white/[0.1]">
//             <div className="flex justify-between items-start">
//               <h3 className="text-sm font-medium text-slate-400">Total Tickets</h3>
//               <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-4xl font-bold mt-4 tracking-tight text-white">
//               {stats.total}
//             </p>
//             <div className="text-xs text-indigo-400/70 mt-2">All registered inquiries</div>
//           </div>

//           {/* Open Tickets */}
//           <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-amber-500/20 group">
//             <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
//             <div className="flex justify-between items-start">
//               <h3 className="text-sm font-medium text-slate-400">Open</h3>
//               <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-4xl font-bold mt-4 tracking-tight text-amber-400">
//               {stats.open}
//             </p>
//             <div className="text-xs text-amber-500/60 mt-2">Awaiting engineering response</div>
//           </div>

//           {/* In Progress Tickets */}
//           <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-blue-500/20 group">
//             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
//             <div className="flex justify-between items-start">
//               <h3 className="text-sm font-medium text-slate-400">In Progress</h3>
//               <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-4xl font-bold mt-4 tracking-tight text-blue-400">
//               {stats.inProgress}
//             </p>
//             <div className="text-xs text-blue-500/60 mt-2">Currently being investigated</div>
//           </div>

//           {/* Closed Tickets */}
//           <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-emerald-500/20 group">
//             <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
//             <div className="flex justify-between items-start">
//               <h3 className="text-sm font-medium text-slate-400">Closed</h3>
//               <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-4xl font-bold mt-4 tracking-tight text-emerald-400">
//               {stats.closed}
//             </p>
//             <div className="text-xs text-emerald-500/60 mt-2">Resolved operations</div>
//           </div>

//         </div>

//         {/* Quick Actions Sections */}
//         <div className="grid md:grid-cols-2 gap-6">

//           {/* Manage Tickets Link Element */}
//           <Link
//             to="/admin/tickets"
//             className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1 block shadow-2xl"
//           >
//             <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
//               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">
//               Manage Tickets
//             </h2>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               Search parameters, map active customer tickets, dispatch priority levels, and overwrite lifecycle status attributes.
//             </p>
//           </Link>

//           {/* Static CRM Overview Box */}
//           <div className="bg-white/[0.01] border border-white/[0.05] p-8 rounded-2xl shadow-2xl relative overflow-hidden">
//             <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
//               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold mb-2 text-slate-200">
//               CRM Overview
//             </h2>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               Trace comprehensive velocity rates, inspect critical performance clusters, and isolate persistent backend customer blockades.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// AdminDashboard.jsx
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya
import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext"; // AuthContext import kiya logout logic ke liye

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // AuthContext se logout function nikala

  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/tickets");
      const tickets = response.data.data;

      setStats({
        total: tickets.length,
        open: tickets.filter((ticket) => ticket.status === "Open").length,
        inProgress: tickets.filter((ticket) => ticket.status === "In Progress").length,
        closed: tickets.filter((ticket) => ticket.status === "Closed").length,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Premium Logout Handler
  const handleLogout = async () => {
    try {
      if (logout) {
        await logout();
      }
      navigate("/login"); // Logout ke baad seedha login page par redirect
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
      {/* Exact Landing Page Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 pt-6">

        {/* Dashboard Title Header Block with Logout Integrated */}
        <div className="mb-12 pb-6 border-b border-white/[0.05] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                Control Panel
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-2">
              Manage support tickets and monitor real-time CRM operational pipelines.
            </p>
          </div>

          {/* Premium Glassmorphism Logout Action Button */}
          <button
            onClick={handleLogout}
            className="group self-start sm:self-auto inline-flex items-center gap-2 text-xs font-semibold text-rose-400 hover:text-rose-300 px-4 py-2.5 rounded-xl bg-rose-500/5 border border-rose-500/10 hover:border-rose-500/20 transition-all shadow-lg hover:bg-rose-500/10"
          >
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out System
          </button>
        </div>

        {/* Unified Stats Grid (Elevated from raw solid color blocks) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* Total Tickets */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-white/[0.1]">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-medium text-slate-400">Total Tickets</h3>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold mt-4 tracking-tight text-white">
              {stats.total}
            </p>
            <div className="text-xs text-indigo-400/70 mt-2">All registered inquiries</div>
          </div>

          {/* Open Tickets */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-amber-500/20 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-medium text-slate-400">Open</h3>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold mt-4 tracking-tight text-amber-400">
              {stats.open}
            </p>
            <div className="text-xs text-amber-500/60 mt-2">Awaiting engineering response</div>
          </div>

          {/* In Progress Tickets */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-blue-500/20 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-medium text-slate-400">In Progress</h3>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold mt-4 tracking-tight text-blue-400">
              {stats.inProgress}
            </p>
            <div className="text-xs text-blue-500/60 mt-2">Currently being investigated</div>
          </div>

          {/* Closed Tickets */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-emerald-500/20 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-medium text-slate-400">Closed</h3>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold mt-4 tracking-tight text-emerald-400">
              {stats.closed}
            </p>
            <div className="text-xs text-emerald-500/60 mt-2">Resolved operations</div>
          </div>

        </div>

        {/* Quick Actions Sections */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Manage Tickets Link Element */}
          <Link
            to="/admin/tickets"
            className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1 block shadow-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">
              Manage Tickets
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Search parameters, map active customer tickets, dispatch priority levels, and overwrite lifecycle status attributes.
            </p>
          </Link>

          {/* Static CRM Overview Box */}
          <div className="bg-white/[0.01] border border-white/[0.05] p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-200">
              CRM Overview
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trace comprehensive velocity rates, inspect critical performance clusters, and isolate persistent backend customer blockades.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;