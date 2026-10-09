import React from 'react';
import { Car, Users, CheckCircle2, Phone, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { VEHICLES_LIST, BRAND_INFO } from '../data/cateringData';

interface VehicleSectionProps {
  onOpenBooking: () => void;
}

export const VehicleSection: React.FC<VehicleSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="xe-du-lich" className="py-16 sm:py-20 bg-stone-50/80 text-slate-800 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Car className="w-3.5 h-3.5 text-red-600" />
            <span>Xe Du Lịch & Xe Hoa Tuyến Ly</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Đoàn Xe Rước Dâu & Xe Du Lịch Đời Mới
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Phục vụ xe hoa kết hoa tươi trang trọng, xe đưa rước hai họ từ 4 – 45 chỗ đời mới, êm ái, máy lạnh mát sâu. Bác tài kinh nghiệm, lịch sự, đúng giờ vàng cưới hỏi tại Nghĩa Hành và liên tỉnh.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES_LIST.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rounded-2xl overflow-hidden bg-white border border-stone-200/90 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Seats badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500 text-white shadow uppercase">
                      {vehicle.seats}
                    </span>
                  </div>

                  {vehicle.badge && (
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white shadow">
                        {vehicle.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-[11px] text-amber-700 font-bold uppercase block mb-1">
                    {vehicle.type}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-red-700 transition-colors mb-1.5">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 italic">
                    {vehicle.suitableFor}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    {vehicle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-2 border-t border-stone-100">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Đặt xe rước dâu</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Routes Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Các Tuyến Đón Rước Dâu & Du Lịch Phổ Biến Của Tuyến Ly:
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  TT. Chợ Chùa ⇄ Các xã Nghĩa Hành ⇄ TP. Quảng Ngãi ⇄ Tư Nghĩa ⇄ Mộ Đức ⇄ Sơn Tịnh ⇄ Đà Nẵng ⇄ Quảng Nam ⇄ Quy Nhơn ⇄ Sân bay Chu Lai.
                </p>
              </div>
            </div>

            <a
              href={`tel:${BRAND_INFO.hotline2Raw}`}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-rose-50 text-red-800 border border-red-200 hover:bg-rose-100 transition-colors shrink-0 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Hotline Đặt Xe: {BRAND_INFO.hotline2}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
