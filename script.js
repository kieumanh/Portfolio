'use strict';

const translations = {
  vi: {
    navAbout:'Câu chuyện',navJourney:'Hành trình',navProjects:'Dự án',navLearning:'Học vấn',navContact:'Kết nối',
    heroKicker:'MỘT TRANG ĐỜI · MỘT HÀNH TRÌNH ĐANG VIẾT',heroTitle:'Sống sâu.<br><em>Học rộng.</em><br>Gieo điều lành.',
    heroLead:'Tôi là Kiều Xuân Mạnh — một người học không ngừng, làm sáng tạo nội dung và tìm cách kết nối công nghệ, thiên nhiên cùng những giá trị nhân văn.',
    exploreJourney:'Khám phá hành trình',connectNow:'Kết nối với Mạnh ↗',heroQuote:'“Không chỉ làm điều mình giỏi. Còn học cách làm điều có ích.”',heroFooter:'NHỮNG GIÁ TRỊ ĐƯỢC NUÔI DƯỠNG QUA THỜI GIAN',orbit:'LEARN · CREATE · GIVE BACK ·',portraitSmall:'NGƯỜI KỂ CHUYỆN · NGƯỜI HỌC TỪ ĐẤT',
    aboutKicker:'VỀ MẠNH',aboutTitle:'Một con đường không thẳng.<br><em>Nhưng luôn hướng về điều có ý nghĩa.</em>',
    aboutP1:'Từ truyền thông, thiết kế đồ họa đến công nghệ số; từ viết lách, làm video đến những không gian thực hành thiền — mỗi giai đoạn cho tôi một cách mới để học, làm và lắng nghe cuộc sống.',
    aboutP2:'Tôi tin một dự án tốt không chỉ cần vẻ ngoài đẹp. Nó cần câu chuyện thật, sự tử tế với con người và một giá trị đủ bền để tiếp tục lớn lên sau khi chúng ta rời đi.',
    value1:'Tư duy sáng tạo',value2:'Tự học suốt đời',value3:'Sống chánh niệm',value4:'Phụng sự cộng đồng',
    quoteText:'“Kiến thức cho ta công cụ.<br>Trải nghiệm cho ta sự thấu hiểu.<br><em>Lòng trắc ẩn giúp mọi điều có ý nghĩa.</em>”',quoteSide:'NGHĨ VỀ HỌC TẬP, SÁNG TẠO VÀ PHỤNG SỰ',
    timelineKicker:'02 · NHỮNG DẤU MỐC ĐÁNG NHỚ',timelineTitle:'Một hành trình.<br><em>Nhiều lần bắt đầu.</em>',timelineIntro:'Không phải đường thẳng đi đến thành công, mà là tập hợp những trải nghiệm đã định hình con người mình hôm nay.',timelineAside:'Mỗi năm là một trang. Mỗi trải nghiệm là một người thầy.',seeAllMilestones:'Xem đầy đủ hành trình',collapseMilestones:'Thu gọn hành trình',
    projectKicker:'03 · CÔNG VIỆC & NHỮNG HẠT MẦM',projectTitle:'Điều tôi đã làm.<br><em>Và điều đang ươm trồng.</em>',projectIntro:'Một tuyển tập chọn lọc gồm công việc đã hoàn thành và dự án đang phát triển, với trạng thái được ghi rõ.',
    filterAll:'Tất cả',filterDone:'Đã thực hiện',filterGrowing:'Đang phát triển',filterProposal:'Đề xuất',
    giveKicker:'MỘT GÓC DÀNH CHO PHỤNG SỰ',giveTitle:'Nếu được gieo một hạt mầm,<br><em>tôi chọn gieo sự tỉnh thức.</em>',giveP:'Những hoạt động gắn với Gieo mầm Tỉnh Thức, câu lạc bộ thiền và Zen Coach 101 giúp tôi thực hành việc chia sẻ tri thức, tạo không gian kết nối và học cách lắng nghe cộng đồng.',giveLink:'Khám phá nội dung thiền định ↗',
    learningKicker:'04 · HỌC TẬP KHÔNG NGỪNG',learningTitle:'Tích lũy tri thức.<br><em>Rèn luyện khả năng thích nghi.</em>',learningIntro:'Một vài cột mốc học tập và chứng nhận có tài liệu đi kèm. Tôi xem chứng nhận là một điểm dừng để học sâu hơn — không phải đích đến.',credentialsNote:'Các giấy chứng nhận được trình bày theo đúng tên khóa học và nội dung tài liệu. Chứng nhận hoàn thành học phần không được diễn giải thành bằng tốt nghiệp.',
    contactKicker:'05 · MỘT CUỘC GẶP GỠ MỚI',contactTitle:'Có một câu chuyện<br>đáng kể cùng nhau?<br><em>Mình rất muốn lắng nghe.</em>',contactP:'Nếu những điều tôi đang học, đang làm có thể đóng góp cho dự án của bạn, hãy bắt đầu bằng một lời chào.',contactEmail:'Gửi email cho Mạnh',copyEmail:'Sao chép email ↗',copiedEmail:'Đã sao chép email ✓',postcard:'Chúc cho những việc mình làm<br>đều bắt đầu bằng sự chân thành<br>và kết thúc bằng một chút an lành.',footerP:'Một trang nhật ký được viết bằng trải nghiệm, lòng biết ơn và những điều còn đang học.',backTop:'VỀ ĐẦU TRANG ↑',openProof:'Xem nguồn ↗',viewProject:'Xem dự án ↗',viewProposal:'Xem bản đề xuất ↗',notPublic:'Tài liệu nội bộ / chưa công bố',pdfOriginal:'Xem PDF gốc ↗',certYear:'2026',
    contactMethods:'Các cách kết nối',contactPhone:'Điện thoại / Zalo',callNow:'Gọi điện ↗',zaloNow:'Nhắn Zalo ↗',formTitle:'Gửi lời nhắn',formIntro:'Mạnh sẽ phản hồi qua email bạn cung cấp.',formName:'Họ và tên',formEmail:'Email phản hồi',formPhone:'Điện thoại / Zalo (không bắt buộc)',formMessage:'Lời nhắn',formConsent:'Tôi đồng ý để thông tin này được dùng để tiếp nhận và phản hồi lời nhắn.',formSubmit:'Gửi lời nhắn ↗',formCopy:'Sao chép lời nhắn',formNote:'Lời nhắn được xử lý qua FormSubmit và chuyển đến email của Mạnh. Nếu đây là lần đầu sử dụng, Mạnh cần xác nhận email kích hoạt để nhận thư.',formSending:'Đang gửi lời nhắn…',formSuccess:'Biểu mẫu đã tiếp nhận lời nhắn. Mạnh sẽ phản hồi qua email bạn cung cấp.',formActivation:'Biểu mẫu cần kích hoạt. Email xác nhận đã được gửi đến Mạnh; lời nhắn sẽ được chuyển sau khi xác nhận.',formError:'Chưa xác nhận được việc gửi. Nội dung được giữ lại; bạn có thể sao chép để gửi qua email hoặc Zalo.',formCopied:'Đã sao chép lời nhắn. Bạn có thể dán vào email hoặc Zalo.',formCopyError:'Không sao chép được. Bạn có thể chọn và sao chép nội dung trong ô lời nhắn.',formCooldown:'Bạn vừa gửi lời nhắn này. Vui lòng chờ một phút trước khi gửi lại.',formInvalid:'Vui lòng nhập họ tên và lời nhắn có nội dung, cùng email hợp lệ.',
    timeline: [
      {year:'2012',label:'NỀN TẢNG HỌC VẤN',title:'Tốt nghiệp THPT Tây Ninh',desc:'Hoàn thành bậc trung học phổ thông, bắt đầu hành trình tự khám phá con đường học tập và nghề nghiệp.',major:false},
      {year:'2017',label:'SOCIAL MARKETING',title:'Công ty Giáo dục Tâm Khai Sáng',desc:'Làm công việc Social Marketing; đồng thời tự học thiết kế website, chăm sóc khách hàng và tìm hiểu hoạt động doanh nghiệp.',major:true},
      {year:'2018–2019',label:'TỰ HỌC LẬP TRÌNH',title:'Xây dựng nền tảng phát triển phần mềm',desc:'Chủ động học lập trình và nắm vững các ngôn ngữ nền tảng HTML, CSS, JavaScript, cùng những nguyên tắc thiết kế hệ thống website và ứng dụng.',major:true},
      {year:'2020',label:'SÁNG TẠO ĐƯỢC GHI NHẬN',title:'Bài báo cáo video tại FPT Polytechnic',desc:'Thay báo cáo Word/PowerPoint bằng một video có kịch bản. FPT Polytechnic đăng bài ghi nhận và lời đánh giá tích cực từ giảng viên ngày 04/09/2020.',url:'https://caodang.fpt.edu.vn/tin-tuc-poly/bao-cao-thuc-te-xuat-sac-cua-nam-sinh-do-hoa-fpoly-tay-nguyen.html',major:true},
      {year:'2021',label:'THIẾT KẾ ĐỒ HỌA',title:'Hoàn tất học phần Thiết kế đồ họa',desc:'Hoàn thành các học phần ngành Thiết kế đồ họa – Mỹ thuật đa phương tiện tại FPT Polytechnic; không diễn giải là đã được cấp bằng tốt nghiệp.',major:false},
      {year:'2021–22',label:'THIỀN ĐỊNH & CỘNG ĐỒNG',title:'Gieo mầm Tỉnh Thức · Zen Coach 101',desc:'Sáng tạo nội dung cho dự án Gieo mầm Tỉnh Thức, khởi xướng câu lạc bộ thực hành thiền và các hoạt động chia sẻ như Zen Coach 101, The Zen Blogger.',url:'https://www.youtube.com/@minhtrietthiendinh',major:true},
      {year:'2023–24',label:'TRUYỀN THÔNG GIÁO DỤC',title:'Social Marketing · Tomoe English House',desc:'Thực hiện Social Marketing tại môi trường giáo dục tiếng Anh dành cho trẻ em ở Đà Nẵng.',url:'https://www.facebook.com/TomoeEnglishHouse/',major:true},
      {year:'01/2025',label:'WEBSITE & CỘNG ĐỒNG',title:'Xây dựng website Học Thiền Đà Nẵng',desc:'Tham gia xây dựng website cho tổ chức Học Thiền Đà Nẵng — một điểm kết nối nội dung và hoạt động thực hành thiền.',url:'https://www.hocthiendanang.com/',major:true},
      {year:'2026',label:'AN NINH MẠNG & AI',title:'CCEP · Nhà báo 4.0 · Giáo dục thời AI',desc:'Đạt chứng nhận Certified Cybersecurity Educator Professional ngày 07/01/2026 và hoàn thành hai khóa AI for Impact về nội dung, quản trị và sáng tạo trong giáo dục.',url:'#learning',major:true},
    ],
    projects: [
      {category:'done',date:'2021–2022',title:'Gieo mầm Tỉnh Thức',description:'Sáng tạo nội dung, chia sẻ về thực hành thiền, khởi xướng câu lạc bộ và xây dựng các hoạt động kết nối cộng đồng, bao gồm Zen Coach 101.',art:'meditation',artText:'Gieo mầm',url:'https://www.youtube.com/@minhtrietthiendinh'},
      {category:'done',date:'01/2025',title:'Học Thiền Đà Nẵng',description:'Xây dựng website cho tổ chức Học Thiền Đà Nẵng, giúp nội dung thực hành thiền có một không gian số dễ tiếp cận.',art:'education',artText:'An trú',url:'https://www.hocthiendanang.com/'},
      {category:'growing',date:'2026',title:'Hương Thiền Nature',description:'Đồng phát triển nền tảng số và định hướng hệ sinh thái thiền, chánh niệm, Natural Wellness. Website đang phát triển theo từng giai đoạn; retreat, khóa học và membership là định hướng tương lai.',art:'nature',artText:'Nature',url:'https://huongthiennature.com/vi/'},
      {category:'done',date:'2020',title:'Video được FPT Polytechnic ghi nhận',description:'Thiết kế kịch bản và thực hiện video về chuyến tham quan thực tế. Bài báo cáo được giảng viên đánh giá cao và được nhà trường đăng bài.',art:'fpt',artText:'Story',url:'https://caodang.fpt.edu.vn/tin-tuc-poly/bao-cao-thuc-te-xuat-sac-cua-nam-sinh-do-hoa-fpoly-tay-nguyen.html'},
      {category:'proposal',date:'2026',title:'Bidicomed × Nẫu Ecovalley',description:'Đề xuất định hướng truyền thông kể chuyện từ vùng dược liệu, con người, sản phẩm và nông trại. Đây là hồ sơ đề xuất hợp tác, không phải dự án đã triển khai.',art:'story',artText:'Từ đất',url:'https://bidicomed-improve-communication.kieumanh2211.chatgpt.site/'},
      {category:'done',date:'2026',title:'Sổ nợ An Tâm',description:'Ứng dụng quản lý công nợ cá nhân đã hoàn thiện: theo dõi khoản vay, lịch thanh toán và tình trạng trả nợ. Truy cập ứng dụng để đăng ký và sử dụng.',art:'so-no-an-tam',artText:'An Tâm',url:'https://sono-v1.huongthiennature.com/'},
      {category:'done',date:'2023–2024',title:'Tomoe English House',description:'Kinh nghiệm Social Marketing trong môi trường giáo dục tiếng Anh cho trẻ em tại Đà Nẵng; kết nối nội dung và truyền thông thương hiệu.',art:'digital',artText:'Learn',url:'https://www.facebook.com/TomoeEnglishHouse/'},
    ],
    certificates: [
      {date:'07/01/2026 · RED TEAM LEADERS',title:'Certified Cybersecurity Educator Professional (CCEP)',image:'assets/ccep.webp',pdf:'documents/ccep.pdf'},
      {date:'2026 · AI FOR IMPACT',title:'Nhà báo 4.0: Làm chủ nội dung trong kỷ nguyên AI',image:'assets/nha-bao-ai.webp',pdf:'documents/nha-bao-ai.pdf'},
      {date:'2026 · AI FOR IMPACT',title:'Giáo dục thời AI: Quản trị và sáng tạo',image:'assets/giao-duc-ai.webp',pdf:'documents/giao-duc-ai.pdf'}
    ]
  },
  en: {
    navAbout:'My story',navJourney:'Journey',navProjects:'Projects',navLearning:'Learning',navContact:'Connect',
    heroKicker:'A LIFE IN PROGRESS · A STORY STILL BEING WRITTEN',heroTitle:'Live deeply.<br><em>Learn widely.</em><br>Sow kindness.',
    heroLead:'I’m Kieu Xuan Manh — a lifelong learner and creative storyteller exploring the connections between technology, nature, and human-centered values.',
    exploreJourney:'Explore my journey',connectNow:'Connect with me ↗',heroQuote:'“Not only to do what I’m good at, but also to learn how to be of service.”',heroFooter:'VALUES CULTIVATED THROUGH TIME',orbit:'LEARN · CREATE · GIVE BACK ·',portraitSmall:'STORYTELLER · LEARNING FROM THE LAND',
    aboutKicker:'ABOUT ME',aboutTitle:'Not a straight road.<br><em>But always toward what matters.</em>',
    aboutP1:'From communication and graphic design to digital technology; from writing and filmmaking to mindfulness communities — every chapter has given me a new way to learn, build, and listen.',
    aboutP2:'I believe a meaningful project needs more than good looks. It needs an authentic story, respect for people, and a value that can continue growing after we have stepped away.',
    value1:'Creative thinking',value2:'Lifelong learning',value3:'Mindful living',value4:'Community contribution',
    quoteText:'“Knowledge gives us tools.<br>Experience gives us understanding.<br><em>Compassion gives everything meaning.</em>”',quoteSide:'ON LEARNING, CREATIVITY AND SERVICE',
    timelineKicker:'02 · MILESTONES',timelineTitle:'One journey.<br><em>Many new beginnings.</em>',timelineIntro:'Not a straight road to success, but a collection of experiences that have shaped who I am today.',timelineAside:'Every year is a page. Every experience is a teacher.',seeAllMilestones:'View full timeline',collapseMilestones:'Show fewer milestones',
    projectKicker:'03 · WORK & SEEDS OF POSSIBILITY',projectTitle:'What I’ve created.<br><em>What I’m still growing.</em>',projectIntro:'A curated collection of completed work and evolving projects, each clearly identified.',
    filterAll:'All',filterDone:'Completed work',filterGrowing:'In progress',filterProposal:'Proposal',
    giveKicker:'A SPACE FOR GIVING BACK',giveTitle:'If I could plant one seed,<br><em>let it be awareness.</em>',giveP:'Through Gieo mầm Tỉnh Thức, a meditation practice group, and Zen Coach 101, I have explored sharing knowledge, holding space for connection, and listening to a community.',giveLink:'Explore meditation content ↗',
    learningKicker:'04 · LIFELONG LEARNING',learningTitle:'Growing knowledge.<br><em>Practicing adaptability.</em>',learningIntro:'Selected learning milestones backed by original documents. I see each certificate as an invitation to keep learning, not an endpoint.',credentialsNote:'Certificates are presented using their exact course titles and documented scopes. Completion of coursework is not represented as a graduation degree.',
    contactKicker:'05 · THE NEXT CONVERSATION',contactTitle:'Have a story<br>worth telling together?<br><em>I’d love to listen.</em>',contactP:'If what I’m learning or building could contribute to your work, let’s begin with a simple hello.',contactEmail:'Send me an email',copyEmail:'Copy email ↗',copiedEmail:'Email copied ✓',postcard:'May the things we create<br>begin with sincerity<br>and leave a little peace behind.',footerP:'A living journal written through experience, gratitude and all that remains to be learned.',backTop:'BACK TO TOP ↑',openProof:'Read source ↗',viewProject:'Visit project ↗',viewProposal:'View proposal ↗',notPublic:'Internal / not published',pdfOriginal:'View original PDF ↗',certYear:'2026',
    contactMethods:'Ways to connect',contactPhone:'Phone / Zalo',callNow:'Call ↗',zaloNow:'Message on Zalo ↗',formTitle:'Send a message',formIntro:'Mạnh will reply to the email you provide.',formName:'Full name',formEmail:'Reply email',formPhone:'Phone / Zalo (optional)',formMessage:'Message',formConsent:'I agree that these details may be used to receive and respond to my message.',formSubmit:'Send message ↗',formCopy:'Copy message',formNote:'FormSubmit processes your message and forwards it to Mạnh’s email. On first use, Mạnh may need to confirm the activation email to receive submissions.',formSending:'Sending your message…',formSuccess:'The form service has received your message. Mạnh will reply to the email you provided.',formActivation:'This form needs activation. A confirmation email has been sent to Mạnh; your message will be forwarded after confirmation.',formError:'Sending could not be confirmed. Your message is preserved; copy it to send by email or Zalo.',formCopied:'Message copied. You can paste it into email or Zalo.',formCopyError:'Unable to copy. You can select and copy the text in the message field.',formCooldown:'You just submitted this message. Please wait a minute before sending it again.',formInvalid:'Please enter a name, a meaningful message and a valid email address.',
    timeline: [
      {year:'2012',label:'EDUCATIONAL FOUNDATIONS',title:'Completed high school in Tây Ninh',desc:'Finished secondary education and began exploring my own learning and career path.',major:false},
      {year:'2017',label:'SOCIAL MARKETING',title:'Tâm Khai Sáng Education',desc:'Worked in social marketing while independently learning website design, customer service, and business fundamentals.',major:true},
      {year:'2018–2019',label:'SELF-TAUGHT PROGRAMMING',title:'Building a software development foundation',desc:'Independently studied programming, building a strong command of HTML, CSS, and JavaScript fundamentals, along with core principles for designing website and application systems.',major:true},
      {year:'2020',label:'CREATIVE RECOGNITION',title:'Video report featured by FPT Polytechnic',desc:'Created a scripted video instead of a Word/PowerPoint report. The college published an article featuring positive faculty feedback on September 4, 2020.',url:'https://caodang.fpt.edu.vn/tin-tuc-poly/bao-cao-thuc-te-xuat-sac-cua-nam-sinh-do-hoa-fpoly-tay-nguyen.html',major:true},
      {year:'2021',label:'GRAPHIC DESIGN',title:'Completed graphic design coursework',desc:'Completed coursework in Graphic Design and Multimedia Arts at FPT Polytechnic; this is not stated as an awarded graduation diploma.',major:false},
      {year:'2021–22',label:'MEDITATION & COMMUNITY',title:'Gieo mầm Tỉnh Thức · Zen Coach 101',desc:'Created content for Gieo mầm Tỉnh Thức and initiated group meditation and educational activities including Zen Coach 101 and The Zen Blogger.',url:'https://www.youtube.com/@minhtrietthiendinh',major:true},
      {year:'2023–24',label:'EDUCATION MARKETING',title:'Social Marketing · Tomoe English House',desc:'Worked in social marketing in a children’s English education setting in Da Nang.',url:'https://www.facebook.com/TomoeEnglishHouse/',major:true},
      {year:'01/2025',label:'WEBSITE & COMMUNITY',title:'Built the Học Thiền Đà Nẵng website',desc:'Built a website for Học Thiền Đà Nẵng, providing a digital place for meditation content and activities.',url:'https://www.hocthiendanang.com/',major:true},
      {year:'2026',label:'CYBERSECURITY & AI',title:'CCEP · AI Journalism · AI in Education',desc:'Earned the Certified Cybersecurity Educator Professional certificate on January 7, 2026, and completed two AI for Impact courses on content and education.',url:'#learning',major:true},
    ],
    projects: [
      {category:'done',date:'2021–2022',title:'Gieo mầm Tỉnh Thức',description:'Content creation, meditation practice sharing, a meditation group, and community activities including Zen Coach 101.',art:'meditation',artText:'Awaken',url:'https://www.youtube.com/@minhtrietthiendinh'},
      {category:'done',date:'01/2025',title:'Học Thiền Đà Nẵng',description:'Built a website for a meditation organization in Da Nang, making contemplative content easier to access.',art:'education',artText:'Be here',url:'https://www.hocthiendanang.com/'},
      {category:'growing',date:'2026',title:'Hương Thiền Nature',description:'Co-developing the digital platform for mindfulness, meditation and natural wellness. Retreats, courses and memberships remain future directions.',art:'nature',artText:'Nature',url:'https://huongthiennature.com/vi/'},
      {category:'done',date:'2020',title:'FPT Polytechnic–featured video',description:'Scripted and created a field-trip video report, which received positive faculty feedback and was featured in the college’s news.',art:'fpt',artText:'Story',url:'https://caodang.fpt.edu.vn/tin-tuc-poly/bao-cao-thuc-te-xuat-sac-cua-nam-sinh-do-hoa-fpoly-tay-nguyen.html'},
      {category:'proposal',date:'2026',title:'Bidicomed × Nẫu Ecovalley',description:'A communication and storytelling proposal focused on medicinal plants, people, products and farm life. A proposal, not completed employment or delivery.',art:'story',artText:'From soil',url:'https://bidicomed-improve-communication.kieumanh2211.chatgpt.site/'},
      {category:'done',date:'2026',title:'Sổ nợ An Tâm',description:'A completed personal debt management app for tracking loans, payment schedules and repayment status. Open the app to register and use it.',art:'so-no-an-tam',artText:'An Tâm',url:'https://sono-v1.huongthiennature.com/'},
      {category:'done',date:'2023–2024',title:'Tomoe English House',description:'Social marketing experience in a children’s English education organization in Da Nang.',art:'digital',artText:'Learn',url:'https://www.facebook.com/TomoeEnglishHouse/'},
    ],
    certificates: [
      {date:'JAN 7, 2026 · RED TEAM LEADERS',title:'Certified Cybersecurity Educator Professional (CCEP)',image:'assets/ccep.webp',pdf:'documents/ccep.pdf'},
      {date:'2026 · AI FOR IMPACT',title:'AI Journalism 4.0: Mastering Content in the AI Era',image:'assets/nha-bao-ai.webp',pdf:'documents/nha-bao-ai.pdf'},
      {date:'2026 · AI FOR IMPACT',title:'Education in the AI Age: Management & Creativity',image:'assets/giao-duc-ai.webp',pdf:'documents/giao-duc-ai.pdf'}
    ]
  }
};

