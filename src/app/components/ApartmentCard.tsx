import { Link } from "react-router";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Apartment } from "../data/apartments";

interface ApartmentCardProps {
  apartment: Apartment;
}

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

export function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={apartment.images[0]}
          alt={apartment.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge 
          className="absolute top-3 right-3"
          variant={statusVariants[apartment.status]}
        >
          {statusLabels[apartment.status]}
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl mb-1">{apartment.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground gap-1">
              <MapPin className="h-3 w-3" />
              Piso {apartment.floor}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl">
              {apartment.price > 0 ? `$${apartment.price.toLocaleString()}` : 'Precio a consultar'}
            </div>
            <div className="text-xs text-muted-foreground">{apartment.price > 0 ? 'USD' : ''}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span>{apartment.bedrooms === 0 ? apartment.type : `${apartment.bedrooms} dorm`}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span>{apartment.bathrooms} baño{apartment.bathrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span>{apartment.area} m²</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {apartment.description}
        </p>
      </CardContent>

      <CardFooter>
        <Link to={`/apartment/${apartment.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            Ver detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}