import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Bed, Bath, Maximize, Compass, MapPin, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { apartments } from "../data/apartments";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const statusLabels = {
  available: 'Disponible',
  reserved: 'Reservado',
  sold: 'Vendido',
};

const statusVariants = {
  available: 'default' as const,
  reserved: 'secondary' as const,
  sold: 'outline' as const,
};

export function ApartmentDetail() {
  const { id } = useParams();
  const apartment = apartments.find(apt => apt.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/k7ihqh', '_blank');
  };

  if (!apartment) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl mb-4">Departamento no encontrado</h2>
        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === apartment.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? apartment.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a departamentos
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-muted">
              <img
                src={apartment.images[currentImageIndex]}
                alt={`${apartment.name} - imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {apartment.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {apartment.images.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'w-8 bg-white' 
                            : 'w-2 bg-white/50 hover:bg-white/75'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {apartment.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index 
                      ? 'border-primary' 
                      : 'border-transparent hover:border-primary/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl mb-2">{apartment.name}</h1>
                  <div className="flex items-center text-muted-foreground gap-1">
                    <MapPin className="h-4 w-4" />
                    Piso {apartment.floor}
                  </div>
                </div>
                <Badge variant={statusVariants[apartment.status]}>
                  {statusLabels[apartment.status]}
                </Badge>
              </div>

              <div className="text-4xl mb-6">
                {apartment.price > 0 ? (
                  <>
                    ${apartment.price.toLocaleString()}{" "}
                    <span className="text-base text-muted-foreground">USD</span>
                  </>
                ) : (
                  <span className="text-2xl">Precio a consultar</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Bed className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Tipo</div>
                      <div className="text-xl">{apartment.bedrooms === 0 ? apartment.type : `${apartment.bedrooms} Dorm`}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Bath className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Baños</div>
                      <div className="text-xl">{apartment.bathrooms}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Maximize className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Área</div>
                      <div className="text-xl">{apartment.area} m²</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Compass className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Orientación</div>
                      <div className="text-lg">{apartment.orientation}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground mb-6">
                {apartment.description}
              </p>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1" onClick={handleWhatsAppClick}>
                  Agendar visita
                </Button>
                <Button size="lg" variant="outline" className="flex-1" onClick={handleWhatsAppClick}>
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl">Características</h2>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {apartment.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl">Detalles adicionales</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Tipo</span>
                <span>{apartment.type}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Piso</span>
                <span>{apartment.floor}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Orientación</span>
                <span>{apartment.orientation}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Área construida</span>
                <span>{apartment.area} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Estado</span>
                <span>{statusLabels[apartment.status]}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}