import React from 'react';
import { ArrowUpRight, Scissors, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { CRAFTSMEN_DATA } from '../data/salonData';
import { Stylist } from '../types';

interface TeamSectionProps {
  onSelectStylist: (stylist: Stylist) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectStylist }) => {
  const stylists = CRAFTSMEN_DATA.stylists || CRAFTSMEN_DATA.craftsmen;

  return (
    <section
      className="dark:bg-[#141414] border-b border-[#1D1D1D]/10 dark:border-white/10 fade-in overflow-hidden bg-[#FAF9F6] py-24 relative transition-colors duration-300 font-sans"
      id="craftsmen"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#9A8C73]"></span>
            <span className="text-[#9A8C73] text-[10px] tracking-[0.25em] uppercase font-semibold">
              {CRAFTSMEN_DATA.tag}
            </span>
          </div>
          <h2 className="dark:text-[#FAF9F6] leading-[0.95] md:text-5xl text-4xl text-[#1D1D1D] tracking-tight font-serif font-normal mb-6">
            Master Stylists. <br />
            <span className="italic font-light text-[#9A8C73]">Authentic Korean Craft.</span>
          </h2>
          <p className="text-sm md:text-base text-[#1D1D1D]/75 dark:text-white/75 leading-relaxed font-normal">
            {CRAFTSMEN_DATA.description}
          </p>
        </div>

        {/* Stylists Grid (3 columns on large, 2 on medium, 1 on small) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="group relative w-full cursor-pointer bg-white dark:bg-[#181818] border border-[#1D1D1D]/10 dark:border-white/10 p-6 sm:p-7 hover:border-[#9A8C73] transition-all duration-300 shadow-sm flex flex-col justify-between"
              onClick={() => onSelectStylist(stylist)}
            >
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-[#f0f0f0] dark:bg-[#1A1A1A] mb-6 relative border border-[#1D1D1D]/10 dark:border-white/10">
                  <img
                    src={stylist.image}
                    className="transition-all duration-700 ease-out group-hover:scale-105 w-full h-full object-cover grayscale group-hover:grayscale-0"
                    alt={stylist.name}
                  />
                  <div className="absolute top-4 left-4 bg-[#1D1D1D]/90 dark:bg-black/90 text-white text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-white/10">
                    {stylist.experienceBadge}
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#9A8C73] text-white flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1D] dark:text-[#FAF9F6] group-hover:text-[#9A8C73] transition-colors font-normal">
                      {stylist.name}
                    </h3>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9A8C73] font-semibold mb-3">
                    {stylist.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1D1D1D]/75 dark:text-white/75 leading-relaxed font-normal mb-4">
                    {stylist.bio}
                  </p>

                  {/* Quote */}
                  <div className="bg-[#FAF9F6] dark:bg-[#121212] p-3 border-l-2 border-[#9A8C73] text-xs font-serif italic text-[#1D1D1D]/80 dark:text-white/80 mb-4">
                    "{stylist.quote}"
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="space-y-1.5 pt-4 border-t border-[#1D1D1D]/10 dark:border-white/10 mt-auto">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#1D1D1D]/50 dark:text-white/50 font-bold block">
                  Specialties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stylist.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-0.5 border border-[#1D1D1D]/10 dark:border-white/10 text-[#1D1D1D]/80 dark:text-white/80"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
