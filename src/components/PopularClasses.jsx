import React from 'react';
import { BookOpen } from 'lucide-react';

const items = [
  { id: 1, name: 'Fullstack Web Bootcamp', subjects: 12 },
  { id: 2, name: 'Mobile Development', subjects: 8 },
  { id: 3, name: 'Product Management', subjects: 6 },
];

const PopularClasses = () => {
  return (
    <section className="py-20 bg-[#F5F6FC]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-semibold text-[#1C1D1F]">Kelas Populer</h2>
          <p className="mt-2 text-[16px] text-[#1C1D1F]/70">Paling banyak diikuti dan direkomendasikan oleh siswa.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.id} className="rounded-[20px] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition" style={{ width: '100%', maxWidth: 320 }}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4B6BFB]/10 text-[#4B6BFB]"><BookOpen /></div>
                <div>
                  <div className="text-base font-semibold text-[#1C1D1F]">{it.name}</div>
                  <div className="text-sm text-[#1C1D1F]/60">{it.subjects} mapel</div>
                </div>
              </div>
              <button className="mt-5 inline-flex text-sm font-semibold text-[#4B6BFB] hover:underline">Lihat mapel</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
