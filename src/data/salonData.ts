import {
  BrandInfo,
  AnnouncementInfo,
  HeroInfo,
  HeritageInfo,
  ServicesInfo,
  FeaturedQuote,
  CraftsmenInfo,
  LookbookInfo,
  ReviewsInfo,
  HoursAndLocationInfo,
  FooterInfo,
  SalonPost,
} from '../types';

export const BRAND_DATA: BrandInfo = {
  name: "Hair Plus",
  shortName: "Hair Plus Albert",
  tag: "Korean Hair Salon & Barber · Waterloo",
  logoInitials: "HP",
  phone: "(519) 745-5556",
  phoneTel: "tel:5197455556",
  address: "338 Albert St Unit 101",
  plazaLocation: "338 Albert St Unit 101 (near University of Waterloo & Laurier)",
  postalCity: "Waterloo, ON N2L 0G8",
  plusCode: "FFH8+75 Waterloo, Ontario",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hair+Plus+338+Albert+St+Unit+101+Waterloo+ON+N2L+0G8",
  appointmentNote: "Online booking available via Timely. Walk-ins accommodated when available. Cash discount (10%) & debit accepted."
};

export const ANNOUNCEMENT_DATA: AnnouncementInfo = {
  show: true,
  badge: "Waterloo Favorite",
  text: "“If you're looking for an authentic Korean haircut & Asian hair specialist in Waterloo, this is the place.”",
  subtext: "Convenient online booking, free on-site parking (#26 & #30), and 10% discount for cash payments."
};

export const HERO_DATA: HeroInfo = {
  badge: "338 Albert St Unit 101 · Waterloo, ON",
  headlinePrefix: "Korean Style Precision.",
  headlineAccent: "Effortless Hair Design.",
  description: "Specialized Korean haircutting, dimensional layering, digital perms, and Asian hair mastery for men, women, and students across Waterloo, Kitchener, and the KW region.",
  heroImage: "https://ik.imagekit.io/kevfun/IMG-20260913-WA4758.jpg",
  ratingScore: "4.2",
  reviewCountText: "(189+ Google Reviews)",
  stat1Number: "15+",
  stat1Label: "Years in KW",
  stat2Number: "4.2 ★",
  stat2Label: "Google Rated",
  stat3Number: "10%",
  stat3Label: "Cash Discount"
};

export const HERITAGE_DATA: HeritageInfo = {
  tag: "The Heritage & Craft",
  title: "Specialized Asian Hair & Korean Styling",
  paragraph1: "Hair Plus was established to provide Waterloo with authentic Korean hair design and dedicated mastery in Asian hair textures. Whether sculpting modern Korean mullets, dandy cuts, soft face-framing layers, or specialized down perms, our stylists tailor every cut to your unique face shape, crown growth patterns, and reference photos.",
  quote: "“I showed a reference photo of the style I wanted, and he followed it perfectly, exceeding my expectations. Best place for Asian hair in the Waterloo area!”",
  quoteAuthor: "Verified Google & Yelp Client",
  pillars: [
    {
      id: "p1",
      title: "Korean Hair Specialists",
      description: "Deep expertise in thick, straight, frizzy, or soft Asian hair structures that standard salons often struggle to balance.",
      iconName: "scissors"
    },
    {
      id: "p2",
      title: "Reference Photo Precision",
      description: "Bring your favorite K-pop or trendy reference look. We analyze hair thickness, density, and facial contours to match your vision.",
      iconName: "userCheck"
    },
    {
      id: "p3",
      title: "Included Hair Wash & Styling",
      description: "Every cut comes with a refreshing shampoo wash, conditioning, and professional blowdry styling tailored to your daily routine.",
      iconName: "smile"
    },
    {
      id: "p4",
      title: "Punctual & Stress-Free",
      description: "Convenient online booking via Timely, dedicated parking spots (#26 & #30), and walking distance from UW and Laurier campuses.",
      iconName: "clock"
    }
  ]
};

