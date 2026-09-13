import React, { useMemo } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car, Calendar, ExternalLink } from 'lucide-react';
import { HOURS_AND_LOCATION, BRAND_DATA } from '../data/salonData';

interface SanctuaryCardProps {
  onOpenBooking: () => void;
}

export const SanctuaryCard: React.FC<SanctuaryCardProps> = ({ onOpenBooking }) => {
  // Compute open status dynamically (10:00 AM – 7:00 PM daily)
  const statusInfo = useMemo(() => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    if (currentTime >= 10 && currentTime < 19) {
      return {
        isOpen: true,
        text: 'Open Today',
        subtext: 'Closing at 7:00 PM',
      };
    }

    if (currentTime < 10) {
      return {
        isOpen: false,
        text: 'Opens at 10:00 AM',
        subtext: 'Daily 10:00 AM – 7:00 PM',
      };
    }

    return {
      isOpen: false,
      text: 'Closed for the Day',
      subtext: 'Opens tomorrow at 10:00 AM',
    };
  }, []);

  return (
    <section id="location" className="py-24 border-b border-[#1D1D1D]/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#141414] fade-in transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#9A8C73] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 block">
            {HOURS_AND_LOCATION.tag}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1D1D1D] dark:text-[#FAF9F6] font-normal tracking-tight mb-4">
            {HOURS_AND_LOCATION.title}
          </h2>
          <p className="text-sm md:text-base text-[#1D1D1D]/70 dark:text-white/70">
            {HOURS_AND_LOCATION.subtitle}
          </p>
        </div>

        {/* 2-Column Location & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location & Directions Card */}
          <div className="lg:col-span-6 bg-white dark:bg-[#1A1A1A] border border-[#1D1D1D]/10 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1D1D1D]/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9A8C73]/15 text-[#9A8C73] flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1D1D1D] dark:text-[#FAF9F6]">
                      Salon Address
                    </h3>
                    <p className="text-xs text-[#1D1D1D]/60 dark:text-white/60">
                      {BRAND_DATA.plazaLocation}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#1D1D1D] dark:bg-white text-white dark:text-black">
                    Unit 101
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#9A8C73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1D1D1D] dark:text-[#FAF9F6]">
                      {HOURS_AND_LOCATION.address}
                    </p>
                    <p className="text-xs text-[#1D1D1D]/60 dark:text-white/60 mt-0.5">
                      Plus Code: <span className="font-mono">{HOURS_AND_LOCATION.plusCode}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car size={16} className="text-[#9A8C73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1D1D1D] dark:text-[#FAF9F6]">
                      Free Plaza Parking
                    </p>
                    <p className="text-xs text-[#1D1D1D]/60 dark:text-white/60 mt-0.5">
                      {HOURS_AND_LOCATION.parkingNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#9A8C73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1D1D1D] dark:text-[#FAF9F6]">
                      Appointment & Payment Policy
                    </p>
                    <p className="text-xs text-[#1D1D1D]/60 dark:text-white/60 mt-0.5">
                      {HOURS_AND_LOCATION.appointmentPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1D1D1D]/10 dark:border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={HOURS_AND_LOCATION.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#1D1D1D] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1D1D1D] py-3 px-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A8C73] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={14} /> Open Google Maps
              </a>
              <a
                href={BRAND_DATA.phoneTel}
                className="py-3 px-4 border border-[#1D1D1D]/20 dark:border-white/20 text-[#1D1D1D] dark:text-white text-xs font-semibold uppercase tracking-[0.15em] hover:border-[#9A8C73] hover:text-[#9A8C73] transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-[#9A8C73]" /> {BRAND_DATA.phone}
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="lg:col-span-6 bg-white dark:bg-[#1A1A1A] border border-[#1D1D1D]/10 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              {/* Header with Live Status */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1D1D1D]/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9A8C73]/15 text-[#9A8C73] flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1D1D1D] dark:text-[#FAF9F6]">
                      Salon Hours
                    </h3>
                    <p className="text-xs text-[#1D1D1D]/60 dark:text-white/60">
                      Weekly Schedule
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF9F6] dark:bg-[#121212] border border-[#1D1D1D]/10 dark:border-white/10">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      statusInfo.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                    }`}
                  ></span>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider block leading-tight text-[#1D1D1D] dark:text-white">
                      {statusInfo.text}
                    </span>
                    <span className="text-[9px] text-[#1D1D1D]/50 dark:text-white/50 block leading-tight">
                      {statusInfo.subtext}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours Grid */}
              <div className="space-y-2.5 mb-8 text-sm">
                {HOURS_AND_LOCATION.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-2 px-3 rounded-none transition-colors ${
                      item.isClosed
                        ? 'text-[#1D1D1D]/40 dark:text-white/40 bg-transparent'
                        : 'text-[#1D1D1D] dark:text-[#FAF9F6] bg-[#FAF9F6] dark:bg-[#121212]'
                    }`}
                  >
                    <span className="font-medium text-xs sm:text-sm">{item.day}</span>
                    <span
                      className={`font-mono text-xs sm:text-sm ${
                        item.isClosed ? 'italic' : 'font-semibold text-[#9A8C73]'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1D1D1D]/10 dark:border-white/10">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#9A8C73] text-white py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#1D1D1D] dark:hover:bg-white dark:hover:text-[#1D1D1D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={14} /> Book Online via Timely
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
