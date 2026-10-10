import React, { useState } from 'react';
import { Phone, ArrowRight, Sparkles, MapPin, CheckCircle2, ChevronRight, Award, Flame, Heart, ZoomIn, Eye } from 'lucide-react';
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

  // 14 Featured Dishes balanced into 2 equal columns of 7 dishes each
  const column1Dishes = [
    { name: 'Khai vị ngũ sắc / Tứ quý', id: 'khai-vi-ngu-sac', category: 'Khai vị' },
    { name: 'Súp gà rau ngũ quả (Món mới)', id: 'sup-ga-ngu-qua', category: 'Khai vị' },
    { name: 'Gỏi sứa đặc biệt', id: 'goi-sua-dac-biet', category: 'Gỏi đặc sản' },
    { name: 'Gỏi ngó sen tôm', id: 'goi-ngo-sen-tom', category: 'Gỏi tiệc' },
    { name: 'Gỏi hoa chuối', id: 'goi-hoa-chuoi', category: 'Gỏi quê' },
    { name: 'Gà bó xôi hoàng kim', id: 'ga-bo-xoi', category: 'Món chính' },
    { name: 'Tôm sú hấp trái dừa', id: 'tom-su-hap-dua', category: 'Hải sản' },
  ];

  const column2Dishes = [
    { name: 'Bánh hỏi thịt heo quay (Món mới)', id: 'banh-hoi-heo-quay', category: 'Món chính' },
    { name: 'Bò nhúng dấm', id: 'bo-nhung-dam', category: 'Món chính' },
    { name: 'Bò tái chanh (Món mới)', id: 'bo-tai-chanh', category: 'Món chính' },
    { name: 'Lagu bò + Bánh mì', id: 'lagu-bo', category: 'Món chính' },
    { name: 'Lẩu cá bớp + Bún', id: 'lau-ca-bop', category: 'Món lẩu' },
    { name: 'Lẩu hải sản thập cẩm', id: 'lau-hai-san', category: 'Món lẩu' },
    { name: 'Tráng miệng trái cây 4 mùa', id: 'trang-mieng-trai-cay', category: 'Tráng miệng' },
  ];

  const handleDishClick = (dishId: string) => {
    const found = POSTER_FEATURED_DISHES.find((d) => d.id === dishId);
    if (found) {
      onSelectDishModal(found);
    }
  };

  const handleScrollToLocation = () => {
    const el = document.getElementById('vi-tri');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-stone-50 to-white pt-5 pb-14 lg:py-16 text-slate-800">
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
        <div className="relative rounded-2xl lg:rounded-3xl p-5 sm:p-7 lg:p-9 bg-gradient-to-br from-[#800d1d] via-[#941121] to-[#5a0610] text-white border-2 border-amber-400/80 shadow-[0_20px_50px_rgba(128,13,29,0.3)]">
          {/* Subtle Inset Gold Border */}
          <div className="absolute inset-1.5 sm:inset-2.5 border border-amber-300/30 rounded-xl lg:rounded-2xl pointer-events-none" />

          {/* Gold Corner Accents */}
          <div className="absolute top-2.5 left-2.5 w-7 h-7 border-t-2 border-l-2 border-amber-300 rounded-tl pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-7 h-7 border-t-2 border-r-2 border-amber-300 rounded-tr pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-7 h-7 border-b-2 border-l-2 border-amber-300 rounded-bl pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-7 h-7 border-b-2 border-r-2 border-amber-300 rounded-br pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center">
            {/* LEFT COLUMN: Identity, Owner Badge, Brand, Contact & Detailed Menu Board */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              
              {/* Header Title with Owner Portrait & Clean Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 pt-1 text-center sm:text-left">
                
                {/* Chị Ly - Owner Avatar Badge */}
                <div className="relative flex flex-col items-center shrink-0">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.45)]">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-100 bg-red-950">
                      <img 
                        src={BRAND_INFO.ownerAvatar} 
                        alt="Chị Ly – Chủ cơ sở Tuyến Ly"
                        className="w-full h-full object-cover object-top filter contrast-105"
                      />
                    </div>
                  </div>
                  {/* Emerald Ribbon Badge */}
                  <div className="relative -mt-3 z-10 px-3.5 py-1 rounded-md bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 border border-amber-300 text-amber-100 text-xs sm:text-sm font-bold shadow-md tracking-wide text-center">
                    Chị Ly – Chủ Cơ Sở
                  </div>
                </div>

                {/* Brand Titles */}
                <div className="flex-1">
                  <div className="text-xs sm:text-sm md:text-[15px] font-extrabold tracking-wider uppercase text-amber-200 leading-snug drop-shadow-sm">
                    DỊCH VỤ NẤU ĂN - XE DU LỊCH - CƯỚI HỎI TRỌN GÓI
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-amber-300 py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    TUYẾN LY
                  </h1>

                  <div className="text-base sm:text-lg md:text-xl italic font-semibold text-rose-100 tracking-wide">
                    “Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc”
                  </div>
                </div>
              </div>

              {/* Hotline & Address Ribbon */}
              <div className="rounded-xl p-3 sm:p-3.5 bg-black/40 border border-amber-300/40 backdrop-blur-sm shadow-inner">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-300 shrink-0 animate-pulse" />
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

                <div 
                  onClick={handleScrollToLocation}
                  className="mt-2 pt-2 border-t border-white/15 flex items-center gap-2 text-xs sm:text-sm text-rose-100 justify-center sm:justify-start cursor-pointer hover:text-amber-200 transition-colors group"
                  title="Nhấn để xem vị trí bản đồ Google Maps"
                >
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 group-hover:scale-110 transition-transform" />
                  <span><strong>Địa chỉ:</strong> Phú Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi <span className="text-[11px] text-amber-300 underline ml-1 hidden sm:inline">(Xem bản đồ)</span></span>
                </div>
              </div>

              {/* THỰC ĐƠN TIỆC ĐA DẠNG (Signature Framed Menu Board) */}
              <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#3a090e]/95 via-[#280509]/95 to-[#1c0407]/95 border-2 border-[#e6b349] shadow-2xl">
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

                {/* 2 Symmetrical Columns of 5 Dishes Each */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 relative z-10 text-white text-sm sm:text-base font-semibold py-1">
                  {/* Column 1 (5 items) */}
                  <div className="space-y-1.5">
                    {column1Dishes.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleDishClick(item.id)}
                        className="w-full flex items-center justify-between text-left group hover:text-amber-300 transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer border border-transparent hover:border-amber-400/30"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-amber-400 font-bold text-base group-hover:scale-125 transition-transform shrink-0">+</span>
                          <span className="font-medium text-xs sm:text-sm md:text-[14px] truncate group-hover:translate-x-1 transition-transform">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-amber-200/60 font-normal shrink-0 ml-1 hidden md:inline">
                          Chi tiết
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Column 2 (5 items) */}
                  <div className="space-y-1.5 sm:border-l sm:border-amber-400/30 sm:pl-3.5">
                    {column2Dishes.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleDishClick(item.id)}
                        className="w-full flex items-center justify-between text-left group hover:text-amber-300 transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer border border-transparent hover:border-amber-400/30"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-amber-400 font-bold text-base group-hover:scale-125 transition-transform shrink-0">+</span>
                          <span className="font-medium text-xs sm:text-sm md:text-[14px] truncate group-hover:translate-x-1 transition-transform">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-amber-200/60 font-normal shrink-0 ml-1 hidden md:inline">
                          Chi tiết
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Centered Helper Note */}
                <div className="pt-2.5 text-center text-[11px] text-amber-200/80 italic">
                  * Nhấp vào từng món để xem hình ảnh thực tế, nguyên liệu và thêm vào dự toán bàn tiệc!
                </div>

                {/* Call-To-Action Buttons */}
                <div className="mt-4 pt-3 border-t border-amber-400/30 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-7 py-2.5 sm:py-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-red-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-200 hover:to-yellow-200 border-2 border-yellow-100 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>ĐẶT TIỆC & BÁO GIÁ NGAY</span>
                    <ArrowRight className="w-4 h-4 text-red-950 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onGoToCalculator}
                    className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-amber-200 bg-black/40 hover:bg-black/60 border border-amber-300/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Tự Tính Báo Giá Bàn Tiệc</span>
                    <ChevronRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Realistic Photographic Collage matching the Poster */}
            <div className="lg:col-span-5 flex flex-col space-y-3.5">
              
              {/* Filter tabs */}
              <div className="flex items-center justify-between sm:justify-end gap-1.5 text-xs">
                <span className="text-amber-200 text-[11px] mr-1 hidden sm:inline font-semibold">Hình ảnh thực tế:</span>
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-amber-400/30">
                  <button
                    onClick={() => setSelectedPreviewTab('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedPreviewTab === 'all'
                        ? 'bg-amber-300 text-stone-900 font-bold shadow'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Tất cả
                  </button>
                  <button
                    onClick={() => setSelectedPreviewTab('rap')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedPreviewTab === 'rap'
                        ? 'bg-amber-300 text-stone-900 font-bold shadow'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Rạp Cưới & Cổng
                  </button>
                  <button
                    onClick={() => setSelectedPreviewTab('amthuc')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedPreviewTab === 'amthuc'
                        ? 'bg-amber-300 text-stone-900 font-bold shadow'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Món Tiệc (12 Món Thật)
                  </button>
                </div>
              </div>

              {/* Photo Collage Grid */}
              <div className="relative rounded-2xl p-2.5 bg-black/40 border border-amber-300/40 shadow-2xl backdrop-blur-sm">
                
                {/* 1. View: ALL (Curated Mix of Wedding Tent + Stage + Dishes) */}
                {selectedPreviewTab === 'all' && (
                  <div className="space-y-2.5">
                    {/* Top Row: Red Velvet Wedding Tent & Emerald Green Wedding Tent */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {/* Photo 1: Rạp nhung đỏ */}
                      <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
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
                          <p className="text-[10px] text-stone-300">Bàn ghế Tiffany & hoa tươi</p>
                        </div>
                      </div>

                      {/* Photo 2: Cổng rạp cưới vòm xanh ngọc emerald "Lễ Vu Quy" */}
                      <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
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

                    {/* Middle Row: Sân Khấu Gia Tiên */}
                    <div className="relative rounded-xl overflow-hidden border border-amber-400/50 bg-black/60 p-2 flex items-center gap-3">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-amber-300 shadow-md">
                        <img
                          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80"
                          alt="Sân khấu cưới đèn chùm quạt giấy nghệ thuật"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold truncate">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span>Sân Khấu Lễ Gia Tiên & Đèn Chùm Pha Lê</span>
                        </div>
                        <p className="text-[11px] text-rose-100/90 mt-0.5 leading-snug line-clamp-2">
                          Bài trí phong cách tân cổ điển, hoa tươi thơm ngát, quạt giấy phong thủy sum vầy phúc lộc.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Seafood Platter & Full Banquet Table */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {/* Photo 3: Lẩu cá bớp */}
                      <div 
                        onClick={() => handleDishClick('lau-ca-bop')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết món Lẩu cá bớp"
                      >
                        <img
                          src="https://i.ibb.co/G40r8ysk/IMG-5906.jpg"
                          alt="Lẩu cá bớp Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] font-bold text-amber-200 block truncate">
                            Lẩu Cá Bớp
                          </span>
                          <span className="text-[9px] text-stone-300">Tươi sống nóng sốt</span>
                        </div>
                      </div>

                      {/* Photo 4: Gà bó xôi */}
                      <div 
                        onClick={() => handleDishClick('ga-bo-xoi')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết món Gà bó xôi"
                      >
                        <img
                          src="https://i.ibb.co/5xh5LPL6/IMG-5908.jpg"
                          alt="Gà bó xôi hoàng kim Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] font-bold text-amber-200 block truncate">
                            Gà Bó Xôi Hoàng Kim
                          </span>
                          <span className="text-[9px] text-stone-300">Giòn rụm · Đậm đà</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. View: RẠP CƯỚI & CỔNG HOA */}
                {selectedPreviewTab === 'rap' && (
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Item 1 */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
                      <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                        alt="Rạp nhung đỏ Khang Long Thùy Duyên"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-left">
                        <span className="text-xs font-bold text-amber-200 block">Rạp Nhung Đỏ Hoàng Gia</span>
                        <span className="text-[10px] text-stone-300">Vải nhung tuyết cao cấp</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
                      <img
                        src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80"
                        alt="Cổng cưới xanh ngọc lục bảo"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-left">
                        <span className="text-xs font-bold text-amber-200 block">Cổng Hoa Xanh Ngọc Lục Bảo</span>
                        <span className="text-[10px] text-stone-300">Vòm hoa tươi nghệ thuật</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
                      <img
                        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80"
                        alt="Sân khấu lễ gia tiên"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-left">
                        <span className="text-xs font-bold text-amber-200 block">Sân Khấu Gia Tiên Phúc Lộc</span>
                        <span className="text-[10px] text-stone-300">Quạt giấy & đèn chùm</span>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900">
                      <img
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
                        alt="Bàn ghế Tiffany tiệc cưới"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-left">
                        <span className="text-xs font-bold text-amber-200 block">Bàn Ghế Tiffany Sang Trọng</span>
                        <span className="text-[10px] text-stone-300">Khăn trải bàn & nơ hoa</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. View: MÓN TIỆC THỰC TẾ (12 Món thật theo hình ảnh thực tế của Chị Ly Tuyến Ly) */}
                {selectedPreviewTab === 'amthuc' && (
                  <div>
                    <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-amber-400/20 text-xs px-0.5">
                      <span className="text-amber-200 font-bold flex items-center gap-1.5 text-xs sm:text-[13px]">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        12 Món Tiệc Thực Tế Tuyến Ly
                      </span>
                      <span className="text-[10px] text-amber-300/80 italic hidden sm:inline">Chạm để phóng to xem chi tiết</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 max-h-[380px] sm:max-h-[420px] overflow-y-auto pr-1">
                      {/* Food 1: Lẩu cá bớp */}
                      <div 
                        onClick={() => handleDishClick('lau-ca-bop')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Lẩu cá bớp"
                      >
                        <img
                          src="https://i.ibb.co/G40r8ysk/IMG-5906.jpg"
                          alt="Lẩu cá bớp Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Lẩu Cá Bớp</span>
                          <span className="text-[9px] text-stone-300">Nóng hổi · Chua cay</span>
                        </div>
                      </div>

                      {/* Food 2: Tôm Sú */}
                      <div 
                        onClick={() => handleDishClick('tom-su-hap-dua')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Tôm Sú"
                      >
                        <img
                          src="https://i.ibb.co/LMdGh7F/IMG-5907.jpg"
                          alt="Tôm Sú Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Tôm Sú Hấp Dừa</span>
                          <span className="text-[9px] text-stone-300">Tươi ngọt · Đỏ au</span>
                        </div>
                      </div>

                      {/* Food 3: Gà bó xôi */}
                      <div 
                        onClick={() => handleDishClick('ga-bo-xoi')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Gà bó xôi"
                      >
                        <img
                          src="https://i.ibb.co/5xh5LPL6/IMG-5908.jpg"
                          alt="Gà bó xôi Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Gà Bó Xôi Hoàng Kim</span>
                          <span className="text-[9px] text-stone-300">Xôi giòn · Gà ngọt thịt</span>
                        </div>
                      </div>

                      {/* Food 4: Khai vị ngũ sắc */}
                      <div 
                        onClick={() => handleDishClick('khai-vi-ngu-sac')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Khai vị ngũ sắc"
                      >
                        <img
                          src="https://i.ibb.co/pr6mjSCT/IMG-5910.jpg"
                          alt="Khai vị ngũ sắc Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Khai Vị Ngũ Sắc</span>
                          <span className="text-[9px] text-stone-300">Mâm tiệc 5 món tinh tế</span>
                        </div>
                      </div>

                      {/* Food 5: Bò tái chanh */}
                      <div 
                        onClick={() => handleDishClick('bo-tai-chanh')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Bò tái chanh"
                      >
                        <img
                          src="https://i.ibb.co/21MLL88p/IMG-5911.jpg"
                          alt="Bò tái chanh Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Bò Tái Chanh</span>
                          <span className="text-[9px] text-stone-300">Mềm ngọt · Chua thanh mát</span>
                        </div>
                      </div>

                      {/* Food 6: Bò nhúng dấm */}
                      <div 
                        onClick={() => handleDishClick('bo-nhung-dam')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Bò nhúng dấm"
                      >
                        <img
                          src="https://i.ibb.co/5X3T0Gxr/IMG-5912.jpg"
                          alt="Bò nhúng dấm Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Bò Nhúng Dấm</span>
                          <span className="text-[9px] text-stone-300">Cuốn bánh tráng mắm nêm</span>
                        </div>
                      </div>

                      {/* Food 7: Lagu bò + Bánh mì */}
                      <div 
                        onClick={() => handleDishClick('lagu-bo')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Lagu bò + Bánh mì"
                      >
                        <img
                          src="https://i.ibb.co/bGqt6BG/IMG-5913.jpg"
                          alt="Lagu bò bánh mì Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Lagu Bò + Bánh Mì</span>
                          <span className="text-[9px] text-stone-300">Bò hầm mềm · Bánh mì giòn</span>
                        </div>
                      </div>

                      {/* Food 8: Gỏi sứa đặc biệt */}
                      <div 
                        onClick={() => handleDishClick('goi-sua-dac-biet')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Gỏi sứa đặc biệt"
                      >
                        <img
                          src="https://i.ibb.co/XMh6t7Z/IMG-5914.jpg"
                          alt="Gỏi sứa đặc biệt Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Gỏi Sứa Đặc Biệt</span>
                          <span className="text-[9px] text-stone-300">Giòn sần sật · Chua cay</span>
                        </div>
                      </div>

                      {/* Food 9: Gỏi ngó sen tôm */}
                      <div 
                        onClick={() => handleDishClick('goi-ngo-sen-tom')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Gỏi ngó sen tôm"
                      >
                        <img
                          src="https://i.ibb.co/gZCcff0v/IMG-5916.jpg"
                          alt="Gỏi ngó sen tôm Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Gỏi Ngó Sen Tôm</span>
                          <span className="text-[9px] text-stone-300">Trắng giòn · Tôm sú ngọt</span>
                        </div>
                      </div>

                      {/* Food 10: Gỏi hoa chuối */}
                      <div 
                        onClick={() => handleDishClick('goi-hoa-chuoi')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Gỏi hoa chuối"
                      >
                        <img
                          src="https://i.ibb.co/Nd0Hy7TN/IMG-5917.jpg"
                          alt="Gỏi hoa chuối Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Gỏi Hoa Chuối</span>
                          <span className="text-[9px] text-stone-300">Hoa chuối giòn · Gà xé phay</span>
                        </div>
                      </div>

                      {/* Food 11: Bánh hỏi thịt heo quay */}
                      <div 
                        onClick={() => handleDishClick('banh-hoi-heo-quay')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Bánh hỏi thịt heo quay"
                      >
                        <img
                          src="https://i.ibb.co/RTR3dFV6/IMG-5918.jpg"
                          alt="Bánh hỏi thịt heo quay Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Bánh Hỏi Heo Quay</span>
                          <span className="text-[9px] text-stone-300">Da giòn rụm · Mỡ hẹ thơm nức</span>
                        </div>
                      </div>

                      {/* Food 12: Súp gà rau ngũ quả */}
                      <div 
                        onClick={() => handleDishClick('sup-ga-ngu-qua')}
                        className="relative rounded-xl overflow-hidden border-2 border-amber-300/60 shadow-lg group aspect-[4/3] bg-stone-900 cursor-pointer"
                        title="Xem chi tiết Súp gà rau ngũ quả"
                      >
                        <img
                          src="https://i.ibb.co/0VVSsn6p/IMG-5920.webp"
                          alt="Súp gà rau ngũ quả Tuyến Ly"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-amber-300">
                          <Eye className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1.5 left-2 right-2 text-left">
                          <span className="text-[11px] sm:text-xs font-bold text-amber-200 block truncate">Súp Gà Rau Ngũ Quả</span>
                          <span className="text-[9px] text-stone-300">Nóng hổi sánh mịn · Thanh ngọt</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
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