export const SERVICES_DATA: ServicesInfo = {
  tag: "Menu & Offerings",
  title: "Korean Salon & Haircut Services",
  subtitle: "Transparent Pricing · Wash Included",
  priceSubtitle: "Transparent Pricing · Wash Included",
  signatureServices: [
    {
      id: "s1",
      title: "Korean Men's Cut & Styling",
      subtitle: "Dandy Cut, Two-Block, Mullet & Fades",
      price: "From $35–$40",
      badge: "Most Popular",
      image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA4896.jpg",
      description: "Signature Korean men's haircut tailored to Asian hair growth directions. Includes precision scissor graduation, neckline cleanup, refreshing hair wash, and blowdry styling.",
      features: [
        "Head shape & texture analysis",
        "Includes refreshing hair wash & scalp rinse",
        "Korean Dandy, Two-Block, Mullet or Taper Fade styling"
      ]
    },
    {
      id: "s2",
      title: "Women's Layered Cut & Bangs",
      subtitle: "Curtain Bangs, Wispy Layers & Bob Cuts",
      price: "From $45–$60",
      badge: "Signature Styling",
      image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA6333.jpg",
      description: "Custom dimensional layers designed to remove heavy bulk while preserving volume and softness. Includes precision curtain or see-through bangs, wash, and tension blowout.",
      features: [
        "Custom face-framing curtain or wispy bangs",
        "Weight distribution for natural bounce",
        "Includes full wash, conditioning & blowout"
      ]
    },
    {
      id: "s3",
      title: "Korean Perms & Waves",
      subtitle: "Digital Perm, Iron Perm & Down Perm",
      price: "From $150–$260",
      badge: "Chemical Craft",
      image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA9559.jpg",
      description: "Authentic Korean perming treatments including Digital Perms for long loose waves, Iron Perms for men's texture, Down Perms to tame side flare, and Cold Perms.",
      features: [
        "Digital & Iron wave customization",
        "Side down-perm integration for men",
        "Long-lasting natural texture & curl retention"
      ]
    }
  ],
  additionalServices: [
    {
      id: "as1",
      title: "Bang Trim & Face-Framing",
      name: "Bang Trim & Face-Framing",
      price: "$15",
      description: "Quick precision touch-up for curtain bangs, see-through bangs, or neckline cleanup between appointments."
    },
    {
      id: "as2",
      title: "Hair Wash, Scalp Cleanse & Blowout",
      name: "Hair Wash, Scalp Cleanse & Blowout",
      price: "$25",
      description: "Invigorating shampoo wash, deep conditioning scalp rinse, and signature Korean blowdry styling."
    },
    {
      id: "as3",
      title: "Custom Color, Ombre & Balayage",
      name: "Custom Color, Ombre & Balayage",
      price: "From $120+",
      description: "Ash grey tones, balayage, single process color, root touch-ups, or Asian hair lightening."
    }
  ]
};

export const FEATURED_QUOTE: FeaturedQuote = {
  quote: "“I showed Matthew a reference photo of the Korean style I wanted, and he followed it perfectly, exceeding my expectations. He paid great attention to detail and made sure everything looked just right. Highly recommend!”",
  author: "Menche Dinopol",
  badge: "Verified Google Review · Waterloo Client"
};

