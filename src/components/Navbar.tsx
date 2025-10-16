import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/3be6a7ea-3293-415c-8610-d761d7d52a0f.png"
            alt="NurturEdge Foundation Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-montserrat font-bold text-lg text-foreground">NurturEdge</span>
            <span className="font-montserrat font-bold text-lg text-foreground">Foundation</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
