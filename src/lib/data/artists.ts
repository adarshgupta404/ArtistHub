export interface Artist {
  id: string;
  name: string;
  category: string;
  priceRange: number;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  specialties: string[];
  experience: string;
  availability: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: "Singers",
    priceRange: 500,
    location: "New York, NY",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.9,
    reviewCount: 127,
    description:
      "Professional vocalist with 10+ years of experience in jazz, pop, and classical music.",
    specialties: ["Jazz", "Pop", "Classical", "Wedding Songs"],
    experience: "10+ years",
    availability: "Available",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    category: "DJs",
    priceRange: 300,
    location: "Los Angeles, CA",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.8,
    reviewCount: 89,
    description:
      "High-energy DJ specializing in electronic, hip-hop, and party music for all occasions.",
    specialties: ["Electronic", "Hip-Hop", "Party Mix", "Wedding Reception"],
    experience: "8+ years",
    availability: "Available",
  },
  {
    id: "3",
    name: "Elena Petrov",
    category: "Dancers",
    priceRange: 400,
    location: "Miami, FL",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Contemporary and ballet dancer with performances at major venues worldwide.",
    specialties: ["Contemporary", "Ballet", "Modern", "Choreography"],
    experience: "12+ years",
    availability: "Busy",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    category: "Speakers",
    priceRange: 1000,
    location: "Chicago, IL",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.7,
    reviewCount: 43,
    description:
      "Motivational speaker and business consultant with expertise in leadership and innovation.",
    specialties: [
      "Leadership",
      "Innovation",
      "Business Strategy",
      "Team Building",
    ],
    experience: "15+ years",
    availability: "Available",
  },
  {
    id: "5",
    name: "Luna Martinez",
    category: "Singers",
    priceRange: 600,
    location: "Austin, TX",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.8,
    reviewCount: 92,
    description:
      "Indie folk singer-songwriter with a unique voice and original compositions.",
    specialties: ["Folk", "Indie", "Acoustic", "Original Songs"],
    experience: "6+ years",
    availability: "Available",
  },
  {
    id: "6",
    name: "DJ Phoenix",
    category: "DJs",
    priceRange: 700,
    location: "Las Vegas, NV",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.9,
    reviewCount: 201,
    description:
      "Club and event DJ with expertise in house, techno, and progressive music.",
    specialties: ["House", "Techno", "Progressive", "Club Mix"],
    experience: "9+ years",
    availability: "Available",
  },
  {
    id: "7",
    name: "Isabella Chen",
    category: "Dancers",
    priceRange: 900,
    location: "San Francisco, CA",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.6,
    reviewCount: 74,
    description:
      "Hip-hop and street dance performer with competitive dance background.",
    specialties: ["Hip-Hop", "Street Dance", "Breaking", "Choreography"],
    experience: "7+ years",
    availability: "Available",
  },
  {
    id: "8",
    name: "Prof. Amanda Foster",
    category: "Speakers",
    priceRange: 1500,
    location: "Boston, MA",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.8,
    reviewCount: 67,
    description:
      "Technology expert and keynote speaker focusing on AI and digital transformation.",
    specialties: ["Technology", "AI", "Digital Transformation", "Innovation"],
    experience: "11+ years",
    availability: "Available",
  },
  {
    id: "9",
    name: "Carlos Mendoza",
    category: "Singers",
    priceRange: 1500,
    location: "Phoenix, AZ",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.7,
    reviewCount: 85,
    description:
      "Latin music specialist with expertise in salsa, bachata, and contemporary Latin sounds.",
    specialties: ["Salsa", "Bachata", "Latin Pop", "Spanish Songs"],
    experience: "9+ years",
    availability: "Busy",
  },
  {
    id: "10",
    name: "DJ Stellar",
    category: "DJs",
    priceRange: 250,
    location: "Denver, CO",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.5,
    reviewCount: 56,
    description:
      "Versatile DJ perfect for weddings, corporate events, and private parties.",
    specialties: ["Wedding Mix", "Corporate Events", "Top 40", "Classic Hits"],
    experience: "5+ years",
    availability: "Available",
  },
  {
    id: "11",
    name: "Grace Thompson",
    category: "Dancers",
    priceRange: 1200,
    location: "Nashville, TN",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.9,
    reviewCount: 112,
    description:
      "Professional ballroom and Latin dance instructor and performer.",
    specialties: ["Ballroom", "Latin", "Tango", "Waltz"],
    experience: "13+ years",
    availability: "Available",
  },
  {
    id: "12",
    name: "Michael Chang",
    category: "Speakers",
    priceRange: 4000,
    location: "Seattle, WA",
    image:
      "https://media.istockphoto.com/id/666258850/photo/silhouette-of-guitar-player-on-stage.jpg?s=612x612&w=0&k=20&c=OQ7I_Ym-1qqR0bN5q60wDxosy0f0ck1cgCWONzm6Ar4=",
    rating: 4.6,
    reviewCount: 38,
    description:
      "Entrepreneur and startup advisor sharing insights on business growth and innovation.",
    specialties: [
      "Entrepreneurship",
      "Startups",
      "Business Growth",
      "Investment",
    ],
    experience: "8+ years",
    availability: "Available",
  },
];

