import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

// Array de imágenes para el carrusel
const heroImages = [
  'https://i.imgur.com/rmXsXz2.png', // portada elite irpavi
  'https://i.imgur.com/kEcaSDL.jpeg', // Edificio render irpavi
  'https://i.imgur.com/Qflv3Yt.png', // Interior moderno
  'https://i.imgur.com/rDnFiUR.jpeg', // Sala moderna
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Asegurar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Cambiar imagen cada 3 segundos
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000); // 3000 milisegundos = 3 segundos

    return () => clearInterval(interval); // Limpiar al desmontar
  }, [isClient]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/k7ihqh', '_blank');
  };

  return (
    <div className="relative h-[600px] flex items-end justify-center overflow-hidden pb-12">
      {/* Imágenes del carrusel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
        </div>
      ))}

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl mb-6">

          
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Elite 6080 Irpavi entre calle 13 y 14.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="gap-2">
            Ver departamentos
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/30 text-black border-white/30 hover:bg-white/20" onClick={handleWhatsAppClick}>
            Agendar visita
          </Button>
        </div>
      </div>
    </div>
  );
}