const CRAFTSMEN_LIST = [
  {
    id: "st1",
    name: "Kay (Kyung Lee)",
    role: "Founder & Master Hair Designer",
    subtitle: "15+ Years Asian Hair Expertise",
    experienceBadge: "Master Designer",
    image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA4465.jpg",
    quote: "Understanding your hair texture, growth angle, and lifestyle is the secret to a cut that feels natural and effortless every day.",
    bio: "Founder and Lead Designer of Hair Plus in Waterloo. Celebrated for her patient consultations, exceptional scissor work on Asian hair, face-framing curtain bangs, delicate layering, and customized Korean perms.",
    highlights: [
      "Mastery in Asian hair texturizing, layering & weight distribution",
      "Specialist in Korean curtain bangs, see-through bangs & bobs",
      "Patient, attentive listener praised by UW & Laurier students for years"
    ],
    specialties: [
      "Women's Korean Layered Cuts",
      "Curtain & Wispy Bangs",
      "Digital & Volume Perms",
      "Men's Scissor Styling",
      "Asian Hair Balayage & Ombre"
    ]
  },
  {
    id: "st2",
    name: "Matthew (Mr. Jung)",
    role: "Senior Stylist & Master Barber",
    subtitle: "Korean Men's Cuts & Precision Scissor Craft",
    experienceBadge: "Senior Stylist",
    image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA0157.jpg",
    quote: "Every haircut is a balance of proportion, scissor craft, and understanding exactly what the customer envisions from their reference photo.",
    bio: "Senior stylist renowned for his exceptional attention to detail, precision Korean men's haircuts, Korean mullets, dandy cuts, taper fades, and thorough hair washes. Loved by regular clients for consistent, high-standard execution.",
    highlights: [
      "Specialist in Korean Mullets, Dandy cuts & Two-Block styles",
      "Meticulous reference photo replication and head shape analysis",
      "Includes thorough hair wash, scalp rinse, and blowdry finish"
    ],
    specialties: [
      "Korean Men's Haircuts",
      "Korean Mullet & Dandy Cut",
      "Scissor Tapers & Fades",
      "Iron Perms & Down Perms",
      "Eyebrow Trimming & Wash"
    ]
  },
  {
    id: "st3",
    name: "Annie",
    role: "Stylist & Perm Specialist",
    subtitle: "Perms, Layering & Contemporary K-Styles",
    experienceBadge: "Stylist & Perm Tech",
    image: "https://ik.imagekit.io/kevfun/IMG-20260913-WA7970.jpg",
    quote: "Creating soft, flowing texture and waves that hold their shape while keeping your hair healthy and vibrant.",
    bio: "Specializes in modern Korean styling, fine Asian hair perm formulations, wispy side bangs, and dimensional cuts that give hair bounce and natural volume.",
    highlights: [
      "Expert in Korean cold perms, loose wave perms & root lift",
      "Wispy side bangs and soft layered framing",
      "Friendly, accommodating service in a clean, modern atmosphere"
    ],
    specialties: [
      "Korean Cold & Digital Perms",
      "Wispy Side Bangs",
      "Soft Asian Hair Layering",
      "Blowdry & K-Pop Styling",
      "Deep Conditioning Treatments"
    ]
  }
];

export const CRAFTSMEN_DATA: CraftsmenInfo = {
  tag: "Stylists & Barbers",
  title: "Dedicated Korean Hair Specialists",
  description: "Our experienced team brings authentic Korean salon techniques, patient consultations, and deep expertise in Asian hair textures to every client.",
  stylists: CRAFTSMEN_LIST,
  craftsmen: CRAFTSMEN_LIST
};

