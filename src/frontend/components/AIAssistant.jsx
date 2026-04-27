

const AIAssistant = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col h-[80vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        {/* Chat Header */}
        <div className="p-8 bg-blue-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h2 className="text-xl font-black">Nyaya AI Assistant</h2>
              <p className="text-blue-100 text-sm font-medium">Online & Ready to Help</p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
            🔥 Priority AI
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="flex gap-4 max-w-[80%]">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">🤖</div>
            <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm border border-gray-100">
              <p className="text-gray-800 leading-relaxed font-medium">Namaste! I am your AI legal assistant. How can I help you navigate the Indian legal system today?</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-8 border-t border-gray-100 bg-white">
          <div className="relative flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Ask me anything about your legal rights..." 
              className="flex-1 px-8 py-5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 font-medium"
            />
            <button className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;