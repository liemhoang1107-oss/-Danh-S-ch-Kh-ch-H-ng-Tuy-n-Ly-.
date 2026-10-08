import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating Right Widget */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3 items-end">
        {/* Zalo Chat Button */}
        <a
          href={BRAND_INFO.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0068ff] text-white shadow-xl hover:bg-[#0055d4] transition-all duration-300 hover:scale-105"
          title="Chat Zalo với Chị Ly"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-wide">Zalo Chị Ly</span>
        </a>

        {/* Hotline 1 Button */}
        <a
          href={`tel:${BRAND_INFO.hotline1Raw}`}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-105 border border-red-300/40"
          title="Gọi Hotline Chị Ly"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            <Phone className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="text-left">
            <div className="text-[10px] text-amber-200 font-bold uppercase leading-none">Hotline Chị Ly:</div>
            <div className="text-sm font-black text-white leading-tight">{BRAND_INFO.hotline1}</div>
          </div>
        </a>

        {/* Booking CTA Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider shadow-2xl hover:from-amber-300 hover:to-yellow-300 transition-all duration-300 hover:scale-105 border-2 border-yellow-200 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>ĐẶT TIỆC NGAY</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1c0205]/95 backdrop-blur-md border-t border-amber-500/40 p-2 shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Hotline 1 */}
          <a
            href={`tel:${BRAND_INFO.hotline1Raw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-red-700 to-red-800 text-white text-center border border-red-400/40 shadow active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-amber-300 animate-pulse mb-0.5" />
            <span className="text-[10px] font-black uppercase text-amber-200 leading-tight">Gọi Chị Ly</span>
            <span className="text-[9px] font-semibold text-white truncate max-w-full">{BRAND_INFO.hotline1}</span>
          </a>

          {/* Zalo */}
          <a
            href={BRAND_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0068ff] text-white text-center shadow active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[10px] font-black uppercase leading-tight">Nhắn Zalo</span>
            <span className="text-[9px] text-blue-100">Tư vấn menu</span>
          </a>

          {/* Book Now */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-amber-400 to-yellow-500 text-stone-950 text-center font-black shadow active:scale-95 transition-transform border border-amber-200"
          >
            <Calendar className="w-4 h-4 text-stone-950 mb-0.5" />
            <span className="text-[10px] font-black uppercase leading-tight">Đặt Tiệc</span>
            <span className="text-[9px] font-bold text-stone-900">Báo giá ngay</span>
          </button>
        </div>
      </div>
    </>
  );
};
