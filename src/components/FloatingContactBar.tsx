import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating Right Widget - Sleek, Non-intrusive, Compact */}
      <aside aria-label="Liên hệ nhanh" className="hidden lg:flex fixed bottom-5 right-5 z-40 flex-col gap-2 items-end">
        {/* Zalo Chat Button */}
        <a
          href={BRAND_INFO.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0068ff] text-white shadow-md hover:bg-[#0055d4] transition-all duration-300 hover:scale-105"
          title="Chat Zalo với Chị Ly"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-wide">Zalo Chị Ly</span>
        </a>

        {/* Hotline 1 Button */}
        <a
          href={`tel:${BRAND_INFO.hotline1Raw}`}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md hover:from-red-700 hover:to-rose-700 transition-all duration-300 hover:scale-105 border border-red-500/50"
          title="Gọi Hotline Chị Ly"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <Phone className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-black text-white">{BRAND_INFO.hotline1}</span>
        </a>

        {/* Booking CTA Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:from-amber-300 hover:to-yellow-300 transition-all duration-300 hover:scale-105 border border-amber-300 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-950" />
          <span>ĐẶT TIỆC NGAY</span>
        </button>
      </aside>

      {/* Mobile Sticky Bottom Bar - Compact & Clean */}
      <nav aria-label="Thanh điều hướng nhanh di động" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200/80 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
          {/* Call Hotline 1 */}
          <a
            href={`tel:${BRAND_INFO.hotline1Raw}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-b from-red-600 to-rose-700 text-white text-center shadow-xs active:scale-95 transition-transform"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300 animate-pulse mb-0.5" />
            <span className="text-[10px] font-black uppercase text-amber-200 leading-tight">Gọi Chị Ly</span>
            <span className="text-[9px] font-semibold text-white truncate max-w-full">{BRAND_INFO.hotline1}</span>
          </a>

          {/* Zalo */}
          <a
            href={BRAND_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#0068ff] text-white text-center shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5 text-white mb-0.5" />
            <span className="text-[10px] font-black uppercase leading-tight">Nhắn Zalo</span>
            <span className="text-[9px] text-blue-100">Tư vấn menu</span>
          </a>

          {/* Book Now */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-b from-amber-400 to-yellow-400 text-slate-950 text-center font-black shadow-xs active:scale-95 transition-transform border border-amber-300"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-950 mb-0.5" />
            <span className="text-[10px] font-black uppercase leading-tight">Đặt Tiệc</span>
            <span className="text-[9px] font-bold text-slate-800">Báo giá ngay</span>
          </button>
        </div>
      </nav>
    </>
  );
};
