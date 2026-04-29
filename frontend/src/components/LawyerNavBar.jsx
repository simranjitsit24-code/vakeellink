import { Link, useLocation } from 'react-router-dom';

const LawyerNavBar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/find-lawyers', label: 'Find Lawyers' },
    { to: '/my-cases', label: 'My Cases' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
            V
          </div>
          <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tighter">Vakeellink</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={[
                  'font-bold transition-colors',
                  active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600',
                ].join(' ')}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden sm:inline-flex text-gray-600 font-bold hover:text-blue-600 px-3 py-2">
            Lawyer Login
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gray-900 text-white font-black hover:bg-blue-600 transition-all shadow-lg shadow-gray-900/10 active:scale-[0.98]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LawyerNavBar;
