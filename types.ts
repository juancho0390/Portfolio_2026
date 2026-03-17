
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  iconUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}
