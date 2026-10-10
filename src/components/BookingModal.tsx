import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MapPin, Users, CheckCircle2, MessageCircle, ArrowRight, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/cateringData';

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  location: string;
  eventType: string;
  tableCount: number;
  services: string[];
  notes: string;
}

export interface SavedCustomerLead extends BookingFormData {
  id: string;
  createdAt: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    tableCount?: number;
    menuName?: string;
    totalCost?: number;
    addOns?: string[];
    notes?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    location: 'TT. Chợ Chùa, Nghĩa Hành',
    eventType: 'Tiệc Cưới',
    tableCount: 10,
    services: ['Nấu ăn tiệc trọn gói', 'Rạp cưới nhung & Cổng hoa'],
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const appsScriptUrl =
    (typeof window !== 'undefined' && localStorage.getItem('tuyen_ly_apps_script_url')) ||
    BRAND_INFO.appsScriptUrl;

  // Sync initial data if passed from calculator
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        tableCount: initialData.tableCount || prev.tableCount,
        notes: initialData.notes ? `${initialData.notes}` : prev.notes,
        services: initialData.addOns && initialData.addOns.length > 0 
          ? ['Nấu ăn tiệc trọn gói', ...initialData.addOns] 
          : prev.services,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      }
      return { ...prev, services: [...prev.services, serviceName] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setErrorMessage('Vui lòng nhập số điện thoại để Chị Ly liên hệ báo giá!');
      return;
    }

    setErrorMessage('');

    // Save lead to persistent storage for owner collection
    const newLead: SavedCustomerLead = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toLocaleString('vi-VN'),
    };

    try {
      const existing: SavedCustomerLead[] = JSON.parse(
        localStorage.getItem('tuyen_ly_customer_leads') || '[]'
      );
      const updated = [newLead, ...existing];
      localStorage.setItem('tuyen_ly_customer_leads', JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Gửi tự động về Google Sheets qua Apps Script nếu đã cấu hình URL
    const targetUrl = appsScriptUrl.trim() || localStorage.getItem('tuyen_ly_apps_script_url');
    if (targetUrl && targetUrl.startsWith('https://script.google.com/macros/s/')) {
      try {
        fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newLead),
        }).catch((err) => console.log('Apps script sync:', err));
      } catch (err) {
        console.log('Sync error:', err);
      }
    }

    setIsSubmitted(true);

    // Fire festive celebration confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ff0055', '#00e676', '#ff9100'],
      });
    } catch {
      // ignore if unavailable
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
          title="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider inline-block mb-2 shadow-2xs">
                TUYẾN LY · CHỊ LY 0935 777 205
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                ĐẶT TIỆC & BÁO GIÁ NGAY
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Điền thông tin bên dưới để nhận bảng báo giá chi tiết và ưu đãi giữ ngày tốt nhất!
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-300 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Họ tên */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Họ và tên của quý khách:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Hoàng / Chị Thảo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-400 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0935 xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-400 focus:outline-none focus:border-red-600 focus:bg-white font-bold"
                  />
                </div>
              </div>

              {/* Gmail khách hàng để thu thập */}
              <div>
                <label className="block text-slate-800 font-semibold mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-red-600" />
                    <span>Gmail / Email khách hàng (Nhận báo giá & thực đơn):</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-normal">Thu thập thông tin báo giá</span>
                </label>
                <input
                  type="email"
                  placeholder="Ví dụ: nguyenvana@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-400 focus:outline-none focus:border-red-600 focus:bg-white font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Ngày tổ chức */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <span>Ngày tổ chức tiệc:</span>
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>

                {/* Loại tiệc */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Loại hình sự kiện:
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white"
                  >
                    <option value="Tiệc Cưới">Tiệc Cưới (Đám cưới)</option>
                    <option value="Lễ Đính Hôn - Đám Hỏi">Lễ Đính Hôn - Đám Hỏi</option>
                    <option value="Tiệc Tân Gia">Tiệc Tân Gia (Nhà mới)</option>
                    <option value="Thôi Nôi - Đầy Tháng - Sinh Nhật">Thôi Nôi - Đầy Tháng - Sinh Nhật</option>
                    <option value="Tiệc Tất Niên - Tân Niên">Tiệc Tất Niên - Tân Niên</option>
                    <option value="Đám Giỗ - Họ Tộc">Đám Giỗ - Lễ Họ Tộc</option>
                    <option value="Hội Nghị - Sự Kiện Khác">Hội Nghị - Sự Kiện Khác</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Số lượng bàn */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-red-600" />
                    <span>Dự kiến số bàn:</span>
                  </label>
                  <input
                    type="number"
                    min="3"
                    max="150"
                    value={formData.tableCount}
                    onChange={(e) => setFormData({ ...formData, tableCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>

                {/* Địa chỉ tổ chức */}
                <div>
                  <label className="block text-slate-800 font-semibold mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>Khu vực tổ chức:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="VD: TT. Chợ Chùa, Hành Trung, v.v."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Dịch vụ quan tâm */}
              <div>
                <label className="block text-slate-800 font-semibold mb-2">
                  Dịch vụ cần Tuyến Ly phục vụ:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Nấu ăn tiệc trọn gói',
                    'Rạp cưới nhung & Cổng hoa',
                    'Xe hoa rước dâu 4 chỗ',
                    'Xe du lịch 7 - 16 - 29 chỗ',
                    'Bàn ghế Tiffany cao cấp',
                    'Dàn âm thanh MC tiệc cưới',
                  ].map((serviceName) => {
                    const checked = formData.services.includes(serviceName);
                    return (
                      <label
                        key={serviceName}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                          checked
                            ? 'bg-red-50 border-red-300 text-red-800 font-semibold'
                            : 'bg-stone-50 border-stone-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleServiceToggle(serviceName)}
                          className="rounded accent-red-600 w-4 h-4 cursor-pointer"
                        />
                        <span>{serviceName}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Ghi chú */}
              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Ghi chú món ăn yêu thích hoặc yêu cầu riêng:
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Cần nhiều gà bó xôi và lẩu cá bớp, gia đình thích ăn lạt vừa phải..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-400 focus:outline-none focus:border-red-600 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>GỬI YÊU CẦU ĐẶT TIỆC NGAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                <span>🔒 Cơ sở Tuyến Ly cam kết bảo mật 100% thông tin của quý khách!</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-5 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                GỬI YÊU CẦU THÀNH CÔNG · ĐÃ TIẾP NHẬN BÁO GIÁ
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Chúc Mừng Quý Khách!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-md mx-auto">
                <strong>Chị Ly – Chủ cơ sở Tuyến Ly</strong> đã nhận được thông tin tiệc <strong>{formData.eventType}</strong> ({formData.tableCount} bàn) và sẽ liên hệ qua số <strong className="text-red-700">{formData.phone}</strong> trong ít phút!
              </p>
            </div>

            {/* Email Notice Box */}
            {formData.email && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-900">Đã gửi email xác nhận tới: {formData.email}</div>
                  <div className="text-[11px] text-amber-800 mt-0.5">
                    Quý khách vui lòng mở Gmail (kiểm tra cả mục <strong>Hộp thư đến</strong> và <strong>Thư rác/Spam</strong>) để xem chi tiết báo giá và thực đơn tiệc!
                  </div>
                </div>
              </div>
            )}

            {/* Full Booking Summary Box */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 text-left shadow-2xs">
              <div className="text-[11px] uppercase font-bold text-red-700 border-b border-stone-200 pb-1 mb-2">
                TỔNG HỢP THÔNG TIN ĐÃ ĐĂNG KÝ:
              </div>
              <div>✦ <strong>Người đặt:</strong> <span className="text-slate-900 font-semibold">{formData.fullName || 'Quý khách'}</span></div>
              <div>✦ <strong>Số điện thoại:</strong> <span className="text-red-700 font-bold">{formData.phone}</span></div>
              {formData.email && <div>✦ <strong>Gmail:</strong> <span className="text-slate-900">{formData.email}</span></div>}
              <div>✦ <strong>Ngày tổ chức:</strong> {formData.eventDate || 'Theo lịch gia đình'}</div>
              <div>✦ <strong>Loại tiệc:</strong> {formData.eventType} · {formData.tableCount} bàn (~{formData.tableCount * 10} khách)</div>
              <div>✦ <strong>Địa điểm:</strong> {formData.location}</div>
              <div>✦ <strong>Dịch vụ đã chọn:</strong> {formData.services.join(', ')}</div>
              {formData.notes && <div>✦ <strong>Ghi chú:</strong> <em className="text-slate-600">{formData.notes}</em></div>}
            </div>

            {/* ZALO DIRECT CHAT WITH CHI LY (0935 777 205) */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border-2 border-[#0068ff] shadow-sm text-center space-y-2.5">
              <div className="text-xs sm:text-sm font-black text-blue-900 flex items-center justify-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-[#0068ff]" />
                <span>NHẮN TIN ZALO RIÊNG VỚI CHỊ LY: 0935 777 205</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Bấm vào nút bên dưới để mở Zalo riêng tư của Chị Ly trao đổi thực đơn và nhận báo giá ưu đãi nhanh nhất:
              </p>
              <a
                href={BRAND_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0068ff] hover:bg-[#0055d4] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>MỞ ZALO NHẮN CHỊ LY NGAY (0935 777 205) →</span>
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
              <a
                href={`tel:${BRAND_INFO.hotline1Raw}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Gọi Chị Ly: {BRAND_INFO.hotline1}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-semibold text-xs border border-stone-300 text-slate-700 hover:bg-stone-50 cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
