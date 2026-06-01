import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/axios";

const TicketDetails = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const response = await api.get(`/tickets/${ticketId}`);
      setTicket(response.data.data);
      setStatus(response.data.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/tickets/${ticketId}`, {
        status,
        note,
      });
      alert("Ticket Updated Successfully");
      fetchTicket();
      setNote("");
    } catch (error) {
      console.log(error);
    }
  };

  if (!ticket) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-indigo-500/20 border-t-indigo-400 animate-spin" />
          <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Synchronizing Data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
      {/* Exact Landing Page Aesthetic Blur Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 pt-6">
        
        {/* Navigation Breadcrumb header block */}
        <div className="mb-8 flex justify-between items-center pb-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-extrabold tracking-widest text-indigo-400">
              TICKET SYSTEM
            </span>
            <span className="text-slate-600">/</span>
            <h1 className="text-xl font-bold font-mono tracking-wider text-slate-200">
              #{ticket.ticketId}
            </h1>
          </div>
          <Link
            to="/admin/tickets"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/[0.01] border border-white/[0.05] transition-all"
          >
            ← View All Stream
          </Link>
        </div>

        {/* Master Management Layout Control Panel Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Customer and Ticket Details Information Info Case */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Core Ticket Content Container */}
            <div className="bg-white/[0.01] border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-1">Subject Header</span>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-100 leading-snug">
                  {ticket.subject}
                </h2>
              </div>

              <div className="pt-4 border-t border-white/[0.03]">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-2">Issue Description Log</span>
                <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl shadow-inner">
                  {ticket.description}
                </p>
              </div>

              {/* Client Technical Contacts Subgroup */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.03]">
                <div className="bg-white/[0.01] p-3.5 rounded-xl border border-white/[0.03]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Requester Client Name</span>
                  <span className="text-sm font-semibold text-slate-300">{ticket.customerName}</span>
                </div>
                <div className="bg-white/[0.01] p-3.5 rounded-xl border border-white/[0.03]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Client Destination Email</span>
                  <span className="text-sm font-mono text-slate-400 break-all">{ticket.customerEmail}</span>
                </div>
              </div>
            </div>

            {/* Downside Lifecycle Activity Notes Pipeline Stream Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Internal Auditing Timeline Notes
              </h3>

              {ticket.notes?.length === 0 ? (
                <div className="text-center py-8 bg-white/[0.01] border border-dashed border-white/[0.05] rounded-xl text-xs text-slate-500">
                  No internal support entries have been tracked yet.
                </div>
              ) : (
                <div className="space-y-3">
                  {ticket.notes.map((noteItem, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl shadow-xl space-y-1.5 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/30" />
                      <p className="text-sm text-slate-300 leading-relaxed pl-1">
                        {noteItem.text}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 pl-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(noteItem.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Execution Operations State Status Overwrite Panel Box */}
          <div className="space-y-4 md:sticky md:top-6">
            <div className="bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl shadow-2xl backdrop-blur-md space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Resolution Engine
              </h3>
              
              {/* Dropdown Box Area */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Pipeline Stage Status</label>
                <div className="relative">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-indigo-500/30 focus:bg-white/[0.04] text-slate-200 text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Open" className="bg-slate-950 text-amber-400">Open</option>
                    <option value="In Progress" className="bg-slate-950 text-blue-400">In Progress</option>
                    <option value="Closed" className="bg-slate-950 text-emerald-400">Closed</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Input Note Area Block */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Append Progress Entry</label>
                <textarea
                  placeholder="Type an internal note or deployment summary response logs..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows="4"
                  className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-indigo-500/30 focus:bg-white/[0.04] text-white text-sm placeholder-slate-600 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Trigger Action Button Layout */}
              <button
                onClick={handleUpdate}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5"
              >
                Commit System Updates
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TicketDetails;