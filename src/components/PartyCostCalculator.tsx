import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  Copy,
  Check,
  Phone,
  Sparkles,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Gift,
  Ticket,
  Info
} from 'lucide-react';
import {
  SAMPLE_SET_MENUS,
  BRAND_INFO,
  SetMenu,
  DishItem
} from '../data/cateringData';

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
  appliedSetMenu?: SetMenu | null;
}

export const PartyCostCalculator: React.FC<PartyCostCalculatorProps> = ({
  onOpenBookingWithData,
  customSelectedDishes,
  onRemoveCustomDish,
  appliedSetMenu,
}) => {
  const [tableCount, setTableCount] = useState<number>(10);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('combo-02');
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Sync when user clicks "NHẬN DỰ TOÁN & QUÀ TẶNG" on any combo card
  useEffect(() => {
    if (appliedSetMenu) {
      setSelectedPresetId(appliedSetMenu.id);
    }
  }, [appliedSetMenu]);

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

  // Find currently selected set menu combo if applicable
  const selectedCombo = useMemo(() => {
    return SAMPLE_SET_MENUS.find((s) => s.id === selectedPresetId);
  }, [selectedPresetId]);

  // Base price per table based on selection
  const pricePerTable = useMemo(() => {
    if (selectedPresetId === 'preset-custom') {
      if (customSelectedDishes.length === 0) {
        return 1950000;
      }
      return customSelectedDishes.reduce((sum, d) => sum + d.priceEstimate, 0);
    }
    return selectedCombo ? selectedCombo.pricePerTableNumber : 1950000;
  }, [selectedPresetId, selectedCombo, customSelectedDishes]);

  // Food total: Tổng thực đơn = Giá combo mỗi bàn × Số bàn
  const foodTotal = tableCount * pricePerTable;

  // Addons total: Chi phí dịch vụ phát sinh tính riêng
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

  // Voucher logic:
  // - Áp dụng tối đa 1 voucher giảm tiền
  // - Chỉ áp dụng khi đủ số bàn tối thiểu (tableCount >= minTables)
  // - Nếu khách giảm số bàn dưới ngưỡng, tự động tính lại (không áp dụng)
  const voucherInfo = useMemo(() => {
    if (!selectedCombo) return null;
    const isEligible = tableCount >= selectedCombo.voucher.minTables;
    return {
      isEligible,
      minTables: selectedCombo.voucher.minTables,
      discountAmount: isEligible ? selectedCombo.voucher.discountAmount : 0,
      discountFormatted: selectedCombo.voucher.discountFormatted,
      description: selectedCombo.voucher.description,
      tablesNeeded: Math.max(0, selectedCombo.voucher.minTables - tableCount),
    };
  }, [selectedCombo, tableCount]);

  const discountAmount = voucherInfo?.isEligible ? voucherInfo.discountAmount : 0;

  // Tiền dự kiến sau voucher = Tổng thực đơn − Voucher hợp lệ + Chi phí dịch vụ phát sinh
  const grandTotal = Math.max(0, foodTotal + addOnsTotal - discountAmount);

  // Selected menu title
  const currentMenuTitle = useMemo(() => {
    if (selectedPresetId === 'preset-custom') {
      if (customSelectedDishes.length > 0) {
        return `Thực đơn Tự chọn (${customSelectedDishes.length} món)`;
      }
      return 'Thực đơn Tự chọn Tuyến Ly';
    }
    return selectedCombo ? `${selectedCombo.code} – ${selectedCombo.name}` : 'Thực đơn Tuyến Ly';
  }, [selectedPresetId, selectedCombo, customSelectedDishes]);

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
- Quy mô tiệc: ${tableCount} bàn (~${tableCount * 10} khách)
- Gói thực đơn: ${currentMenuTitle}
- Tiền thực đơn tạm tính: ${formatVND(foodTotal)} (${formatVND(pricePerTable)}/bàn)
${selectedCombo ? `- Quà tặng kèm theo: ${selectedCombo.gift.title}` : ''}
${discountAmount > 0 ? `- Voucher ưu đãi áp dụng: -${formatVND(discountAmount)} (${selectedCombo?.voucher.description})` : ''}
${selectedAddOnNames.length > 0 ? `- Dịch vụ kèm theo:\n  + ${selectedAddOnNames.join('\n  + ')}\n  => Chi phí dịch vụ: ${formatVND(addOnsTotal)}` : ''}
- TỔNG DỰ KIẾN SAU VOUCHER: ${formatVND(grandTotal)}
(Giá tham khảo cho bàn 10 khách. Dịch vụ đi kèm và giá cuối cùng được xác nhận theo từng hợp đồng từ Tuyến Ly).
Nhờ Chị Ly (${BRAND_INFO.hotline1}) tư vấn chi tiết và giữ ngày giúp tôi!`;

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
      notes: `Dự toán ước tính: ${formatVND(grandTotal)} cho ${tableCount} bàn (${currentMenuTitle})${selectedCombo ? ` | Quà tặng: ${selectedCombo.gift.title}` : ''}${discountAmount > 0 ? ` | Voucher: -${formatVND(discountAmount)}` : ''}`,
    });
  };

  return (
    <section id="du-toan" className="py-16 sm:py-20 bg-stone-50/80 text-slate-800 relative overflow-hidden border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-red-600" />
            <span>Minh Bạch – Chuẩn Xác – Không Phát Sinh</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Dự Toán Bàn Tiệc & Chi Phí Trọn Gói
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Công cụ trực quan giúp quý khách dễ dàng tính toán ngân sách tiệc cưới theo đúng số lượng bàn, combo thực đơn và ưu đãi quà tặng – voucher từ Tuyến Ly.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-stone-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: Inputs & Choices (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Số lượng bàn tiệc */}
              <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white text-xs font-black flex items-center justify-center">1</span>
                    <span>Quy mô tiệc (Số lượng bàn):</span>
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-red-700">
                    {tableCount} Bàn <span className="text-xs font-normal text-slate-500">(~{tableCount * 10} khách)</span>
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
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />

                {/* Quick table presets */}
                <div className="flex flex-wrap gap-2 mt-3 pt-2.5 border-t border-stone-200">
                  {[5, 10, 15, 20, 25, 30, 50].map((count) => (
                    <button
                      key={count}
                      onClick={() => setTableCount(count)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        tableCount === count
                          ? 'bg-red-700 text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {count} bàn
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Chọn Thực Đơn Tiệc */}
              <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white text-xs font-black flex items-center justify-center">2</span>
                    <span>Gói Thực Đơn Áp Dụng:</span>
                  </label>
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    Chọn combo hoặc tự phối món
                  </span>
                </div>

                {/* Combos Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {SAMPLE_SET_MENUS.map((menu) => {
                    const isSelected = selectedPresetId === menu.id;
                    const isRecommended = Boolean(menu.isRecommended);

                    return (
                      <button
                        key={menu.id}
                        type="button"
                        onClick={() => setSelectedPresetId(menu.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          isSelected
                            ? 'border-red-600 bg-red-50/80 text-slate-900 shadow-md ring-2 ring-red-200'
                            : isRecommended
                            ? 'border-red-300 bg-white hover:border-red-400'
                            : 'border-stone-200 bg-white text-slate-700 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span
                            className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isRecommended
                                ? 'bg-red-700 text-white'
                                : menu.badge === 'TIẾT KIỆM'
                                ? 'bg-emerald-700 text-white'
                                : menu.badge === 'TIỆC CƯỚI VIP'
                                ? 'bg-purple-900 text-amber-200'
                                : 'bg-amber-600 text-white'
                            }`}
                          >
                            {menu.badge}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            {menu.code}
                          </span>
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                          {menu.name}
                        </div>
                        <div className="text-xs text-red-700 mt-1 font-black">
                          {menu.pricePerTableNumber.toLocaleString('vi-VN')}đ <span className="text-[10px] text-slate-500 font-normal">/ bàn</span>
                        </div>
                      </button>
                    );
                  })}

                  {/* Preset: Tự phối món theo poster */}
                  <button
                    type="button"
                    onClick={() => setSelectedPresetId('preset-custom')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedPresetId === 'preset-custom'
                        ? 'border-red-600 bg-red-50/80 text-slate-900 shadow-md ring-2 ring-red-200'
                        : 'border-stone-200 bg-white text-slate-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-white">
                        TỰ PHỐI MÓN
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {customSelectedDishes.length} món
                      </span>
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                      Thực đơn tự chọn riêng
                    </div>
                    <div className="text-xs text-red-700 mt-1 font-black">
                      {formatVND(pricePerTable)} <span className="text-[10px] text-slate-500 font-normal">/ bàn</span>
                    </div>
                  </button>
                </div>

                {/* Details of Selected Combo: Quà tặng, Voucher, 6 món */}
                {selectedCombo && (
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                      <div>
                        <div className="text-xs font-bold text-red-700 uppercase tracking-wide">
                          Chi tiết {selectedCombo.code} – {selectedCombo.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {selectedCombo.tagline}
                        </div>
                      </div>
                      <span className="text-xs font-black text-slate-800 bg-stone-100 px-2.5 py-1 rounded-lg shrink-0">
                        Giá: {selectedCombo.pricePerTable}
                      </span>
                    </div>

                    {/* Gifts & Voucher status banner */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {/* Quà tặng */}
                      <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-2.5">
                        <Gift className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-amber-900 block text-[11px] uppercase">Quà tặng dành riêng:</span>
                          <span className="font-bold text-slate-900 text-xs">{selectedCombo.gift.title}</span>
                        </div>
                      </div>

                      {/* Voucher status */}
                      <div className={`p-2.5 rounded-xl border flex items-start gap-2.5 ${
                        voucherInfo?.isEligible
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-rose-50 border-rose-200 text-rose-900'
                      }`}>
                        <Ticket className={`w-4 h-4 shrink-0 mt-0.5 ${voucherInfo?.isEligible ? 'text-emerald-700' : 'text-rose-600'}`} />
                        <div>
                          <span className="font-extrabold block text-[11px] uppercase">
                            {voucherInfo?.isEligible ? 'Voucher Đã Kích Hoạt:' : 'Voucher Ưu Đãi:'}
                          </span>
                          {voucherInfo?.isEligible ? (
                            <span className="font-bold text-emerald-800 text-xs">
                              Đã áp dụng giảm {voucherInfo.discountFormatted} cho tiệc {tableCount} bàn!
                            </span>
                          ) : (
                            <span className="font-medium text-rose-700 text-xs">
                              Cần từ {selectedCombo.voucher.minTables} bàn để giảm {selectedCombo.voucher.discountFormatted} (chỉ cần thêm {voucherInfo?.tablesNeeded} bàn nữa).
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 6 dishes in combo */}
                    <div className="pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        6 món ăn trong bàn tiệc:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                        {selectedCombo.dishes.map((d, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Show Selected Dishes list if custom */}
                {selectedPresetId === 'preset-custom' && (
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                    <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center justify-between">
                      <span>Các món bạn đã chọn ({customSelectedDishes.length} món):</span>
                      <a href="#thuc-don" className="text-red-700 font-bold underline hover:text-red-800 text-[11px]">
                        + Chọn thêm món từ thực đơn
                      </a>
                    </div>
                    {customSelectedDishes.length === 0 ? (
                      <p className="text-xs text-slate-500 italic">
                        Chưa chọn món nào. Vui lòng bấm vào phần Thực đơn phía trên để chọn món cho bàn tiệc của bạn.
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {customSelectedDishes.map((dish) => (
                          <span
                            key={dish.id}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-xs text-slate-800 border border-stone-200 font-medium"
                          >
                            <span>{dish.name}</span>
                            <button
                              onClick={() => onRemoveCustomDish(dish.id)}
                              className="text-stone-400 hover:text-red-600 cursor-pointer"
                              title="Xóa món"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Step 3: Dịch vụ kèm theo */}
              <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200">
                <label className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-red-700 text-white text-xs font-black flex items-center justify-center">3</span>
                  <span>Dịch Vụ Kèm Theo (Tùy chọn):</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  {/* Rạp cưới */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnRapCuoi}
                      onChange={(e) => setAddOnRapCuoi(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Rạp Cưới Nhung Đỏ / Xanh + Cổng Hoa</div>
                      <div className="text-[11px] text-slate-500">Trọn gói hệ thống rạp, đèn chùm, phông rèm (+3.5tr)</div>
                    </div>
                  </label>

                  {/* Xe hoa */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnXeHoa}
                      onChange={(e) => setAddOnXeHoa(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Xe Hoa 4 Chỗ Rước Dâu Cao Cấp</div>
                      <div className="text-[11px] text-slate-500">Mazda/Camry kết hoa cưới trọn gói (+1.8tr)</div>
                    </div>
                  </label>

                  {/* Xe 16 chỗ */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnXe16Cho}
                      onChange={(e) => setAddOnXe16Cho(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Xe 16 Chỗ Đưa Đón Hai Họ</div>
                      <div className="text-[11px] text-slate-500">Ford Transit đời mới máy lạnh mát sâu (+1.5tr)</div>
                    </div>
                  </label>

                  {/* Nước ngọt đá */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnNuocNgot}
                      onChange={(e) => setAddOnNuocNgot(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Trọn Gói Nước Ngọt, Bia, Đá & Khăn</div>
                      <div className="text-[11px] text-slate-500">+120.000đ/bàn (Phục vụ lạnh suốt tiệc)</div>
                    </div>
                  </label>

                  {/* Bàn ghế Tiffany */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnTiffany}
                      onChange={(e) => setAddOnTiffany(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Nâng Cấp Bàn Ghế Tiffany Nơ Lụa</div>
                      <div className="text-[11px] text-slate-500">+80.000đ/bàn (Ghế tiệc sang trọng chuẩn hoàng gia)</div>
                    </div>
                  </label>

                  {/* Âm thanh */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-red-300 cursor-pointer shadow-2xs">
                    <input
                      type="checkbox"
                      checked={addOnAmThanh}
                      onChange={(e) => setAddOnAmThanh(e.target.checked)}
                      className="mt-1 rounded accent-red-600 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">Dàn Âm Thanh Ánh Sáng & MC Tiệc Cưới</div>
                      <div className="text-[11px] text-slate-500">MC dẫn lễ duyên dáng, ca nhạc phục vụ (+2.5tr)</div>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* RIGHT: Summary Bill & Action Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#8a1220] via-[#a31526] to-[#6b0b16] text-white shadow-xl border border-red-700">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-xs uppercase tracking-widest text-amber-200 font-bold">
                    BẢNG DỰ TOÁN CHI PHÍ
                  </span>
                  <span className="text-xs text-rose-100 font-medium">Cơ Sở Tuyến Ly</span>
                </div>

                {/* Bill Breakdown Items */}
                <div className="space-y-3 py-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-rose-100">Tiền cỗ tiệc ({tableCount} bàn x {formatVND(pricePerTable)}):</span>
                    <span className="font-bold text-white">{formatVND(foodTotal)}</span>
                  </div>

                  {/* Quà tặng kèm theo */}
                  {selectedCombo && (
                    <div className="flex items-start justify-between text-amber-200 gap-2">
                      <span className="flex items-center gap-1 font-medium shrink-0">
                        <Gift className="w-3.5 h-3.5 text-amber-300" />
                        <span>Quà tặng kèm theo:</span>
                      </span>
                      <span className="font-bold text-right text-xs">
                        {selectedCombo.gift.title} (Miễn phí)
                      </span>
                    </div>
                  )}

                  {/* Voucher giảm giá */}
                  {selectedCombo && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-rose-100">
                        <Ticket className="w-3.5 h-3.5 text-amber-300" />
                        <span>Voucher ưu đãi:</span>
                      </span>
                      {discountAmount > 0 ? (
                        <span className="font-black text-amber-300">
                          -{formatVND(discountAmount)}
                        </span>
                      ) : (
                        <span className="text-[11px] text-rose-200 italic">
                          Chưa áp dụng (cần từ {selectedCombo.voucher.minTables} bàn)
                        </span>
                      )}
                    </div>
                  )}

                  {addOnsTotal > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-rose-100">Dịch vụ rạp, xe & tiện ích kèm:</span>
                      <span className="font-bold text-white">{formatVND(addOnsTotal)}</span>
                    </div>
                  )}
                </div>

                {/* Grand Total Highlight */}
                <div className="p-4 rounded-xl bg-black/35 border border-amber-300/40 my-3 text-center backdrop-blur-sm">
                  <div className="text-xs text-amber-200 font-bold uppercase tracking-wider mb-1">
                    TỔNG CHI PHÍ DỰ KIẾN SAU VOUCHER
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">
                    {formatVND(grandTotal)}
                  </div>
                  <div className="text-[11px] text-rose-100 mt-1">
                    Trung bình chỉ khoảng: <strong className="text-white">{formatVND(Math.round(grandTotal / tableCount))}</strong> / bàn
                  </div>
                </div>

                {/* Disclaimer & Notice */}
                <div className="space-y-2 p-3 rounded-lg bg-black/25 border border-white/15 text-[11px] text-rose-100">
                  <div className="flex items-start gap-1.5 leading-relaxed">
                    <Info className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                    <span>Giá tham khảo cho bàn 10 khách. Dịch vụ đi kèm và giá cuối cùng được xác nhận theo từng hợp đồng từ Tuyến Ly.</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-amber-200 pt-0.5 border-t border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>Miễn phí vận chuyển chén đĩa & bàn ghế tại TT. Chợ Chùa & lân cận</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-white/20">
                <button
                  onClick={handleBookNow}
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-200 hover:to-yellow-200 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>ĐẶT TIỆC VỚI BẢNG DỰ TOÁN NÀY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyQuoteForZalo}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-amber-200 bg-black/40 hover:bg-black/60 border border-amber-300/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span className="text-emerald-200">Đã sao chép! Hãy dán vào Zalo gửi Chị Ly</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-300" />
                      <span>Sao Chép Bảng Báo Giá Gửi Zalo Cho Chị Ly</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-rose-100 pt-1">
                  <span>Hoặc gọi trực tiếp:</span>
                  <a href={`tel:${BRAND_INFO.hotline1Raw}`} className="font-bold text-amber-300 underline">
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

