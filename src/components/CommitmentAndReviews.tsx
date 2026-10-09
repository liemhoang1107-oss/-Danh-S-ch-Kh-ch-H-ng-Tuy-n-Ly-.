import React from 'react';
import { ShieldCheck, Utensils, CircleDollarSign, Clock, Star, Quote, Heart, CheckCircle2, Phone } from 'lucide-react';
import { BRAND_INFO, COMMITMENTS, TESTIMONIALS } from '../data/cateringData';

interface CommitmentAndReviewsProps {
  onOpenBooking: () => void;
}

export const CommitmentAndReviews: React.FC<CommitmentAndReviewsProps> = ({ onOpenBooking }) => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Utensils,
    CircleDollarSign,
    Clock,
  };

  return (
    <section id="cam-ket" className="py-16 sm:py-20 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Chị Ly & Brand Story */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 border border-rose-200/80 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Portrait & Title */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-red-50">
                  <img
                    src="https://i.ibb.co/5WkSQ965/IMG-5866.jpg"
                    alt="Chị Ly – Chủ cơ sở Tuyến Ly"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
              </div>

              <div className="mt-4">
                <span className="px-3.5 py-1 rounded-md bg-emerald-700 text-white border border-emerald-600 text-xs font-bold uppercase tracking-wider inline-block shadow-xs">
                  Chị Ly – Chủ Cơ Sở
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  Cơ Sở TUYẾN LY
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-widest">
                <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                <span>Tâm Huyết & Trách Nhiệm Với Từng Bàn Tiệc</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                “Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc”
              </h2>

              <p className="text-slate-600">
                Với hơn 15 năm gắn bó cùng nghề nấu tiệc và cưới hỏi tại quê hương <strong>Nghĩa Hành, Quảng Ngãi</strong>, Chị Ly luôn tâm niệm rằng: <em>Mỗi đám cưới, mỗi bữa tiệc là khoảnh khắc thiêng liêng nhất của một gia đình.</em>
              </p>

              <p className="text-slate-600">
                Chính vì vậy, từ khâu lựa chọn từng con tôm sú tươi, cá bớp tươi rói, con gà đồi thả vườn cho đến khi lên mâm nóng hổi, bài trí rạp cưới lộng lẫy và đoàn xe hoa đón dâu đúng giờ, Tuyến Ly luôn chăm chút tỉ mỉ bằng tất cả cái tâm của người làm nghề.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-900 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Hơn 2.500+ tiệc cưới & sự kiện đã tổ chức</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Khách hàng hài lòng về hương vị</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Golden Commitments */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              4 Cam Kết Vàng Của Tuyến Ly
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Nguyên tắc làm việc chuẩn chỉ giúp Tuyến Ly luôn là sự lựa chọn số 1 của bà con Nghĩa Hành.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-stone-200/90 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer Testimonials from Nghia Hanh & Quang Ngai */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Bà Con Nghĩa Hành Nói Gì Về Tuyến Ly?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Những đánh giá chân thành từ các gia đình đã tin tưởng giao trọn ngày vui cho Chị Ly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-stone-50/70 border border-stone-200/90 hover:border-stone-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-stone-300" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    “{review.comment}”
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200">
                  <h5 className="font-bold text-sm text-slate-900">
                    {review.name}
                  </h5>
                  <div className="text-[11px] text-red-700 font-semibold mt-0.5">
                    {review.event}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
