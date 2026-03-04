import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-2xl mb-4">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link to="/">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
