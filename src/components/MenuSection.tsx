import React, { useState } from 'react';
import { Utensils, Star, Plus, Check, Eye, Sparkles, BookOpen, ChevronRight, Phone } from 'lucide-react';
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
    <section id="thuc-don" className="py-16 bg-[#1f0307] text-stone-100 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Ẩm Thực Tiệc Cưới Tuyến Ly</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black tracking-wide gold-text-gradient mb-3">
            Thực Đơn Tiệc Phong Phú & Đặc Sắc
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Hội tụ đầy đủ các món ngon truyền thống và hải sản tươi sống được Chị Ly tuyển chọn kỹ lưỡng. Thức ăn luôn nóng sốt, chuẩn vị quê hương Nghĩa Hành, Quảng Ngãi.
          </p>

          {/* Toggle between Poster Dishes & Curated Set Menus */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-[#2e050b] border border-amber-500/30 shadow-lg">
            <button
              onClick={() => setActiveTab('poster_dishes')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'poster_dishes'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 shadow-md'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Món Tiệc Tiêu Biểu Trong Poster</span>
            </button>

            <button
              onClick={() => setActiveTab('set_menus')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'set_menus'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 shadow-md'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
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
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                      : 'bg-[#2b050b] text-stone-300 hover:text-white border border-amber-500/20'
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
                    className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#2e060d] to-[#1c0307] border border-amber-500/25 hover:border-amber-400/70 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Dish Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-900 cursor-pointer" onClick={() => onSelectDishModal(dish)}>
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0307] via-transparent to-transparent opacity-80" />

                        {dish.featuredPoster && (
                          <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-0.5 rounded text-[10px] font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 uppercase tracking-wider shadow">
                              Món Tiêu Biểu Poster
                            </span>
                          </div>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectDishModal(dish);
                          }}
                          className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-amber-300 hover:bg-black/90 transition-colors"
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
                            className="font-serif-display font-bold text-base sm:text-lg text-amber-200 group-hover:text-amber-300 transition-colors cursor-pointer leading-snug"
                          >
                            {dish.name}
                          </h3>
                        </div>

                        <p className="text-xs text-stone-300/90 line-clamp-2 leading-relaxed mb-3">
                          {dish.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-4 pb-4 pt-2 border-t border-amber-500/15 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-amber-300/80 font-medium">
                        {dish.tag}
                      </span>

                      <button
                        onClick={() => onAddDishToCustomMenu(dish)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/35 border border-amber-400/40'
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
                            <span>Thêm vào bàn tiệc</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAMPLE_SET_MENUS.map((setMenu) => (
              <div
                key={setMenu.id}
                className="rounded-2xl p-6 bg-gradient-to-b from-[#2e060d] via-[#24040a] to-[#1a0206] border-2 border-amber-500/30 hover:border-amber-400 shadow-2xl relative flex flex-col justify-between"
              >
                {/* Badge if any */}
                {setMenu.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 shadow-md uppercase tracking-wider">
                      {setMenu.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs uppercase text-amber-400 font-bold tracking-widest block mb-1">
                      {setMenu.tagline}
                    </span>
                    <h3 className="font-serif-display font-black text-xl sm:text-2xl text-amber-100">
                      {setMenu.name}
                    </h3>
                    <div className="text-xl sm:text-2xl font-black text-amber-400 mt-2">
                      {setMenu.pricePerTable}
                    </div>
                    <p className="text-xs text-stone-300 mt-1 italic">
                      {setMenu.highlight}
                    </p>
                  </div>

                  {/* Dishes list */}
                  <div className="space-y-2.5 my-5 p-4 rounded-xl bg-black/40 border border-amber-500/20 text-stone-200 text-sm">
                    {setMenu.dishes.map((dishName, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{dishName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onApplySetMenuToCalculator(setMenu)}
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 hover:from-amber-300 hover:to-yellow-400 transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <span>Dự toán & Đặt thực đơn này</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${BRAND_INFO.hotline1Raw}`}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-amber-300 border border-amber-400/40 hover:bg-amber-500/15 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hỏi Chị Ly</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Menu Builder Notification Bar */}
        {selectedDishIdsInCustomMenu.length > 0 && (
          <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-[#440812] via-[#5c0c1a] to-[#440812] border-2 border-amber-400 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-stone-950 font-black text-lg flex items-center justify-center shrink-0">
                {selectedDishIdsInCustomMenu.length}
              </div>
              <div>
                <h4 className="text-base font-bold text-amber-200">
                  Bạn đã chọn {selectedDishIdsInCustomMenu.length} món cho bàn tiệc của mình
                </h4>
                <p className="text-xs text-stone-300">
                  Chuyển xuống công cụ Dự toán chi phí để tính toán số lượng bàn và chi phí chi tiết!
                </p>
              </div>
            </div>

            <a
              href="#du-toan"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 hover:from-amber-200 hover:to-yellow-300 shadow-lg transition-transform active:scale-95 shrink-0"
            >
              Xem Dự Toán Ngay →
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
