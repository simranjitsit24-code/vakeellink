
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
          V
        </div>
        <span className="text-2xl font-black text-gray-900 tracking-tighter">Vakeellink</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
        <Link to="/find-lawyers" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Find Lawyers</Link>
        
        {/* Highlighted AI Assistant */}
        <Link to="/ai-assistant" className="relative group">
          <span className="text-gray-900 font-bold transition-colors flex items-center gap-1.5">
            AI Assistant <span className="text-lg">🔥</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>

        <Link to="/case-analyzer" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Case Analyzer</Link>
        <Link to="/case-insights" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Case Insights</Link>
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-gray-600 font-medium hover:text-blue-600 px-4 py-2">Log In</button>
        <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-gray-900/10 active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;