import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Founder & Director",
    image: "/placeholder.svg",
    email: "member1@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 2",
    role: "Program Manager",
    image: "/placeholder.svg",
    email: "member2@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 3",
    role: "Community Outreach",
    image: "/placeholder.svg",
    email: "member3@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 4",
    role: "Field Coordinator",
    image: "/placeholder.svg",
    email: "member4@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 5",
    role: "Sustainability Specialist",
    image: "/placeholder.svg",
    email: "member5@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 6",
    role: "Education Coordinator",
    image: "/placeholder.svg",
    email: "member6@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 7",
    role: "Youth Development Officer",
    image: "/placeholder.svg",
    email: "member7@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 8",
    role: "Environmental Consultant",
    image: "/placeholder.svg",
    email: "member8@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 9",
    role: "Communications Manager",
    image: "/placeholder.svg",
    email: "member9@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 10",
    role: "Finance Officer",
    image: "/placeholder.svg",
    email: "member10@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 11",
    role: "Research Analyst",
    image: "/placeholder.svg",
    email: "member11@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 12",
    role: "Partnership Coordinator",
    image: "/placeholder.svg",
    email: "member12@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 13",
    role: "Volunteer Manager",
    image: "/placeholder.svg",
    email: "member13@nurturedge.org",
    linkedin: "#"
  },
  {
    name: "Team Member 14",
    role: "Operations Officer",
    image: "/placeholder.svg",
    email: "member14@nurturedge.org",
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Team
          </h2>
          <p className="font-opensans text-xl text-muted-foreground">
            Meet the people driving change
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-opensans text-muted-foreground mb-4">
                    {member.role}
                  </p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-accent" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