export const LOOKBOOK_DATA: LookbookInfo = {
  tag: "Style Archive",
  title: "Korean Style Archive",
  subtitle: "Hover to pause · Click to inspect",
  items: [
    {
      id: "look-1",
      title: "Korean Dandy Cut",
      tag: "Korean Men's Style",
      category: "Korean Men's Style",
      src: "https://ik.imagekit.io/kevfun/KoreanDandy.jpg",
      image: "https://ik.imagekit.io/kevfun/KoreanDandy.jpg",
      alt: "Korean Dandy Cut with soft fringe and scissor taper",
      description: "Classic Korean men's hairstyle with soft forward-flowing fringe, tapered sides, and weight redistribution for smooth daily styling.",
      technique: "Scissor texturizing, soft perimeter taper & blowdry shaping",
      maintenance: "3–4 weeks",
      suitability: "Asian straight or slightly wavy hair, student & professional daily wear"
    },
    {
      id: "look-2",
      title: "Curtain Bangs & Long Layers",
      tag: "Women's Styling",
      category: "Women's Styling",
      src: "https://ik.imagekit.io/kevfun/Curtain%20Bangs.jpg",
      image: "https://ik.imagekit.io/kevfun/Curtain%20Bangs.jpg",
      alt: "Soft Korean curtain bangs and fluid layers",
      description: "Delicate face-framing curtain bangs paired with long fluid layers to remove bulk without thinning the perimeter ends.",
      technique: "Point cutting, face-contour slicing & round brush blowout",
      maintenance: "6–8 weeks",
      suitability: "Medium to long hair looking for movement and effortless bounce"
    },
    {
      id: "look-3",
      title: "Korean Mullet & Taper",
      tag: "Modern K-Trend",
      category: "Modern K-Trend",
      src: "https://ik.imagekit.io/kevfun/KoreanMullet.jpg",
      image: "https://ik.imagekit.io/kevfun/KoreanMullet.jpg",
      alt: "Korean Mullet haircut with graduated neckline",
      description: "Subtle Korean modern mullet featuring soft side tapers, layered crown volume, and tailored nape length that frames the jawline.",
      technique: "Reference matching, crown point-cutting & nape taper",
      maintenance: "4–5 weeks",
      suitability: "Trendsetters seeking distinctive, natural texture without harsh clipper lines"
    },
    {
      id: "look-4",
      title: "Two-Block Cut & Down Perm",
      tag: "K-Barber Style",
      category: "K-Barber Style",
      src: "https://ik.imagekit.io/kevfun/TwoBlockCut.jpg",
      image: "https://ik.imagekit.io/kevfun/TwoBlockCut.jpg",
      alt: "Two block haircut with clean undercut and textured top",
      description: "Under-clippered or tapered sides and back with a disconnected longer top layer, paired with a down perm to tame side flare.",
      technique: "Two-block isolation, down perm treatment & texture blending",
      maintenance: "4 weeks",
      suitability: "Thick, coarse, or flare-prone Asian hair"
    },
    {
      id: "look-5",
      title: "Digital Wave & Volume Perm",
      tag: "Perm Craft",
      category: "Perm Craft",
      src: "https://ik.imagekit.io/kevfun/Digital%20Wave.jpg",
      image: "https://ik.imagekit.io/kevfun/Digital%20Wave.jpg",
      alt: "Korean digital perm with soft voluminous waves",
      description: "Thermal digital wave formulation engineered for Asian hair to create soft, natural S-waves that maintain shape effortlessly.",
      technique: "Heated ceramic rod winding, neutralizer & moisture lock",
      maintenance: "4–6 months",
      suitability: "Straight or limp hair seeking lasting volume and wash-and-go texture"
    },
    {
      id: "look-6",
      title: "Ash Grey & Balayage Ombre",
      tag: "Color Craft",
      category: "Color Craft",
      src: "https://ik.imagekit.io/kevfun/Ash%20Grey.jpg",
      image: "https://ik.imagekit.io/kevfun/Ash%20Grey.jpg",
      alt: "Ash grey ombre and balayage on dark hair",
      description: "Careful lift and tone to achieve cool ash, silver, or beige ombre on naturally dark Asian hair while protecting hair integrity.",
      technique: "Sectioned balayage foils, cool toner & bond treatment",
      maintenance: "8–12 weeks",
      suitability: "Clients seeking high-fashion dimensional color"
    }
  ]
};

