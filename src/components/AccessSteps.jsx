import React from 'react';
import { KeyRound, CreditCard, GraduationCap } from 'lucide-react';

const steps = [
  { id: 1, icon: KeyRound, title: 'Daftar & Verifikasi', body: 'Buat akun Anda dan verifikasi email untuk keamanan.' },
  { id: 2, icon: CreditCard, title: 'Pilih Paket', body: 'Beli kelas pilihan atau masukkan kode undangan dari sekolah.' },
  { id: 3, icon: GraduationCap, title: 'Mulai Belajar', body: 'Akses materi, kuis, dan pantau progres belajar Anda.' },
];

const AccessSteps = () => {
  return (
    <section id="cara-akses" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-semibold text-[#1C1D1F]">Cara Mendapat Akses</h2>
          <p className="mt-2 text-[16px] text-[#1C1D1F]/70">Ikuti tiga langkah sederhana ini untuk mulai belajar.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.id} className="rounded-[20px] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4B6BFB]/10 text-[#4B6BFB]">
                  {React.createElement(s.icon, { size: 32 })}
                </div>
                <div className="text-xl font-semibold text-[#1C1D1F]">{s.title}</div>
              </div>
              <p className="mt-4 text-[16px] text-[#1C1D1F]/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSteps;
