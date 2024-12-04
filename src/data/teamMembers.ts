interface SocialLinks {
  linkedin?: string;
  email?: string;
  github?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Wafik Noseir",
    role: "Supervisor | Member of the World Environment Congress",
    image: "images/team/Dr.Wafik_noseir.jpg",
    social: {
      linkedin: "https://linkedin.com",
      email: "wafik@greenaura.com"
    }
  },
  {
    name: "Ahmed Hany",
    role: "Founder & CEO",
    image: "images/team/Ahmed_hany.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "michael@greenaura.com"
    }
  }
];
