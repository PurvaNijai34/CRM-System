import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyTickets } from "../../services/ticketService";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await getMyTickets();
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Premium glassmorphism status pill borders mapping
  const getStatusBadge = (status) => {
    if (status === "Open")
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    if (status === "In Progress")
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
      {/* Exact Landing Page Aesthetic Blur Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 pt-6">

        {/* Header Grid Section */}
        <div className="mb-10 pb-6 border-b border-white/[0.05] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              My Support Tickets
            </h1>
            <p className="text-slate-400 text-sm mt-1.5">
              Review history timeline logs, response states, and real-time operational diagnostics.
            </p>
          </div>
          <Link
            to="/customer/dashboard"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white px-4 py-2 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] transition-all"
          >
            ← Back to Area
          </Link>
        </div>

        {/* Tickets Feed Stream Content */}
        {tickets.length === 0 ? (
          /* Premium Empty Block Layout */
          <div className="text-center py-20 bg-white/[0.01] border border-dashed border-white/[0.05] rounded-2xl shadow-xl backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center text-slate-600 mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-slate-300 font-semibold text-base mb-1">No operational logs found</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
              You haven't initiated any active customer technical tokens on this panel.
            </p>
            <Link
              to="/customer/create-ticket"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-all duration-200"
            >
              Raise First Ticket
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="group relative bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.1] space-y-4"
              >
                {/* Upper row containing hash identities and state indicators */}
                <div className="flex justify-between items-center pb-3 border-b border-white/[0.03]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                    <h2 className="font-mono text-sm font-bold tracking-wider text-indigo-400">
                      #{ticket.ticketId}
                    </h2>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border tracking-wider uppercase ${getStatusBadge(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </div>

                {/* Core descriptive logs area wrapper */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
                    {ticket.subject}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-4xl line-clamp-2">
                    {ticket.description}
                  </p>
                </div>

                {/* Time parameter metrics footer line */}
                <div className="pt-3 border-t border-white/[0.02] flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Initialized Lifecycle:</span>
                  <span className="text-slate-400">{new Date(ticket.createdAt).toLocaleString()}</span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyTickets;