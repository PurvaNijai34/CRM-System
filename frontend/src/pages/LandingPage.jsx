import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Navbar Section */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-white/[0.05]">
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
        
        <Link
          to="/admin/login"
          className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-white/[0.05]"
        >
          Portal Admin →
        </Link>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center relative z-10 flex-grow flex flex-col justify-center">
        
        {/* Top Feature Pill */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-indigo-300 mx-auto mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          Enterprise-grade Security & Performance
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-[1.15]">
          Manage Support Tickets <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">With Absolute Precision</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          Streamline communications, track customer incidents, and empower your support force. 
          Built beautifully for modern engineering workflows.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            to="/login"
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 text-center"
          >
            Customer Portal
          </Link>

          <Link
            to="/register"
            className="w-full sm:w-auto bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] text-slate-200 px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm transform hover:-translate-y-0.5 text-center"
          >
            Create an Account
          </Link>
        </div>

        {/* Features Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left relative">
          
          <div className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
              Create Tickets
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Raise high-priority support requests seamlessly with absolute clarity and detail options.
            </p>
          </div>

          <div className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400 group-hover:bg-violet-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
              Track Status
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Real-time monitoring from Open, In-Progress, to resolved state. Stay updated constantly.
            </p>
          </div>

          <div className="group bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
              Admin Control
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advanced utility panel to filter tickets, append technical notes, and streamline resolution.
            </p>
          </div>

        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/[0.05] text-center text-xs text-slate-500 relative z-10">
        &copy; {new Date().getFullYear()} SupportCRM. Designed for rapid enterprise response.
      </footer>
    </div>
  );
};

export default LandingPage;