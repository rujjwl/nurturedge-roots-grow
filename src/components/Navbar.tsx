import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src="/lovable-uploads/3be6a7ea-3293-415c-8610-d761d7d52a0f.png"
            alt="NurturEdge Foundation Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-montserrat font-bold text-base sm:text-lg text-foreground">NurturEdge</span>
            <span className="font-montserrat font-bold text-base sm:text-lg text-foreground">Foundation</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('vision')}
            className="font-opensans"
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('objectives')}
            className="font-opensans"
          >
            Objectives
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('impact')}
            className="font-opensans"
          >
            Impact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-2 flex flex-col gap-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('vision')}
              className="font-opensans justify-start w-full"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('objectives')}
              className="font-opensans justify-start w-full"
            >
              Objectives
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('impact')}
              className="font-opensans justify-start w-full"
            >
              Impact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