export const specialties = [ ]

export const categories = ["All", "Singers", "Dancers", "Speakers", "DJs"];

export const locations = [
  "All",
  "New York, NY",
  "Los Angeles, CA",
  "Miami, FL",
  "Chicago, IL",
  "Austin, TX",
  "Las Vegas, NV",
  "San Francisco, CA",
  "Boston, MA",
  "Phoenix, AZ",
  "Denver, CO",
  "Nashville, TN",
  "Seattle, WA",
];

export const priceRanges = [
  "All",
  "$0 - $500",
  "$500 - $1,000",
  "$1,000 - $2,000",
  "$2,000 - $5,000",
  "$5,000+",
];

export interface ArtistSubmission {
  id: string
  name: string
  email: string
  bio: string
  categories: string[]
  languages: string[]
  feeRange: string
  city: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
  profileImage?: string
}

export const mockArtistSubmissions: ArtistSubmission[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    bio: "Contemporary visual artist specializing in mixed media installations that explore themes of identity and cultural heritage.",
    categories: ["Visual Arts", "Installation Art", "Mixed Media"],
    languages: ["English", "Chinese", "Spanish"],
    feeRange: "$2,500 - $5,000",
    city: "San Francisco, CA",
    status: "pending",
    submittedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    bio: "Jazz musician and composer with 15 years of experience performing at venues across the country.",
    categories: ["Music", "Performance"],
    languages: ["English", "French"],
    feeRange: "$1,000 - $2,500",
    city: "New Orleans, LA",
    status: "approved",
    submittedAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    email: "elena.rodriguez@email.com",
    bio: "Professional dancer and choreographer specializing in contemporary and Latin dance styles.",
    categories: ["Dance", "Choreography"],
    languages: ["Spanish", "English", "Portuguese"],
    feeRange: "$500 - $1,000",
    city: "Miami, FL",
    status: "approved",
    submittedAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@email.com",
    bio: "Digital artist creating immersive VR experiences and interactive installations for galleries and museums.",
    categories: ["Digital Arts", "VR/AR", "Interactive Media"],
    languages: ["English", "Korean"],
    feeRange: "$5,000 - $10,000",
    city: "Seattle, WA",
    status: "pending",
    submittedAt: "2024-01-12T16:45:00Z",
  },
  {
    id: "5",
    name: "Isabella Thompson",
    email: "isabella.t@email.com",
    bio: "Award-winning photographer specializing in portrait and documentary photography.",
    categories: ["Photography", "Documentary"],
    languages: ["English", "Italian"],
    feeRange: "$1,000 - $2,500",
    city: "Portland, OR",
    status: "rejected",
    submittedAt: "2024-01-11T11:30:00Z",
  },
  {
    id: "6",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@email.com",
    bio: "Sculptor working with traditional and modern materials to create large-scale public art installations.",
    categories: ["Sculpture", "Public Art"],
    languages: ["Arabic", "English", "French"],
    feeRange: "$10,000+",
    city: "Detroit, MI",
    status: "pending",
    submittedAt: "2024-01-10T13:20:00Z",
  },
  {
    id: "7",
    name: "Maria Santos",
    email: "maria.santos@email.com",
    bio: "Theater director and playwright with a focus on community-based storytelling and social justice themes.",
    categories: ["Theater", "Writing", "Community Arts"],
    languages: ["Spanish", "English"],
    feeRange: "$2,500 - $5,000",
    city: "Austin, TX",
    status: "approved",
    submittedAt: "2024-01-09T08:45:00Z",
  },
  {
    id: "8",
    name: "James Wilson",
    email: "james.wilson@email.com",
    bio: "Oil painter creating realistic landscapes and portraits inspired by the American Southwest.",
    categories: ["Painting", "Traditional Arts"],
    languages: ["English"],
    feeRange: "$500 - $1,000",
    city: "Santa Fe, NM",
    status: "pending",
    submittedAt: "2024-01-08T15:10:00Z",
  },
]

export function isPriceInRange(artistPrice: number, selectedRange: string): boolean {
  if (selectedRange === "All") return true;

  // Remove `$` and commas, then parse numbers
  const rangeParts = selectedRange
    .replace(/\$/g, "")
    .replace(/,/g, "")
    .split("-")
    .map(part => part.trim());

  const min = parseInt(rangeParts[0], 10);
  const max = rangeParts[1] ? parseInt(rangeParts[1], 10) : Infinity;

  return artistPrice >= min && artistPrice <= max;
}


