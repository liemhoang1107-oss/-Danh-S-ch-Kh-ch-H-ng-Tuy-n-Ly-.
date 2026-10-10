export interface DishItem {
  id: string;
  name: string;
  category: 'khai_vi' | 'mon_chinh' | 'lau' | 'trang_mieng';
  featuredPoster?: boolean;
  tag: string;
  desc: string;
  image: string;
  priceEstimate: number; // VNĐ per table equivalent
}

export interface SetMenu {
  id: string;
  code: string;
  name: string;
  tagline: string;
  badge: string;
  isRecommended?: boolean;
  pricePerTable: string;
  pricePerTableNumber: number;
  highlight: string;
  dishes: string[];
  gift: {
    title: string;
    description: string;
  };
  voucher: {
    discountAmount: number;
    discountFormatted: string;
    minTables: number;
    description: string;
  };
  conditionShort: string;
}

export interface WeddingService {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  iconName: string;
  features: string[];
  bannerImg: string;
  gallery: { title: string; desc: string; img: string }[];
}

export interface TransportVehicle {
  id: string;
  name: string;
  seats: string;
  type: string;
  suitableFor: string;
  features: string[];
  image: string;
  badge?: string;
}

export const BRAND_INFO = {
  fullName: "Dịch Vụ Nấu Ăn – Xe Du Lịch – Cưới Hỏi Trọn Gói TUYẾN LY",
  shortName: "TUYẾN LY",
  owner: "Chị Ly – Chủ Cơ Sở",
  ownerTitle: "Chủ Cơ Sở Dịch Vụ Cưới Hỏi & Nấu Ăn Tuyến Ly",
  slogan: "Trọn Vẹn Ngày Vui – Đậm Độc Bản Sắc",
  hotline1: "0935 777 205",
  hotline1Raw: "0935777205",
  hotline2: "0938 630 909",
  hotline2Raw: "0938630909",
  address: "Phú Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3852.909193361102!2d108.77888379999999!3d15.0531381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDAzJzExLjMiTiAxMDjCsDQ2JzQ0LjAiRQ!5e0!3m2!1svi!2s!4v1791555375793!5m2!1svi!2s",
  mapDirectionsUrl: "https://www.google.com/maps?q=15.0531381,108.7788838",
  coordinates: "15°03'11.3\"N 108°46'44.0\"E",
  ownerAvatar: "https://i.ibb.co/5WkSQ965/IMG-5866.jpg",
  zaloUrl: "https://zalo.me/0935777205",
  zaloGroupUrl: "https://zalo.me/g/fexgdy165",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzYz7dMwqgXyUuiMmNuGpOxTRFw-eM3n3kJrbCjvQ9GU-D3V1iqV4eSYDlq0ETq5EY/exec",
  experienceYears: 15,
  servicedEvents: "2,500+",
  servingArea: "TT. Chợ Chùa, Huyện Nghĩa Hành, TP. Quảng Ngãi và các huyện lân cận",
  workingHours: "Phục vụ 24/7 tất cả các ngày trong tuần (Kể cả ngày Lễ & Tết)",
};