const extraTranslations={"vi":{"featureKicker":"DỰ ÁN NỔI BẬT","featureTitle":"Ý tưởng có ích.<br><em>Thành những điều có thể chạm vào.</em>","featureLink":"Xem hồ sơ dự án →","collabKicker":"CÓ THỂ ĐỒNG HÀNH CÙNG BẠN","collabTitle":"Thương hiệu có chiều sâu.<br><em>Phát triển bằng chiến lược và sự tử tế.</em>","service1":"Chiến lược thương hiệu & truyền thông","service1p":"Từ định vị và câu chuyện đến kế hoạch nội dung, kênh truyền thông và hướng phát triển nhất quán cho doanh nghiệp.","service2":"Truyền thông sáng tạo","service2p":"Từ ý tưởng và nội dung đến chụp ảnh, quay phim, hậu kỳ — hoàn thiện câu chuyện hình ảnh chỉn chu từ đầu đến cuối.","service3":"Website & trải nghiệm số","service3p":"Không gian số rõ ràng, hữu ích, giúp khách hàng hiểu thương hiệu và dễ dàng hành động.","service4":"Nội dung cộng đồng","service4p":"Tạo những kết nối có ý nghĩa để thương hiệu lắng nghe, đóng góp và cùng cộng đồng phát triển.","roleTitle":"Chiến lược Thương hiệu & Truyền thông","roleText":"Vai trò phù hợp để kết nối định vị thương hiệu, câu chuyện, nội dung và kênh số thành một hướng phát triển rõ ràng — nhất là trong lĩnh vực giáo dục, wellness và cộng đồng.","illustrationLabel":"Chiến lược, câu chuyện, trải nghiệm số và cộng đồng cùng kết nối để nuôi dưỡng thương hiệu.","processTitle":"Cách mình có thể làm việc cùng nhau","step1":"Lắng nghe","step1p":"Hiểu bối cảnh, người dùng và điều bạn muốn đạt được.","step2":"Thống nhất","step2p":"Cùng làm rõ phạm vi, đầu ra và thời gian.","step3":"Thực hiện & góp ý","step3p":"Xây dựng, chia sẻ tiến độ và điều chỉnh qua phản hồi.","step4":"Bàn giao","step4p":"Kiểm tra kết quả và hướng dẫn sử dụng.","storyContext":"Bối cảnh","storyApproach":"Cách tiếp cận","storyResult":"Kết quả & minh chứng","storyReturn":"Tất cả dự án"},"en":{"featureKicker":"SELECTED WORK","featureTitle":"Thoughtful ideas.<br><em>Useful things, made real.</em>","featureLink":"Read the project story →","collabKicker":"HOW I CAN CONTRIBUTE","collabTitle":"Brands with meaning.<br><em>Built through strategy and care.</em>","service1":"Brand & communications strategy","service1p":"From positioning and story to content plans, channels and a consistent direction for business growth.","service2":"Creative communication","service2p":"From content and visuals to photography, filming and full post-production, I shape a polished story from start to finish.","service3":"Websites & digital experiences","service3p":"Clear, useful digital spaces that help people understand a brand and take the next step.","service4":"Community content","service4p":"Build meaningful connections so a brand can listen, contribute and grow with its community.","roleTitle":"Brand & Communications Strategist","roleText":"A strong-fit role connecting brand positioning, storytelling, content and digital channels into a clear growth direction, especially for education, wellness and community-focused businesses.","illustrationLabel":"Strategy, story, digital experience and community come together to grow a meaningful brand.","processTitle":"A clear way to work together","step1":"Listen","step1p":"Understand your context, audience and goals.","step2":"Agree","step2p":"Define the scope, deliverables and timing together.","step3":"Create & review","step3p":"Build, share progress and improve with feedback.","step4":"Hand over","step4p":"Check the result and share guidance for use.","storyContext":"Context","storyApproach":"Approach","storyResult":"Work & evidence","storyReturn":"All projects"}};
Object.keys(extraTranslations).forEach(l=>Object.assign(translations[l],extraTranslations[l]));
let language=document.documentElement.lang==='en'?'en':'vi';
let showAllTimeline=false;
let activeProjectFilter='all';
const textEscape=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=(url)=>url.startsWith('https://')||url.startsWith('#')?url:'#';
const query=(id)=>document.getElementById(id);

