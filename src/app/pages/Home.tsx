import { useState } from "react";
import { apartments, buildingAmenities } from "../data/apartments";
import { ApartmentCard } from "../components/ApartmentCard";
import { AmenitiesSection } from "../components/AmenitiesSection";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { Filters } from "../components/Filters";
import type { Apartment } from "../data/apartments";

export function Home() {
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>(apartments);

  const handleFilterChange = (type: string | null, status: string | null) => {
    let filtered = apartments;

    if (type !== null) {
      filtered = filtered.filter(apt => apt.type === type);
    }

    if (status && status !== 'all') {
      filtered = filtered.filter(apt => apt.status === status);
    }

    setFilteredApartments(filtered);
  };

  return (
    <div className="w-full">
      <Hero />
      
      <section id="apartments" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Nuestros Departamentos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre espacios diseñados para tu comodidad. Cada departamento cuenta con acabados de primera calidad y diseño contemporáneo.
            </p>
          </div>

          <Filters onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          {filteredApartments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron departamentos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>

      <AmenitiesSection amenities={buildingAmenities} />
      
      <ContactSection />
    </div>
  );
}