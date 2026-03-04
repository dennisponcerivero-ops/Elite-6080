import { Link } from "react-router";
import { Building2, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/k7ihqh', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl">Elite 6080</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm">
              <a href="#apartments" className="hover:underline">
                Departamentos
              </a>
              <a href="#amenities" className="hover:underline">
                Areas Comunes
              </a>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </div>
            
            <Button size="sm" className="gap-2" onClick={handleWhatsAppClick}>
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Agendar visita</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}