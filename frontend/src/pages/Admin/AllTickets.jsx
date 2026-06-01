import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchTickets();
  }, [search, status]);

  const fetchTickets = async () => {
    try {
      let url = `/tickets?search=${search}`;
      if (status) {
        url += `&status=${status}`;
      }
      const response = await api.get(url);
      setTickets(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Helper function to render exact theme status badge
  const getStatusBadge = (statusValue) => {
    switch (statusValue) {
      case "Open":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "In Progress":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Closed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
      {/* Exact Landing Page Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-6">
        
        {/* Header Section */}
        <div className="mb-10 pb-6 border-b border-white/[0.05] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              All Support Tickets
            </h1>
            <p className="text-slate-400 text-sm mt-1.5">
              Monitor issues, adjust dispatch parameters, and trace client interaction logs.
            </p>
          </div>
          <Link
            to="/admin/dashboard"
            className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Filters and Search Controllers */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Enhanced Search Input */}
          <div className="flex-1 relative group">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search tickets by ID, name, or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] focus:border-indigo-500/30 focus:bg-white/[0.04] text-slate-200 placeholder-slate-500 focus:outline-none transition-all text-sm backdrop-blur-md shadow-inner"
            />
          </div>

          {/* Styled Custom Select Dropdown */}
          <div className="relative min-w-[200px]">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] focus:border-indigo-500/30 focus:bg-white/[0.04] text-slate-300 focus:outline-none transition-all text-sm appearance-none backdrop-blur-md cursor-pointer"
            >
              <option value="" className="bg-slate-950 text-slate-300">All Statuses</option>
              <option value="Open" className="bg-slate-950 text-amber-400">Open</option>
              <option value="In Progress" className="bg-slate-950 text-blue-400">In Progress</option>
              <option value="Closed" className="bg-slate-950 text-emerald-400">Closed</option>
            </select>
            <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Tickets Stream Feed Container */}
        <div className="grid gap-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <Link
                key={ticket._id}
                to={`/admin/tickets/${ticket.ticketId}`}
                className="group relative bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
              >
                {/* Left Primary Meta Column */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold tracking-wider text-indigo-400">
                      #{ticket.ticketId}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {ticket.customerName}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {ticket.subject}
                  </h2>
                </div>

                {/* Right Pipeline Badge & Action Column */}
                <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/[0.03]">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(ticket.status)} transition-all uppercase tracking-wider`}>
                    {ticket.status}
                  </span>
                  
                  <div className="text-slate-500 group-hover:text-white transform group-hover:translate-x-1 transition-all hidden sm:block">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            /* Empty State State */
            <div className="text-center py-16 bg-white/[0.01] border border-dashed border-white/[0.05] rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center text-slate-600 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-slate-300 font-semibold text-base mb-1">No tickets matched</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Try adjusting your search keywords or switching filters categories.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AllTickets;