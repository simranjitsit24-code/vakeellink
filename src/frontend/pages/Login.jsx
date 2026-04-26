import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F4F9] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="hidden md:flex flex-col space-y-6 px-12">
          <h1 className="text-[52px] font-black text-[#1F2937] leading-tight">
            Fast, Efficient and <br /> Productive
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          
          <div className="pt-24 flex items-center gap-12 text-sm font-bold text-gray-400">
            <div className="flex items-center gap-2 text-gray-900">
              <span className="text-2xl">🇺🇸</span>
              <span>English</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <div className="flex gap-8 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Plans</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Right Side: Sign Up Card */}
        <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-gray-900 mb-2">Sign Up</h2>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Your Social Campaigns</p>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
              <p className="text-[11px] text-gray-400 font-bold leading-relaxed pt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols.
              </p>
            </div>

            {/* Repeat Password */}
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700">Repeat Password</label>
              <input 
                type="password" 
                className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-500" />
              <p className="text-sm font-bold text-gray-400">
                I accept the <a href="#" className="text-blue-600 hover:underline">Terms</a>
              </p>
            </div>

            {/* Social Logins */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <div className="relative flex justify-center text-xs font-black uppercase tracking-widest">
                <span className="bg-white px-4 text-gray-400">Or with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 py-4 px-2 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700 shadow-sm">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                Sign Up with Google
              </button>
              <button type="button" className="flex items-center justify-center gap-3 py-4 px-2 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700 shadow-sm">
                <img src="https://www.svgrepo.com/show/511330/apple-fill.svg" className="w-5 h-5" alt="Apple" />
                Sign Up with Apple
              </button>
            </div>

            {/* Submit Button */}
            <button className="w-full py-5 bg-[#0052FF] text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 active:scale-[0.98]">
              Sign Up
            </button>

            <p className="text-center text-sm font-bold text-gray-400 pt-4">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign In</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;