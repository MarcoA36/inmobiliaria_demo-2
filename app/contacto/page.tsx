"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
    );
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Contáctanos
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a encontrar tu propiedad ideal.
              Contáctanos y te responderemos a la brevedad.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y te responderemos en menos de 24
                  horas.
                </p>

                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Nombre completo</FieldLabel>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Teléfono</FieldLabel>
                      <Input
                        type="tel"
                        placeholder="Tu teléfono"
                        value={formData.telefono}
                        onChange={(e) =>
                          setFormData({ ...formData, telefono: e.target.value })
                        }
                      />
                    </Field>

                    <Field>
                      <FieldLabel>Mensaje</FieldLabel>
                      <Textarea
                        placeholder="Cuéntanos qué tipo de propiedad buscas..."
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        required
                      />
                    </Field>
                  </FieldGroup>

                  <Button type="submit" size="lg" className="mt-6">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Información de contacto
                </h2>
                <p className="text-muted-foreground mb-8">
                  También puedes comunicarte directamente con nosotros.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Dirección
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        Av. Principal 1234
                        <br />
                        Ciudad, CP 1234
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Teléfonos
                      </h3>
                      <div className="text-muted-foreground mt-1 space-y-1">
                        <p>
                          <span className="text-foreground font-medium">
                            Alquileres:
                          </span>{" "}
                          <a
                            href="tel:2284132343"
                            className="hover:text-primary transition-colors"
                          >
                            2284-132343
                          </a>
                        </p>
                        <p>
                          <span className="text-foreground font-medium">
                            Ventas:
                          </span>{" "}
                          <a
                            href="tel:2284123242"
                            className="hover:text-primary transition-colors"
                          >
                            2284-123242
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:inmobiliarias@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors mt-1 block"
                      >
                        inmobiliarias@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Horario de atención
                      </h3>
                      <div className="text-muted-foreground mt-1 space-y-1">
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                        <p>Sábados: 9:00 - 13:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted/50">
          <div className="container mx-auto px-4 py-16">
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
              <div className="aspect-[16/6]">
                <iframe
                  src="https://www.google.com/maps?q=Av.+Del+Valle+1234,+Olavarr%C3%ADa,+Buenos+Aires,+Argentina&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
