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
    <section id="cam-ket" className="py-16 bg-[#1a0306] text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Chị Ly & Brand Story */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#2c050b] via-[#3b0811] to-[#2c050b] border-2 border-amber-500/30 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Portrait & Title */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_30px_rgba(250,176,5,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-200 bg-[#250409]">
                  <img
                    src="https://i.ibb.co/5WkSQ965/IMG-5866.jpg"
                    alt="Chị Ly – Chủ cơ sở Tuyến Ly"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
              </div>

              <div className="mt-4">
                <span className="px-3.5 py-1 rounded bg-[#0d3b24] text-amber-200 border border-amber-400 text-xs font-bold uppercase tracking-wider inline-block">
                  Chị Ly – Chủ Cơ Sở
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-black text-amber-100 mt-2">
                  Cơ Sở TUYẾN LY
                </h3>
                <p className="text-xs text-amber-300/80 italic mt-0.5">
                  TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-stone-200 leading-relaxed">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Tâm Huyết & Trách Nhiệm Với Từng Bàn Tiệc</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-display font-black text-amber-100">
                “Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc”
              </h2>

              <p className="text-stone-300">
                Với hơn 15 năm gắn bó cùng nghề nấu tiệc và cưới hỏi tại quê hương <strong>Nghĩa Hành, Quảng Ngãi</strong>, Chị Ly luôn tâm niệm rằng: <em>Mỗi đám cưới, mỗi bữa tiệc là khoảnh khắc thiêng liêng nhất của một gia đình.</em>
              </p>

              <p className="text-stone-300">
                Chính vì vậy, từ khâu lựa chọn từng con tôm sú tươi, cá bớp tươi rói, con gà đồi thả vườn cho đến khi lên mâm nóng hổi, bài trí rạp cưới lộng lẫy và đoàn xe hoa đón dâu đúng giờ, Tuyến Ly luôn chăm chút tỉ mỉ bằng tất cả cái tâm của người làm nghề.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-amber-300 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Hơn 2.500+ tiệc cưới & sự kiện đã tổ chức</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Khách hàng hài lòng về hương vị</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Golden Commitments */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold gold-text-gradient mb-2">
              4 Cam Kết Vàng Của Tuyến Ly
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Nguyên tắc làm việc chuẩn chỉ giúp Tuyến Ly luôn là sự lựa chọn số 1 của bà con Nghĩa Hành.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-gradient-to-b from-[#2b050a] to-[#1c0205] border border-amber-500/20 hover:border-amber-400/60 transition-all shadow-xl flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-display font-bold text-base sm:text-lg text-amber-200 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300/90 leading-relaxed">
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
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold gold-text-gradient mb-2">
              Bà Con Nghĩa Hành Nói Gì Về Tuyến Ly?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Những đánh giá chân thành từ các gia đình đã tin tưởng giao trọn ngày vui cho Chị Ly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-gradient-to-b from-[#2a0409] to-[#180204] border border-amber-500/25 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-amber-500/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed italic mb-4">
                    “{review.comment}”
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-500/15">
                  <h5 className="font-bold text-sm text-amber-200">
                    {review.name}
                  </h5>
                  <div className="text-[11px] text-amber-300/70 mt-0.5">
                    {review.event}
                  </div>
                  <div className="text-[10px] text-stone-300 mt-0.5">
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
