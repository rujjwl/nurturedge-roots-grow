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
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
              <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"/>
                <path d="M35 55 L45 45 L55 55 L65 35" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary"/>
                <circle cx="50" cy="30" r="8" fill="currentColor" className="text-secondary"/>
              </svg>
            </div>
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