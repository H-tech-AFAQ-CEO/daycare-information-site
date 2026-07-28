/**
 * Central content file for Sunny Meadows Daycare.
 * Edit the text here to update most of the site copy in one place.
 * See README.md ("How to update") for image and text swap instructions.
 */

export const site = {
  name: 'Sunny Meadows Daycare',
  shortName: 'Sunny Meadows',
  tagline: 'Where little ones learn, play and grow.',
  phone: '(555) 123-4567',
  email: 'hello@sunnymeadows.example.com',
  address: '124 Willow Lane, Springfield, ST 12345',
  hours: 'Monday – Friday, 7:00 AM – 6:00 PM',
  license: 'State Licensed • #DC-0098421',
  ages: '6 weeks – 5 years',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export type Stat = { value: string; label: string }
export const stats: Stat[] = [
  { value: '15+', label: 'Years caring for families' },
  { value: '1:4', label: 'Infant teacher ratio' },
  { value: '12', label: 'Qualified educators' },
  { value: '100%', label: 'Licensed & insured' },
]

export type Value = { title: string; description: string; icon: string }
export const values: Value[] = [
  {
    title: 'Safe & Secure',
    description:
      'Secure keypad entry, CCTV, and daily safety checks give you complete peace of mind.',
    icon: 'shield-check',
  },
  {
    title: 'Play-Based Learning',
    description:
      'A research-backed curriculum that turns curiosity into confident, lifelong learning.',
    icon: 'blocks',
  },
  {
    title: 'Nurturing Educators',
    description:
      'Warm, qualified teachers trained in early childhood development and first aid.',
    icon: 'heart-handshake',
  },
  {
    title: 'Healthy Meals',
    description:
      'Freshly prepared, nutritious meals and snacks with allergy-friendly options.',
    icon: 'apple',
  },
]

export type Service = {
  slug: string
  name: string
  ageRange: string
  summary: string
  image: string
  highlights: string[]
}

export const services: Service[] = [
  {
    slug: 'infant-care',
    name: 'Infant Care',
    ageRange: '6 weeks – 18 months',
    summary:
      'Gentle, responsive care in a calm nursery where every feeding, nap and cuddle follows your baby’s own rhythm.',
    image: '/images/about-teacher.png',
    highlights: [
      'Low 1:4 caregiver ratio',
      'Daily photo & activity updates',
      'Individual feeding and sleep schedules',
      'Sensory play and tummy-time',
    ],
  },
  {
    slug: 'toddler-program',
    name: 'Toddler Program',
    ageRange: '18 months – 3 years',
    summary:
      'A busy, joyful room built for curious explorers, focused on language, movement and early independence.',
    image: '/images/art-activity.png',
    highlights: [
      'Potty-training support',
      'Music, art and story time',
      'Social & emotional coaching',
      'Structured and free play',
    ],
  },
  {
    slug: 'preschool',
    name: 'Preschool',
    ageRange: '3 – 5 years',
    summary:
      'Kindergarten-readiness through hands-on projects in literacy, numbers, science and creativity.',
    image: '/images/hero-classroom.png',
    highlights: [
      'Early literacy & numeracy',
      'STEM discovery activities',
      'Show-and-tell and group projects',
      'School-readiness assessments',
    ],
  },
  {
    slug: 'after-school',
    name: 'Outdoor & Enrichment',
    ageRange: 'All ages',
    summary:
      'Daily outdoor adventures plus enrichment in gardening, movement and nutrition to round out the day.',
    image: '/images/outdoor-play.png',
    highlights: [
      'Secure natural playground',
      'Gardening & nature walks',
      'Yoga and movement classes',
      'Freshly prepared healthy meals',
    ],
  },
]

export type Faq = { question: string; answer: string }
export const faqs: Faq[] = [
  {
    question: 'What ages do you care for?',
    answer:
      'We welcome children from 6 weeks to 5 years old, with dedicated rooms for infants, toddlers and preschoolers so every age group gets age-appropriate care.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'We are open Monday through Friday from 7:00 AM to 6:00 PM, year-round, closing only on major public holidays.',
  },
  {
    question: 'Are your staff qualified and background-checked?',
    answer:
      'Yes. Every educator holds early childhood credentials, is certified in pediatric first aid and CPR, and completes a full background check before joining our team.',
  },
  {
    question: 'How do you keep the children safe?',
    answer:
      'Our building uses secure keypad entry and CCTV, we maintain low teacher-to-child ratios, and we run daily health and safety checks. Only authorized guardians may pick up a child.',
  },
  {
    question: 'Do you provide meals and snacks?',
    answer:
      'We serve freshly prepared breakfast, lunch and two snacks each day, with balanced, nutritious menus and allergy-friendly alternatives available on request.',
  },
  {
    question: 'What should my child bring each day?',
    answer:
      'A change of clothes, any comfort items for nap time, and (for infants) diapers and formula if needed. We provide everything else, including bedding and learning materials.',
  },
  {
    question: 'How do you handle allergies and medication?',
    answer:
      'We keep detailed allergy and medical records for every child, store medication securely, and follow a written care plan agreed with each family.',
  },
  {
    question: 'How can I enroll my child?',
    answer:
      'Enrollment is currently handled personally by our team. Reach out through our Contact page or give us a call, and we will arrange a tour and walk you through the next steps.',
  },
]

export type Testimonial = { quote: string; author: string; role: string }
export const testimonials: Testimonial[] = [
  {
    quote:
      'The teachers treat my daughter like their own. She runs in every morning and comes home full of stories.',
    author: 'Maya R.',
    role: 'Parent of a toddler',
  },
  {
    quote:
      'As first-time parents we were nervous about daycare. The daily updates and warm staff put us completely at ease.',
    author: 'Daniel & Priya K.',
    role: 'Parents of an infant',
  },
  {
    quote:
      'My son started reading before kindergarten thanks to their preschool program. We could not recommend them more.',
    author: 'Elena S.',
    role: 'Parent of a preschooler',
  },
]