// Danh sách các món tiệc tiêu biểu tích hợp chuẩn xác theo poster Tuyến Ly
export const POSTER_FEATURED_DISHES: DishItem[] = [
  {
    id: 'khai-vi-ngu-sac',
    name: 'Khai vị ngũ sắc / Tứ quý',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Mâm khai vị ngũ sắc tinh tế, bài trí sang trọng đánh thức trọn vẹn vị giác với các món khai vị tuyển chọn.',
    image: 'https://i.ibb.co/pr6mjSCT/IMG-5910.jpg',
    priceEstimate: 320000,
  },
  {
    id: 'ga-bo-xoi',
    name: 'Gà bó xôi / Gà lên mâm',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Đặc Sản Nổi Tiếng',
    desc: 'Gà ta thả vườn đồi Nghĩa Hành thịt thơm dai ngọt, bọc lớp xôi nếp dẻo thơm chiên vàng phồng giòn rụm tròn vị.',
    image: 'https://i.ibb.co/5xh5LPL6/IMG-5908.jpg',
    priceEstimate: 380000,
  },
  {
    id: 'bo-nhung-dam',
    name: 'Bò nhúng dấm',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Bò tơ mềm ngọt nhúng nước dùng dấm thảo mộc thanh dịu, cuốn bánh tráng Đại Lộc cùng rau sống non tươi chấm mắm nêm đậm đà vị xứ Quảng.',
    image: 'https://i.ibb.co/5X3T0Gxr/IMG-5912.jpg',
    priceEstimate: 360000,
  },
  {
    id: 'bo-tai-chanh',
    name: 'Bò tái chanh',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Thịt bò tơ tươi thái lát mỏng tái chanh thanh mát chua ngọt, hành tây ngâm giòn, mè rang và đậu phộng bùi béo, ăn kèm bánh phồng tôm giòn rụm.',
    image: 'https://i.ibb.co/21MLL88p/IMG-5911.jpg',
    priceEstimate: 350000,
  },
  {
    id: 'lagu-bo',
    name: 'Lagu bò + Bánh mì',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Thịt bắp bò hầm chín mềm ngậy sốt cà vang sánh mịn, khoai tây bùi béo, cà rốt ngọt thanh, ăn kèm bánh mì nóng giòn rụm thơm lừng.',
    image: 'https://i.ibb.co/bGqt6BG/IMG-5913.jpg',
    priceEstimate: 340000,
  },
  {
    id: 'lau-ca-bop',
    name: 'Lẩu cá bớp + Bún',
    category: 'lau',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Cá bớp tươi phi lê chắc thịt béo ngọt cùng nước dùng chua cay măng chua đặc sắc xứ Quảng và bún tươi trắng ngần.',
    image: 'https://i.ibb.co/G40r8ysk/IMG-5906.jpg',
    priceEstimate: 420000,
  },
  {
    id: 'lau-hai-san',
    name: 'Lẩu hải sản thập cẩm + Bún',
    category: 'lau',
    featuredPoster: true,
    tag: 'Hải Sản Tươi Sống',
    desc: 'Nồi lẩu hải sản thập cẩm đầy ắp tôm tươi ngọt thịt, mực giòn sần sật, nghêu tươi ngọt nước lẩu chua cay đậm đà, ăn kèm bún tươi và rau nấm thanh mát.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 450000,
  },
  {
    id: 'goi-sua-dac-biet',
    name: 'Gỏi sứa đặc biệt',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Khai Vị Trứ Danh',
    desc: 'Sứa biển giòn sần sật trộn xoài xanh, dưa chuột thái sợi, tai heo giòn rụm, rau thơm, mè rang và nước sốt chua cay ngọt đậm đà đánh thức trọn vẹn vị giác.',
    image: 'https://i.ibb.co/XMh6t7Z/IMG-5914.jpg',
    priceEstimate: 300000,
  },
  {
    id: 'goi-ngo-sen-tom',
    name: 'Gỏi ngó sen tôm',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Ngó sen tươi trắng giòn trộn tôm sú đỏ au, thịt ba chỉ luộc thái sợi mỏng, rau răm thơm cay và nước cốt mắm chua ngọt đặc chế Tuyến Ly ăn kèm phồng tôm giòn tan.',
    image: 'https://i.ibb.co/gZCcff0v/IMG-5916.jpg',
    priceEstimate: 310000,
  },
  {
    id: 'goi-hoa-chuoi',
    name: 'Gỏi hoa chuối',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Hương Vị Quê Hương',
    desc: 'Bắp hoa chuối tây bào mỏng giữ trọn độ giòn tự nhiên, bóp thấu cùng thịt gà ta xé phay giòn sần sật, đậu phộng rang bùi béo và nước chấm tỏi ớt chua ngọt thơm nồng.',
    image: 'https://i.ibb.co/Nd0Hy7TN/IMG-5917.jpg',
    priceEstimate: 280000,
  },
  {
    id: 'trang-mieng-trai-cay',
    name: 'Tráng miệng trái cây 4 mùa',
    category: 'trang_mieng',
    featuredPoster: true,
    tag: 'Tươi Mát Tròn Vị',
    desc: 'Đĩa tráng miệng tỉa hoa cầu kỳ với dưa hấu mát ngọt, bưởi da xanh tép hồng mọng nước, nho Mỹ và thanh long trắng đỏ thanh lọc vị giác.',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 160000,
  },
  // Món có hình ảnh thực tế từ Chị Ly
  {
    id: 'banh-hoi-heo-quay',
    name: 'Bánh hỏi thịt heo quay',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Thịt heo quay da giòn rụm màu hổ phách, nạc mỡ đan xen mềm thơm không ngấy, ăn kèm bánh hỏi xức mỡ hẹ xanh mướt, rau sống tươi non và nước mắm chua ngọt đặc chế.',
    image: 'https://i.ibb.co/RTR3dFV6/IMG-5918.jpg',
    priceEstimate: 350000,
  },
  {
    id: 'sup-ga-ngu-qua',
    name: 'Súp gà rau ngũ quả',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Khai Vị Thanh Ngọt',
    desc: 'Món súp khai vị nóng hổi bổ dưỡng với thịt gà ta xé sợi nhỏ ngọt lịm, nấm tuyết, hạt sen, bắp ngọt và rau củ quả thanh mát sánh mịn dịu ngọt vị tự nhiên.',
    image: 'https://i.ibb.co/0VVSsn6p/IMG-5920.webp',
    priceEstimate: 290000,
  },
  // Món bổ sung phong phú
  {
    id: 'tom-su-hap-dua',
    name: 'Tôm sú hấp trái dừa tươi',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Hải Sản Cao Cấp',
    desc: 'Tôm sú loại 1 tươi rói hấp trực tiếp trong nước dừa tươi ngọt lịm, thịt tôm giòn ngọt chắc nịch chấm muối ớt xanh thơm cay nồng.',
    image: 'https://i.ibb.co/LMdGh7F/IMG-5907.jpg',
    priceEstimate: 370000,
  },
  {
    id: 'heo-quay-banh-hoi',
    name: 'Heo quay da giòn + Bánh hỏi lá hẹ',
    category: 'mon_chinh',
    tag: 'Truyền Thống Tiệc Cưới',
    desc: 'Heo quay vàng ruộm da giòn tan như bánh quy, mỡ nạc đan xen thơm nức, ăn kèm bánh hỏi xức mỡ hẹ xanh mướt và nước mắm chua ngọt.',
    image: 'https://i.ibb.co/RTR3dFV6/IMG-5918.jpg',
    priceEstimate: 350000,
  },
  {
    id: 'che-hat-sen-long-nhan',
    name: 'Chè hạt sen long nhãn',
    category: 'trang_mieng',
    tag: 'Tráng Miệng Thanh Tao',
    desc: 'Hạt sen tươi hầm bở bùi lồng trong cùi nhãn ngọt thanh, nước đường phèn lá dứa thanh mát giải nhiệt hoàn hảo.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 180000,
  }
];

