export const heroImage = {
  src: "https://images.pexels.com/photos/34079362/pexels-photo-34079362.jpeg?cs=srgb&dl=pexels-thevisionaryvows-34079362.jpg&fm=jpg",
  alt: "Elegant geometric light installation at night.",
};

export const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING === "true";

export const navLinks = [
  { href: "#pricing", label: "Solutions" },
  { href: "#solutions", label: "Services" },
  { href: "#team", label: "Case Studies" },
] as const;

export const goalMetrics = [
  {
    value: "16K+",
    label: "Beauty Businesses",
    description:
      "Global trust from independent salons and major grooming chains.",
  },
  {
    value: "230%",
    label: "Booking Increase",
    description:
      "Average revenue growth achieved within the first 6 months.",
  },
] as const;

export type Plan = {
  name: string;
  subtitle: string;
  price: string;
  badge: string;
  featured: boolean;
  emphasis: "muted" | "strong";
  features: string[];
  footerNote?: string;
};

export const plans: Plan[] = [
  {
    name: "Standard Plan",
    subtitle: "Essential growth for boutique spaces.",
    price: "$320 /mo",
    badge: "30% OFF",
    featured: false,
    emphasis: "muted" as const,
    features: [
      "Branded Website",
      "Before/After portfolio",
      "Google Business Profile setup",
      "Online booking calendar",
      "WhatsApp/customer phone list",
      "Birthday SMS automation",
      "Client owns the site/domain",
    ],
  },
  {
    name: "Professional Plan",
    subtitle: "The elite choice for high-volume salons.",
    price: "$510 /mo",
    badge: "Most Popular - 30% Off",
    featured: true,
    emphasis: "strong" as const,
    features: [
      "Branded website",
      "Before/After portfolio gallery",
      "Local SEO",
      "JazzCash/EasyPaisa deposit integration",
      "Churn alerts (40 days-visit notification)",
      "FB/Insta ad integration",
      "Real-time booking system",
    ],
    footerNote: "Loyalty points system included",
  },
  {
    name: "Enterprise Plan",
    subtitle: "Multi-location custom ecosystems.",
    price: "$900 /mo",
    badge: "30% OFF",
    featured: false,
    emphasis: "muted" as const,
    features: [
      "Branded Website + real-time booking system",
      "JazzCash/EasyPaisa deposit integration",
      "FB/Insta ad integration",
      "Multi-location SEO",
      "Full branch syncing + staff dashboard",
      "Inventory tracking (low-stock alerts)",
      "Automated WhatsApp blasts",
      "Full technical guarantee",
    ],
  },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  image: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah James",
    company: "Luxe Salon",
    quote:
      "Switching to Nova Sync was the best decision for Luxe Salon. Our bookings increased by 40% in the first quarter itself.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5QPfiqX1Y16p_QybTuctDbUFIt-MUIf9g2INOU9ZGp8jkpryyEyFkU0CMc3U6qHJ7hIujKMluDGbiZj2-xbsSh_CrgITTMRJndgxN1XazuIVRH7NIwTgTt4TJ__4nLXfxbL1_RdsGg5nDF0XfINQdcD1LUxmd4PhsseDAC6rxnvx6-JOmFHAsSiW99bIuBN8Vr6IBw_wb5_iz0puJconkOKhvNLso2fOgajFSpOo2wHz9kbq_A6cFnkyd80qdfLDqZvUOBDtGui8",
  },
  {
    name: "Mike Chen",
    company: "Sharp Cuts Barbershop",
    quote:
      "The automated loyalty system and SMS reminders have significantly reduced our no-shows. It's like having an extra manager.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1RvZB_Ttn2CakKrU1XvThlYcL8fqmqyVkaNs8QWdNj1O6NpAzjtKiFuai1n_YMCF0zuRJHeoTSsInlgN9kr76p4zO71lQGKfrWTm981XPER7bpVdZ1CrpkPurY461bexq5VjyUn2rGHnBM9Nko1gTcLXb2kIqvJ5NK_Z9MV0Q-6R50WMpvsxX81Ffk3Zj2zUtV3fXcEeYYx-I2AVQ1HTwJKZctVF5FoJxbkfgUUnHGAdbEHc9MTTmEmtBrgT4RZWDqh1SlKZ_IlVb",
    featured: true,
  },
  {
    name: "Alex Rivera",
    company: "The Barber Shop",
    quote:
      "The churn alerts are a game changer. We reached back out to customers who hadn't visited in 40 days and recovered 15% of them.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy1bnPicvNjZtcdH2tAhrrYRkA49mgUHv00S-EHdvicY8i5PNkia0MqJZHVOaeh_ecIn7IGdS4PKmJNFZK4hBb_GDYmdT33RU4HnuS8H8m2Y_X7U7niPPl1rjw1W7f-v-fHnow0UUBqGk_YyeoD0bdZr9Wf14_e6JangxOwaemaYLeVrWl6ZFy42hmNodZPHXo1feD8wmBIV1exj-tCGAo0KlrhpbLFZtDLRxuEbRS94RUOaB0p4mgerCwoWZ8U_IFbqaCdriPkWT8",
  },
];

