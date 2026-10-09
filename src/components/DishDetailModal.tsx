import React from 'react';
import { X, Plus, Check, Phone, Utensils, Sparkles } from 'lucide-react';
import { DishItem, BRAND_INFO } from '../data/cateringData';

interface DishDetailModalProps {
  dish: DishItem | null;
  onClose: () => void;
  onToggleDishInCustomMenu: (dish: DishItem) => void;
  isSelectedInMenu: boolean;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onToggleDishInCustomMenu,
  isSelectedInMenu,
}) => {
  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 text-slate-700 hover:bg-white hover:text-red-700 flex items-center justify-center border border-stone-200 shadow-sm cursor-pointer"
          title="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] bg-stone-100">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {dish.featuredPoster && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white uppercase shadow-md">
                ★ Món Tiêu Biểu Trong Poster Tuyến Ly
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
              {dish.tag}
            </span>
            <span className="text-xs font-bold text-red-700">
              Cơ sở Nấu ăn Tuyến Ly
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            {dish.name}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {dish.desc}
          </p>

          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/80 text-xs text-red-800 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
            <span>Chế biến nóng sốt ngay tại rạp cưới / gia đình, đảm bảo vệ sinh an toàn thực phẩm.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onToggleDishInCustomMenu(dish);
              }}
              className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSelectedInMenu
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-red-700 text-white hover:bg-red-800 shadow-md'
              }`}
            >
              {isSelectedInMenu ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã có trong bàn tiệc dự toán</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Thêm món vào bàn tiệc dự toán</span>
                </>
              )}
            </button>

            <a
              href={`tel:${BRAND_INFO.hotline1Raw}`}
              className="w-full sm:w-auto py-3 px-5 rounded-xl text-sm font-bold border border-stone-300 text-slate-700 hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Gọi Chị Ly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