// Các bộ thực đơn trọn gói định sẵn
export const SAMPLE_SET_MENUS: SetMenu[] = [
  {
    id: 'combo-01',
    code: 'COMBO 01',
    name: 'ĐẦM ẤM SUM VẦY',
    tagline: 'Tiệc cưới đầm ấm – Ngân sách tối ưu',
    badge: 'TIẾT KIỆM',
    pricePerTable: '1.750.000đ / bàn 10 khách',
    pricePerTableNumber: 1750000,
    highlight: 'Hương vị đậm đà miền Trung, món ăn chỉn chu, mộc mạc mà đầm ấm nghĩa tình',
    dishes: [
      'Gỏi hoa chuối bóp thịt gà ta giòn cay thơm nồng.',
      'Chả giò phượng hoàng chiên giòn.',
      'Heo quay da giòn ăn kèm bánh hỏi.',
      'Lagu bò hầm khoai tây + bánh mì đặc ruột.',
      'Lẩu hải sản tôm mực bắp non + bún tươi.',
      'Rau câu tam sắc thanh mát.'
    ],
    gift: {
      title: 'Thiệp cảm ơn điện tử cá nhân hóa',
      description: 'Thiết kế riêng cho đôi uyên ương gửi lời tri ân ngọt ngào đến quan khách'
    },
    voucher: {
      discountAmount: 200000,
      discountFormatted: 'Giảm 200.000đ',
      minTables: 20,
      description: 'Giảm 200.000đ khi đặt từ 20 bàn'
    },
    conditionShort: 'Áp dụng khi đặt từ 20 bàn trở lên'
  },
  {
    id: 'combo-02',
    code: 'COMBO 02',
    name: 'TRỌN VẸN NGÀY VUI',
    tagline: 'Hội tụ tinh hoa món ngon Chị Ly tuyển chọn',
    badge: 'COMBO ĐỀ XUẤT',
    isRecommended: true,
    pricePerTable: '1.950.000đ / bàn 10 khách',
    pricePerTableNumber: 1950000,
    highlight: 'Bộ thực đơn đặc sắc từ Tuyến Ly, chuẩn vị quê hương Nghĩa Hành, Quảng Ngãi',
    dishes: [
      'Khai vị ngũ sắc / Tứ quý.',
      'Gà bó xôi hoàng kim.',
      'Bò nhúng dấm cuốn bánh tráng rau non.',
      'Lagu bò bắp hoa hầm mềm + bánh mì.',
      'Lẩu cá bớp măng chua Quảng Ngãi + bún tươi.',
      'Trái cây bốn mùa trang trí đẹp mắt.'
    ],
    gift: {
      title: 'Bảng welcome cưới cá nhân hóa',
      description: 'Bảng đón khách trang trọng đặt tại tiền sảnh tiệc cưới'
    },
    voucher: {
      discountAmount: 300000,
      discountFormatted: 'Giảm 300.000đ',
      minTables: 20,
      description: 'Giảm 300.000đ khi đặt từ 20 bàn'
    },
    conditionShort: 'Áp dụng khi đặt từ 20 bàn trở lên'
  },
  {
    id: 'combo-03',
    code: 'COMBO 03',
    name: 'HẠNH PHÚC VIÊN MÃN',
    tagline: 'Hài hòa vị biển và đặc sản bò tơ non mềm',
    badge: 'CAO CẤP',
    pricePerTable: '2.150.000đ / bàn 10 khách',
    pricePerTableNumber: 2150000,
    highlight: 'Sự giao thoa giữa tôm sú thơm ngon, bắp bò tơ hảo hạng và lẩu cá bớp đậm đà',
    dishes: [
      'Gỏi ngó sen tôm thịt giòn ngọt.',
      'Gà bó xôi chiên giòn hạt điều bùi béo.',
      'Bò nhúng dấm bắp bò tơ non mềm.',
      'Tôm sú xông hơi bia sả thơm ngon.',
      'Lẩu cá bớp măng chua + bún.',
      'Trái cây bưởi da xanh và dưa hấu.'
    ],
    gift: {
      title: 'Bảng welcome cưới + trang trí bàn đón khách cơ bản',
      description: 'Combo đón khách tinh tế với hoa lụa và phụ kiện trang trí cổng cưới'
    },
    voucher: {
      discountAmount: 500000,
      discountFormatted: 'Giảm 500.000đ',
      minTables: 25,
      description: 'Giảm 500.000đ khi đặt từ 25 bàn'
    },
    conditionShort: 'Áp dụng khi đặt từ 25 bàn trở lên'
  },
  {
    id: 'combo-04',
    code: 'COMBO 04',
    name: 'ĐẠI HỶ HOÀNG GIA',
    tagline: 'Đẳng cấp hoàng gia – Trọng thể ngày vui lớn',
    badge: 'TIỆC CƯỚI VIP',
    pricePerTable: '2.350.000đ / bàn 10 khách',
    pricePerTableNumber: 2350000,
    highlight: 'Mâm cỗ đại hỷ sang trọng với hải sản tươi sống cao cấp và bài trí bề thế',
    dishes: [
      'Khai vị gỏi sứa đặc biệt + gỏi ngó sen tôm Tuyến Ly.',
      'Tôm sú hấp trái dừa xiêm ngọt lịm.',
      'Gà lên mâm ngũ vị truyền thống.',
      'Bò tái chanh cuốn cải mầm.',
      'Lẩu hải sản chua cay thập cẩm + bún.',
      'Chè hạt sen long nhãn đường phèn.'
    ],
    gift: {
      title: 'Bảng welcome VIP và trang trí bàn đón khách nâng cấp',
      description: 'Khu vực check-in & đón khách phong cách VIP lộng lẫy và nổi bật'
    },
    voucher: {
      discountAmount: 800000,
      discountFormatted: 'Giảm 800.000đ',
      minTables: 30,
      description: 'Giảm 800.000đ khi đặt từ 30 bàn'
    },
    conditionShort: 'Áp dụng khi đặt từ 30 bàn trở lên'
  }
];

