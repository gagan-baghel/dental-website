export type Doctor = {
  name: string;
  image: string;
  role: string;
  credentials: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  image: string;
  treatment: string;
};

export type Service = {
  title: string;
  description: string;
  details: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Treatments" | "Insurance" | "Appointments";
};

export const clinicInfo = {
  name: "Bright Smiles Dental Clinic",
  tagline: "Premium family and cosmetic dentistry with modern comfort-first care.",
  phone: "+1 (555) 204-9981",
  emergencyPhone: "+1 (555) 911-2847",
  email: "care@brightsmilesclinic.com",
  address: "1188 Maple Avenue, Suite 210, Austin, TX 78701",
  hours: [
    "Monday - Friday: 8:00 AM - 7:00 PM",
    "Saturday: 9:00 AM - 3:00 PM",
    "Sunday: Closed"
  ]
};

export const mediaAssets = {
  heroDesktop:
    "https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=1800",
  heroMobile:
    "https://images.pexels.com/photos/6627836/pexels-photo-6627836.jpeg?auto=compress&cs=tinysrgb&w=1200",
  booking:
    "https://images.pexels.com/photos/4687907/pexels-photo-4687907.jpeg?auto=compress&cs=tinysrgb&w=1400"
};

export const highlights = [
  { value: "15+", label: "Years of trusted practice" },
  { value: "98%", label: "Treatment success rate" },
  { value: "1,000+", label: "Smiles transformed" },
  { value: "4.9/5", label: "Average patient rating" }
];

export const trustItems = ["ADA Member Clinic", "HIPAA Compliant", "ISO-Certified Sterilization", "Invisalign Partner"];

export const valueProps = [
  {
    title: "Modern Equipment",
    copy: "Digital scans, 3D imaging, and same-day treatment planning reduce discomfort and uncertainty."
  },
  {
    title: "Gentle Care",
    copy: "Sedation options and anxiety-aware care keep every appointment calm and comfortable."
  },
  {
    title: "Expert Team",
    copy: "Board-certified specialists collaborate across preventive, cosmetic, and restorative dentistry."
  },
  {
    title: "Flexible Hours",
    copy: "Evening and Saturday appointments support families and working professionals."
  }
];

export const services: Service[] = [
  {
    title: "Teeth Cleaning",
    icon: "TC",
    description: "Comprehensive cleanings and hygiene exams for healthier gums and brighter smiles.",
    details:
      "Our preventive cleaning program includes plaque removal, gum health charting, polishing, and personalized at-home guidance to help prevent cavities and inflammation."
  },
  {
    title: "Orthodontics",
    icon: "OR",
    description: "Clear aligners and braces designed for precise, comfortable smile alignment.",
    details:
      "From teen braces to clear aligners, we build phased orthodontic plans with digital monitoring and progress updates that keep treatment predictable."
  },
  {
    title: "Cosmetic Dentistry",
    icon: "CD",
    description: "Veneers, bonding, and smile design to elevate confidence and appearance.",
    details:
      "We combine facial analysis, shade matching, and minimally invasive techniques to deliver natural-looking cosmetic outcomes tailored to your goals."
  },
  {
    title: "Dental Implants",
    icon: "DI",
    description: "Long-lasting implant restorations for missing teeth and improved function.",
    details:
      "Implant consultations include 3D bone assessment, surgical planning, and custom crowns that restore chewing strength and smile symmetry."
  },
  {
    title: "Teeth Whitening",
    icon: "TW",
    description: "Safe, professional whitening treatments with visible results in fewer visits.",
    details:
      "Choose in-clinic whitening for fast results or guided take-home programs for gradual brightness with enamel-safe protocols."
  },
  {
    title: "Emergency Care",
    icon: "EC",
    description: "Same-day urgent treatment for pain, trauma, and sudden dental concerns.",
    details:
      "We reserve emergency slots daily to address pain, infection, chipped teeth, and trauma with rapid diagnostics and immediate relief."
  }
];

