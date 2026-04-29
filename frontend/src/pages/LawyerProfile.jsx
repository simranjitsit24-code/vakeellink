import { useEffect, useMemo, useState } from 'react';
import LawyerNavBar from '../components/LawyerNavBar';

const LawyerProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const lawyer = useMemo(
    () => ({
      name: 'Adv. Aditi Malhotra',
      specialization: 'Corporate Law • Commercial Litigation',
      available: true,
      summary:
        'Premium counsel for founders and enterprises. Specialized in high-stakes negotiations, compliance strategy, and dispute-ready documentation built for speed and certainty.',
      practiceAreas: ['Corporate Law', 'Commercial Litigation', 'Contracts', 'M&A', 'Startup Compliance', 'Employment Law'],
      stats: [
        { label: 'Experience', value: '20+ Years' },
        { label: 'Cases Won', value: '450+' },
        { label: 'Client Retention', value: '98%' },
      ],
      bio: [
        'Aditi is a corporate and commercial litigation attorney who advises high-growth teams across fundraising, commercial contracts, and cross-border compliance.',
        'Over two decades, she has represented clients in complex negotiations and high-stakes disputes, with a focus on risk reduction and enforceable documentation.',
        'She mentors early-stage founders on governance and documentation best practices to help prevent disputes before they start.',
      ],
      reviews: [
        {
          name: 'Aarav Mehta',
          date: 'Jan 12, 2026',
          rating: 5,
          comment:
            'Exceptionally sharp and proactive. The contract revision was thorough, and the negotiation notes made discussions with the vendor effortless.',
        },
        {
          name: 'Neha Sharma',
          date: 'Dec 03, 2025',
          rating: 5,
          comment:
            'Clear, professional, and fast. Helped us tighten clauses and build a clean documentation workflow for the team.',
        },
        {
          name: 'Rohan Kapoor',
          date: 'Oct 18, 2025',
          rating: 4,
          comment:
            'Great guidance on compliance and risk. The briefing was structured, and the follow-up checklist was immediately actionable.',
        },
      ],
      sidebar: {
        price: '$450/hour',
        badge: 'Verified Partner',
        highlights: [
          { title: 'Fast Response', description: 'Avg. reply under 30 minutes during business hours.' },
          { title: 'Secure Payment', description: 'Encrypted checkout with trusted processing.' },
        ],
      },
    }),
    [],
  );

  const availability = useMemo(
    () => [
      { day: 'Mon', slots: ['09:00', '11:30', '14:00'], disabled: ['11:30'] },
      { day: 'Tue', slots: ['09:30', '12:00', '15:30'], disabled: ['15:30'] },
      { day: 'Wed', slots: ['10:00', '13:00', '16:00'], disabled: [] },
      { day: 'Thu', slots: ['09:00', '11:00', '17:00'], disabled: ['09:00'] },
      { day: 'Fri', slots: ['10:30', '14:30', '18:00'], disabled: ['18:00'] },
      { day: 'Sat', slots: ['10:00', '12:30', '15:00'], disabled: ['15:00'] },
      { day: 'Sun', slots: ['11:00', '13:30', '16:30'], disabled: ['11:00', '16:30'] },
    ],
    [],
  );

  const tabs = useMemo(
    () => [
      { key: 'about', label: 'About' },
      { key: 'reviews', label: 'Reviews' },
      { key: 'availability', label: 'Availability' },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      <LawyerNavBar />
      <div className="absolute -top-32 -left-40 w-[520px] h-[520px] bg-blue-200/35 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-200/35 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div
              className={[
                'bg-white rounded-3xl border border-gray-100 shadow-[0_50px_130px_-70px_rgba(15,23,42,0.35)] overflow-hidden transition-all duration-500',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
              ].join(' ')}
            >
              <div className="px-7 sm:px-10 pt-9 pb-8 relative">
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500"></div>
                <div className="absolute inset-x-0 top-0 h-28 opacity-25 bg-[radial-gradient(circle_at_30%_20%,white,transparent_55%),radial-gradient(circle_at_70%_0%,white,transparent_55%)]"></div>

                <div className="flex flex-col md:flex-row gap-7 md:items-start relative">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-3xl bg-white p-2 shadow-xl shadow-black/10 border border-white/60">
                      <div className="w-full h-full rounded-[1.35rem] bg-[#0B1220] flex items-center justify-center text-white font-black text-3xl tracking-tight">
                        AM
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                      <div className="min-w-0">
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                          {lawyer.name}
                        </h1>
                        <p className="text-gray-500 font-extrabold mt-2">{lawyer.specialization}</p>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {lawyer.available ? (
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-black text-xs uppercase tracking-widest shadow-sm">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              Available Now
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 border border-gray-100 font-black text-xs uppercase tracking-widest">
                              Offline
                            </span>
                          )}

                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-black text-xs uppercase tracking-widest">
                            Verified Profile
                          </span>
                        </div>

                        <p className="mt-5 text-gray-600 font-medium leading-relaxed max-w-2xl">{lawyer.summary}</p>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {lawyer.practiceAreas.map((area) => (
                            <span
                              key={area}
                              className="px-4 py-2 rounded-full bg-[#F1F5FF] text-[#1E3A8A] border border-blue-100 font-extrabold text-sm transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white border border-gray-100 p-6 w-full xl:w-[280px] shadow-[0_24px_80px_-60px_rgba(15,23,42,0.55)]">
                        <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">Client Rating</p>
                        <div className="mt-3 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className="text-amber-400 text-lg">
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-900 font-black text-xl">5.0</span>
                        </div>
                        <p className="mt-2 text-gray-500 font-bold text-sm">300+ verified reviews</p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <button className="py-3 rounded-2xl bg-blue-600 text-white font-black transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0 active:scale-[0.99]">
                            Book
                          </button>
                          <button className="py-3 rounded-2xl bg-[#0A192F] text-white font-black transition-all duration-200 hover:bg-blue-900 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:translate-y-0 active:scale-[0.99]">
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 bg-white px-7 sm:px-10 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {lawyer.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">{s.label}</p>
                      <p className="mt-2 text-2xl font-black text-gray-900">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={[
                'bg-white rounded-3xl border border-gray-100 shadow-[0_50px_130px_-80px_rgba(15,23,42,0.30)] overflow-hidden transition-all duration-500 delay-100',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
              ].join(' ')}
            >
              <div className="px-7 sm:px-10 pt-7">
                <div className="flex gap-8 border-b border-gray-100">
                  {tabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(t.key)}
                      className={[
                        'relative pb-5 font-black transition-colors',
                        activeTab === t.key ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700',
                      ].join(' ')}
                    >
                      {t.label}
                      {activeTab === t.key ? (
                        <span className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-blue-600 rounded-full"></span>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className={activeTab === 'about' ? 'block' : 'hidden'}>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-900">Professional Biography</h2>
                    <div className="space-y-5">
                      {lawyer.bio.map((p, idx) => (
                        <p key={idx} className="text-gray-600 font-medium leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={activeTab === 'reviews' ? 'block' : 'hidden'}>
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-7">
                      <h2 className="text-2xl font-black text-gray-900">Client Reviews</h2>
                      <button className="text-blue-600 font-black hover:text-blue-700 transition-colors">View All</button>
                    </div>

                    <div className="space-y-4">
                      {lawyer.reviews.map((r) => (
                        <div
                          key={`${r.name}-${r.date}`}
                          className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center font-black text-gray-900 shadow-sm">
                              {r.name
                                .split(' ')
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                  <p className="text-gray-900 font-black">{r.name}</p>
                                  <p className="text-gray-400 font-bold text-sm">{r.date}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                      key={i}
                                      className={i < r.rating ? 'text-amber-400' : 'text-gray-200'}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p className="mt-4 text-gray-600 font-medium leading-relaxed">{r.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={activeTab === 'availability' ? 'block' : 'hidden'}>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
                      <div>
                        <h2 className="text-2xl font-black text-gray-900">Weekly Availability</h2>
                        <p className="text-gray-500 font-bold mt-2">Select a slot to reserve your preferred time.</p>
                      </div>
                      <div className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3 text-blue-700 font-black text-sm">
                        Selected: {selectedSlot ? selectedSlot : 'None'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                      {availability.map((d) => (
                        <div
                          key={d.day}
                          className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                        >
                          <p className="text-gray-900 font-black">{d.day}</p>
                          <div className="mt-3 flex flex-col gap-2">
                            {d.slots.map((s) => {
                              const key = `${d.day} ${s}`;
                              const isDisabled = d.disabled.includes(s);
                              const isActive = selectedSlot === key;

                              return (
                                <button
                                  key={s}
                                  disabled={isDisabled}
                                  onClick={() => setSelectedSlot(isActive ? null : key)}
                                  className={[
                                    'w-full px-3 py-2.5 rounded-xl text-sm font-black border transition-all duration-200',
                                    isDisabled
                                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                      : isActive
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                                        : 'bg-white text-gray-900 border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-0.5',
                                  ].join(' ')}
                                >
                                  {s}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <div
              className={[
                'bg-white rounded-3xl border border-gray-100 shadow-[0_50px_130px_-80px_rgba(15,23,42,0.30)] p-8 transition-all duration-500 delay-150',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-gray-400 font-black uppercase tracking-widest text-[11px]">Fee</p>
                  <p className="mt-2 text-3xl font-black text-gray-900">{lawyer.sidebar.price}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-black text-xs uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {lawyer.sidebar.badge}
                </span>
              </div>

              <div className="mt-7 grid gap-4">
                {lawyer.sidebar.highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-5">
                    <p className="text-gray-900 font-black">{h.title}</p>
                    <p className="mt-2 text-gray-500 font-bold text-sm leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>

              <button className="mt-7 w-full py-4 rounded-2xl bg-blue-600 text-white font-black text-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0 active:scale-[0.99]">
                Book Initial Session
              </button>
              <button className="mt-3 w-full py-4 rounded-2xl bg-[#0A192F] text-white font-black transition-all duration-200 hover:bg-blue-900 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:translate-y-0 active:scale-[0.99]">
                Start AI Briefing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
