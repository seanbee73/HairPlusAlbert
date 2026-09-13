import React from 'react';
import { Phone, MapPin, Clock, Navigation, Scissors, Star, Lock, Newspaper } from 'lucide-react';
import { BRAND_DATA, FOOTER_DATA, HOURS_AND_LOCATION } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAdmin, isAdmin = false }) => {
  return (
    <footer id="footer" className="bg-[#141414] dark:bg-black text-[#FAF9F6] pt-20 pb-12 border-t border-white/10 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FAF9F6] text-[#1D1D1D] flex items-center justify-center font-bold text-xs">
                {BRAND_DATA.logoInitials}
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white font-normal leading-tight">
                  {BRAND_DATA.name.toUpperCase()}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#9A8C73] font-semibold">
                  {BRAND_DATA.tag}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm max-w-md leading-relaxed mb-6 font-normal">
              {FOOTER_DATA.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                id="footer-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#9A8C73] text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#1D1D1D] transition-colors rounded-none cursor-pointer"
              >
                Book Appointment
              </button>
              <a
                id="footer-call-btn"
                href={BRAND_DATA.phoneTel}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] hover:border-[#9A8C73] hover:text-[#9A8C73] transition-colors rounded-none"
              >
                <Phone size={12} /> {BRAND_DATA.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs text-white/80 font-normal">
              <li>
                <a href="#heritage" className="hover:text-[#9A8C73] transition-colors">
                  The Heritage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9A8C73] transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#craftsmen" className="hover:text-[#9A8C73] transition-colors">
                  Stylists & Barbers
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#9A8C73] transition-colors">
                  Client Reviews (4.2 ★)
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#9A8C73] transition-colors">
                  Style Archive
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#9A8C73] transition-colors">
                  Journal & News
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#9A8C73] transition-colors">
                  Hours & Location
                </a>
              </li>
              {/* ADMIN LOGIN */}
              <li className="pt-1">
                <button
                  id="admin-login-explore-btn"
                  onClick={onOpenAdmin}
                  className="hover:text-[#9A8C73] transition-colors flex items-center gap-1.5 text-left text-white/60 hover:text-white group cursor-pointer"
                >
                  <Lock size={11} className="text-[#9A8C73] group-hover:text-white transition-colors shrink-0" />
                  <span className="group-hover:underline">Admin Login</span>
                  {isAdmin && (
                    <span className="text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1 py-0.2 font-mono uppercase ml-1">
                      Active
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>

          {/* Hours Summary */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">
              Salon Hours
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex justify-between">
                <span>Daily:</span>
                <span className="font-mono text-white/90">10am – 7pm</span>
              </li>
              <li className="flex justify-between text-white/50 text-[11px] pt-1">
                <span>Parking:</span>
                <span className="font-mono">#26 & #30 Free</span>
              </li>
              <li className="flex justify-between text-[#9A8C73] text-[11px] pt-1">
                <span>Discount:</span>
                <span className="font-mono font-semibold">10% Cash Off</span>
              </li>
            </ul>
          </div>

          {/* Salon Location */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">
              Salon Location
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <p className="font-medium text-white">
                {BRAND_DATA.name} ({BRAND_DATA.shortName})
              </p>
              <p className="text-white/60">
                {BRAND_DATA.address}<br />
                {BRAND_DATA.postalCity}<br />
                <span className="text-white/40 text-[11px]">Near UW &amp; Laurier</span>
              </p>
              <div className="pt-2">
                <a
                  href={HOURS_AND_LOCATION.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#9A8C73] hover:text-white uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation size={12} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
          <p>{FOOTER_DATA.copyright}</p>
          <p>{FOOTER_DATA.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
