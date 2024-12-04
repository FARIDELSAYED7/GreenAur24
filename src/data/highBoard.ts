interface SocialLinks {
  linkedin?: string;
  email?: string;
  github?: string;
}

interface HighBoardMember {
  name: string;
  role: string;
  image: string;
  description: string;
  achievements: string[];
  social: SocialLinks;
}

interface Season {
  id: string;
  year: string;
  name: string;
  members: HighBoardMember[];
}

export const highBoardSeasons: Season[] = [
  {
    id: "2023-2024",
    year: "2023/2024",
    name: "Season 1",
    members: [
      {
        name: "Dr. Wafik Noseir",
        role: "Supervisor | Member of the World Environment Congress",
        image: "images/team/Dr.Wafik_noseir.jpg",
        description: "Leading environmental expert with over 20 years of experience in sustainable development and environmental conservation.",
        achievements: [
          "Member of the World Environment Congress",
          "Published numerous research papers on environmental sustainability",
          "Led multiple successful environmental initiatives"
        ],
        social: {
          linkedin: "https://linkedin.com",
          email: "wafik@greenaura.com"
        }
      }
    ]
  },
  {
    id: "2022-2023",
    year: "2022/2023",
    name: "Foundation Season",
    members: [
      {
        name: "Ahmed Hany",
        role: "Founder & CEO",
        image: "images/team/Ahmed_hany.png",
        description: "Passionate environmental advocate and innovative leader in sustainable solutions.",
        achievements: [
          "Founded GreenAura",
          "Established key environmental partnerships",
          "Launched multiple sustainability initiatives"
        ],
        social: {
          linkedin: "https://linkedin.com",
          email: "ahmed@greenaura.com"
        }
      },
      {
        name: "Ahmed Hany",
        role: "Founder & CEO",
        image: "images/team/Ahmed_hany.png",
        description: "Passionate environmental advocate and innovative leader in sustainable solutions.",
        achievements: [
          "Founded GreenAura",
          "Established key environmental partnerships",
          "Launched multiple sustainability initiatives"
        ],
        social: {
          linkedin: "https://linkedin.com",
          email: "ahmed@greenaura.com"
        }
      }
    ]
  },
];