export type TeamMember = {
  name: string;
  title: string;
  overlayRole: string;
  image: string;
  staggered: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Julian Karter",
    title: "Visionary Director",
    overlayRole: "Creative Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB12M7a9KGrKqduqK3vSykEqdV4sqDx3yUwmQJ_edW4QrXDOfj1mL3h--1AedDblHTu1dZV3BcLfDd0dSpmRxOpQ-1P3JcNEV86y2O6_69ivzitHapgikgSs7_UqVybNYCcapwW8ckRAY_UcntiWL9UIGQa8qTPhDiduUjWw5cqID6TV0IzZF7oK2IdEuMP5lFpIx7mWqKMzqDavRtC04xsuNVR-1dhgj62XAD291dGMg05C8RXLX0bSRNJHl37UiwkRKfThAw47jmH",
    staggered: false,
  },
  {
    name: "Aria Song",
    title: "Senior Strategist",
    overlayRole: "Brand Strategist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbzOj4twGMxQYwt03d33bcHzMct8Uz5BBJLf8H1RN6RVtS1RUwewWaXTppXOlMMlrpgxSolIYEPe3VgEEh8T_RQaZaT-XJi6Ejc6HYL6q3hPs1L06cNt715QJ0HcXYLG4pXfkU3KG7eEKScMO8kbhNcZpSWhdeUlnC0fFgo4kc8UuamN0vo-zUlvxpimRi1bQdzCugyYKc4rtr7xm4XheNghQnc1ETrLa76Vh_OILD3Hq-HS1yqIIFcx9QkFPCx1rRR_oVzupqBfEY",
    staggered: true,
  },
  {
    name: "Leo Valdez",
    title: "Growth Engineer",
    overlayRole: "Ad Architect",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPLn2FhhPUKoHII-WXM3Lkr8dFsnqNrJahxXFcoBQMkelg_gqkcnxsr4t4k9W4KG7B-WkBIPAsTt5XW4kEB9jpT-xXUw6phne6ZLljVk3zM05KU4Vx917CtbORYYu9etmW_qH1lmXmbO12zQq4CxDGNFY_vPJalN-E0gkubospZuwFM2exPxjS3A06MUT03gXe4v4gZ_NTtOWJBKSHvSniD-5XYXe8tS5thzWyO0cVmX4N7kZCkVxA528EolQloFEWkVQ1MVZ3T8DT",
    staggered: false,
  },
  {
    name: "Elena Rossi",
    title: "Communications Lead",
    overlayRole: "PR Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB20lqa3WKuMONxigdI9PLOY9TlnyhCZIBEtiXYrtk7-vjfZq3WT3DcGRNsVz0uQKcF9WUtBaO0rszagaHeVkMS7WpFwNAt4Oa6R8CLadn_IPRIsOiT8jPXwZsGbLkXkHERHrNxMGoetNHn9hefrbjhj3lfWB7HGG5ENueosvN5LHRCZfmOIcRx-b_qxPz3RAsaj9ZTyeZ9bsRjnsA6-Vaq8zF8oW8HAm1RAdwnp3kdQ_NPhMSfLeCYt0udDzVBSCR5ChehVAurlJjT",
    staggered: true,
  },
];
