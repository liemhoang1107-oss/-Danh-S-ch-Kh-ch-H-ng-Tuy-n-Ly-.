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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAMPLE_SET_MENUS.map((setMenu) => (
              <div
                key={setMenu.id}
                className="rounded-2xl p-6 sm:p-7 bg-stone-50/70 border-2 border-stone-200 hover:border-red-300 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
              >
                {/* Badge if any */}
                {setMenu.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-700 text-white shadow-sm uppercase tracking-wider">
                      {setMenu.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs uppercase text-amber-700 font-bold tracking-widest block mb-1">
                      {setMenu.tagline}
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl text-slate-900">
                      {setMenu.name}
                    </h3>
                    <div className="text-2xl sm:text-3xl font-black text-red-700 mt-2">
                      {setMenu.pricePerTable}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 italic">
                      {setMenu.highlight}
                    </p>
                  </div>

                  {/* Dishes list */}
                  <div className="space-y-2.5 my-5 p-4 rounded-xl bg-white border border-stone-200 text-slate-700 text-sm shadow-xs">
                    {setMenu.dishes.map((dishName, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800">{dishName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onApplySetMenuToCalculator(setMenu)}
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Dự toán & Đặt thực đơn này</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${BRAND_INFO.hotline1Raw}`}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-stone-300 hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>Hỏi Chị Ly</span>
                  </a>
                </div>
              </div>
            ))}
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
    </section>
  );
};
