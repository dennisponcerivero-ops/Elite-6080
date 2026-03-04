import { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FiltersProps {
  onFilterChange: (type: string | null, status: string | null) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>('all');

  const handleTypeChange = (value: string) => {
    const type = value === 'all' ? null : value;
    setSelectedType(type);
    onFilterChange(type, selectedStatus);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    onFilterChange(selectedType, value);
  };

  const handleReset = () => {
    setSelectedType(null);
    setSelectedStatus('all');
    onFilterChange(null, 'all');
  };

  return (
    <div className="flex flex-wrap gap-4 items-center bg-background p-4 rounded-lg border">
      <div className="flex-1 min-w-[200px]">
        <Select onValueChange={handleTypeChange} value={selectedType || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de departamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="Garzonier">Garzoniers</SelectItem>
            <SelectItem value="Monoambiente">Monoambientes</SelectItem>
            <SelectItem value="1 Dormitorio">1 Dormitorio</SelectItem>
            <SelectItem value="2 Dormitorios">2 Dormitorios</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 min-w-[200px]">
        <Select onValueChange={handleStatusChange} value={selectedStatus || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Disponibilidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="available">Disponibles</SelectItem>
            <SelectItem value="reserved">Reservados</SelectItem>
            <SelectItem value="sold">Vendidos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" onClick={handleReset}>
        Limpiar filtros
      </Button>
    </div>
  );
}