function translateStatic(){
  const t=translations[language];
  document.documentElement.lang=language;
  document.title=language==='vi'?'Kiều Xuân Mạnh — Hành trình sống & kiến tạo':'Kieu Xuan Manh — A Life of Learning & Creating';
  document.querySelector('meta[name="description"]').content=language==='vi'?'Portfolio Kiều Xuân Mạnh — hành trình học tập, truyền thông sáng tạo, thiết kế, công nghệ và phụng sự cộng đồng.':'Kieu Xuan Manh’s portfolio — learning, creative communication, design, technology and community service.';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(typeof t[key]==='string')el.textContent=t[key]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(typeof t[key]==='string')el.innerHTML=t[key]});
  query('langLabel').textContent=language==='vi'?'EN':'VI';
  query('langToggle').setAttribute('aria-label',language==='vi'?'Switch to English':'Chuyển sang tiếng Việt');
  query('menuToggle').setAttribute('aria-label',language==='vi'?'Mở menu':'Open menu');
  query('dialogClose').setAttribute('aria-label',language==='vi'?'Đóng':'Close');
  renderTimeline();renderProjects();renderFeatured();renderCertificates();
}
function renderTimeline(){
  const t=translations[language];
  const selected=t.timeline.filter(x=>showAllTimeline||x.major);
  query('timelineList').innerHTML=selected.map(item=>`<article class="timeline-item"><div class="timeline-year">${textEscape(item.year)}</div><div class="timeline-track"><span class="timeline-dot"></span></div><div class="timeline-copy"><small>${textEscape(item.label)}</small><h3>${textEscape(item.title)}</h3><p>${textEscape(item.desc)}</p>${item.url?`<a href="${safeUrl(item.url)}" ${item.url.startsWith('https')?'target="_blank" rel="noopener noreferrer"':''}>${textEscape(t.openProof)}</a>`:''}</div></article>`).join('');
  const b=query('timelineMore');b.querySelector('span:first-child').textContent=showAllTimeline?t.collapseMilestones:t.seeAllMilestones;b.querySelector('span:last-child').textContent=showAllTimeline?'−':'＋';b.setAttribute('aria-expanded',String(showAllTimeline));
}
function detailPath(p){return p.art==='fpt'?'projects/video-fpt/':p.art==='education'?'projects/hoc-thien-da-nang/':p.title.includes('An Tâm')?'projects/so-no-an-tam/':''}
function renderFeatured(){
  const t=translations[language],order=['Sổ nợ An Tâm','Học Thiền Đà Nẵng','Gieo mầm Tỉnh Thức','Hương Thiền Nature'];
  const statusLabel={done:t.filterDone,growing:t.filterGrowing,proposal:t.filterProposal};
  const items=order.map(title=>t.projects.find(p=>p.title===title)).filter(Boolean);
  query('featuredGrid').innerHTML=items.map(p=>{
    const slug=detailPath(p),url=slug?(language==='en'?'/Portfolio/en/':'/Portfolio/')+slug:safeUrl(p.url||'#');
    const label=slug?t.featureLink:(language==='en'?'Visit project ↗':'Xem dự án ↗');
    return '<article class="v2-feature-card"><div class="v2-art '+textEscape(p.art)+'"><span>'+textEscape(p.artText)+'</span><small>KM · '+textEscape(p.date)+'</small></div><div class="v2-feature-copy"><small>'+textEscape(p.date)+' · '+textEscape(statusLabel[p.category])+'</small><h3>'+textEscape(p.title)+'</h3><p>'+textEscape(p.description)+'</p><a href="'+url+'" '+(slug?'':'target="_blank" rel="noopener noreferrer"')+' class="project-link">'+textEscape(label)+'</a></div></article>';
  }).join('');
}
function renderProjects(){const t=translations[language],statusLabel={done:t.filterDone,growing:t.filterGrowing,proposal:t.filterProposal};/* Proposal cards are temporarily hidden; source data is retained for easy restoration. */const visibleProjects=t.projects.filter(p=>p.category!=='proposal');const filtered=visibleProjects.filter(p=>activeProjectFilter==='all'||p.category===activeProjectFilter);query('projectsGrid').innerHTML=filtered.map((p,i)=>{const slug=detailPath(p),url=slug?(language==='en'?'/Portfolio/en/':'/Portfolio/')+slug:safeUrl(p.url||'#');return '<article class="project-card" style="animation-delay:'+i*35+'ms"><div class="project-art '+textEscape(p.art)+'" aria-hidden="true"><span>'+textEscape(p.artText)+'</span><span class="art-corner">KM / '+textEscape(p.date)+'</span></div><div class="project-body"><div class="project-meta"><span>'+textEscape(p.date)+'</span><span class="project-status">'+textEscape(statusLabel[p.category])+'</span></div><h3>'+textEscape(p.title)+'</h3><p>'+textEscape(p.description)+'</p><a href="'+url+'" '+(slug?'':'target="_blank" rel="noopener noreferrer" ')+'class="project-link">'+textEscape(slug?t.featureLink:p.category==='proposal'?t.viewProposal:t.viewProject)+'</a></div></article>'}).join('');document.querySelectorAll('.filter').forEach(b=>{const a=b.dataset.filter===activeProjectFilter;b.classList.toggle('active',a);b.setAttribute('aria-pressed',String(a))})}

