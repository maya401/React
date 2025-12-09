export interface MenuItem {
  name: string;
  link: string;
}

export interface TypeSection {
  titre: string;
  sousTitre: string;
  description?: string;
}

export interface CardProps {
  title?: string;
  content: string;
  icon: React.ReactNode;
  className?: string;
}

export interface tableauProps {
  content: string;
  icon: React.ReactNode;
}

export interface career {
  id: number;
  title: string;
  description?: string;
  link?: string;
}

export interface ImagesTypes {
  url: string;
  alt: string;
  temoignage: string;
}

export interface blogType {
  id: number;
  tag: string;
  title: string;
  description: string;
  src: string;
  link: string;
}

export interface sidebarType {
  icon: React.ReactNode;
  name: string;
  link: string;
}
