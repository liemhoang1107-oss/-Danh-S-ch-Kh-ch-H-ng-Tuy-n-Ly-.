import React, { useState } from 'react';
import { Phone, Calendar, Utensils, Sparkles, Car, Calculator, Heart, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Thực Đơn', sectionId: 'thuc-don', icon: Utensils },
    { label: 'Rạp Cưới', sectionId: 'cuoi-hoi', icon: Sparkles },
    { label: 'Xe Du Lịch', sectionId: 'xe-du-lich', icon: Car },
    { label: 'Dự Toán Chi Phí', sectionId: 'du-toan', icon: Calculator },
    { label: 'Về Chị Ly', sectionId: 'cam-ket', icon: Heart },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xl backdrop-blur-md bg-[#240408]/98 border-b border-amber-500/30">
      {/* 1. Top Bar: Tinh gọn 1 dòng duy nhất, không bị tràn */}
      <div className="bg-gradient-to-r from-[#38060d] via-[#540913] to-[#38060d] py-1 px-4 text-[11px] sm:text-xs text-amber-200 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Địa chỉ */}
          <div className="flex items-center gap-1.5 truncate text-stone-300">
            <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">Phù Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi</span>
          </div>

          {/* Hotline & Phục vụ */}
          <div className="flex items-center gap-3 shrink-0 font-medium">
            <span className="hidden sm:inline text-amber-300/80">Phục vụ 24/7</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 font-semibold">Hotline:</span>
              <a
                href={`tel:${BRAND_INFO.hotline1Raw}`}
                className="font-bold text-amber-300 hover:text-white underline decoration-amber-400"
              >
                {BRAND_INFO.hotline1}
              </a>
              <span className="text-amber-500/60 hidden md:inline">·</span>
              <a
                href={`tel:${BRAND_INFO.hotline2Raw}`}
                className="font-bold text-amber-300 hover:text-white underline decoration-amber-400 hidden md:inline"
              >
                {BRAND_INFO.hotline2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar: Bố cục gọn gàng, cố định chiều cao, không rớt dòng */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
          
          {/* Logo & Brand Identity (Gọn gàng, không bị vỡ chữ) */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            {/* Avatar Badge Chị Ly */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border border-amber-300/50 bg-[#3d060c]">
                  <img
                    src="https://i.ibb.co/5WkSQ965/IMG-5866.jpg"
                    alt="Chị Ly"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-800 text-amber-200 text-[8px] font-black px-1 rounded shadow border border-amber-300/60 leading-tight">
                Chị Ly
              </div>
            </div>

            {/* Brand Title */}
            <div className="flex flex-col justify-center leading-none">
              <div className="text-xl sm:text-2xl font-brand font-black tracking-wider gold-text-gradient whitespace-nowrap">
                TUYẾN LY
              </div>
              <div className="text-[9px] uppercase tracking-wider font-bold text-amber-300/85 mt-0.5 whitespace-nowrap">
                Nấu Ăn · Cưới Hỏi · Xe Du Lịch
              </div>
            </div>
          </div>

          {/* Desktop Nav Links (Ngắn gọn, vừa vặn màn hình) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-stone-200 hover:text-amber-300 hover:bg-amber-500/10 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Area (Hotline & Đặt Tiệc) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Hotline Button */}
            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#3d060c] text-amber-300 border border-amber-400/40 hover:bg-[#500810] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{BRAND_INFO.hotline1}</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-amber-400 shadow-md transition-all active:scale-95 flex items-center gap-1.5 whitespace-nowrap border border-yellow-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>ĐẶT TIỆC NGAY</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-300 hover:bg-amber-500/20 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-500/20 bg-[#250409]/98 px-4 py-3 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-stone-200 hover:text-amber-300 hover:bg-amber-500/15 rounded-lg transition-colors text-left"
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-amber-500/20 flex flex-col gap-1.5">
            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-bold bg-[#3b060d] text-amber-300 border border-amber-400/40"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Gọi Chị Ly: {BRAND_INFO.hotline1}</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.hotline2Raw}`}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-bold bg-[#3b060d] text-amber-300 border border-amber-400/40"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Gọi Xe & Rạp: {BRAND_INFO.hotline2}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