function renderCertificates(){
  const t=translations[language];
  const assetRoot=language==='en'?'/Portfolio/':'';
  query('certificateGrid').innerHTML=t.certificates.map((c,i)=>`<article class="certificate-card"><button type="button" class="certificate-thumb" data-cert="${i}" aria-label="${textEscape(c.title)}"><img src="${assetRoot}${c.image}" alt="${textEscape(c.title)}" loading="lazy" width="520" height="360" /></button><div class="certificate-meta"><small>${textEscape(c.date)}</small><h3>${textEscape(c.title)}</h3><a href="${assetRoot}${c.pdf}" target="_blank" rel="noopener noreferrer">${textEscape(t.pdfOriginal)}</a></div></article>`).join('');
}
function openCertificate(index){
  const item=translations[language].certificates[index];if(!item)return;
  query('dialogTitle').textContent=item.title;
  query('dialogImage').src=(language==='en'?'/Portfolio/':'')+item.image;
  query('dialogImage').alt=item.title;
  query('dialogPdf').href=(language==='en'?'/Portfolio/':'')+item.pdf;
  query('dialogPdf').textContent=translations[language].pdfOriginal;
  query('certDialog').showModal();
}
function closeMenu(){query('mobileNav').hidden=true;query('menuToggle').setAttribute('aria-expanded','false')}

