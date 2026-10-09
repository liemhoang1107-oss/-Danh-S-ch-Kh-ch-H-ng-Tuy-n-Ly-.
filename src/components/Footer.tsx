import React from 'react';
import { Phone, MapPin, Clock, Heart, Award, ArrowUp, Calendar, Utensils } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-red-500 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-white/20">
                  <span className="font-brand font-bold text-lg text-amber-400">TL</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-400 block">
                  Cơ Sở Cưới Hỏi & Nấu Ăn
                </span>
                <span className="text-2xl font-brand font-black text-white">
                  TUYẾN LY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong>{BRAND_INFO.fullName}</strong>. Với phương châm <em>“Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc”</em>, chúng tôi tự hào đồng hành cùng hàng nghìn gia đình tại Nghĩa Hành và tỉnh Quảng Ngãi trong những ngày trọng đại nhất.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Đại diện:</strong> {BRAND_INFO.owner}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Địa chỉ:</strong> {BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Thời gian phục vụ:</strong> {BRAND_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-800">
              Dịch Vụ Cung Cấp
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li 
                onClick={() => onNavigateSection('thuc-don')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Nấu ăn tiệc cưới, hỏi, tân gia</span>
              </li>
              <li 
                onClick={() => onNavigateSection('thuc-don')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Tiệc thôi nôi, sinh nhật, giỗ chạp</span>
              </li>
              <li 
                onClick={() => onNavigateSection('cuoi-hoi')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Rạp cưới nhung đỏ & xanh ngọc</span>
              </li>
              <li 
                onClick={() => onNavigateSection('cuoi-hoi')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Cổng hoa cưới & Trang trí gia tiên</span>
              </li>
              <li 
                onClick={() => onNavigateSection('xe-du-lich')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Xe hoa rước dâu 4 chỗ đời mới</span>
              </li>
              <li 
                onClick={() => onNavigateSection('xe-du-lich')}
                className="hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>✦ Xe 7 - 16 - 29 - 45 chỗ đưa đón hai họ</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Quick Action (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-800">
              Hotline Tư Vấn Trực Tiếp
            </h4>
            <p className="text-xs text-slate-400">
              Quý khách có nhu cầu đặt tiệc hoặc xem ngày, vui lòng liên hệ ngay để Chị Ly tư vấn thực đơn phù hợp nhất:
            </p>

            <div className="space-y-2">
              <a
                href={`tel:${BRAND_INFO.hotline1Raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 hover:border-red-500 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-400 font-semibold">Hotline Chị Ly (Chủ Cơ Sở):</div>
                  <div className="text-lg font-black text-white">{BRAND_INFO.hotline1}</div>
                </div>
              </a>

              <a
                href={`tel:${BRAND_INFO.hotline2Raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 hover:border-red-500 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-400 font-semibold">Hotline Xe & Rạp Cưới:</div>
                  <div className="text-lg font-black text-white">{BRAND_INFO.hotline2}</div>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>ĐẶT TIỆC & BÁO GIÁ NGAY</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong>Cơ Sở Nấu Ăn Tuyến Ly</strong> (Chị Ly - TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi). Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
