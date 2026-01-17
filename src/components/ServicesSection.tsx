import { Home, Building2, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Home Solar",
    description:
      "Reduce your electricity bills by up to 90% with our residential solar solutions. Perfect for villas, bungalows, and independent houses.",
    features: ["2kW to 10kW systems", "Net metering support", "25-year warranty"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Power your business with clean energy. Custom solutions for factories, offices, warehouses, and commercial establishments.",
    features: ["10kW to 500kW capacity", "Flexible financing", "Quick ROI"],
  },
  {
    icon: Building,
    title: "Housing Society",
    description:
      "Community solar solutions for apartments and housing societies. Shared savings with professional maintenance included.",
    features: ["Common area power", "Group subsidies", "Collective savings"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solar Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From homes to large commercial buildings, we have the perfect solar
            solution tailored to your energy requirements.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-solar flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}