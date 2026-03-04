export interface Apartment {
  id: string;
  name: string;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  images: string[];
  features: string[];
  description: string;
  orientation: string;
  type: string;
}

export interface Amenity {
  icon: string;
  name: string;
  description: string;
  image?: string;
}

export const apartments: Apartment[] = [
  // ========== MONOAMBIENTE TIPO A (34,82 m²) ==========
  {
    id: 'MA-101',
    name: 'Monoambiente Tipo A - 101',
    floor: 1,
    bedrooms: 0,
    bathrooms: 1,
    area: 34.82,
    price: 0, // Precio por definir
    status: 'available',
    images: [
      'https://i.imgur.com/jsWNBtg.jpeg',
      'https://i.imgur.com/rPTBX7e.jpeg',
      'https://i.imgur.com/DZcUANS.jpeg',
      'https://i.imgur.com/pK6BXa1.png',
    ],
    features: [
      'Cocina americana integrada',
      'Baño completo con ducha',
      'Closet empotrado',
      'Ventana panorámica',
      'Espacio para comedor',
    ],
    description: 'Monoambiente Tipo A de 34,82 m². Diseño amplio y funcional con excelente aprovechamiento del espacio.',
    orientation: 'Norte',
    type: 'Monoambiente Tipo A',
  },
  {
    id: 'MA-201',
    name: 'Monoambiente Tipo A - 201',
    floor: 2,
    bedrooms: 0,
    bathrooms: 1,
    area: 34.82,
    price: 0,
    status: 'available',
    images: [
      'https://i.imgur.com/jsWNBtg.jpeg',
      'https://i.imgur.com/rPTBX7e.jpeg',
      'https://i.imgur.com/DZcUANS.jpeg',
      'https://i.imgur.com/pK6BXa1.png',
    ],
    features: [
      'Cocina americana integrada',
      'Baño completo',
      'Closet empotrado',
      'Balcón privado',
      'Iluminación natural',
    ],
    description: 'Monoambiente Tipo A en segundo piso. Vista despejada y ambiente luminoso.',
    orientation: 'Este',
    type: 'Monoambiente Tipo A',
  },

  // ========== MONOAMBIENTE TIPO B (27,35 m²) ==========
  {
    id: 'MB-102',
    name: 'Monoambiente Tipo B - 102',
    floor: 1,
    bedrooms: 0,
    bathrooms: 1,
    area: 27.35,
    price: 0,
    status: 'available',
    images: [
      'https://i.imgur.com/4gfcUGZ.jpeg',
      'https://i.imgur.com/luwZXWz.jpeg',
      'https://i.imgur.com/xLLZW7g.jpeg',
      'https://i.imgur.com/ezRn4dp.png',
    ],
    features: [
      'Cocina americana',
      'Baño completo',
      'Closet empotrado',
      'Diseño compacto y eficiente',
    ],
    description: 'Monoambiente Tipo B de 27,35 m². Compacto y funcional, ideal para estudiantes o jóvenes profesionales.',
    orientation: 'Sur',
    type: 'Monoambiente Tipo B',
  },
  {
    id: 'MB-202',
    name: 'Monoambiente Tipo B - 202',
    floor: 2,
    bedrooms: 0,
    bathrooms: 1,
    area: 27.35,
    price: 0,
    status: 'reserved',
    images: [
     'https://i.imgur.com/4gfcUGZ.jpeg',
      'https://i.imgur.com/luwZXWz.jpeg',
      'https://i.imgur.com/xLLZW7g.jpeg',
      'https://i.imgur.com/ezRn4dp.png',
    ],
    features: [
      'Cocina americana',
      'Baño completo',
      'Closet empotrado',
      'Piso de cerámica',
    ],
    description: 'Monoambiente Tipo B en segundo piso. Espacio inteligente y bien distribuido.',
    orientation: 'Oeste',
    type: 'Monoambiente Tipo B',
  },

  // ========== DEPARTAMENTO 1D (56,68 m²) ==========
  {
    id: 'D1-103',
    name: 'Departamento 1D - 103',
    floor: 1,
    bedrooms: 1,
    bathrooms: 1,
    area: 56.68,
    price: 0,
    status: 'available',
    images: [
      'https://i.imgur.com/jZ0znCZ.jpeg',
      'https://i.imgur.com/YrZybrG.jpeg',
      'https://i.imgur.com/O7MOHBI.jpeg',
      'https://i.imgur.com/1o7to4n.png',
    ],
    features: [
      'Sala-comedor integrada',
      'Cocina equipada',
      '1 Dormitorio con closet amplio',
      'Baño completo',
      'Balcón',
      'Espacio de lavandería',
    ],
    description: 'Departamento 1D de 56,68 m². Espacios amplios y bien distribuidos, perfecto para parejas.',
    orientation: 'Norte',
    type: 'Departamento 1D',
  },

  // ========== DEPARTAMENTO 2D (84,31 m²) ==========
  {
    id: 'D2-104',
    name: 'Departamento 2D - 104',
    floor: 1,
    bedrooms: 2,
    bathrooms: 2,
    area: 84.31,
    price: 0,
    status: 'available',
    images: [
      'https://i.imgur.com/AzbS6zU.jpeg',
      'https://i.imgur.com/CKvj2vM.png',
      'https://i.imgur.com/LopUEbz.png',
    ],
    features: [
      'Sala-comedor amplia',
      'Cocina integral equipada',
      '2 Dormitorios espaciosos',
      'Dormitorio principal con baño en suite',
      'Baño de visitas',
      'Balcón grande',
      'Espacio de lavandería',
    ],
    description: 'Departamento 2D de 84,31 m². Ideal para familias, con dos baños completos y excelente distribución.',
    orientation: 'Este',
    type: 'Departamento 2D',
  },

  // ========== PENTHOUSE 2D (101,14 m²) ==========
  {
    id: 'PH-301',
    name: 'Penthouse 2D - 301',
    floor: 3,
    bedrooms: 2,
    bathrooms: 2,
    area: 101.14,
    price: 0,
    status: 'available',
    images: [
      'https://i.imgur.com/5u8i2s0.jpeg',
      'https://i.imgur.com/jAKh1CU.jpeg',
      'https://i.imgur.com/7uze3VC.jpeg',
    ],
    features: [
      'Sala-comedor espaciosa',
      'Cocina de diseño premium',
      '2 Dormitorios amplios',
      'Dormitorio principal con baño en suite y walk-in closet',
      'Baño de visitas completo',
      'Terraza privada panorámica',
      'Espacio de lavandería independiente',
      'Acabados de lujo',
    ],
    description: 'Penthouse 2D de 101,14 m². La unidad más exclusiva del edificio con terraza panorámica y acabados premium.',
    orientation: 'Norte',
    type: 'Penthouse 2D',
  },
];

