// Core Types
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanityImage {
  asset: {
    url: string;
    _id: string;
  };
  url?: string;
}

// Navigation Types
export interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
}

export interface SiteNavigation extends SanityDocument {
  logo: SanityImage;
  navItems: NavLink[];
}

// Hero Banner Types
export interface HeroBanner extends SanityDocument {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  bannerImage: SanityImage;
}

// Document Types
export interface DocCategory extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
}

export interface CloudinaryDoc {
  secure_url: string;
  format: string;
  bytes: number;
}

export interface DocumentItem extends SanityDocument {
  title: string;
  type: string;
  categories: DocCategory[];
  previewImage: SanityImage;
  cloudinaryDoc: CloudinaryDoc;
  publishDate: string;
}

// Page Data Types
export interface HomePageData {
  nav: SiteNavigation;
  hero: HeroBanner;
  categories: DocCategory[];
  documents: DocumentItem[];
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  loading?: boolean;
}

// Component Props Types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
} 