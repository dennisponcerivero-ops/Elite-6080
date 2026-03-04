import { Waves, Dumbbell, Car, Camera, Trees, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Amenity {
  icon: string;
  name: string;
  description: string;
  image?: string;
}

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const iconMap = {
  Waves,
  Dumbbell,
  Car,
  Camera,
  Trees,
  Users,
};

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <section 
      id="amenities" 
      className="py-16"
      style={{
        background: 'linear-gradient(to top, #8f9279 0%, #ffffff 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Areas comunes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Disfruta de instalaciones diseñadas para tu bienestar y entretenimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon as keyof typeof iconMap];
            
            return (
              <Card key={amenity.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                {amenity.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">{amenity.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}