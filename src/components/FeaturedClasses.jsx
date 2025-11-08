import React from 'react';

const classes = [
  {
    id: 1,
    title: 'Frontend Web Dasar',
    teacher: 'Ayu Pradana',
    price: 'Rp149.000',
    badge: 'Beginner',
    desc: 'Belajar HTML, CSS, dan dasar JavaScript untuk membangun website modern.',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    teacher: 'Raka Putra',
    price: 'Rp199.000',
    badge: 'Design',
    desc: 'Pahami prinsip desain antarmuka, tipografi, dan prototyping cepat.',
    img: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Data Analysis dengan Python',
    teacher: 'Nadia Salsabila',
    price: 'Rp249.000',
    badge: 'Data',
    desc: 'Analisis data menggunakan Pandas, visualisasi, dan insight bisnis.',
    img: 'https://images.unsplash.com/photo-1551281044-8b29d636a703?q=80&w=1200&auto=format&fit=crop'
  }
];

const FeaturedClasses = () => {
  return (
    <section id="kelas" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-semibold text-[#1C1D1F]">Kelas Pilihan</h2>
          <p className="mt-2 text-[16px] text-[#1C1D1F]/70">Pilihan kelas unggulan untuk mulai belajar dengan kurikulum padat dan praktis.</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <div key={c.id} className="rounded-[20px] bg-white shadow-sm border border-black/5 hover:shadow-md transition overflow-hidden" style={{ width: '100%', maxWidth: 380 }}>
              <div className="h-40 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-[#4B6BFB]/10 px-3 py-1 text-xs font-medium text-[#4B6BFB]">{c.badge}</div>
                <h3 className="text-lg font-semibold text-[#1C1D1F]">{c.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[#1C1D1F]/70">{c.desc}</p>
                <div className="mt-4 text-sm text-[#1C1D1F]/80">Pengajar: <span className="font-medium">{c.teacher}</span></div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-[#4B6BFB] font-semibold">{c.price}</div>
                  <button className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-[#4B6BFB] px-4 py-2 text-white font-semibold hover:opacity-90 transition">Beli</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;
