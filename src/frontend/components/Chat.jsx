
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F0F7F9]">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/find-lawyers" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </Link>
          <div className="relative">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl shadow-inner">👨‍⚖️</div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">Adv. Rajesh Kumar</h2>
            <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span> Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="p-2.5 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg></button>
          <button className="p-2.5 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
          <button className="p-2.5 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col">
        <div className="self-center bg-blue-100/50 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Today, Oct 24</div>

        {/* Lawyer Message */}
        <div className="flex gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 text-xs shadow-sm">⚖️</div>
          <div className="space-y-1">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-white">
              <p className="text-[#1F2937] text-[15px] leading-relaxed">Hello, I've reviewed your case analysis regarding the trespass issue.</p>
            </div>
            <span className="text-[10px] text-gray-400 font-medium ml-1">10:42 AM</span>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
          <div className="space-y-1 items-end flex flex-col">
            <div className="bg-[#0A192F] p-4 rounded-2xl rounded-tr-none shadow-md">
              <p className="text-white text-[15px] leading-relaxed">Thank you, advocate. What documents should I prepare first?</p>
            </div>
            <div className="flex items-center gap-1 mr-1">
              <span className="text-[10px] text-gray-400 font-medium">10:45 AM</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
          </div>
        </div>

        {/* Lawyer Message */}
        <div className="flex gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 text-xs shadow-sm">⚖️</div>
          <div className="space-y-1">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-white">
              <p className="text-[#1F2937] text-[15px] leading-relaxed">Please have your property deed and any photos of the encroachment ready.</p>
            </div>
            <span className="text-[10px] text-gray-400 font-medium ml-1">10:47 AM</span>
          </div>
        </div>

        {/* Case Progress Card */}
        <div className="bg-[#EDF2FF] border border-blue-100 rounded-2xl p-6 flex gap-5 shadow-sm">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
          </div>
          <div>
            <h3 className="font-bold text-[#0A192F] text-lg mb-2">Case Progress: Document Review</h3>
            <p className="text-[#4B5563] text-sm leading-relaxed font-medium">Advocate Rajesh Kumar has requested specific documentation to proceed with the legal notice.</p>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="bg-white p-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex gap-4 items-center">
          <button className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-500 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Type your legal inquiry..." 
              className="w-full h-12 pl-6 pr-12 rounded-2xl bg-[#F8FAFC] border border-gray-100 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
          <button className="w-14 h-12 bg-[#0A192F] text-white rounded-2xl flex items-center justify-center hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45 -mt-1 -mr-1"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;