import { 
  GraduationCap, 
  Users, 
  Heart, 
  TreePine, 
  Lightbulb 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    icon: GraduationCap,
    title: "Quality, Inclusive & Ethical Education",
    description: "Accessible programs in leadership, literacy, and ethics.",
    color: "bg-accent"
  },
  {
    icon: Users,
    title: "Gender Equality & Youth Empowerment", 
    description: "Skill development, entrepreneurship, and leadership training.",
    color: "bg-secondary"
  },
  {
    icon: Heart,
    title: "Preventive & Health Practices",
    description: "Healthy communities, health services promotion.",
    color: "bg-primary"
  },
  {
    icon: TreePine,
    title: "Environmental Sustainability & Climate Action",
    description: "Tree plantations, eco-literacy, waste management, green livelihoods.",
    color: "bg-accent"
  },
  {
    icon: Lightbulb,
    title: "Ethical Consultancy & Innovation",
    description: "Mentoring NGOs and social enterprises for real change.",
    color: "bg-secondary"
  }
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Key Objectives
          </h2>
          <p className="font-opensans text-xl text-muted-foreground">
            Driving change across five pillars of impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-soft">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${objective.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-4">
                  {objective.title}
                </h3>
                
                <p className="font-opensans text-foreground leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;