export const processSteps = [
  {
    title: "Book",
    description: "Choose a preferred time online or by phone."
  },
  {
    title: "Consult",
    description: "Receive diagnostics, imaging, and a clear care plan."
  },
  {
    title: "Treatment",
    description: "Get precise treatment with comfort-first techniques."
  },
  {
    title: "Follow-Up",
    description: "Track recovery and maintain long-term oral health."
  }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Olivia Carter",
    role: "Orthodontist",
    credentials: "DDS, MS Orthodontics",
    image: "https://images.pexels.com/photos/32160039/pexels-photo-32160039.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Dr. Ethan Miller",
    role: "Dental Surgeon",
    credentials: "DDS, Oral Surgery Fellowship",
    image: "https://images.pexels.com/photos/6627836/pexels-photo-6627836.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Dr. Ava Wright",
    role: "Pediatric Dentist",
    credentials: "DDS, Board-Certified Pediatric Care",
    image: "https://images.pexels.com/photos/15641079/pexels-photo-15641079.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Dr. Noah Brooks",
    role: "Cosmetic Dentist",
    credentials: "DDS, AACD Member",
    image: "https://images.pexels.com/photos/15962796/pexels-photo-15962796.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    image: "https://images.pexels.com/photos/3881145/pexels-photo-3881145.jpeg?auto=compress&cs=tinysrgb&w=800",
    treatment: "Dental Implants",
    quote: "I had a great experience at Bright Smiles. The team explained every step and the result feels natural."
  },
  {
    name: "Neha Patel",
    image: "https://images.pexels.com/photos/5622014/pexels-photo-5622014.jpeg?auto=compress&cs=tinysrgb&w=800",
    treatment: "Teeth Whitening",
    quote: "Fast appointment, clear guidance, and noticeable results after the first visit."
  },
  {
    name: "Riya Mehta",
    image: "https://images.pexels.com/photos/5622001/pexels-photo-5622001.jpeg?auto=compress&cs=tinysrgb&w=800",
    treatment: "Cosmetic Dentistry",
    quote: "The smile design process was detailed and reassuring. I finally feel confident again."
  },
  {
    name: "Kabir Verma",
    image: "https://images.pexels.com/photos/5622025/pexels-photo-5622025.jpeg?auto=compress&cs=tinysrgb&w=800",
    treatment: "Emergency Care",
    quote: "I was seen the same day for severe pain. Clean clinic, kind staff, and quick relief."
  }
];

export const careProducts = [
  {
    title: "Whitening Essentials",
    icon: "WE",
    description: "Dentist-approved whitening gels and enamel-safe strips for home maintenance."
  },
  {
    title: "Daily Gum Care Kit",
    icon: "GK",
    description: "Soft-bristle brush heads, interdental tools, and fluoride support for daily protection."
  },
  {
    title: "Aligner Care Pack",
    icon: "AC",
    description: "Cleaning crystals, chewies, and storage systems to keep aligners fresh and effective."
  }
];

export const faqItems: FaqItem[] = [
  {
    category: "General",
    question: "How often should I get a dental check-up?",
    answer: "Most patients benefit from a check-up and cleaning every six months. We may recommend shorter intervals for gum concerns or ongoing treatment plans."
  },
  {
    category: "General",
    question: "Do you treat children and families?",
    answer: "Yes. Our pediatric and family care programs are designed for children, teens, adults, and seniors with age-appropriate preventive plans."
  },
  {
    category: "Treatments",
    question: "Are teeth whitening treatments safe?",
    answer: "Professional whitening is safe when supervised by a dentist. We assess enamel and sensitivity first, then tailor concentration and timing for your comfort."
  },
  {
    category: "Treatments",
    question: "How long do dental implants last?",
    answer: "With healthy gums and consistent maintenance, implants can last many years. Regular exams and home care significantly improve long-term outcomes."
  },
  {
    category: "Insurance",
    question: "Do you accept dental insurance plans?",
    answer: "We work with many PPO plans and provide transparent treatment estimates before care. Our team can help verify benefits and submit claims."
  },
  {
    category: "Insurance",
    question: "Do you offer financing options?",
    answer: "Yes. We provide phased treatment options and third-party financing for eligible procedures to make care more manageable."
  },
  {
    category: "Appointments",
    question: "What should I do during a dental emergency?",
    answer: "Call our emergency line immediately. For swelling, trauma, or uncontrolled pain, we prioritize same-day visits and coordinate urgent treatment quickly."
  },
  {
    category: "Appointments",
    question: "Can I reschedule my appointment online?",
    answer: "Yes. Use your confirmation link or contact our front desk, and we will help you move to the next available time."
  }
];

export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Care", href: "/care" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/book-appointment" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
};
