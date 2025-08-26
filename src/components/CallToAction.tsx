import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Handshake, 
  Heart, 
  Globe, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const ctaButtons = [
  { icon: UserPlus, label: "Volunteer", color: "bg-accent hover:bg-accent/90" },
  { icon: Handshake, label: "Partner", color: "bg-secondary hover:bg-secondary/90" },
  { icon: Heart, label: "Donate", color: "bg-primary hover:bg-primary/90" },
  { icon: Globe, label: "Learn More", color: "bg-accent hover:bg-accent/90" }
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Join the Movement
          </h2>
          <p className="font-opensans text-xl opacity-90 max-w-3xl mx-auto">
            Together, let's build an ethical, inclusive, and sustainable future.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {ctaButtons.map((button, index) => (
            <Button 
              key={index}
              className={`${button.color} text-white font-montserrat font-semibold py-6 flex flex-col items-center gap-2 h-auto hover:scale-105 transition-all duration-300`}
            >
              <button.icon className="w-6 h-6" />
              {button.label}
            </Button>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/20 rounded-full mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Address</h3>
            <p className="font-opensans text-sm opacity-90 leading-relaxed">
              A/402, Panjury Palace, Nr Diya Green Party,<br />
              Opp. Atulya Elegance, New Vavol,<br />
              Gandhinagar – 382016
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/20 rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Phone</h3>
            <div className="font-opensans text-sm opacity-90 space-y-1">
              <p>99138 56583</p>
              <p>70434 74043</p>
              <p>94280 50584</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/20 rounded-full mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Contact</h3>
            <div className="font-opensans text-sm opacity-90 space-y-1">
              <p>www.nurturedge.com</p>
              <p>info@nurturedge.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;