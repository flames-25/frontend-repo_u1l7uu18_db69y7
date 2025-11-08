import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FF]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[560px]">
          {/* Left 60% */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(75,107,251,0.12)] px-4 py-2 text-[#4B6BFB] text-sm font-medium">
              <Rocket size={18} />
              Belajar modern dan interaktif
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-[#1C1D1F]">
              Tingkatkan Skill dengan
              <span className="text-[#4B6BFB]"> Kelas Terpilih</span>
            </h1>
            <p className="mt-5 text-lg text-[#1C1D1F]/70 max-w-[520px]">
              Akses materi berkualitas, dibimbing instruktur praktisi. Mulai dari dasar sampai mahir, semua ada di satu tempat.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#kelas"
                className="inline-flex items-center justify-center rounded-full bg-[#4B6BFB] px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Mulai Belajar
              </a>
              <a
                href="#cara-akses"
                className="inline-flex items-center justify-center rounded-full border border-[#4B6BFB] px-6 py-3 text-[#4B6BFB] font-semibold hover:bg-[#4B6BFB]/5 transition"
              >
                Lihat Cara Akses
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
              <div>
                <div className="text-3xl font-bold text-[#1C1D1F]">120+</div>
                <div className="text-sm text-[#1C1D1F]/60">Kelas aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1C1D1F]">50K+</div>
                <div className="text-sm text-[#1C1D1F]/60">Siswa bergabung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1C1D1F]">4.9</div>
                <div className="text-sm text-[#1C1D1F]/60">Rating rata-rata</div>
              </div>
            </div>
          </div>

          {/* Right 40% */}
          <div className="lg:col-span-5 relative h-[420px] lg:h-[520px] rounded-2xl">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* soft gradient overlay for readability - does not block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[#4B6BFB]/10 blur-2xl" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#FFB84D]/20 blur-2xl" />
          </div>
        </div>

        {/* trust badges */}
        <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-[#1C1D1F]/70">
          <div className="inline-flex items-center gap-2"><Shield className="text-[#4B6BFB]" size={18} /> Kurikulum terstruktur</div>
          <div className="inline-flex items-center gap-2"><Star className="text-[#FFB84D]" size={18} /> Mentor berpengalaman</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
