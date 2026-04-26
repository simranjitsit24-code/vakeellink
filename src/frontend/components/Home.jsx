

import NavBar from './NavBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements - Restored */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-3xl animate-flow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/40 rounded-full blur-3xl animate-drift"></div>
      </div>

      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
              AI-POWERED LEGAL ACCESS
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-[1.1]">
              Legal help for <br />
              <span className="text-blue-800">every Indian citizen.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Democratizing the legal system through technology. Describe your situation in plain language and let our expert AI guide you to the right solution.
            </p>

            {/* Input Card - 3D Styled */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.05),0_30px_60px_-12px_rgba(0,0,0,0.15)] p-8 mt-8 max-w-md relative group transition-transform hover:-translate-y-1 duration-300">
              <label className="block text-sm font-bold text-gray-700 mb-6 uppercase tracking-widest">
                Describe your problem
              </label>
              <div className="relative">
                <textarea 
                  className="w-full h-40 p-6 rounded-3xl border border-gray-100 focus:border-blue-600 focus:ring-0 outline-none transition-all resize-none text-gray-800 bg-gray-50/50 text-lg placeholder:text-gray-400 font-medium"
                  placeholder="e.g., 'My neighbor is encroaching on my land...'"
                ></textarea>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#108542] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                  </svg>
                </div>
              </div>
              <button className="w-full mt-8 bg-[#2563EB] text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                Analyze My Case
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative hidden md:block">
            <div className="relative z-10 animate-flow">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                alt="Lady Justice" 
                className="rounded-[3rem] shadow-2xl shadow-blue-900/30 border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0B1221] text-white py-16 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex items-center gap-6 max-w-xl">
            <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <p className="text-2xl font-medium leading-snug">Bridge the gap between law and justice for 1.4B people.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-blue-400 text-sm font-black uppercase tracking-widest mb-2">Success Rate</p>
              <p className="text-5xl font-black text-white">94%</p>
            </div>
            <div>
              <p className="text-blue-400 text-sm font-black uppercase tracking-widest mb-2">Verified Lawyers</p>
              <p className="text-5xl font-black text-white">50k+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold text-blue-700 uppercase tracking-[0.3em] mb-6">How it works</p>
        <h3 className="text-4xl md:text-5xl font-bold mb-20 text-black leading-tight">A seamless, secure journey from confusion<br />to legal clarity in three simple steps.</h3>
        
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            { step: "01", title: "Describe", desc: "Write your legal problem in plain, everyday language. No legal jargon required. Our system understands regional nuances.", icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" },
            { step: "02", title: "AI Analysis", desc: "NyayaSetu AI processes your statement, identifies relevant IPC sections, and drafts a preliminary legal summary.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
            { step: "03", title: "Match", desc: "Get matched with top-rated lawyers specializing in your specific legal domain. Secure a consultation within minutes.", icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border-2 border-blue-200 shadow-xl shadow-blue-500/10 transition-all bg-white group hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm font-black text-blue-700 uppercase tracking-widest mb-3">Step {item.step}</p>
              <h4 className="text-2xl font-bold mb-4 text-black">{item.title}</h4>
              <p className="text-black leading-relaxed text-lg font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Secure Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
            <h4 className="text-3xl font-bold">Secure. Confidential. Legally Sound.</h4>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-2 text-gray-900">End-to-End Encryption</h5>
                  <p className="text-gray-600">Your case details and communications are protected by military-grade encryption.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-2 text-gray-900">Verified Legal Network</h5>
                  <p className="text-gray-600">Every professional on our platform is vetted for active Bar Council registration.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:flex justify-center">
            <div className="w-64 h-64 bg-blue-50 rounded-[3rem] border-4 border-dashed border-blue-200 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] animate-pulse"></div>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-200">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <div className="absolute -bottom-6 bg-white px-6 py-2 rounded-full border-2 border-blue-100 shadow-lg text-blue-600 font-black text-sm uppercase tracking-widest">
                100% SECURE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1221] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="text-xl font-bold tracking-tight">NyayaSetu</span>
            </div>
            <p className="text-white leading-relaxed">The modern bridge between the common citizen and the Indian legal system. Empowering rights through artificial intelligence and expert connection.</p>
          </div>
          <div>
            <h6 className="font-bold uppercase tracking-widest text-sm mb-8 text-blue-400">Resources</h6>
            <ul className="space-y-4 text-white font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Legal Library</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Find a Lawyer</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Status Tracking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing for Pros</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase tracking-widest text-sm mb-8 text-blue-400">Company</h6>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Impact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase tracking-widest text-sm mb-8 text-blue-400">Support</h6>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© 2024 NyayaSetu Technologies Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;