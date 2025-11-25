import Medicine from '@/app/pharmacy/assets/medicine.png';

export const products = [
  {
    id: 1,
    slug: 'nat-c-1000',
    image: Medicine,
    title: 'Nat C 1000 hỗ trợ tăng đề kháng lọ 60 viên',
    price: '105.000đ',
    packaging: 'Bottle of 30 tablets or 100 film-coated tablets.',
    manufacturer: 'Mega We Care (Mega Lifesciences Public Company Limited)',
    placeOfManufacture: 'Thailand',
    uses: 'Strengthens resistance and immune system, anti-oxidant. Helps reduce the risk of colds. Participates in collagen synthesis, beautifies the skin.',
    ingredients:
      'Vitamin C from Ascorbic acid, Sodium ascorbate, Calcium ascorbate, Rutin, Hesperidin, Lemon bioflavonoid complex, Rose Hips extract and Acerola fruit pulp extract',
    outstanding:
      'Nat C 1000 nổi bật nhờ hàm lượng cao, công thức ít gây kích ứng dạ dày và khả năng hấp thu tối ưu nhờ việc bổ sung các chất chống oxy hóa tự nhiên. Sự kết hợp các Bioflavonoid không chỉ giúp tăng cường hoạt tính của Vitamin C mà còn hỗ trợ tăng tính bền vững của các mạch máu nhỏ. Sản phẩm được thiết kế đặc biệt cho những người cần bổ sung Vitamin C liều cao thường xuyên mà không muốn gặp phải các vấn đề về tiêu hóa.',
  },
  {
    id: 2,
    slug: 'paracetamol-500mg',
    image: Medicine,
    title: 'Paracetamol 500mg hộp 10 vỉ x 10 viên',
    price: '48.000đ',
    packaging: 'Blister pack of 10 tablets',
    manufacturer: 'Domesco',
    placeOfManufacture: 'VietNam',
    uses: 'Temporarily relieves pain (headache, toothache, muscle pain, etc.) and effectively reduces fever in cases of colds and flu',

    ingredients:
      'Paracetamol 500mg, Excipients: povidone, croscarmellose sodium, magnesium stearate, microcrystalline cellulose, colloidal silicon dioxide, hypromellose, polyethylene glycol, titanium dioxide, iron oxide yellow, iron oxide red.',
    outstanding:
      'Paracetamol 500mg là loại thuốc giảm đau, hạ sốt phổ biến và an toàn nhất ở liều điều trị. Nó được ưu tiên nhờ cơ chế hạ sốt và giảm đau hiệu quả mà không gây hại cho dạ dày như các thuốc kháng viêm khác. Nó có thể được sử dụng rộng rãi, kể cả cho phụ nữ mang thai, cho con bú và trẻ em (theo liều lượng và chỉ định phù hợp). Tuyệt đối không được dùng quá liều vì có nguy cơ gây độc tính nghiêm trọng trên gan.',
  },
  {
    id: 3,
    slug: 'vitamin-e-400iu',
    image: Medicine,
    title: 'Vitamin E 400IU hỗ trợ làm đẹp da lọ 100 viên',
    price: '150.000đ',
    packaging: '100 softgels',
    manufacturer: 'Various',
    placeOfManufacture: 'Australia',
    uses: 'Powerful antioxidant, protects cells. Supports skin beauty (moisturizes, reduces aging) and maintains cardiovascular health.',

    ingredients:
      'Vitamin E (as d-alpha tocopheryl acetate) 400 IU, Excipients: gelatin, glycerin, purified water.',
    outstanding:
      'Vitamin E 400IU là một chất chống oxy hóa thiết yếu, được ưa chuộng nhờ vai trò bảo vệ tế bào và lợi ích rõ rệt cho sức khỏe da. Liều 400IU là liều bổ sung thông thường, tuy nhiên vì là vitamin tan trong dầu, nó có thể tích lũy trong cơ thể. Vì lý do tích lũy, việc sử dụng Vitamin E 400IU cần được theo dõi và nên có sự tư vấn của chuyên gia y tế, đặc biệt nếu sử dụng liên tục trong thời gian dài hoặc đang dùng các thuốc làm loãng máu.',
  },
  {
    id: 4,
    slug: 'fish-oil-omega-3',
    image: Medicine,
    title: 'Fish Oil Omega-3 hỗ trợ tim mạch hộp 30 viên',
    price: '200.000đ',
    packaging: '120 softgels',
    manufacturer: 'Nature Made',
    placeOfManufacture: 'USA',
    uses: 'Supports heart health (reduces Triglycerides). Supports brain function, vision and has a mild anti-inflammatory effect.',

    ingredients:
      'Fish Oil (providing EPA and DHA), Gelatin, Glycerin, Purified Water, Vitamin E (as d-alpha tocopheryl acetate).',
    outstanding:
      'Dầu cá Omega-3 là chất béo thiết yếu, nổi bật với sự hiện diện của EPA và DHA. Nó được coi là một chất bổ sung quan trọng hàng đầu trong việc hỗ trợ sức khỏe tim mạch và phát triển/duy trì chức năng não bộ và mắt. Khi chọn mua, người tiêu dùng thường tìm kiếm sản phẩm có hàm lượng EPA và DHA cao (thường được ghi rõ trên nhãn) và được tinh chế để loại bỏ các kim loại nặng.',
  },
  {
    id: 5,
    slug: 'kem-gluconate',
    image: Medicine,
    title: 'Kẽm Gluconate hỗ trợ tăng cường miễn dịch',
    price: '90.000đ',
    packaging: '100 tablets or lozenges',
    manufacturer: 'Blackmores',
    placeOfManufacture: 'VietNam',
    uses: 'Strengthens the immune system, helps reduce the severity and shortens the duration of colds (especially in lozenge form). Supports wound healing and improves acne.',
    ingredients:
      'Zinc Gluconate 50mg, Excipients: microcrystalline cellulose, croscarmellose sodium, magnesium stearate, silicon dioxide.',
    outstanding:
      'Kẽm Gluconate là một dạng kẽm được ưa chuộng nhờ khả năng hấp thu tốt. Nó nổi bật với vai trò tăng cường hệ thống miễn dịch của cơ thể và được ứng dụng mạnh mẽ trong việc kiểm soát mụn và cải thiện các vấn đề về da. Giống như các vi chất khác, việc bổ sung Kẽm Gluconate cần theo liều lượng khuyến nghị để tránh tác dụng phụ và cần lưu ý không dùng quá liều.',
  },
  {
    id: 6,
    slug: 'aspirin-81mg',
    image: Medicine,
    title: 'Aspirin 81mg hỗ trợ sức khỏe tim mạch hộp 100 viên',
    price: '120.000đ',
    packaging: '100 or 300 enteric-coated tablets',
    manufacturer: 'Various',
    placeOfManufacture: 'Various',
    uses: 'Prevention of cardiovascular events such as heart attacks (myocardial infarction) and ischemic strokes, by preventing blood clots (antiplatelet aggregation)',
    ingredients:
      'Aspirin 81mg, Excipients: microcrystalline cellulose, croscarmellose sodium, magnesium stearate, silicon dioxide.',
    outstanding:
      'Aspirin 81mg là một loại thuốc có vai trò đặc biệt là thuốc chống huyết khối (chống đông máu), được sử dụng trong thời gian dài để dự phòng các biến cố tim mạch. Đây không phải là liều để giảm đau hoặc hạ sốt. Việc sử dụng Aspirin 81mg cần được bác sĩ chỉ định vì nó liên quan đến nguy cơ chảy máu, đặc biệt là ở dạ dày và ruột.',
  },
  // {
  //   id: 7,
  //   slug: 'vitamin-c-500mg',
  //   image: Medicine,
  //   title: 'Vitamin C 500mg hỗ trợ sức khỏe tim mạch hộp 100 viên',
  //   price: '120.000đ',
  //   packaging: '100 or 300 enteric-coated tablets',
  //   manufacturer: 'Various',
  //   placeOfManufacture: 'Various',
  //   uses: 'Prevention of cardiovascular events such as heart attacks (myocardial infarction) and ischemic strokes, by preventing blood clots (antiplatelet aggregation)',
  //   ingredients:
  //     'Vitamin C 500mg, Excipients: microcrystalline cellulose, croscarmellose sodium, magnesium stearate, silicon dioxide.',
  //   outstanding:
  //     'Vitamin C 500mg là một loại thuốc có vai trò đặc biệt là thuốc chống huyết khối (chống đông máu), được sử dụng trong thời gian dài để dự phòng các biến cố tim mạch. Đây không phải là liều để giảm đau hoặc hạ sốt. Việc sử dụng Vitamin C 500mg cần được bác sĩ chỉ định vì nó liên quan đến nguy cơ chảy máu, đặc biệt là ở dạ dày và ruột.',
  // },
];
