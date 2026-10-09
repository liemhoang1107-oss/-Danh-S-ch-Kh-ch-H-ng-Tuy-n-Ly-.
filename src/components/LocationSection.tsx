import React, { useState } from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, Copy, Check, ExternalLink, Car, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BRAND_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="vi-tri" className="py-16 sm:py-20 bg-stone-50/80 border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Địa Điểm & Bản Đồ Đường Đi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-brand font-black text-slate-900 tracking-tight">
            Vị Trí Cơ Sở Tuyến Ly
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Tọa lạc tại trung tâm <strong>TT. Chợ Chùa, Huyện Nghĩa Hành, Quảng Ngãi</strong>. Quý khách có thể ghé thăm trực tiếp để trao đổi thực đơn, xem mẫu rạp cưới hoặc yêu cầu Chị Ly đến tận nhà khảo sát.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
              
              {/* Address Highlight */}
              <div>
                <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Địa Chỉ Trực Tiếp</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {BRAND_INFO.address}
                </div>
                {BRAND_INFO.coordinates && (
                  <div className="text-xs text-stone-500 mt-1 font-mono">
                    Tọa độ GPS: {BRAND_INFO.coordinates}
                  </div>
                )}
                
                {/* Copy Button */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer border border-stone-300"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã sao chép địa chỉ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Sao chép địa chỉ</span>
                      </>
                    )}
                  </button>

                  <a
                    href={BRAND_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 hover:bg-red-100 transition-colors border border-red-200"
                  >
                    <Navigation className="w-3.5 h-3.5 text-red-600" />
                    <span>Mở Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-red-400" />
                  </a>
                </div>
              </div>

              <hr className="border-stone-100" />

              {/* Working Hours & Scope */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs sm:text-sm">Thời gian hoạt động</div>
                    <div className="text-xs text-stone-600 mt-0.5">{BRAND_INFO.workingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs sm:text-sm">Phạm vi phục vụ lưu động</div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      Toàn huyện Nghĩa Hành, TP. Quảng Ngãi, Tư Nghĩa, Mộ Đức, Sơn Tịnh, Ba Tơ, Bình Sơn & các xã lân cận.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs sm:text-sm">Khảo sát & thử món tận nơi</div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      Chị Ly trực tiếp đến tận nhà khảo sát khuôn viên dựng rạp, sắp xếp bàn ghế và tư vấn món ăn hợp khẩu vị hai họ.
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-stone-100" />

              {/* Direct Hotlines */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Liên hệ nhanh</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${BRAND_INFO.hotline1Raw}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-rose-50/80 hover:bg-rose-100 border border-rose-200 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-stone-500 font-semibold truncate">Hotline Chị Ly</div>
                      <div className="text-xs font-bold text-red-800 truncate">{BRAND_INFO.hotline1}</div>
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50/80 hover:bg-blue-100 border border-blue-200 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-stone-500 font-semibold truncate">Chat Zalo riêng</div>
                      <div className="text-xs font-bold text-blue-800 truncate">Zalo Chị Ly</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-2xl p-5 text-white shadow-md flex items-center justify-between gap-4">
              <div>
                <div className="font-bold text-sm sm:text-base">Cần khảo sát mặt bằng tại gia?</div>
                <div className="text-xs text-rose-100 mt-0.5">Đặt lịch ngay để Chị Ly ghé tư vấn miễn phí tận nhà.</div>
              </div>
              <button
                onClick={onOpenBooking}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-white text-red-700 hover:bg-amber-50 font-bold text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                Đặt Lịch Hẹn
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col flex-1">
              
              {/* Map Bar Header */}
              <div className="bg-stone-100/90 px-4 sm:px-6 py-3 border-b border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Bản Đồ Vệ Tinh & Chỉ Đường Google Maps
                  </span>
                </div>
                <a
                  href={BRAND_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800 hover:underline"
                >
                  <span>Xem trên ứng dụng</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Map Embed Container */}
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-stone-100">
                <iframe
                  src={BRAND_INFO.mapEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Vị trí Cơ Sở Cưới Hỏi & Nấu Ăn Tuyến Ly trên Google Maps"
                />
              </div>

              {/* Map Footer Note */}
              <div className="p-3.5 sm:p-4 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dễ dàng phóng to, thu nhỏ và định vị lộ trình di chuyển từ vị trí của bạn.</span>
                </div>
                <div className="font-medium text-stone-600">
                  Phú Vinh Đông, TT. Chợ Chùa, Nghĩa Hành
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
