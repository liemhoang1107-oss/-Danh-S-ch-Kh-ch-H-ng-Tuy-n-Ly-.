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
    { label: 'Vị Trí Bản Đồ', sectionId: 'vi-tri', icon: MapPin },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/95 border-b border-rose-100/80 transition-all">
      {/* 1. Top Bar: Tinh gọn 1 dòng duy nhất, trang nhã */}
      <div className="bg-gradient-to-r from-red-800 via-rose-900 to-red-800 py-1.5 px-4 text-[11px] sm:text-xs text-rose-100 border-b border-red-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Địa chỉ - click để cuộn tới bản đồ */}
          <div 
            onClick={() => handleNavClick('vi-tri')}
            className="flex items-center gap-1.5 truncate text-rose-100 hover:text-amber-200 cursor-pointer transition-colors group"
            title="Nhấn để xem bản đồ chỉ đường"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="truncate group-hover:underline">Phú Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi</span>
          </div>

          {/* Hotline & Phục vụ */}
          <div className="flex items-center gap-3 shrink-0 font-medium">
            <span className="hidden sm:inline text-amber-200/90 font-medium">Phục vụ 24/7</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-300 font-semibold">Hotline:</span>
              <a
                href={`tel:${BRAND_INFO.hotline1Raw}`}
                className="font-bold text-amber-300 hover:text-white underline decoration-amber-400"
              >
                {BRAND_INFO.hotline1}
              </a>
              <span className="text-rose-300/60 hidden md:inline">·</span>
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

      {/* 2. Main Navigation Bar: Bố cục thanh thoát, màu sắc tươi sáng sang trọng */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
          
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            {/* Avatar Badge Chị Ly */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-red-500 to-amber-500 shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border border-white bg-red-50">
                  <img
                    src="https://i.ibb.co/5WkSQ965/IMG-5866.jpg"
                    alt="Chị Ly"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-700 text-white text-[8px] font-black px-1 rounded shadow-sm border border-white leading-tight">
                Chị Ly
              </div>
            </div>

            {/* Brand Title */}
            <div className="flex flex-col justify-center leading-none">
              <div className="text-xl sm:text-2xl font-brand font-black tracking-wider text-red-700 whitespace-nowrap group-hover:text-red-800 transition-colors">
                TUYẾN LY
              </div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-stone-500 mt-0.5 whitespace-nowrap">
                Nấu Ăn · Cưới Hỏi · Xe Du Lịch
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs xl:text-sm font-semibold text-stone-700 hover:text-red-700 hover:bg-rose-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Area (Hotline & Đặt Tiệc) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Hotline Button */}
            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-50 text-red-800 border border-red-200 hover:bg-rose-100 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span>{BRAND_INFO.hotline1}</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5 whitespace-nowrap border border-red-500/30 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200 shrink-0" />
              <span>ĐẶT TIỆC NGAY</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-rose-50 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white px-4 py-3 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold text-stone-700 hover:text-red-700 hover:bg-rose-50 rounded-lg transition-colors text-left"
              >
                <Icon className="w-4 h-4 text-red-600" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2.5 border-t border-rose-100 flex flex-col gap-2">
            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-rose-50 text-red-800 border border-red-200"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Gọi Chị Ly: {BRAND_INFO.hotline1}</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.hotline2Raw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-rose-50 text-red-800 border border-red-200"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Gọi Xe & Rạp: {BRAND_INFO.hotline2}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
