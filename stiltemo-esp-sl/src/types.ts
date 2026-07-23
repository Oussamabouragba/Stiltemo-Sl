export interface Stat {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  iconName: 'Warehouse' | 'Cpu' | 'Wrench' | 'Settings';
}

export interface ProjectItem {
  id: string;
  title: string;
  partner: string;
  location: string;
  year: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  type: 'automated' | 'heavy' | 'mezzanine' | 'cantilever';
}

export interface OfficeContact {
  hq: string;
  cif: string;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
  employees: string;
  coverage: string;
}
