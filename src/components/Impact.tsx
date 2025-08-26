import { 
  Handshake, 
  Megaphone, 
  Network, 
  Factory 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impactAreas = [
  {
    icon: Handshake,
    title: "Community Resilience",
    description: "Co-creating equitable, grassroots solutions with institutions."
  },
  {
    icon: Megaphone,
    title: "Policy Advocacy",
    description: "Promoting transparency, environmental ethics, and development dialogue."
  },
  {
    icon: Network,
    title: "Knowledge-to-Action",
    description: "Bridging research and values through workshops and field programs."
  },
  {
    icon: Factory,
    title: "Responsible Local Production",
    description: "Supporting ethical, eco-friendly innovations in communities."
  }
];

const Impact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Collaboration & Impact
          </h2>
          <p className="font-opensans text-xl text-muted-foreground">
            Building a network for lasting change
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {impactAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                    {area.title}
                  </h3>
                  <p className="font-opensans text-foreground">
                    {area.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Impact Statistic */}
        <div className="text-center">
          <div className="inline-block bg-primary/10 rounded-lg p-8 border border-primary/20">
            <p className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-2">
              500+
            </p>
            <p className="font-opensans text-lg text-secondary">
              Youth trained in sustainable livelihoods across 12 villages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;