import { useEffect, useMemo, useState } from 'react';
import LawyerNavBar from '../components/LawyerNavBar';

const MyCases = () => {
  const [mounted, setMounted] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const items = useMemo(
    () => [
      {
        id: 'CASE-1042',
        title: 'Vendor contract dispute',
        summary: 'Termination clause ambiguity and payment holdback for missed SLAs.',
        tags: ['Contracts', 'Commercial'],
        when: 'Today • 10:42 AM',
      },
      {
        id: 'CASE-1037',
        title: 'Trademark opposition reply',
        summary: 'Drafted evidence list and response strategy for class 9 mark.',
        tags: ['IP', 'Trademark'],
        when: 'Yesterday • 6:18 PM',
      },
      {
        id: 'CASE-1029',
        title: 'Employment notice review',
        summary: 'Reviewed legal notice and prepared a concise rebuttal timeline.',
        tags: ['Employment', 'Compliance'],
        when: 'Apr 21 • 3:05 PM',
      },
      {
        id: 'CASE-1021',
        title: 'Startup incorporation checklist',
        summary: 'Governance, founder vesting, and early documentation hygiene.',
        tags: ['Startup', 'Corporate'],
        when: 'Apr 17 • 11:20 AM',
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter((it) => {
      const hay = [it.id, it.title, it.summary, ...(it.tags || [])].join(' ').toLowerCase();
      return hay.includes(query);
    });
  }, [items, q]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      <LawyerNavBar />
      <div className="absolute -top-32 -left-40 w-[520px] h-[520px] bg-blue-200/35 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-200/35 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 py-8">
        <div
          className={[
            'bg-white rounded-3xl border border-gray-100 shadow-[0_50px_130px_-80px_rgba(15,23,42,0.30)] overflow-hidden transition-all duration-500',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
          ].join(' ')}
        >
          <div className="px-7 sm:px-10 pt-9 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">My Cases</h1>
                <p className="mt-2 text-gray-500 font-bold">Query history with quick keyword search.</p>
              </div>
              <div className="w-full lg:w-[420px]">
                <label className="text-[11px] uppercase tracking-widest font-black text-gray-400">Search</label>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by keyword, tag, or case id…"
                  className="mt-2 w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-800"
                />
              </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-5">
              {filtered.map((it) => (
                <div
                  key={it.id}
                  className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">{it.id}</p>
                      <p className="mt-2 text-lg font-black text-gray-900">{it.title}</p>
                      <p className="mt-2 text-gray-600 font-medium leading-relaxed">{it.summary}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-gray-400 font-black text-xs">{it.when}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 font-black text-xs transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {!filtered.length ? (
                <div className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-10 lg:col-span-2 text-center">
                  <p className="text-gray-900 font-black text-lg">No results</p>
                  <p className="mt-2 text-gray-500 font-bold">Try a different keyword.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCases;
