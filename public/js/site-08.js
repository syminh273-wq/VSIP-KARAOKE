/* ===== i18n: VI / EN / 中文 for the public pages =====
   Vietnamese is the source text in the HTML. EN swaps each text node / attribute
   through the dictionary below (exact match first, then patterns). Original text is
   remembered per node, so switching back to VI is lossless. A MutationObserver
   translates content the page renders later (menu tabs, room slider, booking result). */
(()=>{
const EN={
// nav / header
"Trang chủ":"Home","Nhà Hàng Hầm Rượu":"Wine Cellar Restaurant","Karaoke":"Karaoke","Đặt bàn":"Book a table",
"VSIP Karaoke – Nhà Hàng Hầm Rượu":"VSIP Karaoke – Wine Cellar Restaurant",
// home slider
"Nhà Hàng Hầm Rượu & Karaoke VISIP – Đẳng cấp giải trí hàng đầu":"VISIP Wine Cellar Restaurant & Karaoke – Premier entertainment",
"Nhà Hàng Hầm Rượu & Karaoke VISIP":"VISIP Wine Cellar Restaurant & Karaoke",
"Karaoke VSIP":"VSIP Karaoke","Đẳng cấp":"Premier","Giải trí hàng đầu":"Top-tier entertainment",
"Phòng VIP":"VIP rooms","Âm thanh – ánh sáng đẳng cấp":"Premium sound & lighting","Khu vực phòng sạch sẽ":"Clean, well-kept rooms",
"Đặc biệt":"Special","KTV nhiệt tình – vui vẻ – thoải mái":"Friendly, fun & relaxed KTV hosts",
"ĐẶT PHÒNG NGAY":"BOOK A ROOM","XEM PHÒNG HÁT":"VIEW ROOMS","Hotline karaoke":"Karaoke hotline",
"Nhà hàng Hầm Rượu":"Wine Cellar Restaurant","Tinh hoa":"The art of","Ẩm thực & Vang":"Food & Wine",
"Phòng lớn tích hợp karaoke":"Large rooms with karaoke","Khách sức chứa":"Guest capacity",
"ĐẶT BÀN NGAY":"BOOK A TABLE","XEM THỰC ĐƠN":"VIEW MENU","Hotline hầm rượu":"Restaurant hotline","Hầm rượu":"Restaurant",
"Điểm nổi bật Karaoke VIP KTV":"VIP KTV Karaoke highlights","Điểm nổi bật Hầm Rượu VSIP":"VSIP Wine Cellar highlights",
"Ảnh trước":"Previous","Ảnh sau":"Next","Chọn banner":"Choose banner","Tạm dừng":"Pause","Tiếp tục":"Play",
"Mặt tiền Karaoke VISIP rực rỡ đèn neon ngày khai trương, hoa và lân chúc mừng":"VISIP Karaoke façade lit with neon on opening day, with flowers and lion dancers",
"Lối vào Nhà hàng Hầm Rượu VSIP với vòm đá, đèn chùm và hoa chúc mừng khai trương":"Entrance of VSIP Wine Cellar Restaurant with stone arch, chandeliers and opening-day flowers",
// home sections
"Một điểm đến — Hai trải nghiệm":"One destination — Two experiences",
"Thưởng thức món ngon trong không gian sang trọng, sau đó tận hưởng những giây phút ca hát riêng tư cùng bạn bè và đồng nghiệp.":"Enjoy great food in an elegant setting, then sing the night away in a private room with friends and colleagues.",
"Ẩm thực hấp dẫn, không gian ấm cúng, phù hợp tiếp khách và tổ chức tiệc.":"Delicious food in a warm setting, ideal for business guests and parties.",
"Khám phá":"Explore","Phòng hát riêng tư, âm thanh sống động cho cuộc vui trọn vẹn.":"Private rooms and vivid sound for a perfect night out.",
"Đặt phòng":"Book a room","Món đặc trưng":"Signature dishes",
"Vài món nổi bật của Nhà Hàng Hầm Rượu. Thực đơn đầy đủ ở trang nhà hàng.":"A few highlights from the Wine Cellar Restaurant. See the restaurant page for the full menu.",
"Món ăn":"Dishes","Lẩu":"Hot pot","XEM CHI TIẾT":"VIEW DETAILS","Không gian karaoke":"Karaoke rooms",
"Phòng hát LED 3D riêng tư, âm thanh sống động. Xem đầy đủ ở trang karaoke.":"Private 3D LED rooms with vivid sound. See the karaoke page for more.",
"Phòng hát":"Rooms","Không gian quán":"The venue","Phòng LED 3D":"3D LED room",
"Trần và tường LED 3D, sofa da chữ U, bàn đá":"3D LED ceiling and walls, U-shaped leather sofa, stone table",
"Phòng hiệu ứng LED":"LED effects room","Hiệu ứng LED toàn phòng, màn hình lớn":"Full-room LED effects, large screen",
"Phòng sofa rộng":"Spacious sofa room","Không gian rộng, sofa da quanh phòng":"Roomy space with leather sofas all around",
"Phòng trần LED cong":"Curved LED ceiling room","Trần LED uốn cong, màn hình chọn bài":"Curved LED ceiling, song-selection screen",
"Mặt tiền rực rỡ":"Dazzling façade","Mặt tiền đèn LED nổi bật, bãi đỗ ô tô ngay trước quán":"Eye-catching LED façade with car parking right in front",
"Sảnh chờ sang trọng":"Elegant lobby","Cầu thang mạ vàng, màn hình LED và quầy lễ tân":"Gold-plated staircase, LED screen and reception desk",
"Sảnh tầng trệt":"Ground-floor lobby","Sàn đá bóng loáng, sofa da tiếp khách":"Polished stone floor and leather sofas for guests",
"Lối vào buổi tối":"Entrance at night","Lối đi lát gạch hoa, chỗ để xe rộng rãi":"Patterned-tile walkway and plenty of parking",
"ĐỊA CHỈ":"ADDRESS","Địa chỉ nhà hàng":"Find us","Bấm vào ảnh để mở Google Maps chỉ đường.":"Tap the photo to open directions in Google Maps.",
"Mở Google Maps":"Open Google Maps","Mở Google Maps: VSIP I":"Open Google Maps: VSIP I",
"Dịch vụ của chúng tôi":"Our services","Phòng karaoke VIP":"VIP karaoke rooms","Thiết kế hiện đại, sang trọng":"Modern, luxurious design",
"Sức chứa đa dạng":"Rooms for every group size","Âm thanh chuyên nghiệp":"Professional sound","Hệ thống âm thanh":"High-quality",
"chất lượng cao":"sound system","Ẩm thực & đồ uống":"Food & drinks","Thực đơn phong phú,":"A rich menu,","phục vụ tận nơi":"served to your room",
"Hát hết mình":"Sing your heart out","Thăng hoa cảm xúc":"Let the music move you","Tiệc tùng sôi động":"Lively parties",
"Gắn kết bạn bè":"Bring friends together","Sinh nhật – Liên hoan":"Birthdays – Celebrations","Họp mặt – Tiếp khách":"Gatherings – Business guests",
"Không gian nhà hàng":"Restaurant interior","Phòng karaoke":"Karaoke room",
// restaurant page
"Món Việt, món Trung, hải sản tươi sống và món đặc trưng. Sảnh tiệc gỗ chạm khắc cho sinh nhật, tiệc gia đình và liên hoan công ty.":"Vietnamese and Chinese cuisine, live seafood and signature dishes. A carved-wood banquet hall for birthdays, family dinners and company parties.",
"ĐẶT BÀN":"BOOK A TABLE","KHÔNG GIAN":"THE SPACE","Không gian sang trọng, ấm cúng cho tiệc gia đình, tiếp khách và liên hoan.":"An elegant, welcoming space for family dinners, business meals and parties.",
"Thực đơn & bảng giá":"Menu & prices","Món Việt, món Hoa và hải sản tươi sống – chế biến theo khẩu vị của bạn.":"Vietnamese and Chinese dishes and live seafood – cooked to your taste.",
"Menu đầy đủ (15 trang)":"Full menu (15 pages)","Hải sản tươi sống, món cá, món tôm và các món tính theo thời giá xem trong menu gốc. Bấm vào trang để đọc.":"Live seafood, fish, shrimp and market-price dishes are in the original menu. Tap a page to read it.",
"Nhóm món":"Menu sections","Sảnh tiệc gỗ chạm khắc":"Carved-wood banquet hall","Tiệc sinh nhật":"Birthday party","Tiệc đông người":"Large party","Bàn tiệc dài":"Long banquet table",
"Khai vị":"Appetizers","Salad – Gỏi":"Salads","Món súp":"Soups","Món Trung":"Chinese dishes","Món bò":"Beef","Món heo":"Pork","Gà – Vịt – Chim":"Chicken · Duck · Pigeon",
"Món cá":"Fish","Món tôm":"Shrimp & lobster","Món mực":"Squid","Hải sản tươi sống & hàu":"Live seafood & oysters","Món rau":"Vegetables","Cơm – Mì – Bún":"Rice · Noodles",
"Đồ uống":"Drinks","Rượu vang":"Wine","Salad – Gỏi & Súp":"Salads & Soups","Cơm – Mì – Bún & Lẩu":"Rice · Noodles & Hot pot","Hải sản tươi sống":"Live seafood",
"Theo thời giá":"Market price","theo thời giá":"market price","đặt trước":"pre-order",
// karaoke page
"Phòng VIP trần và tường LED 3D, sảnh vàng chạm trổ, bãi đỗ ô tô ngay trước quán. Gọi món từ Nhà Hàng Hầm Rượu phục vụ tận phòng.":"VIP rooms with 3D LED ceilings and walls, a carved golden lobby and car parking right outside. Order from the Wine Cellar Restaurant and we serve it to your room.",
"BẢNG GIÁ":"PRICES","Giờ hát · Phòng VIP nhỏ":"Hourly · Small VIP room","Giờ hát · Phòng VIP lớn":"Hourly · Large VIP room","/ giờ":"/ hour","/giờ":"/hour",
"/ người":"/ person","Không giới hạn thời gian":"No time limit","Sau 12h: 390.000đ / giờ":"After 12h: 390,000đ / hour","Đặt phòng trước":"Book in advance","tặng 1 tiết mục múa cổ trang":"and get a free traditional dance performance",
"GỌI ĐIỆN ĐẶT PHÒNG":"CALL TO BOOK","NHẮN ZALO":"MESSAGE ON ZALO","VIDEO THỰC TẾ":"REAL VIDEOS","Trải nghiệm phòng hát":"Inside our karaoke rooms",
"Di chuột hoặc chạm vào video để xem trước. Bấm để xem toàn màn hình.":"Hover or tap a video to preview. Click to watch full screen.",
"Xem":"Play","Từ cửa vào đến phòng":"From the door to your room","Mặt tiền, sảnh vàng, hành lang neon":"Façade, golden lobby, neon corridor",
"Trần và tường đổi cảnh theo nhạc":"Ceiling and walls change with the music","Hiệu ứng toàn phòng":"Full-room effects","Sofa da, bàn đá, màn hình lớn":"Leather sofa, stone table, large screen",
"Không gian KTV":"KTV spaces","Hành lang, sảnh và lối đi":"Corridors, lobby and walkways","Hành lang neon":"Neon corridor","Lối đi giữa các phòng VIP":"Walkway between the VIP rooms",
"Khu phòng VIP":"VIP room area","Cửa phòng và hành lang ánh sáng":"Room doors and illuminated corridor","Sảnh ngoài":"Outdoor courtyard","Sân lát gạch hoa, non bộ":"Patterned-tile courtyard and rock garden",
"Cầu thang đá":"Stone staircase","Lan can sắt mạ vàng":"Gold-plated iron railing","Phòng KTV":"KTV rooms","Tiết mục đặc sắc":"Featured performance","Múa cổ trang":"Traditional costume dance","Tiết mục múa cổ trang biểu diễn ngay trong phòng hát LED 3D. Đặt phòng trước được tặng 1 tiết mục.":"Traditional costume dance performed right in our 3D LED karaoke room. Book in advance to get one free performance.","Video thực tế: 2 vũ công múa cổ trang trong phòng LED 3D":"Real video: two dancers in traditional costume in a 3D LED room",
"Ảnh minh hoạ một số phòng hát. Giờ hát phòng VIP nhỏ 330.000đ/giờ, phòng VIP lớn 450.000đ/giờ.":"Photos of some of our rooms. Small VIP room 330,000đ/hour, large VIP room 450,000đ/hour.",
"Video thực tế: trần và tường LED 3D đổi cảnh theo nhạc":"Real video: 3D LED ceiling and walls change with the music","ĐẶT PHÒNG NÀY":"BOOK THIS ROOM","Menu nhà hàng":"Restaurant menu","Hơn 130 món Việt – Trung – hải sản tươi sống. Món mới mỗi ngày, giá đã gồm VAT.":"130+ Vietnamese, Chinese and live seafood dishes. New dishes every day, prices include VAT.","Xem từng trang menu":"Browse the menu pages","Đã chọn được món?":"Found something you like?","Gọi trước để giữ bàn và đặt hải sản tươi sống theo cân.":"Call ahead to hold a table and pre-order live seafood by weight.","ĐẶT BÀN NGAY":"BOOK A TABLE","MỚI HÔM NAY":"NEW TODAY","Món mới hôm nay":"New today","XEM MÓN MỚI":"SEE NEW DISHES","TƯƠI SỐNG":"LIVE SEAFOOD","Bảng giá hải sản":"Seafood price list","Bắt tại hồ, chế biến theo yêu cầu. Giá đã gồm VAT.":"Picked from the tank, cooked your way. Prices include VAT.","XEM BẢNG GIÁ":"SEE PRICES","Tất cả":"All","Món mới":"New","Đặc trưng & Khai vị":"Signature & starters","Món Việt":"Vietnamese","Món Trung":"Chinese","Hải sản":"Seafood","Cơm – Lẩu":"Rice & hot pot","Đồ uống":"Drinks","Bìa menu":"Cover","MỚI":"NEW","Cập nhật mỗi ngày":"Updated daily","6 món mới vừa ra mắt":"6 brand-new dishes","XEM POSTER MÓN MỚI":"SEE THE NEW-DISH POSTER","Hải sản tươi sống":"Live seafood","Bắt tại hồ · giá đã gồm VAT":"From the tank · prices include VAT","Chọn tại hồ, chế biến theo yêu cầu: hấp, nướng, rang me, đút lò phô mai, sashimi…":"Pick from the tank, cooked your way: steamed, grilled, tamarind, cheese-baked, sashimi…","XEM BẢNG GIÁ ĐẦY ĐỦ":"SEE FULL PRICE LIST","Thực đơn các món":"All other dishes","Món đặc trưng, khai vị, món Việt, món Trung, cơm – lẩu, đồ uống":"Signature, starters, Vietnamese, Chinese, rice & hot pot, drinks","Xem hải sản tại hồ":"See our live seafood tanks","Video thực tế · chạm để xem có tiếng":"Real videos · tap to watch with sound","Khu hồ hải sản":"Seafood tank area","Tôm hùm bông":"Ornate spiny lobster","Tôm hùm":"Lobster","Tôm mũ ni":"Slipper lobster","Ghẹ xanh & cua":"Blue crab & crab","Ghẹ xanh":"Blue crab","Cua thịt":"Meat crab","Cá mú":"Grouper","Cá tầm":"Sturgeon","Hồ cá":"Fish tank","Ốc các loại":"Assorted snails","Ốc & sò":"Snails & clams","Sò – ngao":"Clams","XEM VIDEO":"WATCH VIDEO","ĐẶT PHÒNG":"BOOK",
"Phòng KTV · góc khác":"KTV room · another angle","Phòng KTV · hiệu ứng LED":"KTV room · LED effects","Xem poster bảng giá":"View price poster",
"Poster Karaoke VSIP: giờ hát phòng VIP nhỏ 330.000đ/giờ, phòng VIP lớn 450.000đ/giờ, KTV 500.000đ/người, đặt phòng trước tặng 1 tiết mục múa cổ trang":"VSIP Karaoke poster: small VIP room 330,000đ/hour, large VIP room 450,000đ/hour, KTV 500,000đ/person, free traditional dance performance when you book ahead",
"Ảnh phòng KTV":"KTV room photos","HOTLINE KARAOKE":"KARAOKE HOTLINE","GỌI":"CALL","Zalo hầm rượu":"Zalo (restaurant)","Zalo karaoke":"Zalo (karaoke)","© 2026 Nhà Hàng Hầm Rượu & Karaoke VSIP":"© 2026 VSIP Wine Cellar Restaurant & Karaoke","MST":"Tax code","Gọi":"Call","Điều hướng":"Navigation","Gọi đặt phòng karaoke":"Call to book karaoke",
// footer
"Nhà hàng món Việt – món Trung – hải sản tươi sống và karaoke phòng LED 3D. Nhận tiệc sinh nhật, liên hoan công ty, tiếp khách.":"Vietnamese & Chinese restaurant with live seafood, plus 3D LED karaoke rooms. Birthday parties, company events and business dinners welcome.",
"Liên hệ":"Contact","Hầm rượu:":"Restaurant:","Karaoke:":"Karaoke:","Hầm Rượu & Karaoke VSIP":"VSIP Wine Cellar & Karaoke","Cơ sở":"Location",
"Chỉ đường":"Directions","Bảng giá karaoke":"Karaoke prices","Bản đồ chỉ đường":"Map & directions","Mã số thuế:":"Tax code:",
// floating buttons & dialogs
"Nhắn Zalo 0337.800.100":"Message on Zalo 0337.800.100","Kết nối WeChat":"Connect on WeChat","Nhắn Messenger":"Message on Messenger",
"Gọi điện đặt chỗ":"Call to book","Gọi điện":"Call","Quét mã để kết bạn WeChat":"Scan to add us on WeChat","Mở WeChat":"Open WeChat","Đóng":"Close",
"Mã QR WeChat – A. Khả":"WeChat QR code – A. Khả","GỌI ĐIỆN ĐẶT CHỖ":"CALL TO BOOK","Hầm Rượu & Karaoke VISIP":"VISIP Wine Cellar & Karaoke",
"HOTLINE HẦM RƯỢU":"RESTAURANT HOTLINE","GỌI NGAY":"CALL NOW"
};
const ZH={
"Trang chủ":"首页","Nhà Hàng Hầm Rượu":"酒窖餐厅","Karaoke":"卡拉OK","Đặt bàn":"订座",
"VSIP Karaoke – Nhà Hàng Hầm Rượu":"VSIP卡拉OK – 酒窖餐厅",
"Nhà Hàng Hầm Rượu & Karaoke VISIP – Đẳng cấp giải trí hàng đầu":"VISIP酒窖餐厅 & 卡拉OK – 顶级娱乐",
"Nhà Hàng Hầm Rượu & Karaoke VISIP":"VISIP酒窖餐厅 & 卡拉OK",
"Karaoke VSIP":"VSIP卡拉OK","Đẳng cấp":"顶级","Giải trí hàng đầu":"顶级娱乐",
"Phòng VIP":"间VIP包厢","Âm thanh – ánh sáng đẳng cấp":"顶级音响灯光","Khu vực phòng sạch sẽ":"包厢干净整洁",
"Đặc biệt":"特色","KTV nhiệt tình – vui vẻ – thoải mái":"KTV服务热情 – 欢乐 – 轻松",
"ĐẶT PHÒNG NGAY":"立即订房","XEM PHÒNG HÁT":"查看包厢","Hotline karaoke":"卡拉OK热线",
"Nhà hàng Hầm Rượu":"酒窖餐厅","Tinh hoa":"精致","Ẩm thực & Vang":"美食与红酒",
"Phòng lớn tích hợp karaoke":"间大包厢含卡拉OK","Khách sức chứa":"位宾客容量",
"ĐẶT BÀN NGAY":"立即订座","XEM THỰC ĐƠN":"查看菜单","Hotline hầm rượu":"餐厅热线","Hầm rượu":"酒窖餐厅",
"Điểm nổi bật Karaoke VIP KTV":"VIP KTV卡拉OK亮点","Điểm nổi bật Hầm Rượu VSIP":"VSIP酒窖亮点",
"Ảnh trước":"上一张","Ảnh sau":"下一张","Chọn banner":"选择横幅","Tạm dừng":"暂停","Tiếp tục":"播放",
"Mặt tiền Karaoke VISIP rực rỡ đèn neon ngày khai trương, hoa và lân chúc mừng":"VISIP卡拉OK开业当天霓虹灯璀璨的门面，鲜花与舞狮祝贺",
"Lối vào Nhà hàng Hầm Rượu VSIP với vòm đá, đèn chùm và hoa chúc mừng khai trương":"VSIP酒窖餐厅入口：石拱门、水晶吊灯与开业花篮",
"Một điểm đến — Hai trải nghiệm":"一个地点 — 两种体验",
"Thưởng thức món ngon trong không gian sang trọng, sau đó tận hưởng những giây phút ca hát riêng tư cùng bạn bè và đồng nghiệp.":"在优雅的环境中享用美食，再与朋友和同事在私人包厢尽情欢唱。",
"Ẩm thực hấp dẫn, không gian ấm cúng, phù hợp tiếp khách và tổ chức tiệc.":"美味佳肴，温馨环境，适合商务接待和举办宴会。",
"Khám phá":"了解更多","Phòng hát riêng tư, âm thanh sống động cho cuộc vui trọn vẹn.":"私密包厢，震撼音响，尽享欢乐时光。",
"Đặt phòng":"订房","Món đặc trưng":"招牌菜",
"Vài món nổi bật của Nhà Hàng Hầm Rượu. Thực đơn đầy đủ ở trang nhà hàng.":"酒窖餐厅部分招牌菜。完整菜单请见餐厅页面。",
"Món ăn":"菜品","Lẩu":"火锅","XEM CHI TIẾT":"查看详情","Không gian karaoke":"卡拉OK包厢",
"Phòng hát LED 3D riêng tư, âm thanh sống động. Xem đầy đủ ở trang karaoke.":"私密3D LED包厢，震撼音响。详情请见卡拉OK页面。",
"Phòng hát":"包厢","Không gian quán":"店内环境","Phòng LED 3D":"3D LED包厢",
"Trần và tường LED 3D, sofa da chữ U, bàn đá":"3D LED天花与墙面，U形真皮沙发，石桌",
"Phòng hiệu ứng LED":"LED特效包厢","Hiệu ứng LED toàn phòng, màn hình lớn":"全屋LED特效，大屏幕",
"Phòng sofa rộng":"宽敞沙发包厢","Không gian rộng, sofa da quanh phòng":"空间宽敞，环绕真皮沙发",
"Phòng trần LED cong":"弧形LED天花包厢","Trần LED uốn cong, màn hình chọn bài":"弧形LED天花，点歌屏",
"Mặt tiền rực rỡ":"璀璨门面","Mặt tiền đèn LED nổi bật, bãi đỗ ô tô ngay trước quán":"醒目的LED门面，门前即有停车场",
"Sảnh chờ sang trọng":"豪华大堂","Cầu thang mạ vàng, màn hình LED và quầy lễ tân":"镀金楼梯、LED屏幕与前台",
"Sảnh tầng trệt":"一楼大堂","Sàn đá bóng loáng, sofa da tiếp khách":"光亮石材地面，真皮会客沙发",
"Lối vào buổi tối":"夜晚入口","Lối đi lát gạch hoa, chỗ để xe rộng rãi":"花砖步道，停车位宽敞",
"ĐỊA CHỈ":"地址","Địa chỉ nhà hàng":"餐厅地址","Bấm vào ảnh để mở Google Maps chỉ đường.":"点击图片打开谷歌地图导航。",
"Mở Google Maps":"打开谷歌地图","Mở Google Maps: VSIP I":"打开谷歌地图：VSIP I",
"Dịch vụ của chúng tôi":"我们的服务","Phòng karaoke VIP":"VIP卡拉OK包厢","Thiết kế hiện đại, sang trọng":"现代豪华设计",
"Sức chứa đa dạng":"多种容量可选","Âm thanh chuyên nghiệp":"专业音响","Hệ thống âm thanh":"高品质",
"chất lượng cao":"音响系统","Ẩm thực & đồ uống":"餐饮","Thực đơn phong phú,":"菜单丰富，","phục vụ tận nơi":"送餐到包厢",
"Hát hết mình":"尽情欢唱","Thăng hoa cảm xúc":"释放激情","Tiệc tùng sôi động":"热闹派对",
"Gắn kết bạn bè":"增进友谊","Sinh nhật – Liên hoan":"生日 – 聚会","Họp mặt – Tiếp khách":"聚餐 – 商务接待",
"Không gian nhà hàng":"餐厅环境","Phòng karaoke":"卡拉OK包厢",
"Món Việt, món Trung, hải sản tươi sống và món đặc trưng. Sảnh tiệc gỗ chạm khắc cho sinh nhật, tiệc gia đình và liên hoan công ty.":"越南菜、中餐、鲜活海鲜及招牌菜。雕花木质宴会厅，适合生日宴、家庭聚餐和公司聚会。",
"ĐẶT BÀN":"订座","KHÔNG GIAN":"环境","Không gian sang trọng, ấm cúng cho tiệc gia đình, tiếp khách và liên hoan.":"典雅温馨的空间，适合家庭聚餐、商务宴请与聚会。",
"Thực đơn & bảng giá":"菜单与价格","Món Việt, món Hoa và hải sản tươi sống – chế biến theo khẩu vị của bạn.":"越南菜、中餐与鲜活海鲜——按您的口味烹制。",
"Menu đầy đủ (15 trang)":"完整菜单（15页）","Hải sản tươi sống, món cá, món tôm và các món tính theo thời giá xem trong menu gốc. Bấm vào trang để đọc.":"鲜活海鲜、鱼类、虾类及时价菜品请查看原版菜单。点击页面阅读。",
"Nhóm món":"菜品分类","Sảnh tiệc gỗ chạm khắc":"雕花木质宴会厅","Tiệc sinh nhật":"生日宴","Tiệc đông người":"多人宴会","Bàn tiệc dài":"长宴会桌",
"Khai vị":"开胃菜","Salad – Gỏi":"沙拉","Món súp":"汤类","Món Trung":"中餐","Món bò":"牛肉","Món heo":"猪肉","Gà – Vịt – Chim":"鸡 · 鸭 · 鸽",
"Món cá":"鱼类","Món tôm":"虾与龙虾","Món mực":"鱿鱼","Hải sản tươi sống & hàu":"鲜活海鲜与生蚝","Món rau":"蔬菜","Cơm – Mì – Bún":"饭 · 面 · 米粉",
"Đồ uống":"饮品","Rượu vang":"红酒","Salad – Gỏi & Súp":"沙拉与汤","Cơm – Mì – Bún & Lẩu":"饭 · 面 · 米粉与火锅","Hải sản tươi sống":"鲜活海鲜",
"Theo thời giá":"时价","theo thời giá":"时价","đặt trước":"需预订",
"Phòng VIP trần và tường LED 3D, sảnh vàng chạm trổ, bãi đỗ ô tô ngay trước quán. Gọi món từ Nhà Hàng Hầm Rượu phục vụ tận phòng.":"VIP包厢配3D LED天花与墙面，金色雕花大堂，门前即有停车场。可点酒窖餐厅菜品送至包厢。",
"BẢNG GIÁ":"价格表","Giờ hát · Phòng VIP nhỏ":"按小时 · 小VIP包厢","Giờ hát · Phòng VIP lớn":"按小时 · 大VIP包厢","/ giờ":"/ 小时","/giờ":"/小时",
"/ người":"/ 人","Không giới hạn thời gian":"不限时间","Sau 12h: 390.000đ / giờ":"12点后：390,000越南盾 / 小时","Đặt phòng trước":"提前订房","tặng 1 tiết mục múa cổ trang":"赠送一场古装舞蹈表演",
"GỌI ĐIỆN ĐẶT PHÒNG":"致电订房","NHẮN ZALO":"Zalo留言","VIDEO THỰC TẾ":"实拍视频","Trải nghiệm phòng hát":"包厢体验",
"Di chuột hoặc chạm vào video để xem trước. Bấm để xem toàn màn hình.":"鼠标悬停或轻触视频预览，点击全屏观看。",
"Xem":"播放","Từ cửa vào đến phòng":"从门口到包厢","Mặt tiền, sảnh vàng, hành lang neon":"门面、金色大堂、霓虹走廊",
"Trần và tường đổi cảnh theo nhạc":"天花与墙面随音乐变换场景","Hiệu ứng toàn phòng":"全屋特效","Sofa da, bàn đá, màn hình lớn":"真皮沙发、石桌、大屏幕",
"Không gian KTV":"KTV环境","Hành lang, sảnh và lối đi":"走廊、大堂与通道","Hành lang neon":"霓虹走廊","Lối đi giữa các phòng VIP":"VIP包厢之间的通道",
"Khu phòng VIP":"VIP包厢区","Cửa phòng và hành lang ánh sáng":"包厢门与灯光走廊","Sảnh ngoài":"户外庭院","Sân lát gạch hoa, non bộ":"花砖庭院与假山",
"Cầu thang đá":"石材楼梯","Lan can sắt mạ vàng":"镀金铁艺栏杆","Phòng KTV":"KTV包厢","Tiết mục đặc sắc":"特色表演","Múa cổ trang":"古装舞蹈","Tiết mục múa cổ trang biểu diễn ngay trong phòng hát LED 3D. Đặt phòng trước được tặng 1 tiết mục.":"古装舞蹈表演，直接在3D LED包厢内演出。提前订房赠送一场表演。","Video thực tế: 2 vũ công múa cổ trang trong phòng LED 3D":"实拍视频：两位舞者在3D LED包厢内表演古装舞蹈",
"Ảnh minh hoạ một số phòng hát. Giờ hát phòng VIP nhỏ 330.000đ/giờ, phòng VIP lớn 450.000đ/giờ.":"部分包厢照片。小VIP包厢330,000越南盾/小时，大VIP包厢450,000越南盾/小时。",
"Video thực tế: trần và tường LED 3D đổi cảnh theo nhạc":"实拍视频：3D LED天花与墙面随音乐变换","ĐẶT PHÒNG NÀY":"预订此包厢","Menu nhà hàng":"餐厅菜单","Hơn 130 món Việt – Trung – hải sản tươi sống. Món mới mỗi ngày, giá đã gồm VAT.":"130多道越南菜、中餐及鲜活海鲜。每日新品，价格已含增值税。","Xem từng trang menu":"浏览菜单页面","Đã chọn được món?":"选好菜了吗？","Gọi trước để giữ bàn và đặt hải sản tươi sống theo cân.":"提前致电订位，鲜活海鲜可按斤预订。","ĐẶT BÀN NGAY":"立即订座","MỚI HÔM NAY":"今日新品","Món mới hôm nay":"今日新品","XEM MÓN MỚI":"查看新品","TƯƠI SỐNG":"鲜活","Bảng giá hải sản":"海鲜价目表","Bắt tại hồ, chế biến theo yêu cầu. Giá đã gồm VAT.":"现捞现做，按需烹饪。价格已含增值税。","XEM BẢNG GIÁ":"查看价目","Tất cả":"全部","Món mới":"新品","Đặc trưng & Khai vị":"招牌与开胃菜","Món Việt":"越南菜","Món Trung":"中餐","Hải sản":"海鲜","Cơm – Lẩu":"饭面火锅","Đồ uống":"饮料","Bìa menu":"封面","MỚI":"新","Cập nhật mỗi ngày":"每日更新","6 món mới vừa ra mắt":"6道全新菜品","XEM POSTER MÓN MỚI":"查看新品海报","Hải sản tươi sống":"鲜活海鲜","Bắt tại hồ · giá đã gồm VAT":"现捞 · 价格已含增值税","Chọn tại hồ, chế biến theo yêu cầu: hấp, nướng, rang me, đút lò phô mai, sashimi…":"现场挑选，按需烹饪：清蒸、烧烤、罗望子炒、芝士焗、刺身…","XEM BẢNG GIÁ ĐẦY ĐỦ":"查看完整价目","Thực đơn các món":"其他菜品","Món đặc trưng, khai vị, món Việt, món Trung, cơm – lẩu, đồ uống":"招牌菜、开胃菜、越南菜、中餐、饭面火锅、饮料","Xem hải sản tại hồ":"现场海鲜池","Video thực tế · chạm để xem có tiếng":"实拍视频 · 点击观看（有声）","Khu hồ hải sản":"海鲜池区","Tôm hùm bông":"锦绣龙虾","Tôm hùm":"龙虾","Tôm mũ ni":"琵琶虾","Ghẹ xanh & cua":"蓝花蟹与螃蟹","Ghẹ xanh":"蓝花蟹","Cua thịt":"肉蟹","Cá mú":"石斑鱼","Cá tầm":"鲟鱼","Hồ cá":"鱼池","Ốc các loại":"各类海螺","Ốc & sò":"海螺与贝类","Sò – ngao":"蛤蜊","XEM VIDEO":"观看视频","ĐẶT PHÒNG":"订房",
"Phòng KTV · góc khác":"KTV包厢 · 另一角度","Phòng KTV · hiệu ứng LED":"KTV包厢 · LED特效","Xem poster bảng giá":"查看价格海报",
"Poster Karaoke VSIP: giờ hát phòng VIP nhỏ 330.000đ/giờ, phòng VIP lớn 450.000đ/giờ, KTV 500.000đ/người, đặt phòng trước tặng 1 tiết mục múa cổ trang":"VSIP卡拉OK海报：小VIP包厢330,000越南盾/小时，大VIP包厢450,000越南盾/小时，KTV 500,000越南盾/人，提前订房赠送古装舞蹈表演",
"Ảnh phòng KTV":"KTV包厢照片","HOTLINE KARAOKE":"卡拉OK热线","GỌI":"致电","Zalo hầm rượu":"Zalo（餐厅）","Zalo karaoke":"Zalo（卡拉OK）","© 2026 Nhà Hàng Hầm Rượu & Karaoke VSIP":"© 2026 VSIP酒窖餐厅 & 卡拉OK","MST":"税号","Gọi":"致电","Điều hướng":"导航","Gọi đặt phòng karaoke":"致电预订卡拉OK",
"Nhà hàng món Việt – món Trung – hải sản tươi sống và karaoke phòng LED 3D. Nhận tiệc sinh nhật, liên hoan công ty, tiếp khách.":"越南菜、中餐、鲜活海鲜餐厅及3D LED卡拉OK包厢。承接生日宴、公司聚会和商务宴请。",
"Liên hệ":"联系我们","Hầm rượu:":"餐厅：","Karaoke:":"卡拉OK：","Hầm Rượu & Karaoke VSIP":"VSIP酒窖 & 卡拉OK","Cơ sở":"门店",
"Chỉ đường":"导航","Bảng giá karaoke":"卡拉OK价格","Bản đồ chỉ đường":"地图导航","Mã số thuế:":"税号：",
"Nhắn Zalo 0337.800.100":"Zalo留言 0337.800.100","Kết nối WeChat":"微信联系","Nhắn Messenger":"Messenger留言",
"Gọi điện đặt chỗ":"致电预订","Gọi điện":"致电","Quét mã để kết bạn WeChat":"扫码添加微信好友","Mở WeChat":"打开微信","Đóng":"关闭",
"Mã QR WeChat – A. Khả":"微信二维码 – A. Khả","GỌI ĐIỆN ĐẶT CHỖ":"致电预订","Hầm Rượu & Karaoke VISIP":"VISIP酒窖 & 卡拉OK",
"HOTLINE HẦM RƯỢU":"餐厅热线","GỌI NGAY":"立即致电"
};
const DICT={en:EN,zh:ZH};
const PAT={en:[
 [/^(.*) · (\d+) món$/,(m,a,n)=>`${tr(a)??a} · ${n} dishes`],
 [/^Xem ảnh (.+)$/,(m,a)=>`View photo: ${a}`],
 [/^Xem video: (.+)$/,(m,a)=>`Watch video: ${tr(a)??a}`],
 [/^Menu · (.+?)( \(\d\))?$/,(m,a,b)=>`Menu · ${tr(a)??a}${b||""}`],
 [/^(\d) \/ 2: (.+)$/,(m,n,a)=>`${n} / 2: ${tr(a)??a}`],
 [/^(.+) · đặt trước$/,(m,a)=>`${a} · pre-order`],
 [/^(.+) · giá theo con\/kg ghi kèm$/,(m,a)=>`${a} · priced per piece/kg`],
 [/^(.+) · giá theo kích cỡ$/,(m,a)=>`${a} · priced by size`],
 [/^(.+) · theo thời giá$/,(m,a)=>`${a} · market price`],
],zh:[
 [/^(.*) · (\d+) món$/,(m,a,n)=>`${tr(a)??a} · ${n}道菜`],
 [/^Xem ảnh (.+)$/,(m,a)=>`查看图片：${a}`],
 [/^Xem video: (.+)$/,(m,a)=>`观看视频：${tr(a)??a}`],
 [/^Menu · (.+?)( \(\d\))?$/,(m,a,b)=>`菜单 · ${tr(a)??a}${b||""}`],
 [/^(\d) \/ 2: (.+)$/,(m,n,a)=>`${n} / 2：${tr(a)??a}`],
 [/^(.+) · đặt trước$/,(m,a)=>`${a} · 需预订`],
 [/^(.+) · giá theo con\/kg ghi kèm$/,(m,a)=>`${a} · 按条/公斤计价`],
 [/^(.+) · giá theo kích cỡ$/,(m,a)=>`${a} · 按规格计价`],
 [/^(.+) · theo thời giá$/,(m,a)=>`${a} · 时价`],
]};
function tr(s){const D=DICT[lang];if(!D)return null;if(D[s]!=null)return D[s];for(const [re,f] of PAT[lang]){if(re.test(s))return s.replace(re,f)}return null}
const ROOTS="#mNav,#siteTop,#view-site,#view-restaurant,#view-karaoke,#siteFoot,#siteFloat,.callsheet,.kcallbar,.lb";
const ATTRS=["aria-label","alt","title","placeholder","data-tip"];
const origText=new WeakMap(),origAttr=new WeakMap();
let lang="vi",busy=false;
function doText(n){const p=n.parentElement;if(!p||p.closest("script,style,.ms,.lang-sw"))return;
  if(!origText.has(n))origText.set(n,n.nodeValue);const o=origText.get(n);
  if(lang==="vi"){if(n.nodeValue!==o)n.nodeValue=o;return}
  const k=o.replace(/\s+/g," ").trim();if(!k)return;const v=tr(k);
  if(v!=null){const nv=o.replace(k,v);if(n.nodeValue!==nv)n.nodeValue=nv}}
function doEl(e){if(e.closest(".lang-sw"))return;let m=origAttr.get(e);
  for(const a of ATTRS){if(!e.hasAttribute(a))continue;if(!m){m={};origAttr.set(e,m)}if(!(a in m))m[a]=e.getAttribute(a);
    const o=m[a],v=lang==="vi"?o:(tr(o.trim())??o);if(e.getAttribute(a)!==v)e.setAttribute(a,v)}}
function walk(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())doText(n);
  if(root.nodeType===1){doEl(root);root.querySelectorAll("*").forEach(doEl)}}
let obs=null;
function apply(){busy=true;document.querySelectorAll(ROOTS).forEach(walk);if(obs)obs.takeRecords();busy=false}
function setLang(l,save=true){lang=DICT[l]?l:"vi";document.documentElement.lang=lang==="zh"?"zh-Hans":lang;
  document.querySelectorAll(".lang-sw button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  apply();if(save){try{localStorage.setItem("vsip-lang",lang)}catch(e){}}}
// toggle in the header
const nav=document.querySelector("#siteTop .nav");
if(nav){const sw=document.createElement("div");sw.className="lang-sw";sw.setAttribute("role","group");sw.setAttribute("aria-label","Ngôn ngữ / Language / 语言");
  sw.innerHTML='<button type="button" data-lang="vi" aria-pressed="true" lang="vi" aria-label="Tiếng Việt">VI</button><button type="button" data-lang="en" aria-pressed="false" lang="en" aria-label="English">EN</button><button type="button" data-lang="zh" aria-pressed="false" lang="zh-Hans" aria-label="中文">中文</button>';
  sw.addEventListener("click",e=>{const b=e.target.closest("button");if(b)setLang(b.dataset.lang)});nav.appendChild(sw)}
// translate anything rendered later
obs=new MutationObserver(ms=>{if(busy||lang==="vi")return;busy=true;
  for(const m of ms){if(m.type==="childList")m.addedNodes.forEach(n=>{const el=n.nodeType===1?n:n.parentElement;if(el&&el.closest(ROOTS))n.nodeType===3?doText(n):walk(n)});
    else if(m.type==="characterData"){const p=m.target.parentElement;if(p&&p.closest(ROOTS)){origText.delete(m.target);doText(m.target)}}
    else if(m.type==="attributes"&&m.target.closest(ROOTS)){const o=origAttr.get(m.target);if(o)delete o[m.attributeName];doEl(m.target)}}
  obs.takeRecords();busy=false});obs.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
let init="vi";try{init=new URLSearchParams(location.search).get("lang")||localStorage.getItem("vsip-lang")||"vi"}catch(e){}
setLang(init,false);
})();
