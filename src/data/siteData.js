import {
  FaAward,
  FaChalkboardTeacher,
  FaChild,
  FaClock,
  FaGraduationCap,
  FaHeart,
  FaPeopleCarry,
  FaShieldAlt,
  FaSmile,
  FaStar,
  FaTheaterMasks,
  FaUserGraduate,
} from 'react-icons/fa'
import { GiTempleGate } from 'react-icons/gi'
import { MdDashboardCustomize, MdOutlineFestival, MdOutlineLiveTv } from 'react-icons/md'
import ga from "../assets/gallery/ga.jpeg";
import ga2 from "../assets/gallery/ga2.jpeg";
import ga3 from "../assets/gallery/ga3.jpeg";
import ga4 from "../assets/gallery/ga4.jpeg";
import ga5 from "../assets/gallery/ga5.jpeg";
import ga6 from "../assets/gallery/ga6.jpeg";
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const courses = [
  {
    title: 'Offline Classes',
    badge: 'Weekend Classes',
    description: 'Traditional classroom training with personalised guidance and stage preparation.',
    bullets: ['Traditional classroom training', 'Individual guidance', 'Stage preparation'],
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Online Classes',
    badge: 'Available Anytime',
    description: 'Live interactive sessions designed for students across the globe.',
    bullets: ['Live interactive sessions', 'Flexible timings', 'Students worldwide can join'],
    icon: MdOutlineLiveTv,
  },
  {
    title: "Children's Batch",
    badge: 'Age 5+',
    description: 'A joyful and structured foundation for young learners.',
    bullets: ['Foundation', 'Adavus', 'Expressions'],
    icon: FaChild,
  },
  {
    title: 'Adults Batch',
    badge: 'Beginner Friendly',
    description: 'A graceful path for adults to begin with confidence and ease.',
    bullets: ['No prior experience needed', 'Gentle progression', 'Artistic expression'],
    icon: FaUserGraduate,
  },
]

export const reasons = [
  { title: 'Expert Guidance', text: 'Learn from an accomplished Bharatanatyam Guru.', icon: FaGraduationCap },
  { title: 'Strong Foundation', text: 'Master technique, theory and expression with discipline.', icon: FaShieldAlt },
  { title: 'Stage Opportunities', text: 'Regular chances to perform and grow with confidence.', icon: FaTheaterMasks },
  { title: 'Individual Attention', text: 'Every learner is guided with care and patience.', icon: FaPeopleCarry },
  { title: 'Grace & Discipline', text: 'Build poise, posture and consistency through tradition.', icon: FaHeart },
  { title: 'Confidence Building', text: 'Develop presence through performance and practice.', icon: FaSmile },
  { title: 'Traditional Methods', text: 'Preserve authentic gharana-inspired learning methods.', icon: GiTempleGate },
  { title: 'Flexible Learning', text: 'Choose weekend offline or anytime online classes.', icon: FaClock },
]

export const highlights = [
  {
    title: 'Expert Guidance',
    text: 'Learn from an accomplished Bharatanatyam Guru with years of teaching experience.',
    icon: FaAward,
  },
  {
    title: 'Strong Foundation',
    text: 'Master technique, theory, expression and rhythm with structured progression.',
    icon: MdDashboardCustomize,
  },
  {
    title: 'Stage Performance',
    text: 'Present your artistry through curated performances and cultural events.',
    icon: MdOutlineFestival,
  },
  {
    title: 'Discipline & Confidence',
    text: 'Develop poise, stage presence and values through graceful practice.',
    icon: FaStar,
  },
]

export const galleryItems = [
  {
    src: ga,
    alt: "Bharatanatyam Class",
    category: "Classes",
  },
  {
    src: ga2,
    alt: "Stage Performance",
    category: "Performances",
  },
  {
    src: ga3,
    alt: "Cultural Event",
    category: "Events",
  },
  {
    src: ga4,
    alt: "Competition Performance",
    category: "Competitions",
  },
  {
    src: ga5,
    alt: "Students Practicing",
    category: "Classes",
  },
  {
    src: ga6,
    alt: "Academy Performance",
    category: "Performances",
  },
];

export const testimonials = [
  {
    name: 'Aaradhya S.',
    role: 'Student',
    comment: 'The classes are elegant, disciplined and deeply inspiring. My confidence has grown in every session.',
    rating: 5,
  },
  {
    name: 'Nisha M.',
    role: 'Parent',
    comment: 'The teaching style blends tradition and modern guidance beautifully. My daughter loves the atmosphere.',
    rating: 5,
  },
  {
    name: 'Pranav K.',
    role: 'Adult Learner',
    comment: 'The online sessions feel personal and engaging. The Guru’s instruction is exceptional.',
    rating: 5,
  },
  {
    name: 'Meera R.',
    role: 'Performer',
    comment: 'Every performance opportunity is carefully nurtured, and the progress is visible week after week.',
    rating: 5,
  },
  {
    name: 'Sanjana P.',
    role: 'Young Dancer',
    comment: 'The children’s batch is welcoming, graceful and very motivating. I look forward to every class.',
    rating: 5,
  },
  {
    name: 'Raghav T.',
    role: 'Student',
    comment: 'The discipline and artistry taught here are unforgettable. It feels like an academy of excellence.',
    rating: 5,
  },
]

export const faqs = [
  { question: 'Who can join?', answer: 'Students of all ages are welcome, from curious beginners to experienced learners.' },
  { question: 'Do I need experience?', answer: 'No prior experience is required for our beginner-friendly batches.' },
  { question: 'Are online classes live?', answer: 'Yes, our online sessions are live, interactive and guided in real time.' },
  { question: 'Weekend timings?', answer: 'Weekend offline sessions are scheduled thoughtfully to suit family routines.' },
  { question: 'What should I wear?', answer: 'Comfortable attire that allows free movement is ideal for practice and performance.' },
]

export const stats = [
  { value: 40, suffix: '+', label: 'Students Trained' },
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: 6, suffix: '+', label: 'Stage Performances' },
  { value: 10, suffix: '+', label: 'Awards' },
]
