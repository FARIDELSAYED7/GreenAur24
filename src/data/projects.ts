import {
    LeafyGreen,
    Recycle,
    SunMedium,
    EarthIcon,
    Book,
    GroupIcon,
    Mic,
    Trees
} from 'lucide-react';
import type { projects } from '../types/projects';

export const Projects: projects[] = [
    {
        id: 'EcoMedia Competition',
        title: 'EcoMedia Competition',
        description: 'A creative competition that invites individuals to express environmental messages through art, photography, design, and more,',
        icon: LeafyGreen,
        features: [
            'Unleash Your Creativity',
            'Raise Awareness',
            'Showcase Your Talent',
        ]
    },
    {
        id: 'Youth Leadership for Sustainability',
        title: 'Youth Leadership for Sustainability',
        description:'offline training program focused on environmental management and sustainability.',
        icon: Recycle,
        features: [
            'Hands-on projects',
            'Leadership development',
            'Teamwork training',
            'Environmental awareness'
        ]
    },
    {
        id: 'GreenPath Eco-Tours',
        title: 'GreenPath Eco-Tours',
        description: 'A sustainable ecotourism initiative promoting conservation and local community support.',
        icon: SunMedium,
        features: [
            'Community Support',
            'Environmental Education',
            'Responsible Travel'
        ]
    },
    {
        id: 'EcoImpact Awareness Campaigns',
        title: 'EcoImpact Awareness Campaigns',
        description: 'Engaging campaigns and events promoting environmental awareness and sustainable action in schools, universities, and public spaces.',
        icon: EarthIcon,
        features: [
            'Environmental education',
            'Inspiring Sustainability',  
            'Efficiency improvements',
            'Engaging school and Public Spaces'
        ]
    },
    {
        id: 'Eco-Papers Research Program',
        title: 'Eco-Papers Research Program',
        description: 'A workshop to improve research writing and publishing in environmental science and sustainability.',
        icon: Book,
        features: [
            'Workshop to enhance research writing skills',
            'Learn publishing essentials',
            'Focus on environmental science, climate change, and sustainability',
        ]
    },
    {
        id: 'Global Leaders for Sustainability Program',
        title: 'Global Leaders for Sustainability Program',
        description: 'A leadership training program focused on sustainable development and environmental management',
        icon: GroupIcon,
        features: [
            'Leadership development',
            'Teamwork training',
            'Environmental awareness',
            'Network And Collaboration',
        ]
    },
    {
        id: 'Climate Champions Challenge',
        title: 'Climate Champions Challenge',
        description: 'Global quiz on climate change and environmental science, promoting awareness.',
        icon: GroupIcon,
        features: [
            'Global quiz on climate change and environmental science',
            'Promoting awareness',
        ]
    },
    {
        id: 'EcoVerse: Innovating for Climate Action',
        title: 'EcoVerse: Innovating for Climate Action',
        description: 'An event for experts to collaborate on solutions for climate change, sustainability, and environmental tech.',
        icon: Trees,
        features: [
            'Innovating solutions for climate change, sustainability, and environmental tech',
            'Networking and collaboration',
            'Environmental tech innovations',
        ]
    },
    {
        id: 'Voices For The Planet',
        title: 'Voices For The Planet',
        description: 'A video competition promoting environmental awareness and sustainability.',
        icon: Mic,
        features: [
       'Unleash Your Creativity',
       'Raise Awareness',
       'Showcase Your Talent',
        ]
    },
];