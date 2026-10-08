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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-gradient-to-b from-[#2e050b] to-[#180205] border-2 border-amber-400 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-stone-200 hover:text-white flex items-center justify-center border border-amber-400/40"
          title="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] bg-stone-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e050b] via-transparent to-transparent" />

          {dish.featuredPoster && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 uppercase shadow-lg">
                ★ Món Tiêu Biểu Trong Poster Tuyến Ly
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              {dish.tag}
            </span>
            <span className="text-sm font-bold text-amber-300">
              Cơ sở Nấu ăn Tuyến Ly
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-display font-black text-amber-100 mb-3">
            {dish.name}
          </h3>

          <p className="text-sm text-stone-200 leading-relaxed mb-6">
            {dish.desc}
          </p>

          <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-amber-200 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Chế biến nóng sốt ngay tại rạp cưới / gia đình, đảm bảo vệ sinh an toàn thực phẩm.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onToggleDishInCustomMenu(dish);
              }}
              className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                isSelectedInMenu
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 hover:from-amber-300 hover:to-yellow-400 shadow-lg'
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
              className="w-full sm:w-auto py-3 px-5 rounded-xl text-sm font-bold text-amber-300 bg-[#3d060e] border border-amber-400/40 hover:bg-amber-500/20 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Hỏi Chị Ly ({BRAND_INFO.hotline1})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
