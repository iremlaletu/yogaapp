import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export const nav = [
  { name: "Home", id: "banner" },
  { name: "About", id: "about" },
  { name: "Workouts", id: "workouts" },
  { name: "Pricing", id: "pricing" },
  { name: "Community", id: "community" },
  { name: "FAQ", id: "faq" },
];

export const location = [
  {
    image: "/assets/img/location/newyork.png",
    name: "New York",
  },
  {
    image: "/assets/img/location/tokyo.jpg",
    name: "Tokyo",
  },
  {
    image: "/assets/img/location/paris.jpg",
    name: "Paris",
  },
  {
    image: "/assets/img/location/sydney.jpg",
    name: "Sydney",
  },
  {
    image: "/assets/img/location/dubai.png",
    name: "Dubai",
  },
  {
    image: "/assets/img/location/amsterdam.png",
    name: "Amsterdam",
  },
  {
    image: "/assets/img/location/losangeles.png",
    name: "Los Angeles",
  },
  {
    image: "/assets/img/location/rio.jpg",
    name: "Rio de Janeiro",
  },
  {
    image: "/assets/img/location/istanbul.jpg",
    name: "Istanbul",
  },
];

export const memberships = [
  {
    id: 1,
    membershipType: "Local",
    description: "Perfect for regular practitioners in a single city.",
    monthlyPrice: "49",
    features: [
      "Unlimited access to studios in your city",
      "Option for 1-on-1 private sessions (extra fee or limited free sessions)",
      "Access to multiple yoga styles (Hatha, Vinyasa, Yin, etc.)",
      "Participation in local events",
      "Occasional access to studios abroad upon request (extra fee)",
    ],
  },
  {
    id: 2,
    membershipType: "Global",
    description:
      "Ideal for digital nomads, access yoga studios worldwide without limits.",
    monthlyPrice: "89",
    features: [
      "Unlimited access to studios across all location",
      "View schedules and book classes in any city",
      "Online guidance and support",
      "Participation in global yoga events",
    ],
  },
  {
    id: 3,
    membershipType: "VIP",
    description:
      "Elevate your yoga journey with unlimited access and exclusive perks.",
    monthlyPrice: "99",
    features: [
      "Priority booking and access to all studios worldwide",
      "Unlimited private sessions with experienced instructors",
      "Free participation in exclusive retreats and workshops",
      "Discounts on yoga gear and equipment",
    ],
  },
];

export const community = [
  {
    image: "/assets/img/community/person1.jpg",
    name: "Olivia P.",
    city: "Los Angles",
    message:
      "“Joining this yoga club has been life-changing! The classes are incredibly well-structured. I feel more balanced and energized every day.”",
  },
  {
    image: "/assets/img/community/person2.jpg",
    name: "Emily R.",
    city: "Amsterdam",
    message:
      "“The yoga classes here are a game-changer. The coaches are so attentive, and the vibe is amazing!”",
  },
  {
    image: "/assets/img/community/person3.jpg",
    name: "Sophia T.",
    city: "Dubai",
    message:
      "“This is the best yoga studio I’ve ever been to. The sessions are tailored to all levels, and the instructors genuinely care about your progress. It’s my peaceful escape from the busy world!”",
  },
  {
    image: "/assets/img/community/person4.jpg",
    name: "Irem T.",
    city: "Istanbul",
    message:
      "“This yoga club is my sanctuary. The focus on mindfulness and body alignment has helped me not only with my yoga practice but also with my everyday life. I can’t recommend it enough!”",
  },
  {
    image: "/assets/img/community/person5.jpg",
    name: "John D.",
    city: " New York",
    message:
      "“The yoga classes here are exceptional. I’ve learned so much about mindfulness and breathing techniques. Plus, the sense of community is so warm and welcoming!”",
  },
  {
    image: "/assets/img/community/person6.jpg",
    name: "Michael H.",
    city: "Rio",
    message:
      "“Practicing yoga at this club has significantly improved my flexibility and reduced my stress levels. The serene environment and expert instructors make every session enjoyable.”",
  },
  {
    image: "/assets/img/community/person7.jpg",
    name: "James L.",
    city: "Paris",
    message:
      "“I love how inclusive and supportive this yoga club is. It’s a perfect place to grow physically and mentally.”",
  },
];

export const faq = {
  accordions: [
    {
      question: "How can I book a yoga class?",
      answer:
        "You can easily book a yoga class through our app or website. Simply select your preferred class, choose a time slot, and confirm your booking. If you prefer, you can also book in person at the front desk. Make sure to book early as spots can fill up quickly!",
    },
    {
      question: "What types of yoga classes do you offer?",
      answer:
        "We offer a variety of yoga styles to suit all levels, including Hatha, Vinyasa, Yin, and Ashtanga. Each class is designed to help you build strength, flexibility, and mindfulness.",
    },
    {
      question: "Do I need any prior experience to join?",
      answer:
        "Not at all! Our classes are open to everyone, from complete beginners to advanced practitioners. Our instructors guide you step-by-step to ensure you feel comfortable and confident",
    },
    {
      question: "What should I bring to my first class?",
      answer:
        "We recommend bringing a yoga mat, a water bottle, and a towel. If you don’t have a mat, we provide them at the studio. Wear comfortable clothing that allows you to move freely.",
    },
    {
      question: "Is there a locker room for members?",
      answer:
        "Absolutely! We have spacious locker rooms with secure lockers, showers, and changing facilities for your convenience.",
    },
    {
      question: "How do I cancel my membership?",
      answer:
        "To cancel your membership, simply visit the front desk or contact our customer service team. They will guide you through the cancellation process and ensure everything is taken care of. Please note that a notice period may apply depending on your membership terms.",
    },
  ],
};

export const FooterData = {
  pdfLinks: [
    { href: "/pdfs/privacy-policy.pdf", text: "Privacy Policy & Terms of Use" },
    { href: "/pdfs/membership-agreement.pdf", text: "Membership Agreement" },
    {
      href: "/pdfs/membership-rules.pdf",
      text: "Membership Rules & Regulations",
    },
    { href: "/pdfs/cancellation-form.pdf", text: "Cancellation Form" },
  ],

  socialMediaLinks: [
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  ],
};
