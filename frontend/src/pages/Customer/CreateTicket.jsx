// // frontend/src/pages/Customer/CreateTicket.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { createTicket } from "../../services/ticketService";
// import { useAuth } from "../../context/AuthContext";

// const CreateTicket = () => {
//   const navigate = useNavigate();

//   const { user } = useAuth();

//   const [formData, setFormData] = useState({
//     customerName: user?.name || "",
//     customerEmail: user?.email || "",
//     subject: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createTicket(formData);

//       alert("Ticket Created Successfully");

//       navigate("/customer/my-tickets");

//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//         "Failed to create ticket"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-6">
//       <div className="max-w-2xl mx-auto">

//         <h1 className="text-4xl font-bold mb-8">
//           Create Ticket
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-slate-900 p-8 rounded-xl"
//         >

//           <div className="mb-4">
//             <label className="block mb-2 text-slate-400">
//               Customer Name
//             </label>

//             <input
//               type="text"
//               value={formData.customerName}
//               readOnly
//               className="w-full p-3 rounded bg-slate-800 cursor-not-allowed"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-slate-400">
//               Customer Email
//             </label>

//             <input
//               type="email"
//               value={formData.customerEmail}
//               readOnly
//               className="w-full p-3 rounded bg-slate-800 cursor-not-allowed"
//             />
//           </div>

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full mb-4 p-3 rounded bg-slate-800"
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Describe your issue..."
//             value={formData.description}
//             onChange={handleChange}
//             rows="5"
//             className="w-full mb-6 p-3 rounded bg-slate-800"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
//           >
//             Create Ticket
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default CreateTicket;




// frontend/src/pages/Customer/CreateTicket.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createTicket } from "../../services/ticketService";
import { useAuth } from "../../context/AuthContext";

const CreateTicket = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    customerName: user?.name || "",
    customerEmail: user?.email || "",
    subject: "",
    description: "",
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
      await createTicket(formData);
      alert("Ticket Created Successfully");
      navigate("/customer/my-tickets");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to create ticket"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden font-sans">
      
      {/* Landing Page Gradient Glow Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 pt-6">
        
        {/* Navigation / Header Section */}
        <div className="mb-8 flex justify-between items-center pb-4 border-b border-white/[0.05]">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Create Ticket
            </h1>
            <p className="text-slate-400 text-xs mt-1">
              File an incident request token directly to our technical support desk.
            </p>
          </div>
          <Link
            to="/customer/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/[0.01] border border-white/[0.05] transition-all"
          >
            ← Back
          </Link>
        </div>

        {/* Form Container Wrapper Sheet */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.01] border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-5"
        >
          {/* Readonly User Identity Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 block">
                Customer Profile
              </label>
              <input
                type="text"
                value={formData.customerName}
                readOnly
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03] text-slate-400 text-sm cursor-not-allowed outline-none select-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 block">
                Account Email
              </label>
              <input
                type="email"
                value={formData.customerEmail}
                readOnly
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03] text-slate-400 text-sm cursor-not-allowed outline-none select-none font-mono"
              />
            </div>
          </div>

          <div className="border-t border-white/[0.03] my-2 pt-2" />

          {/* Ticket Subject input field block */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
              Core Subject Summary
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Provide a concise title for your core technical issue..."
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-indigo-500/30 focus:bg-white/[0.04] text-white text-sm placeholder-slate-600 outline-none transition-all shadow-inner"
              required
            />
          </div>

          {/* Issue Description Area Block */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
              Detailed Description Logs
            </label>
            <textarea
              name="description"
              placeholder="Describe your active service interruption logs, error flags, or situational blockers in detail..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-indigo-500/30 focus:bg-white/[0.04] text-white text-sm placeholder-slate-600 outline-none transition-all resize-none shadow-inner leading-relaxed"
              required
            />
          </div>

          {/* Submit Action Button with premium gradient design */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 transform hover:-translate-y-0.5"
            >
              Initialize Support Ticket
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default CreateTicket;