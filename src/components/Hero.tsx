import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse youth engaged in sustainable community training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <div className="h-24 md:h-32 mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/3be6a7ea-3293-415c-8610-d761d7d52a0f.png"
              alt="NurturEdge Foundation Logo"
              className="h-20 md:h-28 w-auto"
            />
          </div>
        </div>
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          NurturEdge Foundation
        </h1>
        
        <p className="font-opensans text-xl md:text-2xl lg:text-3xl mb-4 font-light tracking-wide">
          Empowering Ethical and Sustainable Futures
        </p>
        
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        
        <p className="font-opensans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the Movement for Change
        </p>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 font-montserrat font-semibold px-8 py-4 text-lg"
          onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More About Our Mission
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;