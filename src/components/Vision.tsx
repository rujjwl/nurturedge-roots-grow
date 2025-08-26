import { Globe, Lightbulb } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary">
                Our Vision
              </h2>
            </div>
            
            <p className="font-opensans text-lg text-foreground leading-relaxed">
              To lead the way in shaping a world where innovation is guided by ethics, 
              progress is driven by purpose, and sustainability is at the core of every transformation.
            </p>
          </div>
          
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary rounded-full">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary">
                Our Mission
              </h2>
            </div>
            
            <p className="font-opensans text-lg text-foreground leading-relaxed">
              To empower people and organizations to create a more sustainable and ethical future 
              through comprehensive solutions in education, consulting, services, and manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;