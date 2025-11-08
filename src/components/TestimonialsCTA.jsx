import React from 'react';
import { Quote, UserPlus } from 'lucide-react';

const TestimonialsCTA = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 grid gap-10 lg:grid-cols-12 items-center">
        {/* Testimonial Card */}
        <div className="lg:col-span-7">
          <div className="rounded-[20px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxhdmF0YXJ8ZW58MHwwfHx8MTc2MjU2Nzk1NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="avatar" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-[#1C1D1F]">Salsa A.</div>
                <div className="text-sm text-[#1C1D1F]/60">Mahasiswi, Informatika</div>
              </div>
            </div>
            <p className="mt-4 text-[#1C1D1F]">
              <Quote className="inline-block mr-2 text-[#FFB84D]" size={18} />
              Kurikulumnya rapi dan instruktur responsif. Progres belajar jadi terasa dan mudah diikuti.
            </p>
          </div>
        </div>
        {/* CTA Pengajar */}
        <div className="lg:col-span-5">
          <div className="rounded-[20px] border border-black/5 bg-[#0B1026] p-8 text-white">
            <h3 className="text-2xl font-semibold">Gabung sebagai Pengajar</h3>
            <p className="mt-2 text-white/80">Bagikan pengalaman Anda, bangun komunitas belajar, dan dapatkan penghasilan.</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[#0B1026] font-semibold">
              <UserPlus size={18} /> Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
