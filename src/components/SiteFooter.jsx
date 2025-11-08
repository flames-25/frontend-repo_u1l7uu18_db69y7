import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="bg-[#0B1026] text-white mt-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-xl font-bold">EduVerse</div>
          <p className="mt-3 text-white/70 max-w-sm">Platform belajar modern dengan kurikulum praktis, mentor andal, dan pengalaman interaktif.</p>
        </div>
        <div>
          <div className="font-semibold">Navigasi</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="#kelas" className="hover:text-white">Kelas</a></li>
            <li><a href="#cara-akses" className="hover:text-white">Cara Akses</a></li>
            <li><a href="#" className="hover:text-white">Harga</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Kontak</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>hello@eduverse.app</li>
            <li>+62 811-555-1212</li>
            <li>Bandung, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="h-[50px] border-t border-white/10 flex items-center">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0 w-full text-sm text-white/60">© {new Date().getFullYear()} EduVerse. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
