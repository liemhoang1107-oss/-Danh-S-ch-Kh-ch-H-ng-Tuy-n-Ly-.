import React, { useState } from 'react';
import { Sparkles, Crown, Heart, CheckCircle2, Phone, Calendar, ZoomIn, X } from 'lucide-react';
import { WEDDING_DECOR_SERVICES, BRAND_INFO } from '../data/cateringData';

interface WeddingServicesSectionProps {
  onOpenBooking: () => void;
}

export const WeddingServicesSection: React.FC<WeddingServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="cuoi-hoi" className="py-16 bg-[#1a0306] text-stone-100 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Cưới Hỏi Trọn Gói Sang Trọng</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black tracking-wide gold-text-gradient mb-3">
            Không Gian Rạp Cưới & Cổng Hoa Lộng Lẫy
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Thiết kế rạp cưới chuẩn phong cách hoàng gia với hai tông màu chủ đạo: <strong>Đỏ Nhung Quý Phái</strong> và <strong>Xanh Ngọc Lục Bảo Hiện Đại</strong>. Tôn vinh ngày hạnh phúc lứa đôi trọn vẹn từng khoảnh khắc.
          </p>
        </div>

        {/* 3 Core Decor Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WEDDING_DECOR_SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#2e050b] to-[#1c0205] border border-amber-500/30 hover:border-amber-400 shadow-2xl flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Banner Image with Zoom on click */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-stone-900 cursor-pointer"
                  onClick={() => setSelectedImage(service.bannerImg)}
                >
                  <img
                    src={service.bannerImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0205] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-amber-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif-display font-bold text-lg sm:text-xl text-amber-100 group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-300/90 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-amber-500/15">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Mini Previews */}
              <div className="p-5 pt-0">
                <div className="text-[11px] font-semibold text-amber-300/90 mb-2">
                  Chi tiết hình ảnh thực tế:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {service.gallery.map((gItem, gIdx) => (
                    <div
                      key={gIdx}
                      onClick={() => setSelectedImage(gItem.img)}
                      className="relative rounded-lg overflow-hidden aspect-video bg-stone-800 border border-amber-400/30 cursor-pointer hover:border-amber-300 group/img"
                    >
                      <img
                        src={gItem.img}
                        alt={gItem.title}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-amber-500/15">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2 px-3 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tư vấn đặt rạp & giữ ngày</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Banner: Full Package Promise */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#3e070e] via-[#540913] to-[#3e070e] border-2 border-amber-400/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-amber-200">
              Ưu Đãi Trọn Gói: NẤU TIỆC + RẠP CƯỚI + XE RƯỚC DÂU
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 max-w-2xl">
              Giảm trực tiếp đến 800.000đ khi đặt trọn gói tiệc và rạp cưới Tuyến Ly. Tặng tháp ly champagne, bánh kem cưới và pháo hoa kim tuyến chúc mừng!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 hover:from-amber-200 hover:to-yellow-300 shadow-lg"
            >
              Nhận Ưu Đãi Ngay
            </button>
            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm border border-amber-400/50 text-amber-300 hover:bg-amber-500/15"
            >
              {BRAND_INFO.hotline1}
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 p-2"
              title="Đóng"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Hình ảnh thực tế rạp cưới Tuyến Ly"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl border-2 border-amber-400/60 shadow-2xl"
            />
            <div className="mt-3 text-center text-xs text-amber-300">
              Dịch Vụ Cưới Hỏi & Rạp Cưới Trọn Gói TUYẾN LY - TT. Chợ Chùa, Nghĩa Hành
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