// Dịch Vụ Cưới Hỏi & Rạp Cưới Trọn Gói
export const WEDDING_DECOR_SERVICES: WeddingService[] = [
  {
    id: 'rap-do-nhung',
    title: 'Rạp Cưới Nhung Đỏ Hoàng Gia (Red Velvet)',
    subtitle: 'Tông màu chủ đạo quý phái như trong Poster Tuyến Ly',
    desc: 'Khung rạp nhung đỏ dập lượn sóng sang trọng, kết hợp hoa tươi cao cấp, chữ Song Hỷ mạ vàng rực rỡ mang lại không khí đại hỷ linh đình và may mắn.',
    iconName: 'Crown',
    features: [
      'Vải nhung đỏ ruby cao cấp cách nhiệt, che mưa nắng 100%',
      'Cổng hoa cưới và vòm hoa lối đi lộng lẫy',
      'Hệ thống đèn LED trần chùm pha lê ấm áp lung linh',
      'Bàn tiệc phủ khăn đỏ nhung viền vàng đồng quý tộc'
    ],
    bannerImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        title: 'Phông Rạp Nhung Đỏ Đại Hỷ',
        desc: 'Không gian ấm cúng, bề thế đón tiếp họ hàng hai bên',
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Bàn Tiệc Ghế Tiffany Nơ Nhung Đỏ',
        desc: 'Bộ bàn ghế tiêu chuẩn nhà hàng cao cấp',
        img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Sân Khấu & Tháp Ly Rượu Hạnh Phúc',
        desc: 'Ánh sáng nghệ thuật cho khoảnh khắc trao nhẫn thiêng liêng',
        img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'rap-xanh-emerald',
    title: 'Rạp Cưới Xanh Ngọc Lục Bảo & Cổng Hoa Vu Quy',
    subtitle: 'Thanh lịch, hiện đại, tươi mát và độc bản',
    desc: 'Thiết kế rạp màu xanh ngọc lục bảo (emerald) phối trắng tinh khôi, vòm cổng cưới hoa tươi rực rỡ (như chi tiết cổng Lễ Vu Quy trong poster) tôn vinh vẻ đẹp cô dâu chú rể.',
    iconName: 'Sparkles',
    features: [
      'Tone xanh ngọc nhung dịu mát, chụp ảnh check-in cực kỳ bắt mắt',
      'Cổng hoa vòm tròn hoặc vòm lâu đài hoa tươi ngát hương',
      'Sân khấu quạt giấy nghệ thuật kết hợp hoa baby trắng',
      'Đèn chùm pha lê châu Âu tỏa ánh sáng vàng champagne lộng lẫy'
    ],
    bannerImg: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        title: 'Cổng Vòm Hoa Xanh Ngọc Lễ Vu Quy',
        desc: 'Cổng hoa đón khách bề thế, trang nhã',
        img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Sân Khấu Quạt Giấy & Đèn Chùm',
        desc: 'Bố cục hiện đại kết hợp nét duyên dáng Á Đông',
        img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'gia-tien-truyen-thong',
    title: 'Trang Trí Gia Tiên Trọn Gói Sang Trọng',
    subtitle: 'Trang nghiêm, đúng lễ nghi gia phong xứ Quảng',
    desc: 'Bộ trang trí bàn thờ gia tiên với lư đồng bóng lộn, bộ chữ hỷ, bàn dài hai họ, tách chén ấm trà hoa văn gốm sứ cao cấp, mâm quả sơn son thiếp vàng.',
    iconName: 'HeartHandshake',
    features: [
      'Phông nền gia tiên hoa sen hoặc hoa mẫu đơn tài lộc',
      'Bộ lư đồng, chân nến, bình hoa tươi trang nghiêm',
      'Bàn dài hai họ 12 ghế tiffany nơ lụa cao cấp kèm ấm chén rồng phượng',
      'Hỗ trợ sắp xếp đội bê tráp, trang phục áo dài bưng quả'
    ],
    bannerImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        title: 'Bàn Thờ Gia Tiên Đại Cát',
        desc: 'Ấm cúng, thiêng liêng chào đón hai họ',
        img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

// Xe Du Lịch & Xe Hoa Rước Dâu Tuyến Ly
export const VEHICLES_LIST: TransportVehicle[] = [
  {
    id: 'xe-hoa-4-cho',
    name: 'Xe Hoa Rước Dâu 4 Chỗ Cao Cấp',
    seats: '4 Chỗ',
    type: 'Sedan Đời Mới (Mazda 3 / Camry / Mercedes)',
    suitableFor: 'Rước dâu hai họ, đưa đón cô dâu chú rể ngày trọng đại',
    badge: 'Trang Trí Hoa Cưới Miễn Phí',
    features: [
      'Gói hoa tươi / hoa lụa cao cấp trang trí mui xe & tay nắm cửa',
      'Nội thất bọc da êm ái, máy lạnh thơm mát, sạch sẽ',
      'Tài xế lịch lãm mặc sơ mi cravat, điềm đạm, đón đúng giờ vàng',
      'Đầy đủ nước suối, khăn lạnh, ô che nắng'
    ],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xe-7-cho',
    name: 'Xe 7 Chỗ Gia Đình Đưa Đón Họ Hàng',
    seats: '7 Chỗ',
    type: 'Innova / Fortuner / Xpander',
    suitableFor: 'Đưa đón người lớn hai bên gia đình, ba mẹ cô dâu chú rể',
    features: [
      'Xe đời mới gầm cao êm ái, khoang hành lý rộng rãi',
      'Lái xe kinh nghiệm am hiểu đường sá Nghĩa Hành, Quảng Ngãi',
      'Phục vụ rước dâu nội tỉnh & ngoại tỉnh'
    ],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xe-16-cho',
    name: 'Xe 16 Chỗ Ford Transit / Hyundai Solati',
    seats: '16 Chỗ',
    type: 'Xe Du Lịch & Đưa Đón Họ Hàng',
    suitableFor: 'Đoàn họ hàng, bạn bè hai bên, đi bưng mâm quả',
    badge: 'Được Đặt Nhiều Nhất',
    features: [
      'Ghế ngả êm ái, máy lạnh mát sâu 2 dàn độc lập',
      'Phục vụ tiệc cưới, đưa rước dâu, tour du lịch Lý Sơn, Đà Nẵng, Hội An',
      'Giá cả hữu nghị, phục vụ nhiệt tình chu đáo'
    ],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xe-29-45-cho',
    name: 'Xe 29 - 45 Chỗ Thaco Universe',
    seats: '29 - 45 Chỗ',
    type: 'Xe Du Lịch Hạng Sang Đưa Đón Số Lượng Lớn',
    suitableFor: 'Đoàn họ hàng đi đón dâu xa ngoại tỉnh, tour tham quan công ty',
    features: [
      'Hệ thống bầu hơi êm ái, âm thanh màn hình giải trí',
      'Khoang hành lý siêu rộng chứa đầy đủ sính lễ mâm quả',
      'Tài xế chuyên tuyến đường dài cẩn trọng an toàn tuyệt đối'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  }
];

// Cam kết của Tuyến Ly
export const COMMITMENTS = [
  {
    title: '100% Nguyên Liệu Tươi Sạch',
    desc: 'Hải sản cá bớp, tôm sú tươi sống trong ngày; gà ta đồi Nghĩa Hành thịt thơm ngọt; rau củ quả tươi có nguồn gốc rõ ràng.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Đầu Bếp Hơn 15 Năm Kinh Nghiệm',
    desc: 'Chị Ly cùng đội ngũ đầu bếp thâm niên trực tiếp nêm nếm, giữ trọn hương vị đậm đà truyền thống và nóng sốt khi lên bàn tiệc.',
    icon: 'Utensils'
  },
  {
    title: 'Giá Cả Trọn Gói - Không Phát Sinh',
    desc: 'Báo giá rõ ràng, minh bạch từ đầu. Đầy đủ chén dĩa sành sứ, bàn ghế, ly tách sạch bóng, khăn lạnh và nhân viên phục vụ tận tình.',
    icon: 'CircleDollarSign'
  },
  {
    title: 'Đúng Giờ Vàng Cưới Hỏi',
    desc: 'Đảm bảo tiến độ nghi lễ đón râu, gia tiên và khai tiệc đúng giờ gia đình đã chọn, bài trí rạp cưới hoàn tất trước ngày tiệc 1 ngày.',
    icon: 'Clock'
  }
];

// Feedback thực tế từ khách hàng tại Nghĩa Hành & Quảng Ngãi
export const TESTIMONIALS = [
  {
    name: 'Anh Trần Hữu Phước & Chị Thu Thảo',
    event: 'Tiệc Cưới 45 Bàn tại TT. Chợ Chùa, Nghĩa Hành',
    comment: 'Gia đình rất hài lòng với dịch vụ cưới hỏi trọn gói của Chị Ly Tuyến Ly. Rạp nhung đỏ lộng lẫy như poster quảng cáo, khách khen món gà bó xôi và lẩu cá bớp ngon nức nở. Xe hoa rước dâu đúng giờ, bác tài vui tính!',
    rating: 5,
    date: 'Tháng 12/2025'
  },
  {
    name: 'Bác Lê Văn Minh',
    event: 'Tiệc Tân Gia 18 Bàn tại Hành Trung, Nghĩa Hành',
    comment: 'Tôi làm tiệc tân gia đặt 18 bàn của Tuyến Ly. Thức ăn nóng hổi, thịt bò nhúng dấm cuốn bánh tráng chấm mắm nêm đậm đà chuẩn vị quê mình. Bàn ghế tiffany sạch đẹp, phục vụ nhanh nhẹn không để khách chờ lâu.',
    rating: 5,
    date: 'Tháng 01/2026'
  },
  {
    name: 'Chị Nguyễn Thị Bích Nga',
    event: 'Tiệc Đầy Tháng & Thôi Nôi tại TT. Chợ Chùa',
    comment: 'Chị Ly tư vấn thực đơn rất có tâm, chọn các món phù hợp với ngân sách gia đình mà ăn no nê ngon miệng. Nhất là món gỏi ngó sen tôm và lagu bò bánh mì, ai cũng khen tấm tắc. Lần sau có tiệc chắc chắn ủng hộ tiếp!',
    rating: 5,
    date: 'Tháng 02/2026'
  }
];
