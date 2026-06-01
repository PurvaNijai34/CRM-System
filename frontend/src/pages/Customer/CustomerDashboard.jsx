import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const CustomerDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between px-6 relative overflow-hidden font-sans">
      
      {/* Exact Landing Page Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header / Navbar Grid Wrapper matching Landing Page structure */}
      <header className="w-full max-w-7xl mx-auto py-6 flex justify-between items-center relative z-10 border-b border-white/[0.05]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Support<span className="text-indigo-400">CRM</span>
          </span>
        </div>
        
        {/* Modern styled logout button matching portal links style */}
        <button
          onClick={logout}
          className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-white/[0.05]"
        >
          Sign Out →
        </button>
      </header>

      {/* Main Content Dashboard panel */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-16 relative z-10 flex-grow flex flex-col justify-center w-full">
        
        {/* Dynamic Welcome Heading with Gradient texture matching Hero styles */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Welcome, {user?.name || "Customer"}
          </h1>
          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base">
            Access, track, or initialize customer service request ticket pipelines easily.
          </p>
        </div>

        {/* Dynamic Navigations using the precise landing page card styling schema */}
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto w-full">
          
          {/* Create Ticket Card Option */}
          <Link 
            to="/customer/create-ticket"
            className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1 block shadow-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
              Create Ticket
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Raise support requests quickly and easily to notify our active engineers.
            </p>
          </Link>

          {/* My Tickets List Card Option */}
          <Link 
            to="/customer/my-tickets"
            className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1 block shadow-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400 group-hover:bg-violet-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
              My Tickets
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Monitor progress configurations from Open, In-Progress up to Closed status logs.
            </p>
          </Link>

        </div>
      </main>

      {/* Footer Element */}
      <footer className="w-full max-w-7xl mx-auto py-6 border-t border-white/[0.05] text-center text-xs text-slate-500 relative z-10">
        &copy; {new Date().getFullYear()} SupportCRM. Secure workspace gateway.
      </footer>
    </div>
  );
};

export default CustomerDashboard;