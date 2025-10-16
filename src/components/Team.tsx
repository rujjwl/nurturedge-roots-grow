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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
