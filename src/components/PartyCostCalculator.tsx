import React, { useState, useMemo } from 'react';
import { Calculator, Copy, Check, Phone, Sparkles, Plus, Trash2, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { POSTER_FEATURED_DISHES, SAMPLE_SET_MENUS, BRAND_INFO, SetMenu, DishItem } from '../data/cateringData';

interface PartyCostCalculatorProps {
  onOpenBookingWithData: (data: {
    tableCount: number;
    menuName: string;
    totalCost: number;
    addOns: string[];
    notes: string;
  }) => void;
  customSelectedDishes: DishItem[];
  onRemoveCustomDish: (dishId: string) => void;
}

export const PartyCostCalculator: React.FC<PartyCostCalculatorProps> = ({
  onOpenBookingWithData,
  customSelectedDishes,
  onRemoveCustomDish,
}) => {
  const [tableCount, setTableCount] = useState<number>(10);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('preset-custom'); // 'preset-custom' or setMenu.id
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Add-on options
  const [addOnRapCuoi, setAddOnRapCuoi] = useState<boolean>(true);
  const [addOnXeHoa, setAddOnXeHoa] = useState<boolean>(false);
  const [addOnXe16Cho, setAddOnXe16Cho] = useState<boolean>(false);
  const [addOnTiffany, setAddOnTiffany] = useState<boolean>(false);
  const [addOnNuocNgot, setAddOnNuocNgot] = useState<boolean>(true);
  const [addOnAmThanh, setAddOnAmThanh] = useState<boolean>(false);

  // Price estimations for add-ons (VND)
  const addOnPrices = {
    rapCuoi: 3500000,
    xeHoa: 1800000,
    xe16Cho: 1500000,
    tiffanyPerTable: 80000,
    nuocNgotPerTable: 120000,
    amThanh: 2500000,
  };

  // Base price per table based on selection
  const pricePerTable = useMemo(() => {
    if (selectedPresetId === 'preset-custom') {
      if (customSelectedDishes.length === 0) {
        return 1950000; // default standard
      }
      return customSelectedDishes.reduce((sum, d) => sum + d.priceEstimate, 0);
    }
    const foundSet = SAMPLE_SET_MENUS.find((s) => s.id === selectedPresetId);
    return foundSet ? foundSet.pricePerTableNumber : 1950000;
  }, [selectedPresetId, customSelectedDishes]);

  // Food total
  const foodTotal = tableCount * pricePerTable;

  // Addons total
  const addOnsTotal = useMemo(() => {
    let sum = 0;
    if (addOnRapCuoi) sum += addOnPrices.rapCuoi;
    if (addOnXeHoa) sum += addOnPrices.xeHoa;
    if (addOnXe16Cho) sum += addOnPrices.xe16Cho;
    if (addOnTiffany) sum += tableCount * addOnPrices.tiffanyPerTable;
    if (addOnNuocNgot) sum += tableCount * addOnPrices.nuocNgotPerTable;
    if (addOnAmThanh) sum += addOnPrices.amThanh;
    return sum;
  }, [addOnRapCuoi, addOnXeHoa, addOnXe16Cho, addOnTiffany, addOnNuocNgot, addOnAmThanh, tableCount]);

  // Combo Discount
  const discountAmount = useMemo(() => {
    let discount = 0;
    // If ordering 15+ tables and renting tent, discount 500k
    if (tableCount >= 15 && addOnRapCuoi) discount += 500000;
    // If ordering both car & tent, discount 300k
    if (addOnRapCuoi && (addOnXeHoa || addOnXe16Cho)) discount += 300000;
    return discount;
  }, [tableCount, addOnRapCuoi, addOnXeHoa, addOnXe16Cho]);

  const grandTotal = Math.max(0, foodTotal + addOnsTotal - discountAmount);

  // Selected menu title
  const currentMenuTitle = useMemo(() => {
    if (selectedPresetId === 'preset-custom') {
      if (customSelectedDishes.length > 0) {
        return `Thực đơn Tự chọn (${customSelectedDishes.length} món)`;
      }
      return 'Thực đơn Tiêu biểu Tuyến Ly (Chuẩn Poster)';
    }
    const found = SAMPLE_SET_MENUS.find((s) => s.id === selectedPresetId);
    return found ? found.name : 'Thực đơn Tuyến Ly';
  }, [selectedPresetId, customSelectedDishes]);

  // Format currency
  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const selectedAddOnNames = useMemo(() => {
    const list: string[] = [];
    if (addOnRapCuoi) list.push('Rạp cưới nhung cao cấp & Cổng hoa');
    if (addOnXeHoa) list.push('Xe hoa rước dâu 4 chỗ');
    if (addOnXe16Cho) list.push('Xe 16 chỗ đưa đón họ hàng');
    if (addOnTiffany) list.push(`Bàn ghế Tiffany nơ lụa (${tableCount} bàn)`);
    if (addOnNuocNgot) list.push(`Trọn gói nước ngọt, đá & khăn (${tableCount} bàn)`);
    if (addOnAmThanh) list.push('Dàn âm thanh ánh sáng & MC tiệc cưới');
    return list;
  }, [addOnRapCuoi, addOnXeHoa, addOnXe16Cho, addOnTiffany, addOnNuocNgot, addOnAmThanh, tableCount]);

  // Copy quote text to clipboard for Zalo
  const handleCopyQuoteForZalo = () => {
    const message = `KÍNH GỬI CHỊ LY (CƠ SỞ TUYẾN LY - NGHĨA HÀNH):
Tôi muốn đặt tiệc & xin báo giá chi tiết:
- Số lượng bàn: ${tableCount} bàn
- Gói thực đơn: ${currentMenuTitle}
- Chi phí cỗ ước tính: ${formatVND(foodTotal)} (~${formatVND(pricePerTable)}/bàn)
${selectedAddOnNames.length > 0 ? `- Dịch vụ kèm theo:\n  + ${selectedAddOnNames.join('\n  + ')}` : ''}
${discountAmount > 0 ? `- Ưu đãi combo được áp dụng: -${formatVND(discountAmount)}` : ''}
- TỔNG CHI PHÍ DỰ KIẾN: ${formatVND(grandTotal)}
Nhờ Chị Ly (0935 777 205) tư vấn chi tiết và giữ ngày giúp tôi!`;

    navigator.clipboard.writeText(message);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3500);
  };

  const handleBookNow = () => {
    onOpenBookingWithData({
      tableCount,
      menuName: currentMenuTitle,
      totalCost: grandTotal,
      addOns: selectedAddOnNames,
      notes: `Dự toán ước tính: ${formatVND(grandTotal)} cho ${tableCount} bàn (${currentMenuTitle})`,
    });
  };

  return (
    <section id="du-toan" className="py-16 bg-[#160205] text-stone-100 relative overflow-hidden border-t border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Minh Bạch – Chuẩn Xác – Không Phát Sinh</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black tracking-wide gold-text-gradient mb-3">
            Dự Toán Bàn Tiệc & Chi Phí Trọn Gói
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Công cụ trực quan giúp quý khách dễ dàng tính toán ngân sách tiệc cưới, tân gia, sinh nhật theo đúng số lượng bàn và các món ăn yêu thích tại Nghĩa Hành, Quảng Ngãi.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#2a0409] via-[#38070e] to-[#200306] border-2 border-amber-400/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: Inputs & Choices (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Số lượng bàn tiệc */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-bold text-amber-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 text-xs font-black flex items-center justify-center">1</span>
                    <span>Quy mô tiệc (Số lượng bàn):</span>
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-amber-300">
                    {tableCount} Bàn <span className="text-xs font-normal text-stone-300">(~{tableCount * 10} khách)</span>
                  </span>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="3"
                  max="80"
                  step="1"
                  value={tableCount}
                  onChange={(e) => setTableCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />

                {/* Quick table presets */}
                <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-amber-500/15">
                  {[5, 10, 15, 20, 30, 50].map((count) => (
                    <button
                      key={count}
                      onClick={() => setTableCount(count)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        tableCount === count
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'bg-stone-800 text-stone-300 hover:text-white'
                      }`}
                    >
                      {count} bàn
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Chọn Thực Đơn Tiệc */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                <label className="text-sm sm:text-base font-bold text-amber-200 flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 text-xs font-black flex items-center justify-center">2</span>
                  <span>Gói Thực Đơn Áp Dụng:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => setSelectedPresetId('preset-custom')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedPresetId === 'preset-custom'
                        ? 'border-amber-400 bg-amber-500/20 text-white shadow-md'
                        : 'border-stone-700 bg-stone-900/60 text-stone-300 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-300">TỰ PHỐI MÓN THEO POSTER</div>
                    <div className="font-semibold text-sm mt-0.5">
                      {customSelectedDishes.length > 0
                        ? `Đã chọn ${customSelectedDishes.length} món`
                        : 'Món Tiêu Biểu Tuyến Ly'}
                    </div>
                    <div className="text-xs text-amber-200 mt-1 font-bold">
                      {formatVND(pricePerTable)} / bàn
                    </div>
                  </button>

                  {SAMPLE_SET_MENUS.slice(0, 3).map((menu) => (
                    <button
                      key={menu.id}
                      onClick={() => setSelectedPresetId(menu.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedPresetId === menu.id
                          ? 'border-amber-400 bg-amber-500/20 text-white shadow-md'
                          : 'border-stone-700 bg-stone-900/60 text-stone-300 hover:border-amber-500/50'
                      }`}
                    >
                      <div className="text-xs font-bold text-amber-300">{menu.badge || 'SET MENU'}</div>
                      <div className="font-semibold text-xs sm:text-sm mt-0.5 truncate">{menu.name}</div>
                      <div className="text-xs text-amber-200 mt-1 font-bold">{menu.pricePerTable}</div>
                    </button>
                  ))}
                </div>

                {/* Show Selected Dishes list if custom */}
                {selectedPresetId === 'preset-custom' && customSelectedDishes.length > 0 && (
                  <div className="p-3 rounded-xl bg-black/60 border border-amber-500/25">
                    <div className="text-xs font-semibold text-amber-300 mb-2 flex items-center justify-between">
                      <span>Các món bạn đã chọn cho bàn tiệc ({customSelectedDishes.length} món):</span>
                      <a href="#thuc-don" className="text-amber-400 underline hover:text-white text-[11px]">
                        + Chọn thêm món
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {customSelectedDishes.map((dish) => (
                        <span
                          key={dish.id}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3d070e] text-xs text-amber-200 border border-amber-400/30"
                        >
                          <span>{dish.name}</span>
                          <button
                            onClick={() => onRemoveCustomDish(dish.id)}
                            className="text-stone-400 hover:text-red-400"
                            title="Xóa món"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Dịch vụ kèm theo */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                <label className="text-sm sm:text-base font-bold text-amber-200 flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 text-xs font-black flex items-center justify-center">3</span>
                  <span>Dịch Vụ Kèm Theo (Tùy chọn combo tiết kiệm):</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  {/* Rạp cưới */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnRapCuoi}
                      onChange={(e) => setAddOnRapCuoi(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Rạp Cưới Nhung Đỏ / Xanh + Cổng Hoa</div>
                      <div className="text-[11px] text-stone-300">Trọn gói hệ thống rạp, đèn chùm, phông rèm (+3.5tr)</div>
                    </div>
                  </label>

                  {/* Xe hoa */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnXeHoa}
                      onChange={(e) => setAddOnXeHoa(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Xe Hoa 4 Chỗ Rước Dâu Cao Cấp</div>
                      <div className="text-[11px] text-stone-300">Mazda/Camry kết hoa cưới trọn gói (+1.8tr)</div>
                    </div>
                  </label>

                  {/* Xe 16 chỗ */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnXe16Cho}
                      onChange={(e) => setAddOnXe16Cho(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Xe 16 Chỗ Đưa Đón Hai Họ</div>
                      <div className="text-[11px] text-stone-300">Ford Transit đời mới máy lạnh mát sâu (+1.5tr)</div>
                    </div>
                  </label>

                  {/* Nước ngọt đá */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnNuocNgot}
                      onChange={(e) => setAddOnNuocNgot(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Trọn Gói Nước Ngọt, Bia, Đá & Khăn</div>
                      <div className="text-[11px] text-stone-300">+120.000đ/bàn (Phục vụ lạnh suốt tiệc)</div>
                    </div>
                  </label>

                  {/* Bàn ghế Tiffany */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnTiffany}
                      onChange={(e) => setAddOnTiffany(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Nâng Cấp Bàn Ghế Tiffany Nơ Lụa</div>
                      <div className="text-[11px] text-stone-300">+80.000đ/bàn (Ghế tiệc sang trọng chuẩn hoàng gia)</div>
                    </div>
                  </label>

                  {/* Âm thanh */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOnAmThanh}
                      onChange={(e) => setAddOnAmThanh(e.target.checked)}
                      className="mt-1 rounded accent-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-amber-100">Dàn Âm Thanh Ánh Sáng & MC Tiệc Cưới</div>
                      <div className="text-[11px] text-stone-300">MC dẫn lễ duyên dáng, ca nhạc phục vụ (+2.5tr)</div>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* RIGHT: Summary Bill & Action Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#3a060d] to-[#1f0206] border-2 border-amber-400/60 shadow-xl">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                    BẢNG DỰ TOÁN CHI PHÍ
                  </span>
                  <span className="text-xs text-stone-300">Cơ Sở Tuyến Ly</span>
                </div>

                {/* Bill Breakdown Items */}
                <div className="space-y-3 py-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">Tiền cỗ tiệc ({tableCount} bàn x {formatVND(pricePerTable)}):</span>
                    <span className="font-bold text-amber-100">{formatVND(foodTotal)}</span>
                  </div>

                  {addOnsTotal > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-stone-300">Dịch vụ rạp, xe & tiện ích kèm:</span>
                      <span className="font-bold text-amber-100">{formatVND(addOnsTotal)}</span>
                    </div>
                  )}

                  {discountAmount > 0 && (
                    <div className="flex items-center justify-between text-emerald-400">
                      <span className="flex items-center gap-1 font-semibold">
                        <Gift className="w-3.5 h-3.5" />
                        <span>Ưu đãi combo Tuyến Ly:</span>
                      </span>
                      <span className="font-black">-{formatVND(discountAmount)}</span>
                    </div>
                  )}
                </div>

                {/* Grand Total Highlight */}
                <div className="p-4 rounded-xl bg-black/60 border border-amber-400/40 my-3 text-center">
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
                    TỔNG CHI PHÍ DỰ KIẾN
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 gold-text-gradient">
                    {formatVND(grandTotal)}
                  </div>
                  <div className="text-[11px] text-stone-300 mt-1">
                    Trung bình chỉ khoảng: <strong className="text-amber-200">{formatVND(Math.round(grandTotal / tableCount))}</strong> / bàn
                  </div>
                </div>

                {/* Gifts & Guarantees */}
                <div className="space-y-1.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Miễn phí vận chuyển chén đĩa tại TT. Chợ Chùa & lân cận</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Tặng kèm pháo kim tuyến & tháp ly champagne cho tiệc cưới từ 15 bàn</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-amber-500/20">
                <button
                  onClick={handleBookNow}
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>ĐẶT TIỆC VỚI BẢNG DỰ TOÁN NÀY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyQuoteForZalo}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-amber-300 bg-stone-900/80 hover:bg-stone-900 border border-amber-400/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Đã sao chép! Hãy dán vào Zalo gửi Chị Ly</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Sao Chép Bảng Báo Giá Gửi Zalo Cho Chị Ly</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-stone-300 pt-1">
                  <span>Hoặc gọi trực tiếp:</span>
                  <a href={`tel:${BRAND_INFO.hotline1Raw}`} className="font-bold text-amber-400 underline">
                    {BRAND_INFO.hotline1}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
