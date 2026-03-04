import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/k7ihqh', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Contáctanos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para conocer tu nuevo hogar? Agenda una visita o contáctanos para más información.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm mb-2 block">
                      Nombre completo
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm mb-2 block">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="text-sm mb-2 block">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="70611259" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm mb-2 block">
                      Mensaje
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      70611259
                    </p>
                    <p className="text-sm text-muted-foreground">
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Correo</h3>
                    <p className="text-sm text-muted-foreground">
                      eliteconstructora@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      @eliteconstructora
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground">
                      Av. Montenegro<br />
                      Edif. Olimpo piso 6<br />
                      La Paz Bolivia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Horario de atención</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                      Sábados: 10:00 AM - 3:00 PM<br />
                      Domingos: Cita previa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button onClick={handleWhatsAppClick} size="lg" className="w-full gap-2">
              <Phone className="h-5 w-5" />
              Contáctanos por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}