const REVIEWS_LIST = [
  {
    id: "rev-1",
    author: "Menche Dinopol",
    badge: "2 reviews",
    reviewerBadge: "Verified Client",
    rating: 5,
    timeAgo: "5 months ago",
    date: "5 months ago",
    category: "Korean Haircut",
    text: "I had a haircut today with Mathew, and I couldn't be happier with the result. I showed him a reference photo of the style I wanted, and he followed it perfectly, actually exceeding my expectations. He paid great attention to detail and made sure everything looked just right. Highly recommend!",
    content: "I had a haircut today with Mathew, and I couldn't be happier with the result. I showed him a reference photo of the style I wanted, and he followed it perfectly, actually exceeding my expectations. He paid great attention to detail and made sure everything looked just right. Highly recommend!",
    highlightTags: ["Korean Haircut", "Attention to Detail", "Reference Photo"]
  },
  {
    id: "rev-2",
    author: "Rick St. Clair",
    badge: "5 reviews · 1 photo",
    reviewerBadge: "5 reviews · 1 photo",
    rating: 5,
    timeAgo: "8 months ago",
    date: "8 months ago",
    category: "Korean Mullet",
    text: "I had been looking for a few years for a stylist who was capable of giving me the haircut I wanted... hairstyle common in Korean culture, 'Korean mullet'. I booked with Matthew. When I arrived, Matthew greeted me and was very friendly. Once he cut and washed my hair, I was instantly so happy. He shaped my hair perfectly, exactly as I wanted it, paying attention to every detail for an excellent price. I will be back for my next haircut!",
    content: "I had been looking for a few years for a stylist who was capable of giving me the haircut I wanted... hairstyle common in Korean culture, 'Korean mullet'. I booked with Matthew. When I arrived, Matthew greeted me and was very friendly. Once he cut and washed my hair, I was instantly so happy. He shaped my hair perfectly, exactly as I wanted it, paying attention to every detail for an excellent price. I will be back for my next haircut!",
    highlightTags: ["Korean Mullet", "Matthew", "Hair Wash"]
  },
  {
    id: "rev-3",
    author: "Athena Huang",
    badge: "Local Guide · 20 reviews · 32 photos",
    reviewerBadge: "Local Guide · 20 reviews",
    rating: 5,
    timeAgo: "3 years ago",
    date: "3 years ago",
    category: "Asian Hair",
    text: "Hair cut + styled by Kay! She was attentive when I asked for layers and not too short bangs, and she made sure to clarify the length and style with me before cutting. First hair salon where I've felt listened to beforehand and she did a really good job. Definitely come here, esp if you have Asian hair in need of a cut :)",
    content: "Hair cut + styled by Kay! She was attentive when I asked for layers and not too short bangs, and she made sure to clarify the length and style with me before cutting. First hair salon where I've felt listened to beforehand and she did a really good job. Definitely come here, esp if you have Asian hair in need of a cut :)",
    highlightTags: ["Asian Hair", "Kay", "Layers & Bangs"]
  },
  {
    id: "rev-4",
    author: "Seray Tugcu",
    badge: "9 reviews",
    reviewerBadge: "9 reviews",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Korean Style",
    text: "I loved my experience here! They cut my hair exactly the way I wanted, and I'm obsessed with it right now. If you're thinking about getting a Korean-style haircut, this is the place! It's definitely my new favorite salon in Waterloo. They accept cash or debit cards.",
    content: "I loved my experience here! They cut my hair exactly the way I wanted, and I'm obsessed with it right now. If you're thinking about getting a Korean-style haircut, this is the place! It's definitely my new favorite salon in Waterloo. They accept cash or debit cards.",
    highlightTags: ["Korean Style", "Waterloo Favorite", "Debit & Cash"]
  },
  {
    id: "rev-5",
    author: "Anisha Karkera",
    badge: "10 reviews",
    reviewerBadge: "10 reviews",
    rating: 5,
    timeAgo: "4 months ago",
    date: "4 months ago",
    category: "Attention to Detail",
    text: "I've been going here to get my haircuts since 2022 and it's been consistently a positive experience! I highly recommend Matthew as well, he's very detailed-oriented and my hair looks great every time.",
    content: "I've been going here to get my haircuts since 2022 and it's been consistently a positive experience! I highly recommend Matthew as well, he's very detailed-oriented and my hair looks great every time.",
    highlightTags: ["Attention to Detail", "Regular Client", "Matthew"]
  },
  {
    id: "rev-6",
    author: "Virginia Gordon-Ridenour",
    badge: "4 reviews",
    reviewerBadge: "4 reviews",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Precision",
    text: "Matthew has been my go to hair stylist for almost 4 years and every single time he cuts my hair exactly the way I've pictured. So precise, so caring and honest too. I asked for shorter layers and he explained why it wouldn't work with my hair style and type. I am always smiling and sending pictures to my loved ones when I leave. Thank you for all your amazing work.",
    content: "Matthew has been my go to hair stylist for almost 4 years and every single time he cuts my hair exactly the way I've pictured. So precise, so caring and honest too. I asked for shorter layers and he explained why it wouldn't work with my hair style and type. I am always smiling and sending pictures to my loved ones when I leave. Thank you for all your amazing work.",
    highlightTags: ["Precision", "Honest Consultation", "4 Years Regular"]
  },
  {
    id: "rev-7",
    author: "Kevin Nguyen",
    badge: "Local Guide · 13 reviews · 2 photos",
    reviewerBadge: "Local Guide · 13 reviews",
    rating: 5,
    timeAgo: "2 weeks ago",
    date: "Recent Review",
    category: "Hair Wash",
    text: "Had a great experience at Hair Plus! Matthew did fantastic work on my hair, and the included hair wash was a great touch. The salon is super clean, modern, and welcoming. Highly recommend booking with Matthew!",
    content: "Had a great experience at Hair Plus! Matthew did fantastic work on my hair, and the included hair wash was a great touch. The salon is super clean, modern, and welcoming. Highly recommend booking with Matthew!",
    highlightTags: ["Hair Wash", "Clean & Modern", "Matthew"]
  },
  {
    id: "rev-8",
    author: "Austin",
    badge: "2 reviews",
    reviewerBadge: "2 reviews",
    rating: 5,
    timeAgo: "3 weeks ago",
    date: "Recent Review",
    category: "Kay",
    text: "Very happy with my haircut, the hairstylist is very skilled and easy to communicate with. I told her vaguely what I wanted and she did a great job. Overall great experience and very professional service. Stylist: Kay.",
    content: "Very happy with my haircut, the hairstylist is very skilled and easy to communicate with. I told her vaguely what I wanted and she did a great job. Overall great experience and very professional service. Stylist: Kay.",
    highlightTags: ["Kay", "Male Haircut", "Skilled Stylist"]
  },
  {
    id: "rev-9",
    author: "Sarah Zhang",
    badge: "3 reviews",
    reviewerBadge: "3 reviews",
    rating: 5,
    timeAgo: "5 years ago",
    date: "5 years ago",
    category: "Women's Haircut",
    text: "Kay did an amazing job and I would definitely recommend going to her for women's haircut! If you have Asian hair and have struggled to find a stylist, have no fear--you've found the right place. She was very attentive to what I wanted and layered my hair exactly how I imagined it. The salon itself was clean and beautifully decorated.",
    content: "Kay did an amazing job and I would definitely recommend going to her for women's haircut! If you have Asian hair and have struggled to find a stylist, have no fear--you've found the right place. She was very attentive to what I wanted and layered my hair exactly how I imagined it. The salon itself was clean and beautifully decorated.",
    highlightTags: ["Women's Haircut", "Asian Hair", "Kay"]
  },
  {
    id: "rev-10",
    author: "Omar Zela",
    badge: "Local Guide · 52 reviews · 35 photos",
    reviewerBadge: "Local Guide · 52 reviews",
    rating: 5,
    timeAgo: "2 years ago",
    date: "2 years ago",
    category: "Barber Craft",
    text: "Exceptional attention to detail and a true passion for the craft! Matthew takes immense pride in his work, delivering precise cuts with a personalized touch.",
    content: "Exceptional attention to detail and a true passion for the craft! Matthew takes immense pride in his work, delivering precise cuts with a personalized touch.",
    highlightTags: ["Barber Craft", "Matthew", "Personalized Touch"]
  },
  {
    id: "rev-11",
    author: "Minjun Seong",
    badge: "2 reviews",
    reviewerBadge: "UW Student",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "UW Students",
    text: "I've been coming here for the whole time I've been attending UW. Kay always provides excellent service, thank you!",
    content: "I've been coming here for the whole time I've been attending UW. Kay always provides excellent service, thank you!",
    highlightTags: ["UW Students", "Kay", "Loyal Customer"]
  },
  {
    id: "rev-12",
    author: "L Yu",
    badge: "Local Guide · 7 reviews",
    reviewerBadge: "Local Guide · 7 reviews",
    rating: 5,
    timeAgo: "6 years ago",
    date: "6 years ago",
    category: "Free Parking",
    text: "Kay is a very skilled and lovely lady to chat with about travelling. I first came to her 2 years ago to cut my hair from waist to shoulder length. She did such an excellent job that my hair looked good even as I let it grow out. Parking is available in #26 & #30.",
    content: "Kay is a very skilled and lovely lady to chat with about travelling. I first came to her 2 years ago to cut my hair from waist to shoulder length. She did such an excellent job that my hair looked good even as I let it grow out. Parking is available in #26 & #30.",
    highlightTags: ["Free Parking", "Kay", "Long-Lasting Shape"]
  }
];