window.initPortfolioPage = function(){ if(!query('featuredGrid')) return; language=document.documentElement.lang==='en'?'en':'vi'; showAllTimeline=false; activeProjectFilter='all'; query('langToggle').addEventListener('click',()=>{language=language==='vi'?'en':'vi';translateStatic()});
query('menuToggle').addEventListener('click',()=>{const menu=query('mobileNav');menu.hidden=!menu.hidden;query('menuToggle').setAttribute('aria-expanded',String(!menu.hidden))});
query('mobileNav').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
query('timelineMore').addEventListener('click',()=>{showAllTimeline=!showAllTimeline;renderTimeline()});
query('projectFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){activeProjectFilter=b.dataset.filter;renderProjects()}});
query('certificateGrid').addEventListener('click',e=>{const b=e.target.closest('[data-cert]');if(b)openCertificate(Number(b.dataset.cert))});
query('dialogClose').addEventListener('click',()=>query('certDialog').close());
query('certDialog').addEventListener('click',e=>{if(e.target===query('certDialog'))query('certDialog').close()});
query('copyEmail').addEventListener('click',async()=>{const b=query('copyEmail');try{await navigator.clipboard.writeText('kieumanh2211@gmail.com');b.textContent=translations[language].copiedEmail;setTimeout(()=>b.textContent=translations[language].copyEmail,2500)}catch(e){window.location.href='mailto:kieumanh2211@gmail.com'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu()},{passive:true});
translateStatic();
};
window.initPortfolioPage();
