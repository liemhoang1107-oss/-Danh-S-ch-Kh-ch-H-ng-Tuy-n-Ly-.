import React, { useState } from 'react';
import { Phone, ArrowRight, Sparkles, MapPin, CheckCircle2, ChevronRight, Award, Flame, Heart } from 'lucide-react';
import { BRAND_INFO, POSTER_FEATURED_DISHES, DishItem } from '../data/cateringData';

interface HeroPosterSectionProps {
  onOpenBooking: () => void;
  onSelectDishModal: (dish: DishItem) => void;
  onGoToCalculator: () => void;
}

export const HeroPosterSection: React.FC<HeroPosterSectionProps> = ({
  onOpenBooking,
  onSelectDishModal,
  onGoToCalculator,
}) => {
  const [selectedPreviewTab, setSelectedPreviewTab] = useState<'all' | 'rap' | 'amthuc'>('all');

  const column1Dishes = [
    { name: 'Khai vị ngũ sắc / Tứ quý', id: 'khai-vi-ngu-sac' },
    { name: 'Gà bó xôi / Gà lên mâm', id: 'ga-bo-xoi' },
    { name: 'Bò nhúng dấm / Bò tái', id: 'bo-nhung-dam' },
    { name: 'Lagu bò + Bánh mì', id: 'lagu-bo' },
    { name: 'Lẩu hải sản / Lẩu cá bớp + Bún', id: 'lau-hai-san' },
    { name: 'Tráng miệng trái cây', id: 'trang-mieng-trai-cay' },
  ];

  const column2Dishes = [
    { name: 'Căn bi hỷ', id: 'can-bi-hy' },
    { name: 'Gỏi sing sảm', id: 'goi-sing-sam' },
    { name: 'Gỏi ngó sen tôm', id: 'goi-ngo-sen-tom' },
    { name: 'Gỏi hoa chuối', id: 'goi-hoa-chuoi' },
  ];

  const handleDishClick = (dishId: string) => {
    const found = POSTER_FEATURED_DISHES.find((d) => d.id === dishId);
    if (found) {
      onSelectDishModal(found);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-stone-50 to-white pt-6 pb-16 lg:py-16 text-slate-800">
      {/* Subtle festive background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-amber-400 animate-sparkle" />
        <div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-red-400 animate-sparkle" />
        <div className="absolute top-1/3 left-12 w-2 h-2 rounded-full bg-amber-500 animate-sparkle" />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-rose-400 animate-sparkle" />
        <div className="absolute top-16 right-20 w-2.5 h-2.5 rounded-full bg-amber-400 animate-sparkle" />
        <div className="absolute bottom-32 right-1/4 w-3 h-3 rounded-full bg-red-300 animate-sparkle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container - Replicating Poster with Luxury High-Contrast Style */}
        <div className="relative rounded-2xl lg:rounded-3xl p-5 sm:p-7 lg:p-9 bg-gradient-to-br from-[#800d1d] via-[#a31526] to-[#670914] text-white border-2 border-amber-400/80 shadow-[0_20px_50px_rgba(163,21,38,0.25)]">
          {/* Top Gold Corner Accents */}
          <div className="absolute top-2.5 left-2.5 w-8 h-8 border-t-2 border-l-2 border-amber-300 rounded-tl pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-8 h-8 border-t-2 border-r-2 border-amber-300 rounded-tr pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-8 h-8 border-b-2 border-l-2 border-amber-300 rounded-bl pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-8 h-8 border-b-2 border-r-2 border-amber-300 rounded-br pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT COLUMN: Identity, Owner Badge, Brand, Contact & Detailed Menu Board */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              {/* Header Title with Owner Portrait & 3D Brand */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-1 text-center sm:text-left">
                
                {/* Chị Ly - Owner Avatar Badge */}
                <div className="relative flex flex-col items-center shrink-0">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-100 bg-red-950">
                      <img 
                        src="https://i.ibb.co/5WkSQ965/IMG-5866.jpg" 
                        alt="Chị Ly – Chủ cơ sở Tuyến Ly"
                        className="w-full h-full object-cover object-top filter contrast-105"
                      />
                    </div>
                  </div>
                  {/* Emerald Ribbon Badge */}
                  <div className="relative -mt-3.5 z-10 px-3.5 py-1 rounded-md bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 border border-amber-300 text-amber-100 text-xs sm:text-sm font-bold shadow-md tracking-wide text-center">
                    Chị Ly – Chủ Cơ Sở
                  </div>
                </div>

                {/* Brand Titles */}
                <div className="flex-1">
                  <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-amber-200 leading-snug drop-shadow-sm">
                    DỊCH VỤ NẤU ĂN - XE DU LỊCH - CƯỚI HỎI TRỌN GÓI
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-brand font-black tracking-wider text-amber-300 py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    TUYẾN LY
                  </h1>

                  <div className="text-base sm:text-lg md:text-xl italic font-semibold text-rose-100 tracking-wide">
                    Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc
                  </div>
                </div>
              </div>

              {/* Hotline & Address Ribbon */}
              <div className="rounded-xl p-3 sm:p-4 bg-black/35 border border-amber-300/40 backdrop-blur-sm shadow-inner">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-300 shrink-0 animate-pulse" />
                    <div>
                      <span className="text-xs uppercase text-amber-200 font-bold tracking-wider mr-2">Hotline:</span>
                      <a href={`tel:${BRAND_INFO.hotline1Raw}`} className="text-base sm:text-lg font-black text-amber-300 hover:text-white transition-colors">
                        {BRAND_INFO.hotline1}
                      </a>
                      <span className="text-amber-300 mx-2 font-bold">–</span>
                      <a href={`tel:${BRAND_INFO.hotline2Raw}`} className="text-base sm:text-lg font-black text-amber-300 hover:text-white transition-colors">
                        {BRAND_INFO.hotline2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-white/15 flex items-center gap-2 text-xs sm:text-sm text-rose-100 justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                  <span><strong>Địa chỉ:</strong> Phù Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi</span>
                </div>
              </div>

              {/* THỰC ĐƠN TIỆC ĐA DẠNG (Signature Framed Menu Board) */}
              <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#3a090e] via-[#2a060a] to-[#1c0407] border-2 border-[#e6b349] shadow-2xl">
                {/* Inner Gold Inset Line */}
                <div className="absolute inset-1.5 border border-[#ffd54f]/30 rounded-xl pointer-events-none" />

                {/* Top Badge Title */}
                <div className="relative flex justify-center -mt-8 sm:-mt-9 mb-3">
                  <div className="px-6 sm:px-8 py-1.5 rounded-full bg-gradient-to-r from-red-800 via-rose-700 to-red-800 border-2 border-amber-300 shadow-md">
                    <span className="font-bold tracking-wider text-sm sm:text-base md:text-lg text-amber-200 uppercase drop-shadow">
                      THỰC ĐƠN TIỆC ĐA DẠNG
                    </span>
                  </div>
                </div>

                {/* 2 Columns of Dishes */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 relative z-10 text-white text-sm sm:text-base font-semibold py-1">
                  {/* Column 1 (6 items) */}
                  <div className="sm:col-span-7 space-y-2">
                    {column1Dishes.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleDishClick(item.id)}
                        className="w-full flex items-center gap-2 text-left group hover:text-amber-300 transition-colors p-1.5 rounded hover:bg-white/10 cursor-pointer"
                      >
                        <span className="text-amber-400 font-bold text-base group-hover:scale-125 transition-transform">+</span>
                        <span className="font-medium text-xs sm:text-sm md:text-[15px] group-hover:translate-x-1 transition-transform">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Column 2 (4 items) */}
                  <div className="sm:col-span-5 space-y-2 sm:border-l sm:border-amber-400/30 sm:pl-4">
                    {column2Dishes.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleDishClick(item.id)}
                        className="w-full flex items-center gap-2 text-left group hover:text-amber-300 transition-colors p-1.5 rounded hover:bg-white/10 cursor-pointer"
                      >
                        <span className="text-amber-400 font-bold text-base group-hover:scale-125 transition-transform">+</span>
                        <span className="font-medium text-xs sm:text-sm md:text-[15px] group-hover:translate-x-1 transition-transform">
                          {item.name}
                        </span>
                      </button>
                    ))}

                    <div className="hidden sm:block pt-3 text-[11px] text-amber-200/80 italic leading-relaxed">
                      * Nhấp vào từng món để xem hình ảnh và mô tả chi tiết!
                    </div>
                  </div>
                </div>

                {/* Call-To-Action Buttons */}
                <div className="mt-5 pt-3 border-t border-amber-400/30 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-7 py-3 rounded-full font-black text-sm sm:text-base uppercase tracking-wider text-red-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-200 hover:to-yellow-200 border-2 border-yellow-100 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>ĐẶT TIỆC & BÁO GIÁ NGAY</span>
                    <ArrowRight className="w-5 h-5 text-red-950 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onGoToCalculator}
                    className="w-full sm:w-auto px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-amber-200 bg-black/40 hover:bg-black/60 border border-amber-300/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Tự Tính Báo Giá Bàn Tiệc</span>
                    <ChevronRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Realistic Photographic Collage matching the Poster */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              
              {/* Filter tabs */}
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <span className="text-rose-200 text-[11px] mr-1 hidden sm:inline">Hình ảnh thực tế:</span>
                <button
                  onClick={() => setSelectedPreviewTab('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedPreviewTab === 'all'
                      ? 'bg-amber-300 text-stone-900 font-bold shadow'
                      : 'bg-black/40 text-stone-200 hover:text-white'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setSelectedPreviewTab('rap')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedPreviewTab === 'rap'
                      ? 'bg-amber-300 text-stone-900 font-bold shadow'
                      : 'bg-black/40 text-stone-200 hover:text-white'
                  }`}
                >
                  Rạp Cưới & Cổng Hoa
                </button>
                <button
                  onClick={() => setSelectedPreviewTab('amthuc')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedPreviewTab === 'amthuc'
                      ? 'bg-amber-300 text-stone-900 font-bold shadow'
                      : 'bg-black/40 text-stone-200 hover:text-white'
                  }`}
                >
                  Món Tiệc Thực Tế
                </button>
              </div>

              {/* Photo Collage Grid */}
              <div className="relative rounded-2xl p-2.5 bg-black/40 border border-amber-300/40 shadow-2xl backdrop-blur-sm">
                
                {/* 1. Top Row: Red Velvet Wedding Tent & Emerald Green Wedding Tent */}
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  
                  {/* Photo 1: Rạp nhung đỏ Khang Long Thùy Duyên sang trọng */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[3/4] bg-stone-900">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                      alt="Rạp cưới nhung đỏ sang trọng Tuyến Ly"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-700 text-white uppercase tracking-wider border border-red-300">
                        Nhung Đỏ Hoàng Gia
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <p className="text-xs font-bold text-amber-200 leading-tight">
                        Rạp Cưới Đỏ Nhung Lộng Lẫy
                      </p>
                      <p className="text-[10px] text-stone-300">Hoa tươi & bàn ghế Tiffany</p>
                    </div>
                  </div>

                  {/* Photo 2: Cổng rạp cưới vòm xanh ngọc emerald "Lễ Vu Quy" */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[3/4] bg-stone-900">
                    <img
                      src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80"
                      alt="Cổng cưới rạp xanh ngọc lục bảo Lễ Vu Quy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-800 text-emerald-100 uppercase tracking-wider border border-emerald-400">
                        Lễ Vu Quy
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <p className="text-xs font-bold text-amber-200 leading-tight">
                        Cổng Vòm Hoa Xanh Ngọc
                      </p>
                      <p className="text-[10px] text-stone-300">Đèn chùm pha lê cao cấp</p>
                    </div>
                  </div>
                </div>

                {/* 2. Middle Row: Sân Khấu Gia Tiên */}
                <div className="relative mb-2.5 rounded-xl overflow-hidden border border-amber-400/50 bg-black/60 p-2 flex items-center gap-3">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-amber-300 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80"
                      alt="Sân khấu cưới đèn chùm quạt giấy nghệ thuật"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sân Khấu Lễ Gia Tiên & Đèn Chùm Pha Lê</span>
                    </div>
                    <p className="text-[11px] text-rose-100/90 mt-0.5 leading-snug">
                      Bài trí phong cách tân cổ điển, hoa tươi thơm ngát, quạt giấy phong thủy sum vầy phúc lộc.
                    </p>
                  </div>
                </div>

                {/* 3. Bottom Row: Seafood Platter & Full Banquet Table */}
                <div className="grid grid-cols-2 gap-2.5">
                  
                  {/* Photo 3: Tôm sú tươi & Cá bớp phi lê */}
                  <div 
                    onClick={() => handleDishClick('lau-hai-san')}
                    className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
                      alt="Tôm sú tươi & cá bớp phi lê"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-2 right-2 text-left">
                      <span className="text-[11px] font-bold text-amber-200 block">
                        Tôm Sú & Cá Bớp Tươi
                      </span>
                      <span className="text-[9px] text-stone-300">100% tươi sống trong ngày</span>
                    </div>
                  </div>

                  {/* Photo 4: Mâm cỗ tiệc cưới hoàn chỉnh */}
                  <div 
                    onClick={() => handleDishClick('ga-bo-xoi')}
                    className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
                      alt="Mâm cỗ tiệc cưới Tuyến Ly đầy đặn hấp dẫn"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-2 right-2 text-left">
                      <span className="text-[11px] font-bold text-amber-200 block">
                        Mâm Cỗ Tiệc Đầy Đặn
                      </span>
                      <span className="text-[9px] text-stone-300">Nóng hổi · Chuẩn vị quê hương</span>
                    </div>
                  </div>
                </div>

                {/* Subtext info under collage */}
                <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-amber-200 px-1">
                  <span>✦ Phục vụ tận nơi tại Nghĩa Hành</span>
                  <span>✦ Bao trọn gói chén đĩa & bàn ghế</span>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 3 Value Pillars Quick Bar under the main poster */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-rose-100 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Nấu Tiệc Nóng Sốt Tại Chỗ</h4>
              <p className="text-xs text-slate-500">Từ 3 bàn gia đình đến 200 bàn tiệc cưới lớn</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-rose-100 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Cưới Hỏi & Rạp Nhung Trọn Gói</h4>
              <p className="text-xs text-slate-500">Rạp nhung đỏ, xanh ngọc, gia tiên, cổng hoa đẹp</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-rose-100 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Xe Du Lịch & Rước Dâu Tuyến Ly</h4>
              <p className="text-xs text-slate-500">Xe hoa 4 chỗ đời mới, xe 7-16-29-45 chỗ đúng giờ</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