export const REVIEWS_DATA: ReviewsInfo = {
  tag: "Client Reviews & Reputation",
  title: "4.2 Stars Across 189+ Google Reviews",
  ratingScore: "4.2",
  score: "4.2",
  reviewCountText: "189+ Reviews",
  reviewCount: "189+ Reviews",
  badges: [
    "Korean Hair Specialists",
    "Included Hair Wash",
    "10% Cash Discount"
  ],
  categories: [
    "All",
    "Korean Haircut",
    "Asian Hair",
    "Matthew",
    "Kay",
    "Korean Mullet",
    "Attention to Detail",
    "Hair Wash",
    "Free Parking"
  ],
  items: REVIEWS_LIST,
  reviews: REVIEWS_LIST,
  featuredQuote: "“If you're thinking about getting a Korean-style haircut in Waterloo, this is definitely the place. Highly recommend Matthew & Kay!”",
  featuredAuthor: "Seray & Menche",
  featuredBadge: "Verified Reviews · Waterloo, ON"
};

const SCHEDULE_LIST = [
  {
    day: "Monday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Tuesday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Wednesday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Thursday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Friday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Saturday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Sunday",
    hours: "10:00 AM – 7:00 PM",
    closed: false,
    isClosed: false
  }
];

export const HOURS_AND_LOCATION: HoursAndLocationInfo = {
  tag: "Visit Us in Waterloo",
  title: "Hair Plus Albert",
  subtitle: "338 Albert St Unit 101 · Near University of Waterloo & Laurier",
  address: "338 Albert St Unit 101, Waterloo, ON N2L 0G8",
  plusCode: "FFH8+75 Waterloo, Ontario",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Hair+Plus+338+Albert+St+Unit+101+Waterloo+ON+N2L+0G8",
  parkingNote: "Free on-site plaza parking with dedicated spots in #26 & #30.",
  bookingNote: "Book online via Timely (hairplus.gettimely.com) or call (519) 745-5556. Walk-ins accommodated based on chair availability.",
  appointmentPolicy: "Appointments guaranteed on time. Cash (10% discount) & debit cards accepted.",
  weeklyHours: SCHEDULE_LIST,
  schedule: SCHEDULE_LIST
};

