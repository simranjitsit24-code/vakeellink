

import { Link } from 'react-router-dom';

const FindLawyers = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Find Expert Lawyers</h1>
          <p className="text-gray-600 text-lg">Search through our network of verified legal professionals.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search by name, specialization, or location..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <select className="px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 text-gray-600 font-bold outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Specializations</option>
            <option>Criminal Law</option>
            <option>Civil Law</option>
            <option>Family Law</option>
            <option>Corporate Law</option>
          </select>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
            Search
          </button>
        </div>

        {/* Lawyer Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Adv. Rajesh Kumar", 
              spec: "Criminal Law Specialist", 
              exp: "15+ Years", 
              loc: "New Delhi, Delhi", 
              rating: "4.9", 
              reviews: "124", 
              icon: "⚖️", 
              color: "blue" 
            },
            { 
              name: "Adv. Sneha Kulkarni", 
              spec: "Corporate & Property Law", 
              exp: "10+ Years", 
              loc: "Mumbai, Maharashtra", 
              rating: "4.8", 
              reviews: "98", 
              icon: "🏢", 
              color: "purple" 
            },
            { 
              name: "Adv. Vikram Singh", 
              spec: "Family & Divorce Law", 
              exp: "12+ Years", 
              loc: "Chandigarh, Punjab", 
              rating: "5.0", 
              reviews: "156", 
              icon: "🤝", 
              color: "green" 
            }
          ].map((lawyer, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className={`w-20 h-20 bg-${lawyer.color}-50 rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                {lawyer.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{lawyer.name}</h3>
              <p className={`text-${lawyer.color}-600 font-semibold text-sm mb-6 uppercase tracking-wider`}>{lawyer.spec}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">Experience</span>
                  <span className="text-gray-900 font-bold">{lawyer.exp}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">Location</span>
                  <span className="text-gray-900 font-bold">{lawyer.loc}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">Rating</span>
                  <span className="text-gray-900 font-bold">⭐ {lawyer.rating} ({lawyer.reviews})</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 py-4 bg-gray-50 rounded-2xl font-bold text-gray-900 hover:bg-gray-100 transition-all shadow-sm">
                  View Profile
                </button>
                <Link 
                  to="/chat"
                  className="flex-1 py-4 bg-blue-600 rounded-2xl font-bold text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Chat Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindLawyers;
