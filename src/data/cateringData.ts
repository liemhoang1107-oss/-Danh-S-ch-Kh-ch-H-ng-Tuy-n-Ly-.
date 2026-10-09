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
  name: string;
  tagline: string;
  badge?: string;
  pricePerTable: string;
  pricePerTableNumber: number;
  highlight: string;
  dishes: string[];
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
  address: "Phù Vinh Đông, TT. Chợ Chùa, Nghĩa Hành, Quảng Ngãi",
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
    desc: 'Mâm khai vị 4-5 món tinh tế gồm chả mực, nem lụi nướng, chả ram giòn rụm, mực viên chiên xù và gỏi chua ngọt đánh thức trọn vẹn vị giác.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 320000,
  },
  {
    id: 'ga-bo-xoi',
    name: 'Gà bó xôi / Gà lên mâm',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Đặc Sản Nổi Tiếng',
    desc: 'Gà ta thả vườn đồi Nghĩa Hành thịt thơm dai ngọt, bọc lớp xôi nếp dẻo thơm chiên vàng phồng giòn rụm hoặc gà luộc xếp mâm xôi gấc truyền thống.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 380000,
  },
  {
    id: 'bo-nhung-dam',
    name: 'Bò nhúng dấm / Bò tái',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Bò tơ mềm ngọt nhúng nước dùng dấm thảo mộc thanh dịu, cuốn bánh tráng Đại Lộc cùng rau sống non tươi chấm mắm nêm đậm đà vị xứ Quảng.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 360000,
  },
  {
    id: 'lagu-bo',
    name: 'Lagu bò + Bánh mì',
    category: 'mon_chinh',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Thịt bắp bò hầm chín mềm ngậy sốt cà vang sánh mịn, khoai tây bùi béo, cà rốt ngọt thanh, ăn kèm bánh mì nóng giòn rụm thơm lừng.',
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 340000,
  },
  {
    id: 'lau-hai-san',
    name: 'Lẩu hải sản / Lẩu cá bớp + Bún',
    category: 'lau',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Cá bớp tươi phi lê chắc thịt béo ngọt cùng tôm sú, mực ống tươi roi rói, hòa quyện nước dùng chua cay măng chua rau nhút và bún tươi trắng ngần.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 420000,
  },
  {
    id: 'can-bi-hy',
    name: 'Căn bi hỷ',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Tiệc Hoàng Gia',
    desc: 'Món ngon cát tường mang ý nghĩa song hỷ lâm môn, chế biến cầu kỳ từ nấm quý, hải sản thanh tao dâng trọn hương vị may mắn cho tân lang tân nương.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 330000,
  },
  {
    id: 'goi-sing-sam',
    name: 'Gỏi sing sảm',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Món gỏi tiệc độc đáo trứ danh với vị chua ngọt hài hòa, giòn sần sật tươi mát, điểm xuyết mè rang và đậu phộng bùi béo thơm ngát.',
    image: '/images/goi-sing-sam.jpg',
    priceEstimate: 290000,
  },
  {
    id: 'goi-ngo-sen-tom',
    name: 'Gỏi ngó sen tôm',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Món Tiêu Biểu Poster',
    desc: 'Ngó sen tươi trắng giòn trộn tôm sú đỏ au, thịt ba chỉ luộc thái sợi mỏng, rau răm thơm cay và nước cốt mắm chua ngọt đặc chế Tuyến Ly.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 310000,
  },
  {
    id: 'goi-hoa-chuoi',
    name: 'Gỏi hoa chuối',
    category: 'khai_vi',
    featuredPoster: true,
    tag: 'Hương Vị Quê Hương',
    desc: 'Bắp hoa chuối tây bào mỏng giữ trọn độ giòn tự nhiên, bóp thấu cùng thịt gà ta xé phay hoặc tai heo giòn sần sật và nước chấm tỏi ớt cay nồng.',
    image: '/images/goi-hoa-chuoi.jpg',
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
  // Món bổ sung phong phú
  {
    id: 'tom-su-hap-dua',
    name: 'Tôm sú hấp trái dừa tươi',
    category: 'mon_chinh',
    tag: 'Hải Sản Cao Cấp',
    desc: 'Tôm sú loại 1 tươi rói hấp trực tiếp trong nước dừa xiêm bến tre ngọt lịm, thịt tôm giòn ngọt chắc nịch chấm muối ớt xanh.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 370000,
  },
  {
    id: 'heo-quay-banh-hoi',
    name: 'Heo quay da giòn + Bánh hỏi lá hẹ',
    category: 'mon_chinh',
    tag: 'Truyền Thống Tiệc Cưới',
    desc: 'Heo quay vàng ruộm da giòn tan như bánh quy, mỡ nạc đan xen thơm nức, ăn kèm bánh hỏi xức mỡ hẹ xanh mướt và nước mắm chua ngọt.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
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
    id: 'menu-1',
    name: 'Thực Đơn TUYẾN LY - TRỌN VẸN NGÀY VUI',
    tagline: 'Bộ thực đơn bán chạy số 1 theo Poster chuẩn',
    badge: 'Được Đặt Nhiều Nhất',
    pricePerTable: '1.950.000đ / bàn 10 khách',
    pricePerTableNumber: 1950000,
    highlight: 'Hội tụ đầy đủ các món đặc sản trứ danh Chị Ly: Gà bó xôi hoàng kim, Bò nhúng dấm và Lẩu cá bớp',
    dishes: [
      '1. Khai vị ngũ sắc / Tứ quý (Chả ram giòn, nem nướng lụi, gỏi chua cay)',
      '2. Gà bó xôi hoàng kim (Gà ta ngọt thịt, xôi giòn phồng thơm lừng)',
      '3. Bò nhúng dấm cuốn bánh tráng rau non & mắm nêm xứ Quảng',
      '4. Lagu bò bắp hoa hầm mềm + Bánh mì nóng giòn',
      '5. Lẩu cá bớp măng chua Quảng Ngãi + Bún tươi',
      '6. Tráng miệng trái cây 4 mùa ngũ sắc tỉa hoa'
    ]
  },
  {
    id: 'menu-2',
    name: 'Thực Đơn ĐẠI HỶ HOÀNG GIA',
    tagline: 'Sang trọng - Đẳng cấp cho ngày cưới hỏi trọng đại',
    badge: 'Tiệc Cưới VIP',
    pricePerTable: '2.350.000đ / bàn 10 khách',
    pricePerTableNumber: 2350000,
    highlight: 'Đậm vị hải sản thượng hạng và bò tơ hảo hạng, bài trí mâm cỗ lộng lẫy chuẩn phong cách tiệc lớn',
    dishes: [
      '1. Khai vị Căn bi hỷ cát tường + Gỏi sing sảm đặc sản Tuyến Ly',
      '2. Tôm sú hấp trái dừa xiêm ngọt lịm chấm muối ớt xanh',
      '3. Gà lên mâm ngũ vị truyền thống (Gà lá é, xôi gấc song hỷ)',
      '4. Bò tái chanh cuốn cải mầm chấm mù tạt cay nồng',
      '5. Lẩu hải sản chua cay thập cẩm (Tôm sú, mực tươi, nghêu ngọt) + Bún',
      '6. Chè hạt sen long nhãn đường phèn & Trái cây nhập khẩu'
    ]
  },
  {
    id: 'menu-3',
    name: 'Thực Đơn ĐẬM ĐỘC BẢN SẮC',
    tagline: 'Hương vị thân thuộc, mộc mạc mà đầm ấm nghĩa tình',
    badge: 'Tiệc Tân Gia & Đám Hỏi',
    pricePerTable: '1.750.000đ / bàn 10 khách',
    pricePerTableNumber: 1750000,
    highlight: 'Nguyên liệu sạch tại địa phương Nghĩa Hành, gia vị đậm đà vừa miệng, khẩu phần đầy đặn',
    dishes: [
      '1. Gỏi hoa chuối bóp thịt gà ta giòn cay thơm nồng',
      '2. Chả giò phượng hoàng chiên giòn hoàng kim',
      '3. Heo quay da giòn bánh hỏi lá hẹ nước mắm tỏi ớt',
      '4. Lagu bò hầm khoai tây + Bánh mì đặc ruột',
      '5. Lẩu thái hải sản tôm mực bắp non + Bún tươi',
      '6. Rau câu tam sắc thanh mát giải nhiệt'
    ]
  },
  {
    id: 'menu-4',
    name: 'Thực Đơn HẠNH PHÚC VIÊN MÃN',
    tagline: 'Giao thoa tinh tế giữa vị biển và vị núi rừng Quảng Ngãi',
    badge: 'Tiệc Cưới Cao Cấp',
    pricePerTable: '2.150.000đ / bàn 10 khách',
    pricePerTableNumber: 2150000,
    highlight: 'Sự kết hợp hoàn hảo giữa gỏi ngó sen tôm thịt tươi mát, bò nhúng dấm và lẩu cá bớp',
    dishes: [
      '1. Gỏi ngó sen tôm thịt giòn ngọt thanh tao',
      '2. Gà bó xôi chiên giòn hạt điều bùi béo',
      '3. Bò nhúng dấm bắp bò tơ non mềm mọng nước',
      '4. Tôm sú xông hơi bia sả ớt cay thơm',
      '5. Lẩu cá bớp măng giòn dầm ớt hiểm + Bún sợi nhỏ',
      '6. Tráng miệng trái cây bưởi da xanh & dưa hấu ngọt lịm'
    ]
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
