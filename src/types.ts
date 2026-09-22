export type PageId = 'home' | 'services' | 'about' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'wartung' | 'sicherheit' | 'diagnose' | 'mechanik';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  checklist: string[];
  practicalNote: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface MaintenanceTip {
  id: string;
  title: string;
  description: string;
  indicator: string;
  recommendation: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WorkshopValue {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  serviceCategory: string;
  message: string;
  preferredContact: 'phone' | 'email';
}