export const FOOTER_DATA: FooterInfo = {
  aboutText: "A Waterloo favorite for Korean haircutting, Asian hair texturizing, digital perms, and precision barber styling. Dedicated to patient consultations, reference matching, and included hair wash for UW, Laurier, and KW clients.",
  description: "A Waterloo favorite for Korean haircutting, Asian hair texturizing, digital perms, and precision barber styling. Dedicated to patient consultations, reference matching, and included hair wash for UW, Laurier, and KW clients.",
  copyrightText: "© Hair Plus Waterloo. All Rights Reserved.",
  copyright: "© Hair Plus Waterloo. All Rights Reserved.",
  subline: "338 Albert St Unit 101, Waterloo, ON N2L 0G8 · Near UW & Laurier",
  tagline: "Korean Hair Salon & Barber · Dedicated Asian Hair Specialists"
};

export const ADMIN_CONFIG = {
  authorizedEmails: ["kevfun73@gmail.com", "kaykyunglee@gmail.com", "admin@hairpluswaterloo.com"],
  defaultMasterPasscode: "hairplus2026",
  demoPasscode: "admin123"
};

export const DEFAULT_POSTS: SalonPost[] = [
  {
    id: "post-1",
    title: "How to Achieve the Perfect Korean Mullet & Dandy Cut: Stylist Matthew Explains",
    category: "Barber Craft",
    author: "Matthew (Senior Stylist)",
    date: "September 4, 2026",
    excerpt: "Why reference photos, scissor texturizing, and weight removal are essential for Korean men's haircuts.",
    content: "When clients come in with photos of Korean celebrities, actors, or K-pop styles, standard western clipper cuts often fall short because Asian hair has a rounder, thicker follicle that sticks straight out if cut with high guards.\n\nAt Hair Plus, we focus on internal point-cutting, disconnected side sections (Two-Block), and blending the nape length naturally so your Korean mullet or dandy fringe sits flat and frames the jawline without requiring heavy daily product. Every men's haircut also includes a relaxing wash and blowout.",
    imageUrl: "https://ik.imagekit.io/kevfun/IMG-20260913-WA4818.jpg",
    tags: ["Korean Mullet", "Dandy Cut", "Asian Hair", "Men's Styling"],
    isPinned: true,
    isPublished: true,
    createdAt: "2026-09-04T10:00:00.000Z"
  },
  {
    id: "post-2",
    title: "Master Stylist Kay on Korean Curtain Bangs & Layering for Asian Hair",
    category: "Style Showcase",
    author: "Kay (Lead Designer)",
    date: "August 28, 2026",
    excerpt: "Creating soft, face-framing curtain bangs and wispy layers that grow out beautifully.",
    content: "Many of our clients from the University of Waterloo and Laurier visit us asking for airy, natural curtain bangs that frame the cheekbones. With straight or coarse Asian hair, cutting straight across creates harsh lines.\n\nWe customize the angle of the cut according to your cheekbone width and hairline whorls, blending into soft internal layers. This allows the hair to fall gracefully with minimal morning heat styling.",
    imageUrl: "https://ik.imagekit.io/kevfun/IMG-20260913-WA7921.jpg",
    tags: ["Curtain Bangs", "Korean Layers", "Women's Styling"],
    isPinned: false,
    isPublished: true,
    createdAt: "2026-08-28T14:30:00.000Z"
  },
  {
    id: "post-3",
    title: "Booking Tips: Timely Online Scheduling, Parking Spots #26 & #30, and Cash Discounts",
    category: "Announcement",
    author: "Hair Plus Team",
    date: "August 15, 2026",
    excerpt: "Quick guide to finding parking, booking your favorite stylist on Timely, and taking advantage of our 10% cash discount.",
    content: "We're located at 338 Albert St Unit 101 in Waterloo, just minutes from the UW and Laurier campuses. Free parking is available in the plaza, including dedicated parking stalls in #26 and #30.\n\nTo ensure guaranteed 1-on-1 time with Kay, Matthew, or Annie, book in advance on our Timely scheduling system (hairplus.gettimely.com). Please note we accept debit and cash, with an additional 10% discount on cash payments.",
    imageUrl: "https://ik.imagekit.io/kevfun/1785421908-338.jpg",
    tags: ["Waterloo", "Online Booking", "Student Perks", "Parking Info"],
    isPinned: false,
    isPublished: true,
    createdAt: "2026-08-15T09:00:00.000Z"
  }
];
