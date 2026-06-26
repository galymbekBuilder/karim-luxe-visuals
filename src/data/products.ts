import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';
import hero7 from '@/assets/hero-7.jpg';
import hero8 from '@/assets/hero-8.jpg';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  gallery: string[];
  description: string;
  details: string[];
  composition: string;
  origin: string;
  sizes: string[];
  colorways: string[];
  season: string;
};

export const products: Product[] = [
  {
    id: 'florence-jacket',
    name: 'Florence Wool Jacket',
    category: 'Outerwear',
    price: '€1,240',
    image: hero1,
    gallery: [hero1, hero5, hero8],
    description:
      'A sculpted wool jacket inspired by mid-century Florentine tailoring. Cut from Italian double-faced wool, finished by hand in a small Tuscan atelier.',
    details: [
      'Hand-finished lapels and hem',
      'Horn buttons sourced from Naples',
      'Half-canvas internal construction',
      'Concealed inside pocket',
    ],
    composition: '94% Italian Wool · 6% Cashmere',
    origin: 'Made in Florence, Italy',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorways: ['Nero', 'Camel', 'Bone'],
    season: 'Autumn / Winter 25',
  },
  {
    id: 'sunflower-dress',
    name: 'Sunflower Slip Dress',
    category: 'Dresses',
    price: '€890',
    image: hero2,
    gallery: [hero2, hero3, hero4],
    description:
      'A fluid silk slip in a sun-bleached floral print, drawn from archival 1970s Milanese textiles. Designed to move with the body.',
    details: [
      'Bias-cut silk charmeuse',
      'Adjustable spaghetti straps',
      'Hand-rolled hem',
      'Mother-of-pearl detailing',
    ],
    composition: '100% Mulberry Silk',
    origin: 'Made in Como, Italy',
    sizes: ['XS', 'S', 'M', 'L'],
    colorways: ['Girasole', 'Notte'],
    season: 'Spring / Summer 26',
  },
  {
    id: 'manhattan-blazer',
    name: 'Manhattan Cream Blazer',
    category: 'Tailoring',
    price: '€1,560',
    image: hero3,
    gallery: [hero3, hero7, hero1],
    description:
      'An oversized double-breasted blazer in unstructured linen-cotton. Effortless tailoring for golden-hour walks across the city.',
    details: [
      'Soft shoulder, no padding',
      'Patch pockets',
      'Functional cuff buttons',
      'Bemberg cupro lining',
    ],
    composition: '70% Linen · 30% Cotton',
    origin: 'Made in Biella, Italy',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorways: ['Crema', 'Sabbia'],
    season: 'Spring / Summer 26',
  },
  {
    id: 'parisian-trench',
    name: 'Parisian Trench Coat',
    category: 'Outerwear',
    price: '€1,890',
    image: hero4,
    gallery: [hero4, hero6, hero1],
    description:
      'The trench, reimagined. Cut long and lean from weatherproof cotton gabardine, finished with a horn-buckled belt.',
    details: [
      'Storm flap and gun patch',
      'D-ring belt',
      'Raglan sleeves',
      'Removable inner liner',
    ],
    composition: '100% Cotton Gabardine',
    origin: 'Made in Paris, France',
    sizes: ['XS', 'S', 'M', 'L'],
    colorways: ['Sable', 'Olive', 'Nero'],
    season: 'Autumn / Winter 25',
  },
  {
    id: 'lorenzo-mini-dress',
    name: 'Lorenzo Mini Dress',
    category: 'Dresses',
    price: '€720',
    image: hero5,
    gallery: [hero5, hero2, hero8],
    description:
      'A clean-lined mini dress with a softly draped neckline. Cut from compact merino jersey that holds its shape beautifully.',
    details: [
      'Compact merino jersey',
      'Hidden side seam zip',
      'Subtle back vent',
    ],
    composition: '100% Merino Wool',
    origin: 'Made in Prato, Italy',
    sizes: ['XS', 'S', 'M', 'L'],
    colorways: ['Nero', 'Vino'],
    season: 'Autumn / Winter 25',
  },
  {
    id: 'monde-camel-coat',
    name: 'Le Monde Camel Coat',
    category: 'Outerwear',
    price: '€2,140',
    image: hero6,
    gallery: [hero6, hero4, hero7],
    description:
      'The icon. A long camel coat in the purest baby camel hair, tailored with a single button closure and notch lapel.',
    details: [
      'Single horn button',
      'Patch pockets at hip',
      'Center back vent',
      'Made by master tailors over 40 hours',
    ],
    composition: '100% Baby Camel Hair',
    origin: 'Made in Milan, Italy',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorways: ['Cammello'],
    season: 'Autumn / Winter 25',
  },
  {
    id: 'milano-overcoat',
    name: 'Milano Belted Overcoat',
    category: 'Outerwear',
    price: '€1,980',
    image: hero7,
    gallery: [hero7, hero6, hero3],
    description:
      'A belted overcoat with a generous lapel and a self-tie belt. Architectural and softly tailored at once.',
    details: [
      'Self-tie belt',
      'Welt pockets',
      'Two-button cuff',
    ],
    composition: '80% Wool · 20% Cashmere',
    origin: 'Made in Milan, Italy',
    sizes: ['XS', 'S', 'M', 'L'],
    colorways: ['Cammello', 'Carbone'],
    season: 'Autumn / Winter 25',
  },
  {
    id: 'navigli-blazer',
    name: 'Navigli Espresso Blazer',
    category: 'Tailoring',
    price: '€1,180',
    image: hero8,
    gallery: [hero8, hero5, hero2],
    description:
      'A nipped-waist blazer with gilded buttons, made for long lunches along the canal. Soft Neapolitan shoulder.',
    details: [
      'Gold-tone buttons',
      'Neapolitan shoulder',
      'Single back vent',
    ],
    composition: '100% Virgin Wool',
    origin: 'Made in Naples, Italy',
    sizes: ['XS', 'S', 'M', 'L'],
    colorways: ['Nero', 'Carbone'],
    season: 'Resort 26',
  },
];

export const categories = ['All', 'Outerwear', 'Tailoring', 'Dresses'];