export const buildingAmenities: Amenity[] = [
  {
    icon: 'Users',
    name: 'Sala de Copropietarios',
    description: 'Espacio exclusivo para reuniones de propietarios y juntas vecinales.',
    image: 'https://blog.neivor.com/hs-fs/hubfs/amenidades-condominio-areas-comunes.jpg?width=600&height=300&name=amenidades-condominio-areas-comunes.jpg',
  },
  {
    icon: 'Waves',
    name: 'Lavandería',
    description: 'Área de lavandería común equipada con lavadoras y secadoras de uso compartido.',
    image: 'https://www.domuslaundry.com/wp-content/uploads/2024/01/Laundry-Efficiency-1.jpg',
  },
  {
    icon: 'Trees',
    name: 'Terraza',
    description: 'Terraza común panorámica con áreas de descanso y vistas de la ciudad.',
    image: 'https://hermesmathew.com/wp-content/uploads/2018/07/decorar-una-terraza-1.jpg',
  },
  {
    icon: 'Car',
    name: 'Parqueos y Bauleras',
    description: 'Estacionamientos asignados y bauleras de almacenamiento para cada unidad.',
    image: 'https://intramax.bo/storage/listings/99bc6622-29ca-4b01-b0da-0078cf3e094b/gcq2pIjXVWxP5DuRn0Cf.jpg',
  },
  {
    icon: 'Trees',
    name: 'Áreas Verdes',
    description: 'Jardines y espacios verdes para relajación y actividades recreativas.',
    image: 'https://lh4.googleusercontent.com/proxy/z4crFQP6k9ZQ5IgKVfMr78PB9hpSeeh1AITAyqK0M3nxlH9BJj6oZtZLYPpvr1i__z4sY5wJ2y5e7F0VWRQGcoD9Ofh8RQ89Sqz5D3jju-FqUwo',
  },
  {
    icon: 'Camera',
    name: 'Seguridad',
    description: 'Sistema de seguridad 24/7 con cámaras, control de acceso y vigilancia permanente.',
    image: 'https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjM4OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];