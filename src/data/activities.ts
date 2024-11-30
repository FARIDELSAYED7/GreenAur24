import { 
  Sprout, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Camera 
} from 'lucide-react';
import type { Activity } from '../types/activity';

export const activities: Activity[] = [
  {
    title: "Tree Planting",
    description: "Join our monthly tree planting initiatives in urban areas.",
    icon: Sprout,
    date: "Every First Saturday",
    category: "Conservation"
  },
  {
    title: "Community Workshops",
    description: "Educational workshops on sustainable living practices.",
    icon: Users,
    date: "Weekly",
    category: "Education"
  },
  {
    title: "Environmental Studies",
    description: "Research programs for students and professionals.",
    icon: BookOpen,
    date: "Ongoing",
    category: "Research"
  },
  {
    title: "Eco Competitions",
    description: "Contests promoting innovative environmental solutions.",
    icon: Award,
    date: "Quarterly",
    category: "Innovation"
  },
  {
    title: "Global Initiatives",
    description: "International collaboration projects for climate action.",
    icon: Globe,
    date: "Year-round",
    category: "Global"
  },
  {
    title: "Nature Photography",
    description: "Documentation of local biodiversity and ecosystems.",
    icon: Camera,
    date: "Monthly",
    category: "Documentation"
  }
];