import React, { useState } from 'react';
import {
  Utensils,
  Plus,
  Check,
  Eye,
  Sparkles,
  BookOpen,
  ChevronRight,
  Phone,
  Gift,
  Ticket,
  Info,
  X,
  ShieldCheck
} from 'lucide-react';
import { POSTER_FEATURED_DISHES, SAMPLE_SET_MENUS, DishItem, SetMenu, BRAND_INFO } from '../data/cateringData';

interface MenuSectionProps {
  onSelectDishModal: (dish: DishItem) => void;
  onAddDishToCustomMenu: (dish: DishItem) => void;
  onApplySetMenuToCalculator: (setMenu: SetMenu) => void;
  selectedDishIdsInCustomMenu: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDishModal,
  onAddDishToCustomMenu,
  onApplySetMenuToCalculator,
  selectedDishIdsInCustomMenu,
}) => {
  const [activeTab, setActiveTab] = useState<'poster_dishes' | 'set_menus'>('poster_dishes');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Món' },
    { id: 'khai_vi', label: 'Món Khai Vị & Gỏi' },
    { id: 'mon_chinh', label: 'Món Chính & Đặc Sản' },
    { id: 'lau', label: 'Lẩu Hải Sản & Cá Bớp' },
    { id: 'trang_mieng', label: 'Tráng Miệng' },
  ];

  const filteredDishes = POSTER_FEATURED_DISHES.filter((dish) => {
    if (selectedCategory === 'all') return true;
    return dish.category === selectedCategory;
  });

  return (
    <section id="thuc-don" className="py-16 sm:py-20 bg-white text-slate-800 relative overflow-hidden">
      {/* Decorative subtle ambient tints */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Utensils className="w-3.5 h-3.5 text-red-600" />
            <span>Ẩm Thực Tiệc Cưới Tuyến Ly</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Thực Đơn Tiệc Phong Phú & Đặc Sắc
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hội tụ đầy đủ các món ngon truyền thống và hải sản tươi sống được Chị Ly tuyển chọn kỹ lưỡng. Thức ăn luôn nóng sốt, chuẩn vị quê hương Nghĩa Hành, Quảng Ngãi.
          </p>

          {/* Toggle between Poster Dishes & Curated Set Menus */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab('poster_dishes')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'poster_dishes'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Món Tiệc Tiêu Biểu Trong Poster</span>
            </button>

            <button
              onClick={() => setActiveTab('set_menus')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'set_menus'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>4 Bộ Thực Đơn Mẫu Trọn Gói</span>
            </button>
          </div>
        </div>

        {/* TAB 1: POSTER FEATURED DISHES & CATEGORY FILTER */}
        {activeTab === 'poster_dishes' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-red-700 text-white font-bold shadow-sm'
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDishes.map((dish) => {
                const isSelected = selectedDishIdsInCustomMenu.includes(dish.id);
                return (
                  <div
                    key={dish.id}
                    className="group rounded-2xl overflow-hidden bg-white border border-stone-200/80 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Dish Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectDishModal(dish)}>
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        {dish.featuredPoster && (
                          <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-white uppercase tracking-wider shadow-sm">
                              Món Tiêu Biểu Poster
                            </span>
                          </div>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectDishModal(dish);
                          }}
                          className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-white/90 text-stone-700 hover:text-red-700 hover:bg-white shadow transition-colors"
                          title="Xem chi tiết món"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 
                            onClick={() => onSelectDishModal(dish)}
                            className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-red-700 transition-colors cursor-pointer leading-snug"
                          >
                            {dish.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2">
                          {dish.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-4 pb-4 pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                        {dish.tag}
                      </span>

                      <button
                        onClick={() => onAddDishToCustomMenu(dish)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Đã chọn</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Thêm vào bàn</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: 4 CURATED SET MENUS */}
        {activeTab === 'set_menus' && (
          <div className="space-y-10">
            {/* Header specifically for 4 Curated Set Menus */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
                4 BỘ THỰC ĐƠN MẪU TRỌN GÓI
              </h3>
              <p className="text-base sm:text-lg font-bold text-red-700 mb-2">
                Trọn vị ngon – Trọn niềm vui – Trọn hạnh phúc
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Khám phá 4 bộ thực đơn tiệc cưới đặc sắc từ Tuyến Ly. Hương vị đậm đà miền Trung, món ăn chỉn chu, thực đơn linh hoạt theo nhu cầu và ngân sách của từng gia đình.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-slate-700 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs">
                <Info className="w-4 h-4 text-red-600 shrink-0" />
                <span>Giá tham khảo cho bàn 10 khách. Dịch vụ đi kèm và giá cuối cùng được xác nhận theo từng hợp đồng.</span>
              </div>
            </div>

            {/* 4 Cards Grid - 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SAMPLE_SET_MENUS.map((setMenu) => {
                const isRecommended = Boolean(setMenu.isRecommended);

                return (
                  <div
                    key={setMenu.id}
                    className={`rounded-3xl p-6 sm:p-8 transition-all relative flex flex-col justify-between ${
                      isRecommended
                        ? 'bg-gradient-to-b from-red-50/60 via-white to-white border-2 border-red-600 ring-4 ring-red-100/80 shadow-xl'
                        : 'bg-stone-50/70 border-2 border-stone-200 hover:border-red-300 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* 1. Badge phân loại combo */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-2xs ${
                            isRecommended
                              ? 'bg-red-700 text-white'
                              : setMenu.badge === 'TIẾT KIỆM'
                              ? 'bg-emerald-700 text-white'
                              : setMenu.badge === 'TIỆC CƯỚI VIP'
                              ? 'bg-purple-900 text-amber-200'
                              : 'bg-amber-600 text-white'
                          }`}
                        >
                          {setMenu.badge}
                        </span>

                        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                          {setMenu.code}
                        </span>
                      </div>

                      {/* 2. Tên combo */}
                      <h4 className="font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                        {setMenu.code} – {setMenu.name}
                      </h4>

                      {/* 3. Giá tham khảo nổi bật */}
                      <div className="mt-2.5 mb-1.5 flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-red-700 tracking-tight">
                          {setMenu.pricePerTableNumber.toLocaleString('vi-VN')}đ
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-500">
                          / bàn 10 khách
                        </span>
                      </div>

                      {/* 4. Mô tả ngắn */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 italic">
                        {setMenu.highlight}
                      </p>

                      {/* 5. Danh sách 6 món có dấu check */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 text-slate-800 text-sm shadow-xs mb-5">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                          <span>Danh sách 6 món trong thực đơn:</span>
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Đầy đủ 6 món
                          </span>
                        </div>
                        <div className="space-y-2.5">
                          {setMenu.dishes.map((dishName, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </span>
                              <span className="font-medium text-slate-800 text-xs sm:text-sm leading-snug">
                                {idx + 1}. {dishName.replace(/^\d+\.\s*/, '')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 6. Khu vực "QUÀ TẶNG DÀNH RIÊNG" kèm icon quà */}
                      <div className="mb-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-3 shadow-2xs">
                        <div className="w-8 h-8 rounded-lg bg-amber-200/80 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Gift className="w-4 h-4 text-amber-700" />
                        </div>
                        <div className="text-xs leading-relaxed">
                          <div className="font-extrabold uppercase tracking-wide text-amber-900 flex items-center gap-1.5">
                            <span>QUÀ TẶNG DÀNH RIÊNG</span>
                          </div>
                          <div className="font-bold text-slate-900 mt-0.5 text-xs sm:text-sm">
                            {setMenu.gift.title}
                          </div>
                          <div className="text-slate-600 text-[11px] mt-0.5">
                            {setMenu.gift.description}
                          </div>
                        </div>
                      </div>

                      {/* 7. Khu vực "VOUCHER ƯU ĐÃI" kèm icon voucher */}
                      <div className="mb-4 p-3.5 rounded-xl bg-rose-50/80 border border-rose-200/90 text-rose-950 flex items-start gap-3 shadow-2xs">
                        <div className="w-8 h-8 rounded-lg bg-rose-200/80 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Ticket className="w-4 h-4 text-rose-700" />
                        </div>
                        <div className="text-xs leading-relaxed">
                          <div className="font-extrabold uppercase tracking-wide text-rose-900 flex items-center gap-1.5">
                            <span>VOUCHER ƯU ĐÃI</span>
                          </div>
                          <div className="font-black text-red-700 mt-0.5 text-xs sm:text-sm">
                            {setMenu.voucher.description}
                          </div>
                          <div className="text-slate-600 text-[11px] mt-0.5">
                            Giảm trực tiếp vào tổng chi phí tiệc khi đủ số lượng bàn quy định.
                          </div>
                        </div>
                      </div>

                      {/* 8. Điều kiện áp dụng ngắn gọn */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pb-4 mb-4 border-b border-stone-200">
                        <div className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{setMenu.conditionShort}</span>
                        </div>
                        <button
                          onClick={() => setShowTermsModal(true)}
                          className="text-red-700 hover:text-red-800 font-bold underline cursor-pointer inline-flex items-center gap-0.5"
                        >
                          <span>Xem điều kiện ưu đãi</span>
                        </button>
                      </div>
                    </div>

                    {/* 9 & 10. Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      {/* 9. Nút chính CTA: "NHẬN DỰ TOÁN & QUÀ TẶNG" */}
                      <button
                        onClick={() => onApplySetMenuToCalculator(setMenu)}
                        className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                          isRecommended
                            ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white shadow-md'
                            : 'bg-red-700 hover:bg-red-800 text-white'
                        }`}
                      >
                        <span>NHẬN DỰ TOÁN & QUÀ TẶNG</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* 10. Nút phụ "HỎI CHỊ LY" */}
                      <a
                        href={`tel:${BRAND_INFO.hotline1Raw}`}
                        className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-stone-300 hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-red-600" />
                        <span>HỎI CHỊ LY</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Custom Menu Builder Notification Bar */}
        {selectedDishIdsInCustomMenu.length > 0 && (
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-red-700 via-rose-700 to-red-800 text-white border border-red-600 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-11 h-11 rounded-full bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center shrink-0 shadow">
                {selectedDishIdsInCustomMenu.length}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Bạn đã chọn {selectedDishIdsInCustomMenu.length} món cho bàn tiệc của mình
                </h4>
                <p className="text-xs text-rose-100">
                  Chuyển xuống công cụ Dự toán chi phí để tính toán số lượng bàn và chi phí chi tiết!
                </p>
              </div>
            </div>

            <a
              href="#du-toan"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md transition-transform active:scale-95 shrink-0"
            >
              Xem Dự Toán Ngay →
            </a>
          </div>
        )}

      </div>

      {/* MODAL: ĐIỀU KIỆN & QUY ĐỊNH ƯU ĐÃI (MỤC 6) */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Điều Kiện & Quy Định Ưu Đãi
                </h3>
                <p className="text-xs text-slate-500">
                  Chính sách áp dụng quà tặng và voucher từ Dịch vụ Tiệc Cưới Tuyến Ly
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6 bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Voucher chỉ áp dụng cho hợp đồng đủ số lượng bàn tối thiểu theo từng combo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Không cộng dồn nhiều voucher tiền mặt; mỗi tiệc áp dụng tối đa 1 voucher hợp lệ.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Không quy đổi quà tặng thành tiền mặt hoặc chuyển đổi sang các dịch vụ khác.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quà tặng và voucher được xác nhận chính thức khi Tuyến Ly phê duyệt báo giá và điều kiện hợp đồng.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ưu đãi có thể thay đổi khi số bàn, ngày tổ chức tiệc hoặc phạm vi dịch vụ thay đổi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Thời hạn chương trình và quà tặng đi kèm được áp dụng minh bạch theo thỏa thuận hợp đồng ký kết.</span>
              </li>
            </ul>

            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full py-3 rounded-xl font-bold text-sm bg-red-700 hover:bg-red-800 text-white transition-colors shadow-sm cursor-pointer"
            >
              Đã hiểu & Đóng thông tin
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
