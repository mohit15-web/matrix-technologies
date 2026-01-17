import {
  Sun,
  Battery,
  Camera,
  Wallet,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "On-Grid & Off-Grid",
    description:
      "Choose between grid-connected or battery backup solutions based on your needs.",
  },
  {
    icon: Camera,
    title: "3D Roof Inspection",
    description:
      "Advanced drone survey and 3D modeling for precise panel placement.",
  },
  {
    icon: Wallet,
    title: "Easy Financing",
    description:
      "Zero-cost EMI, bank loans, and government subsidy assistance.",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance",
    description:
      "Free annual maintenance contract with 24/7 monitoring support.",
  },
  {
    icon: ShieldCheck,
    title: "Storm-Proof Installation",
    description:
      "Engineered for extreme weather with wind speeds up to 180 km/h.",
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description:
      "Optional battery backup for uninterrupted power during outages.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-solar-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-solar-amber uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The SolarBright Advantage
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to
            deliver the best solar experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}