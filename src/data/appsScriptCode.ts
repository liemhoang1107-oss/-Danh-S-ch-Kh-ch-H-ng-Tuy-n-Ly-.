/**
 * Mã nguồn Google Apps Script đồng bộ dữ liệu vào Google Sheets và tự động gửi Email xác nhận
 * Dịch Vụ Nấu Ăn – Xe Du Lịch – Cưới Hỏi Trọn Gói TUYẾN LY
 */
export const APPS_SCRIPT_CODE_TEMPLATE = `/**
 * GOOGLE APPS SCRIPT - TỰ ĐỘNG LƯU DATA VÀO GOOGLE SHEETS & GỬI EMAIL XÁC NHẬN
 * Dịch Vụ Nấu Ăn – Xe Du Lịch – Cưới Hỏi Trọn Gói TUYẾN LY
 * Hotline: 0935 777 205 - 0938 630 909
 * Địa chỉ: Phù Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 1. Tự động tạo hàng tiêu đề nếu trang tính còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian Gửi",
        "Họ và Tên",
        "Số Điện Thoại",
        "Email / Gmail",
        "Ngày Tổ Chức Tiệc",
        "Loại Hình Sự Kiện",
        "Số Bàn Dự Kiến",
        "Khu Vực Tổ Chức",
        "Dịch Vụ Chọn",
        "Ghi Chú Món Ăn / Yêu Cầu"
      ]);
      // Định dạng dòng tiêu đề: Nền đỏ nhung sang trọng, chữ vàng/trắng đậm
      sheet.getRange(1, 1, 1, 10)
        .setFontWeight("bold")
        .setBackground("#4a0710")
        .setFontColor("#ffd700")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 2. Phân tích dữ liệu gửi từ Web Form
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    var fullName = data.fullName || "Quý Khách Hàng";
    var phone = data.phone || "";
    var email = (data.email || "").trim();
    var eventDate = data.eventDate || "Chưa xác định";
    var eventType = data.eventType || "Tiệc Cưới";
    var tableCount = data.tableCount || 10;
    var location = data.location || "TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi";
    var services = Array.isArray(data.services) ? data.services.join(", ") : (data.services || "");
    var notes = data.notes || "";

    // 3. Ghi dữ liệu khách hàng vào dòng mới
    sheet.appendRow([
      timestamp,
      fullName,
      "'" + phone, // Dấu nháy đơn để giữ số 0 đầu tiên của SĐT
      email,
      eventDate,
      eventType,
      tableCount,
      location,
      services,
      notes
    ]);

    // 4. Tự động gửi Email xác nhận sang trọng tới Gmail khách hàng
    if (email && email.indexOf("@") !== -1) {
      try {
        sendConfirmationEmail(email, fullName, phone, eventDate, eventType, tableCount, location, services, notes);
      } catch (mailErr) {
        Logger.log("Lỗi gửi mail: " + mailErr);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Đã lưu thông tin và gửi email xác nhận thành công!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Tuyến Ly Google Sheets Web App đang hoạt động ổn định!");
}

/**
 * Gửi email xác nhận HTML sang trọng thương hiệu Tuyến Ly
 */
function sendConfirmationEmail(email, fullName, phone, eventDate, eventType, tableCount, location, services, notes) {
  var subject = "【TUYẾN LY】Xác Nhận Đặt Tiệc & Báo Giá - Chị Ly (0935 777 205)";

  var htmlBody = '<div style="font-family: Arial, Helvetica, sans-serif; max-width: 650px; margin: 0 auto; background-color: #240408; color: #f5f0eb; border-radius: 16px; overflow: hidden; border: 2px solid #d4af37; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">' +
    '<div style="background: linear-gradient(135deg, #4d0712, #6b0c1b); padding: 25px 20px; text-align: center; border-bottom: 2px solid #d4af37;">' +
      '<div style="color: #ffd700; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; margin-bottom: 6px;">Dịch Vụ Nấu Ăn – Xe Du Lịch – Cưới Hỏi Trọn Gói</div>' +
      '<h1 style="color: #ffd700; margin: 0; font-size: 32px; font-weight: 900; letter-spacing: 3px;">TUYẾN LY</h1>' +
      '<p style="color: #ffe4b5; margin: 6px 0 0 0; font-style: italic; font-size: 14px;">“Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc”</p>' +
    '</div>' +

    '<div style="padding: 25px 20px; background-color: #1a0306;">' +
      '<p style="font-size: 16px; color: #ffd700; margin-top: 0;"><strong>Kính chào Quý khách ' + fullName + ',</strong></p>' +
      '<p style="line-height: 1.6; color: #e5e5e5; font-size: 14px;">' +
        'Cơ sở <strong>Tuyến Ly (Chị Ly – Chủ Cơ Sở)</strong> xin chân thành cảm ơn Quý khách đã tin tưởng gửi thông tin đặt tiệc và yêu cầu báo giá. Chúng tôi đã nhận được thông tin và sẽ gọi điện qua số <strong>' + phone + '</strong> trong ít phút để tư vấn thực đơn chi tiết nhất!' +
      '</p>' +

      '<div style="background-color: #2b050b; border: 1px solid #d4af37; border-radius: 12px; padding: 18px; margin: 20px 0;">' +
        '<h3 style="color: #ffd700; margin-top: 0; margin-bottom: 12px; font-size: 15px; border-bottom: 1px solid #55121b; padding-bottom: 8px;">THÔNG TIN ĐẶT TIỆC ĐÃ GHI NHẬN:</h3>' +
        '<table style="width: 100%; font-size: 14px; color: #f5f0eb; border-collapse: collapse;">' +
          '<tr><td style="padding: 5px 0; width: 140px; color: #d4af37;"><strong>Họ và tên:</strong></td><td>' + fullName + '</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Số điện thoại:</strong></td><td><strong style="color: #ffd700;">' + phone + '</strong></td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Gmail / Email:</strong></td><td>' + email + '</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Ngày tổ chức:</strong></td><td>' + eventDate + '</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Loại hình tiệc:</strong></td><td>' + eventType + '</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Số bàn dự kiến:</strong></td><td>' + tableCount + ' bàn (~' + (tableCount * 10) + ' khách)</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Khu vực tổ chức:</strong></td><td>' + location + '</td></tr>' +
          '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Dịch vụ chọn:</strong></td><td>' + services + '</td></tr>' +
          (notes ? '<tr><td style="padding: 5px 0; color: #d4af37;"><strong>Ghi chú:</strong></td><td><em>' + notes + '</em></td></tr>' : '') +
        '</table>' +
      '</div>' +

      '<div style="text-align: center; margin: 25px 0 20px 0;">' +
        '<a href="tel:0935777205" style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffae19); color: #2a0409; font-weight: bold; padding: 12px 26px; border-radius: 30px; text-decoration: none; font-size: 14px; text-transform: uppercase;">' +
          '📞 Gọi Ngay Chị Ly: 0935 777 205' +
        '</a>' +
      '</div>' +

      '<div style="border-top: 1px solid #440d16; padding-top: 18px; font-size: 12px; color: #c4b5b7; line-height: 1.6;">' +
        '<p style="margin: 3px 0;">📍 <strong>Địa chỉ cơ sở:</strong> Phù Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi</p>' +
        '<p style="margin: 3px 0;">☎️ <strong>Hotline 24/7:</strong> 0935 777 205 – 0938 630 909</p>' +
        '<p style="margin: 3px 0;">🍲 <strong>Cam kết:</strong> 100% nguyên liệu tươi sạch · Nóng sốt tại chỗ · Rạp cưới nhung sang trọng · Xe rước dâu 4–45 chỗ</p>' +
      '</div>' +
    '</div>' +
  '</div>';

  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
`;
